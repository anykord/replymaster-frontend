import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user && (
        <div style={{position:'fixed', zIndex: 20, right: 16, top: 12, background:'#ffffffcc', backdropFilter:'blur(6px)', border:'1px solid #e5e7eb', borderRadius:12, padding:'8px 12px'}}>
          <span style={{marginRight: 12, color:'#111827'}}>Вошли как <b>{session.user.name || session.user.email}</b></span>
          <Link href="/dashboard" className="btn">Перейти в Dashboard</Link>
        </div>
      )}
      <iframe src="/landing.html" className="landing-frame" title="Replymaster" />
      <noscript>
        <div style={{padding: 16}}>
          <p>Для корректной работы лендинга включите JavaScript.</p>
          <a href="/landing.html">Открыть лендинг</a>
        </div>
      </noscript>
    </>
  );
}
