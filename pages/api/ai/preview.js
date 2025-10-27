export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { systemPrompt, userMessage, model = 'gpt-4o-mini', temperature = 0.6 } = req.body || {};
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OPENAI_API_KEY is not set' });
    }
    if (!userMessage) {
      return res.status(400).json({ error: 'userMessage is required' });
    }

    // OpenAI Chat Completions API
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        temperature,
        messages: [
          { role: 'system', content: systemPrompt || 'You are a helpful assistant.' },
          { role: 'user', content: userMessage }
        ]
      })
    });

    const data = await resp.json();
    if (!resp.ok) {
      return res.status(resp.status).json({ error: data.error?.message || 'OpenAI error' });
    }

    const text = data.choices?.[0]?.message?.content || '';
    const usage = data.usage || null;

    // грубая оценка стоимости (USD) — поправим при желании
    // gpt-4o-mini: $0.15 / 1M input tokens, $0.6 / 1M output tokens (примерные)
    let cost = null;
    if (usage) {
      const inTok = usage.prompt_tokens || 0;
      const outTok = usage.completion_tokens || 0;
      cost = (inTok * 0.00000015) + (outTok * 0.0000006);
    }

    return res.status(200).json({ text, usage, costUSD: cost });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
}
