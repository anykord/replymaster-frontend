import { useEffect, useState } from 'react';

function LeadRow({ lead, onRemove }) {
  return (
    <tr>
      <td>@{lead.username}</td>
      <td>{lead.source}</td>
      <td>{lead.stage}</td>
      <td>{lead.note || '—'}</td>
      <td className="text-right">
        <button className="small" onClick={() => onRemove(lead.id)}>Удалить</button>
      </td>
    </tr>
  );
}

export default function LeadsTable({ items }) {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('rm_leads');
    if (saved) {
      try { setLeads(JSON.parse(saved)); } catch {}
    } else {
      setLeads(items || []);
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem('rm_leads', JSON.stringify(leads));
  }, [leads]);

  const [form, setForm] = useState({ username:'', source:'Группа', stage:'cta_click', note:'' });

  const add = () => {
    if (!form.username) return;
    setLeads(prev => [...prev, { ...form, id: Date.now().toString() }]);
    setForm({ username:'', source:'Группа', stage:'cta_click', note:'' });
  };

  const remove = (id) => setLeads(prev => prev.filter(l => l.id !== id));

  return (
    <div className="rm-card p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold">Лиды</h3>
        <div className="small muted">Локальное хранилище (демо)</div>
      </div>

      <div className="grid md:grid-cols-4 gap-2 mb-3">
        <input className="border rounded p-2" placeholder="@username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})} />
        <input className="border rounded p-2" placeholder="Источник (группа/личка/профиль)" value={form.source} onChange={e=>setForm({...form, source:e.target.value})} />
        <select className="border rounded p-2" value={form.stage} onChange={e=>setForm({...form, stage:e.target.value})}>
          <option value="cta_click">Клик по CTA</option>
          <option value="dm">Перешёл в личку</option>
          <option value="trial">Пошёл на бесплатный курс</option>
          <option value="purchase">Купил</option>
        </select>
        <input className="border rounded p-2" placeholder="Заметка" value={form.note} onChange={e=>setForm({...form, note:e.target.value})} />
      </div>

      <button className="btn" onClick={add}>Добавить лида</button>

      <div className="mt-3 border rounded overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>Username</th><th>Источник</th><th>Статус</th><th>Заметка</th><th></th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr><td colSpan={5} className="muted small p-3">Пока пусто</td></tr>
            ) : leads.map(l => <LeadRow key={l.id} lead={l} onRemove={remove} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
