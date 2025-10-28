// pages/_app.js
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";

// Если у тебя глобальный хедер лендинга — импортируй его
// Если нет — можно удалить строку ниже
import SiteHeader from "../components/SiteHeader"; // поправь путь, если файл лежит иначе

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  // Определяем, находится ли пользователь внутри Dashboard
  const isDashboard = router.pathname.startsWith("/dashboard");

  return (
    <SessionProvider session={session}>
      {/* Общие SEO / мета-теги */}
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

      {/* Глобальный хедер показываем только на лендинге */}
      {!isDashboard && <SiteHeader />}

      {/* Рендерим конкретную страницу */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
