export default function MessageList({ items=[] }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm h-[60vh] overflow-auto">
      <h4 className="font-semibold mb-2">Входящие сообщения</h4>
      <ul className="space-y-2">
        {items.map(m => (
          <li key={m.id} className="rounded border p-2">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>@{m.author}</span>
              <span>score: {m.relevanceScore}</span>
            </div>
            <div className="text-sm">{m.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
