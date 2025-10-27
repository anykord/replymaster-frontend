import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const items = [
    { href: '/dashboard', label: 'Главная' },
    { href: '/dashboard/accounts', label: 'Аккаунты' },
    { href: '/dashboard/groups', label: 'Группы' },
    { href: '/dashboard/setup', label: 'AI Сетап' },
    { href: '/dashboard/chats', label: 'Ответы' },
    { href: '/dashboard/leads', label: 'Лиды' },
    { href: '/dashboard/stats', label: 'Статистика' },
    { href: '/dashboard/billing', label: 'Подписка' },
  ];

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white rm-border">
        <div className="p-4 font-bold rm-ink">Replymaster</div>
        <nav className="px-2 space-y-1 pb-4">
          {items.map(it => (
            <Link key={it.href} href={it.href} className={`block rounded px-3 py-2 text-sm hover:bg-indigo-50 ${router.pathname===it.href ? 'rm-sidebar-active' : 'text-gray-700'}`}>
              {it.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
