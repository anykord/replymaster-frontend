export default function AccountCard({ acc }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">@{acc.username}</div>
          <div className="text-xs text-gray-500">Групп: {acc.groupsCount}</div>
        </div>
        <span className={"text-xs px-2 py-1 rounded " + (acc.status==='active' ? 'bg-green-100 text-green-700':'bg-red-100 text-red-700')}>
          {acc.status==='active' ? 'Активен' : 'Ошибка'}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Пауза</button>
        <button className="px-3 py-1.5 rounded-lg bg-white border text-sm">Удалить</button>
      </div>
    </div>
  );
}
