import { useEffect, useState } from 'react';

export default function PromptEditor({ initial = '' }) {
  const [systemPrompt, setSystemPrompt] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('rm_system_prompt');
    setSystemPrompt(saved ?? initial);
  }, [initial]);

  const save = () => {
    localStorage.setItem('rm_system_prompt', systemPrompt || '');
  };

  return (
    <div className="rm-card p-4">
      <h3 className="font-semibold mb-2">Системный промт (персона/тон)</h3>
      <textarea
        value={systemPrompt}
        onChange={(e) => setSystemPrompt(e.target.value)}
        rows={10}
        className="w-full border rounded p-3"
        placeholder="Напр.: Я Лера, преподаватель корейского языка..."
      />
      <div className="mt-2 flex gap-8 items-center">
        <button className="btn primary" onClick={save}>Сохранить</button>
        <div className="muted small">Хранится локально в браузере</div>
      </div>
    </div>
  );
}
