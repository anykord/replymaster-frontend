// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  const handleLogin = () => {
    // после логина попадём в /dashboard благодаря callback'у
    signIn("github", { callbackUrl: "/dashboard" });
  };

  return (
    <>
      <Head>
        <title>ReplyMaster — AI-администратор для Telegram</title>
        <meta
          name="description"
          content="ReplyMaster автоматически отвечает, модерирует и обрабатывает заявки в ваших Telegram-чатах и каналах. Работает и как администратор."
        />
        <meta property="og:title" content="ReplyMaster — AI-администратор для Telegram" />
        <meta
          property="og:description"
          content="Поддержка, ответы, закрепы, анонсы. Экспертные ответы и мягкая подводка в тематических чатах. Личные сценарии по запросу."
        />
        <meta property="og:image" content="/og-image.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container">
        <a href="/" className="logo">
          <Image
            src="/logo.svg"        // <— логотип лежит в /public/logo.svg
            alt="ReplyMaster"
            width={160}
            height={36}
            priority
          />
        </a>
        <nav className="nav">
          <a href="#how">Как работает</a>
          <a href="#benefits">Преимущества</a>
          <a href="#where">Где использовать</a>
          <button className="btn" onClick={handleLogin}>
            Войти
          </button>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero__text">
            <h1>
              ReplyMaster — ваш AI-администратор в Telegram-группах
            </h1>
            <p>
              Программа автоматически отвечает, модерирует и обрабатывает
              заявки прямо в ваших чатах и каналах. Работает как администратор
              и поддерживает активность 24/7.
            </p>
            <div className="hero__cta">
              <button className="btn btn--primary" onClick={handleLogin}>
                Войти с GitHub
              </button>
              <a href="#features" className="btn btn--ghost">
                Что умеет
              </a>
            </div>
          </div>

          <div className="hero__img">
            <Image
              src="/og-image.svg"  // <— картинка лежит в /public/og-image.svg
              alt="ReplyMaster бот"
              width={560}
              height={350}
              priority
            />
          </div>
        </section>

        <section id="where" className="cards">
          <article className="card">
            <h3>Ваши группы/каналы</h3>
            <p>Поддержка, ответы, модерирование, закрепы и анонсы 24/7.</p>
          </article>
          <article className="card">
            <h3>Открытые тематические чаты</h3>
            <p>Экспертные ответы и мягкая подводка к вашему продукту.</p>
          </article>
          <article className="card">
            <h3>Личные по запросу</h3>
            <p>Сценарии с согласием пользователя: консультация/заявка.</p>
          </article>
        </section>

        <section id="login" className="login">
          <h2>Войти в личный кабинет</h2>
          <p>Для демо используется авторизация через GitHub.</p>

          <button className="btn btn--github" onClick={handleLogin}>
            Войти с GitHub
          </button>

          <p className="muted">
            После входа откроется дашборд. В продакшне можно подключить Google,
            Telegram OAuth и др., но для тестов достаточно GitHub.
          </p>
        </section>
      </main>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} ReplyMaster • Все права защищены.</p>
        <a href="/privacy" className="muted">Политика и условия</a>
      </footer>
    </>
  );
}
