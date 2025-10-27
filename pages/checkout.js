import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Checkout() {
  const { data: session } = useSession();
  const router = useRouter();
  const plan = router.query.plan || 'pro';
  return (
    <div className="wrap" style={{padding:'48px 0'}}>
      <h1 style={{fontWeight:800,fontSize:32,marginBottom:10}}>Оформление тарифа</h1>
      <p className="muted">План: <b>{plan}</b></p>
      {!session && <button className="btn primary" onClick={()=>signIn('github', { callbackUrl: `/checkout?plan=${plan}` })}>Войти через GitHub</button>}
      {session && <a className="btn primary" href="/dashboard">Перейти в Dashboard</a>}
      <div className="muted small" style={{marginTop:8}}>Страница-заглушка. Подключим платежи позже.</div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  return { props: { session } };
}
