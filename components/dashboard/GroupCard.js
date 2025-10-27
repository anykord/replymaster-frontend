export default function GroupCard({ group }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{group.title}</div>
          <div className="text-xs text-gray-500">Участников: {group.members ?? '—'}</div>
        </div>
        <span className={"text-xs px-2 py-1 rounded " + (group.autoMode ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700')}>
          {group.autoMode ? 'Auto' : 'Semi'}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-sm">Настроить</button>
        <button className="px-3 py-1.5 rounded-lg bg-white border text-sm">Пауза</button>
      </div>
    </div>
  );
}
