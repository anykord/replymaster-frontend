import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/Layout';
import AddAccountDialog from '../../components/dashboard/AddAccountDialog';
import { getSession } from 'next-auth/react';

function AccountCard({ a, onRemove }) {
  return (
    <div className="rm-card p-3">
      <div className="font-semibold">
        {a.name || a.username ? `${a.name} ${a.username ? `(@${a.username})` : ''}` : a.phone}
      </div>
      <div className="small muted">accountId: {a.accountId}</div>
      <div className="mt-2">
        <button className="small" onClick={() => onRemove(a.accountId)}>Удалить</button>
      </div>
    </div>
  );
}

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);

  const reload = () => {
    const list = JSON.parse(localStorage.getItem('rm_accounts') || '[]');
    setAccounts(list);
  };

  useEffect(() => { reload(); }, []);

  const remove = (id) => {
    const list = (JSON.parse(localStorage.getItem('rm_accounts') || '[]') || []).filter(x => x.accountId !== id);
    localStorage.setItem('rm_accounts', JSON.stringify(list));
    reload();
  };

  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>Аккаунты Telegram</h1>
      <AddAccountDialog onAdded={reload} />
      <div className="grid gap-3 md:grid-cols-3 mt-4">
        {accounts.length === 0
          ? <div className="muted small">Пока нет аккаунтов — добавьте номер и подтвердите код.</div>
          : accounts.map(a => <AccountCard key={a.accountId} a={a} onRemove={remove} />)}
      </div>
    </DashboardLayout>
  );
}

export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
