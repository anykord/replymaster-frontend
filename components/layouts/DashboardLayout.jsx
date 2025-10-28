import Link from 'next/link'

export default function DashboardLayout({ children }) {
  return (
    <div className="rm-app">
      <header className="rm-topbar">
        <div className="rm-brand">
          <span className="rm-brand-dot"></span>
          <span>Replymaster</span>
        </div>
        <div className="rm-user">
          <span id="rm-username" className="muted">anykord</span>
          <Link href="/api/auth/logout" className="btn">Выйти</Link>
        </div>
      </header>

      <div className="rm-shell">
        <aside className="rm-sidebar">
          <nav className="rm-nav">
            <Link href="/dashboard">Главная</Link>
            <Link href="/dashboard/accounts">Аккаунты</Link>
            <Link href="/dashboard/groups">Группы</Link>
            <Link href="/dashboard/ai">AI Сетап</Link>
            <Link href="/dashboard/replies">Ответы</Link>
            <Link href="/dashboard/leads">Лиды</Link>
            <Link href="/dashboard/stats">Статистика</Link>
            <Link href="/dashboard/billing">Подписка</Link>
          </nav>
        </aside>

        <main className="rm-content">
          {children}
        </main>
      </div>
    </div>
  )
}