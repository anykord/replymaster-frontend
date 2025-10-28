// components/layouts/DashboardLayout.jsx
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

function NavItem({ href, children }) {
  const router = useRouter();
  const active = router.pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`dash-nav-link ${active ? "active" : ""}`}
      >
        {children}
      </Link>
    </li>
  );
}

function Sidebar() {
  return (
    <aside className="dash-sidebar">
      <ul className="dash-nav">
        <NavItem href="/dashboard">Главная</NavItem>
        <NavItem href="/dashboard/accounts">Аккаунты</NavItem>
        <NavItem href="/dashboard/groups">Группы</NavItem>
        <NavItem href="/dashboard/setup">AI Сетап</NavItem>
        <NavItem href="/dashboard/chats">Ответы</NavItem>
        <NavItem href="/dashboard/leads">Лиды</NavItem>
        <NavItem href="/dashboard/stats">Статистика</NavItem>
        <NavItem href="/dashboard/billing">Подписка</NavItem>
      </ul>
    </aside>
  );
}

function Topbar() {
  const { data: session } = useSession();
  return (
    <header className="dash-topbar">
      <div className="dash-container dash-topbar-inner">
        <div className="dash-brand">
          <span className="dot" />
          <span className="title">Replymaster</span>
        </div>
        <div className="dash-user">
          <span className="name">{session?.user?.name || "anykord"}</span>
          <button
            className="btn"
            onClick={() => signOut({ callbackUrl: "/" })}
            aria-label="Выйти"
          >
            Выйти
          </button>
        </div>
      </div>
    </header>
  );
}

export default function DashboardLayout({ children, title }) {
  return (
    <>
      <Topbar />
      <div className="dash-container dash-shell">
        <Sidebar />
        <main className="dash-main">
          {title ? <h1 className="dash-h1">{title}</h1> : null}
          {children}
        </main>
      </div>
    </>
  );
}
