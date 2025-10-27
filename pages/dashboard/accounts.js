import { useState } from 'react';
import DashboardLayout from '../../components/dashboard/Layout';
import UsageBadge from '../../components/dashboard/UsageBadge';
import LimitUpsell from '../../components/dashboard/LimitUpsell';
import AccountCard from '../../components/dashboard/AccountCard';
import AddAccountDialog from '../../components/dashboard/AddAccountDialog';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([
    { id:'1', username:'lerateach', status:'active', groupsCount:2 },
  ]);
  const quotas = { used: accounts.length, limit: 1 }; // Free mock

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Аккаунты Telegram</h1>
        <AddAccountDialog onAdd={(acc)=>setAccounts([...accounts, {id:Date.now()+'', ...acc}])} />
      </div>
      <div className="mb-4"><UsageBadge label="Аккаунты" used={quotas.used} limit={quotas.limit} /></div>
      {quotas.used >= quotas.limit && (
        <div className="mb-4">
          <LimitUpsell
            title="Лимит аккаунтов исчерпан"
            text="Добавьте +1 аккаунт за 390 ₽ или перейдите на Pro, чтобы получить больше слотов."
            onAddon={()=>alert('Покупка +1 аккаунта (мок)')}
            onUpgrade={()=>alert('Апгрейд тарифа (мок)')}
          />
        </div>
      )}
      <div className="grid gap-4 md:grid-cols-3">
        {accounts.map(a=> <AccountCard key={a.id} acc={a} />)}
      </div>
    </DashboardLayout>
  );
}
