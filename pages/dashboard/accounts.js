// pages/dashboard/accounts.js
import { useEffect, useState } from 'react';
import AddAccountDialog from '../../components/dashboard/AddAccountDialog';

const readAccounts = () => JSON.parse((typeof window !== 'undefined' && localStorage.getItem('rm_accounts')) || '[]');
const writeAccounts = (list) => localStorage.setItem('rm_accounts', JSON.stringify(list));

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);

  const refresh = () => setAccounts(readAccounts());

  useEffect(() => {
    refresh();
  }, []);

  const onAdded = () => refresh();

  const togglePause = (id) => {
    const list = readAccounts().map(a => a.accountId === id ? { ...a, paused: !a.paused } : a);
    writeAccounts(list); refresh();
  };

  const removeAcc = (id) => {
    const list = readAccounts().filter(a => a.accountId !== id);
    writeAccounts(list); refresh();
  };

  return (
    <div className="container py-6">
      <h1 className="text-3xl font-extrabold mb-4">Аккаунты Telegram</h1>

      <div className="max-w-xl mb-8">
        <AddAccountDialog onAdded={onAdded} />
      </div>

      {accounts.length === 0 ? (
        <div className="muted">Пока нет аккаунтов — добавьте номер и подтвердите код.</div>
      ) : (
        <div className="space-y-4">
          {accounts.map((a) => (
            <div key={a.accountId} className="rm-card p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold">{a.name || a.username || a.phone}</div>
                <div className="text-sm muted">
                  ID: {a.accountId} {a.username ? `· @${a.username}` : ''} {a.phone ? `· ${a.phone}` : ''}
                  {a.paused ? ' · на паузе' : ''}
                </div>
              </div>
              <div className="space-x-2">
                <button className="btn" onClick={() => togglePause(a.accountId)}>
                  {a.paused ? 'Снять с паузы' : 'Пауза'}
                </button>
                <button className="btn danger" onClick={() => removeAcc(a.accountId)}>
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
