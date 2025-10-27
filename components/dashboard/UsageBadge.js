export default function UsageBadge({ label, used=0, limit=0 }) {
  const pct = Math.min(100, Math.round((used/Math.max(1,limit))*100));
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-gray-500">{label}:</span>
      <div className="h-2 w-32 bg-gray-200 rounded overflow-hidden">
        <div className="h-full bg-indigo-500" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-gray-600">{used}/{limit}</span>
    </div>
  );
}
