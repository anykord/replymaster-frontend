import { useState } from 'react';
export default function AddGroupDialog({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  return (
    <div>
      <button onClick={()=>setOpen(true)} className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">+ Добавить группу</button>
      {open && (
        <div className="fixed inset-0 bg-black/30 grid place-items-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="font-semibold text-lg mb-2">Добавить группу</h3>
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Ссылка/ID/Название" className="w-full rounded border px-3 py-2 text-sm mb-3" />
            <div className="flex justify-end gap-2">
              <button onClick={()=>setOpen(false)} className="px-3 py-1.5 rounded-lg border text-sm">Отмена</button>
              <button onClick={()=>{ onAdd({title, members:0, autoMode:false}); setOpen(false); }} className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Добавить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
