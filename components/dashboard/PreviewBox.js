import { useEffect, useState } from 'react';

export default function PreviewBox() {
  const [userMessage, setUserMessage] = useState('Как быстро выучить корейский алфавит?');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [usage, setUsage] = useState(null);
  const [cost, setCost] = useState(null);
  const [temperature, setTemperature] = useState(0.6);
  const [model, setModel] = useState('gpt-4o-mini');

  const run = async () => {
    setLoading(true);
    setAnswer('');
    setUsage(null);
    setCost(null);
    try {
      const systemPrompt = localStorage.getItem('rm_system_prompt') || 'You are a helpful assistant.';
      const r = await fetch('/api/ai/preview', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ systemPrompt, userMessage, model, temperature: Number(temperature) })
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || 'error');
      setAnswer(data.text || '');
      setUsage(data.usage || null);
      setCost(data.costUSD ?? null);
    } catch (e) {
      setAnswer('Ошибка запроса: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // автозапуск один раз для удобства
    // run();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rm-card p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Предпросмотр ответа</h3>
        <div className="flex gap-2 items-center">
          <select value={model} onChange={e=>setModel(e.target.value)} className="border rounded p-2">
            <option value="gpt-4o-mini">gpt-4o-mini</option>
            <option value="gpt-4o">gpt-4o</option>
          </select>
          <label className="small muted">Temp</label>
          <input type="number" step="0.1" min="0" max="2" value={temperature} onChange={e=>setTemperature(e.target.value)} className="border rounded p-2 w-20" />
        </div>
      </div>

      <textarea
        className="w-full border rounded p-3 mb-2"
        rows={5}
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Тестовое сообщение пользователя из чата..."
      />

      <button className="btn" onClick={run} disabled={loading}>
        {loading ? 'Генерируем…' : 'Сгенерировать ответ'}
      </button>

      {answer && (
        <div className="mt-3 p-3 border rounded bg-white">
          <div className="small muted mb-1">Ответ модели:</div>
          <div>{answer}</div>
        </div>
      )}

      {usage && (
        <div className="mt-2 small muted">
          Токены: in {usage.prompt_tokens} · out {usage.completion_tokens} · total {usage.total_tokens}
          {typeof cost === 'number' && <span> · оценочная стоимость: ~${cost.toFixed(6)}</span>}
        </div>
      )}
    </div>
  );
}
