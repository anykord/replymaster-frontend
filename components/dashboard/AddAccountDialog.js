import { useState } from 'react';
export default function AddAccountDialog({ onAdd }) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <div>
      <button onClick={()=>setOpen(true)} className="px-3 py-2 rounded-lg bg-indigo-600 text-white text-sm">+ Добавить аккаунт</button>
      {open && (
        <div className="fixed inset-0 bg-black/30 grid place-items-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
            <h3 className="font-semibold text-lg mb-2">Добавить Telegram-аккаунт</h3>
            <p className="text-sm text-gray-500 mb-3">Импорт .session + api_id / api_hash — заглушка для моков.</p>
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="@username" className="w-full rounded border px-3 py-2 text-sm mb-3" />
            <div className="flex justify-end gap-2">
              <button onClick={()=>setOpen(false)} className="px-3 py-1.5 rounded-lg border text-sm">Отмена</button>
              <button onClick={()=>{ onAdd({username, status:'active', groupsCount:0}); setOpen(false); }} className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Добавить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
