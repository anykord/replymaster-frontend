// pages/dashboard/accounts.js
import { useEffect, useState } from 'react';
import Head from 'next/head';

// ⚠️ Этот компонент у тебя уже был в проекте.
// Если путь иной — поправь импорт на свой.
import DashboardLayout from '../../components/layouts/DashboardLayout';

import AddAccountDialog from '../../components/dashboard/AddAccountDialog';

// helpers для localStorage
const readAccounts = () =>
  JSON.parse((typeof window !== 'undefined' && localStorage.getItem('rm_accounts')) || '[]');
const writeAccounts = (list) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('rm_accounts', JSON.stringify(list));
  }
};

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);

  const refresh = () => setAccounts(readAccounts());

  useEffect(() => {
    refresh();
  }, []);

  const onAdded = () => refresh();

  const togglePause = (id) => {
    const list = readAccounts().map((a) =>
      a.accountId === id ? { ...a, paused: !a.paused } : a
    );
    writeAccounts(list);
    refresh();
  };

  const removeAcc = (id) => {
    const list = readAccounts().filter((a) => a.accountId !== id);
    writeAccounts(list);
    refresh();
  };

  return (
    <DashboardLayout active="accounts">
      <Head>
        <title>Аккаунты Telegram — Replymaster</title>
      </Head>

      <div className="container mx-auto max-w-5xl py-6">
        <h1 className="text-3xl font-extrabold mb-6">Аккаунты Telegram</h1>

        {/* Блок добавления аккаунта */}
        <div className="mb-8">
          <AddAccountDialog onAdded={onAdded} />
        </div>

        {/* Список аккаунтов */}
        {accounts.length === 0 ? (
          <div className="text-sm text-gray-500">
            Пока нет аккаунтов — добавьте номер и подтвердите код.
          </div>
        ) : (
          <div className="space-y-4">
            {accounts.map((a) => (
              <div
                key={a.accountId}
                className="rm-card p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="font-semibold">
                    {a.name || a.username || a.phone || a.accountId}
                  </div>
                  <div className="text-sm text-gray-500">
                    ID: {a.accountId}
                    {a.username ? ` · @${a.username}` : ''}
                    {a.phone ? ` · ${a.phone}` : ''}
                    {a.paused ? ' · на паузе' : ''}
                  </div>
                </div>

                <div className="flex items-center gap-2">
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
    </DashboardLayout>
  );
}
