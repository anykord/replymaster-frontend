import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DashboardLayout from '../components/layouts/DashboardLayout';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith('/dashboard');

  const getLayout =
    Component.getLayout ||
    ((page) => (isDashboard ? <DashboardLayout>{page}</DashboardLayout> : page));

  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Replymaster</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}
