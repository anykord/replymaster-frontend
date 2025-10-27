export default function LimitUpsell({ title, text, onAddon, onUpgrade }) {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-amber-800 mb-3">{text}</p>
      <div className="flex gap-2">
        <button onClick={onAddon} className="px-3 py-1.5 rounded-lg bg-black text-white text-sm">Купить +1</button>
        <button onClick={onUpgrade} className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-sm">Апгрейд тарифа</button>
      </div>
    </div>
  );
}
