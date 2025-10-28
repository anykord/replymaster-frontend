// pages/api/tg/[...path].js
export default async function handler(req, res) {
  try {
    const base = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;
    if (!base) {
      res.status(500).json({ error: 'API base URL is not configured' });
      return;
    }

    const { path = [] } = req.query; // например ['sendCode']
    const url = `${base}/tg/${path.join('/')}`;

    // пробрасываем метод, заголовки и тело
    const headers = { 'Content-Type': 'application/json' };
    // переносим авторизационные заголовки, если понадобятся
    for (const [k, v] of Object.entries(req.headers)) {
      const key = k.toLowerCase();
      if (key === 'authorization') headers['authorization'] = v;
    }

    const init = {
      method: req.method,
      headers,
    };

    // только для методов с телом
    if (!['GET', 'HEAD'].includes(req.method)) {
      init.body = JSON.stringify(req.body ?? {});
    }

    const r = await fetch(url, init);

    // пытаемся распарсить JSON, иначе шлём текст
    const text = await r.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    res.status(r.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message || 'Proxy error' });
  }
}
