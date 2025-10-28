// components/layouts/DashboardLayout.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ href, children }) => {
  const r = useRouter();
  const active = r.pathname === href;
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md text-sm ${
        active ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded bg-blue-600" />
            <span className="font-semibold">Replymaster</span>
          </div>
          <div className="text-sm text-gray-500">
            <Link href="/dashboard">Главная</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <nav className="space-y-1">
            <NavItem href="/dashboard">Главная</NavItem>
            <NavItem href="/dashboard/accounts">Аккаунты</NavItem>
            <NavItem href="/dashboard/groups">Группы</NavItem>
            <NavItem href="/dashboard/setup">AI Сетап</NavItem>
            <NavItem href="/dashboard/chats">Ответы</NavItem>
            <NavItem href="/dashboard/leads">Лиды</NavItem>
            <NavItem href="/dashboard/stats">Статистика</NavItem>
            <NavItem href="/dashboard/billing">Подписка</NavItem>
          </nav>
        </aside>

        {/* Content */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10">
          {children}
        </main>
      </div>
    </div>
  );
}
