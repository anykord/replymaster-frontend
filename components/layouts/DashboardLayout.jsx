// components/layouts/DashboardLayout.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function DashboardLayout({ children }) {
  const router = useRouter();

  const NavItem = ({ href, children }) => {
    const active = router.pathname === href;
    return (
      <li>
        <Link href={href} className={active ? 'nav-item active' : 'nav-item'}>
          {children}
        </Link>
      </li>
    );
  };

  return (
    <div className="dash">
      <header className="dash__top">
        <div className="dash__brand">
          <span className="dot" />
          <span>Replymaster</span>
        </div>
        <div className="dash__user">
          <span className="user-name">anykord</span>
          <Link href="/api/auth/signout" className="btn-out">Выйти</Link>
        </div>
      </header>

      <aside className="dash__aside">
        <nav>
          <ul>
            <NavItem href="/dashboard">Главная</NavItem>
            <NavItem href="/dashboard/accounts">Аккаунты</NavItem>
            <NavItem href="/dashboard/groups">Группы</NavItem>
            <NavItem href="/dashboard/setup">AI Сетап</NavItem>
            <NavItem href="/dashboard/chats">Ответы</NavItem>
            <NavItem href="/dashboard/leads">Лиды</NavItem>
            <NavItem href="/dashboard/stats">Статистика</NavItem>
            <NavItem href="/dashboard/billing">Подписка</NavItem>
          </ul>
        </nav>
      </aside>

      <main className="dash__main">{children}</main>
    </div>
  );
}
