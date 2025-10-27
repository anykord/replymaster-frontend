import { useState } from 'react';
export default function FilesUploader() {
  const [files, setFiles] = useState([]);
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold mb-2">Материалы (PDF/XLSX/DOC)</h4>
      <div className="border-2 border-dashed rounded p-4 text-center text-sm text-gray-500">Перетащите файлы сюда</div>
      <div className="mt-2 text-xs text-gray-500">Заглушка: файлы не сохраняются, только UI.</div>
      <ul className="mt-2 text-sm">{files.map((f,i)=>(<li key={i}>{f.name}</li>))}</ul>
    </div>
  );
}
