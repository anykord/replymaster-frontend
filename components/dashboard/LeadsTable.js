export default function LeadsTable({ items=[] }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h4 className="font-semibold mb-2">Лиды</h4>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">Пользователь</th>
            <th>Источник</th>
            <th>Стадия</th>
            <th>Последнее действие</th>
          </tr>
        </thead>
        <tbody>
          {items.map((l,i)=>(
            <tr key={i} className="border-t">
              <td className="py-2">@{l.username}</td>
              <td>{l.source}</td>
              <td>{l.stage}</td>
              <td>{l.lastAction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
