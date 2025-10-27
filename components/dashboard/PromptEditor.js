import { useState } from 'react';
export default function PromptEditor({ initial='' }) {
  const [text, setText] = useState(initial);
  const [tone, setTone] = useState('friendly');
  const [length, setLength] = useState('standard');
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold mb-2">Промт</h4>
      <textarea className="w-full h-36 rounded border p-3 text-sm" value={text} onChange={e=>setText(e.target.value)} placeholder="Я Лера, преподаватель корейского языка..." />
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-xs text-gray-500">Тон</label>
          <select value={tone} onChange={e=>setTone(e.target.value)} className="w-full rounded border px-3 py-2 text-sm mt-1">
            <option value="friendly">Дружелюбный</option>
            <option value="expert">Экспертный</option>
            <option value="brief">Лаконичный</option>
          </select>
        </div>
        <div>
          <label className="text-xs text-gray-500">Длина</label>
          <select value={length} onChange={e=>setLength(e.target.value)} className="w-full rounded border px-3 py-2 text-sm mt-1">
            <option value="short">Коротко</option>
            <option value="standard">Стандарт</option>
            <option value="long">Развёрнуто</option>
          </select>
        </div>
      </div>
    </div>
  );
}
