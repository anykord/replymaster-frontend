export default function KPICards({ data }) {
  const items = [
    { label: 'Входящих', value: data.incoming||0 },
    { label: 'Ответов', value: data.replied||0 },
    { label: 'DM переходов', value: data.dm||0 },
    { label: 'CTR (CTA)', value: (data.ctr||0)+'%' },
  ];
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((it,i)=>(
        <div key={i} className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="text-xs text-gray-500">{it.label}</div>
          <div className="text-2xl font-semibold">{it.value}</div>
        </div>
      ))}
    </div>
  );
}
