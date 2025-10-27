import { getSession, signIn } from 'next-auth/react';
import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head><title>Вход — Replymaster</title></Head>
      <div className="wrap" style={{padding:'48px 0'}}>
        <h1 style={{fontWeight:800,fontSize:32,marginBottom:10}}>Вход в аккаунт</h1>
        <p className="muted" style={{marginBottom:16}}>Авторизуйтесь через GitHub, чтобы перейти в Dashboard</p>
        <button className="btn primary" onClick={()=>signIn('github', { callbackUrl: '/dashboard' })}>Войти через GitHub</button>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (session) {
    return { redirect: { destination: '/dashboard', permanent: false } }
  }
  return { props: {} }
}
