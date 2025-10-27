import { useState } from 'react';
export default function SuggestionPanel({ suggestion }) {
  const [text, setText] = useState(suggestion?.text || '');
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm h-[60vh]">
      <h4 className="font-semibold mb-2">Предложенный ответ</h4>
      <textarea value={text} onChange={e=>setText(e.target.value)} className="w-full h-40 rounded border p-3 text-sm" />
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">✅ Отправить</button>
        <button className="px-3 py-1.5 rounded-lg bg-white border text-sm">✏️ Изменить</button>
        <button className="px-3 py-1.5 rounded-lg bg-white border text-sm">❌ Пропустить</button>
      </div>
      <div className="mt-4 text-xs text-gray-500">Режим: Auto/Semi (переключатель будет здесь)</div>
    </div>
  );
}
