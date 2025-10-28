// pages/_app.js
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

// Встроенный простой хедер лендинга (без внешних импортов)
function SimpleHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded bg-blue-600" />
          <span className="font-semibold">Replymaster</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#features" className="text-gray-700 hover:text-gray-900">
            Фичи
          </Link>
          <Link href="/#pricing" className="text-gray-700 hover:text-gray-900">
            Тарифы
          </Link>
          <Link href="/#faq" className="text-gray-700 hover:text-gray-900">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="px-3 py-1 rounded border text-sm hover:bg-gray-50"
          >
            Войти
          </Link>
          <Link
            href="/dashboard"
            className="px-3 py-1 rounded bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            Попробовать
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const isDashboard = router.pathname.startsWith("/dashboard");

  return (
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Replymaster</title>
        <meta
          name="description"
          content="Replymaster — инструмент для поиска лидов и общения в Telegram-группах"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Хедер лендинга не показываем внутри /dashboard */}
      {!isDashboard && <SimpleHeader />}

      <Component {...pageProps} />
    </SessionProvider>
  );
}
