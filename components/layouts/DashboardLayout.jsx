import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const NavLink = ({ href, children }) => {
  const { pathname } = useRouter();
  const active = pathname === href;
  return (
    <li>
      <Link href={href} className={active ? 'nav-link active' : 'nav-link'}>
        {children}
      </Link>
    </li>
  );
};

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();
  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="dot" />
          <Link href="/dashboard" className="brand-title">Replymaster</Link>
        </div>
        <div className="topbar-right">
          {session?.user?.name && <span className="user">{session.user.name}</span>}
          <button className="btn btn-out" onClick={() => signOut({ callbackUrl: '/' })}>
            Выйти
          </button>
        </div>
      </header>

      <div className="content">
        <aside className="sidebar">
          <nav>
            <ul>
              <NavLink href="/dashboard">Главная</NavLink>
              <NavLink href="/dashboard/accounts">Аккаунты</NavLink>
              <NavLink href="/dashboard/groups">Группы</NavLink>
              <NavLink href="/dashboard/setup">AI Сетап</NavLink>
              <NavLink href="/dashboard/chats">Ответы</NavLink>
              <NavLink href="/dashboard/leads">Лиды</NavLink>
              <NavLink href="/dashboard/stats">Статистика</NavLink>
              <NavLink href="/dashboard/billing">Подписка</NavLink>
            </ul>
          </nav>
        </aside>
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
