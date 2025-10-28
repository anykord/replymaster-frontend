// pages/_app.js
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Replymaster</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
