import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

function Topbar() {
  const { data: session } = useSession();
  return (
    <header className="rm-border" style={{background:'#fff', borderBottom:'1px solid var(--line)'}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:64}}>
        <div className="brand"><span className="logo" /> <span>Replymaster</span></div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          {session?.user && (
            <>
              <span className="small muted">{session.user.name || session.user.email}</span>
              <button className="auth" onClick={()=>signOut({ callbackUrl: '/' })}>Выйти</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function Sidebar() {
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
    <aside className="rm-border" style={{width:256, background:'#fff', borderRight:'1px solid var(--line)'}}>
      <nav className="wrap" style={{padding:'16px 12px'}}>
        {items.map(it => (
          <Link key={it.href}
            href={it.href}
            className={`rm-sidebar-link ${router.pathname===it.href ? 'rm-sidebar-active' : ''}`}>
            {it.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Topbar />
      <div style={{display:'grid', gridTemplateColumns:'256px 1fr', gap:0}}>
        <Sidebar />
        <main className="wrap" style={{padding:'24px 24px 48px 24px'}}>
          {children}
        </main>
      </div>
    </div>
  );
}
