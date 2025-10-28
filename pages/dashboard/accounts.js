// pages/dashboard/accounts.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import AddAccountDialog from '../../components/dashboard/AddAccountDialog';

// === helpers для localStorage ===
const readAccounts = () =>
  JSON.parse((typeof window !== 'undefined' && localStorage.getItem('rm_accounts')) || '[]');

const writeAccounts = (list) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('rm_accounts', JSON.stringify(list));
  }
};

// === левое меню (как на страницe «Группы») ===
function Sidebar({ active }) {
  const Item = ({ href, label }) => (
    <Link
      href={href}
      className={`block px-3 py-2 rounded text-sm ${
        active === href
          ? 'bg-gray-100 text-gray-900 font-semibold'
          : 'text-blue-600 hover:bg-gray-50'
      }`}
    >
      {label}
    </Link>
  );
  return (
    <nav className="space-y-1">
      <Item href="/dashboard" label="Главная" />
      <Item href="/dashboard/accounts" label="Аккаунты" />
      <Item href="/dashboard/groups" label="Группы" />
      <Item href="/dashboard/setup" label="AI Сетап" />
      <Item href="/dashboard/chats" label="Ответы" />
      <Item href="/dashboard/leads" label="Лиды" />
      <Item href="/dashboard/stats" label="Статистика" />
      <Item href="/dashboard/billing" label="Подписка" />
    </nav>
  );
}

// === верхняя панель (как на страницe «Группы») ===
function Topbar() {
  const { data: session } = useSession();
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded bg-blue-600" />
          <span className="font-semibold">Replymaster</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-500">{session?.user?.name || 'user'}</span>
          <button
            className="px-3 py-1 rounded border hover:bg-gray-50"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
}

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
    <>
      <Head>
        <title>Аккаунты Telegram — Replymaster</title>
      </Head>

      {/* верхняя панель */}
      <Topbar />

      {/* основной макет 12 колонок: слева меню, справа контент */}
      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <Sidebar active="/dashboard/accounts" />
        </aside>

        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          <h1 className="text-3xl font-extrabold mb-6">Аккаунты Telegram</h1>

          {/* блок добавления аккаунта — всё как раньше */}
          <div className="mb-8">
            <AddAccountDialog onAdded={onAdded} />
          </div>

          {/* список аккаунтов из localStorage — всё как раньше */}
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
        </main>
      </div>
    </>
  );
}
