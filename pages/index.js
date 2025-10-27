// pages/index.js
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const year = new Date().getFullYear();

  // ——— CTA handlers ———
  const startFree = () => {
    if (session) router.push("/dashboard?start=free");
    else signIn("github", { callbackUrl: "/dashboard?start=free" });
  };

  const startPlan = (plan) => {
    const target = `/dashboard/billing?plan=${plan}`;
    if (session) router.push(target);
    else signIn("github", { callbackUrl: target });
  };

  const goDashboard = () => router.push("/dashboard");
  const doSignIn = () => signIn("github", { callbackUrl: "/dashboard" });
  const doSignOut = () => signOut({ callbackUrl: "/" });

  return (
    <>
      <Head>
        <title>Replymaster — AI программа для общения, лидогенерации и продаж в чатах</title>
        <meta
          name="description"
          content="Всё работает из коробки и настраивается за 10 минут. Нативные лиды из открытых чатов, прогрев и продажи без спама."
        />
        <meta property="og:title" content="Replymaster — AI для общения, лидов и продаж в чатах" />
        <meta
          property="og:description"
          content="Ищите клиентов в Telegram/группах, прогревайте и продавайте нативно. Бесплатно — 10 сообщений."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* NAVBAR */}
      <nav className="nav sticky-nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <span className="logo" /> <span>Replymaster</span>
          </div>
          <div className="menu">
            <a href="#about">Что это</a>
            <a href="#features">Возможности</a>
            <a href="#reviews">Отзывы</a>
            <a href="#faq">FAQ</a>
            <a href="#pricing">Тарифы</a>
          </div>

          {/* Right controls depend on auth state */}
          {session ? (
            <div style={{ display: "flex", gap: 8 }}>
              <button className="auth" onClick={goDashboard}>В дашборд</button>
              <button className="auth" onClick={doSignOut}>Выйти</button>
            </div>
          ) : (
            <button className="auth" onClick={doSignIn}>Войти через GitHub</button>
          )}
        </div>
      </nav>

      {/* Logged-in banner */}
      {session && (
        <div className="wrap" style={{ marginTop: 12 }}>
          <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div className="muted" style={{ fontSize: 14 }}>
              Вы вошли как <strong>{session.user?.name || session.user?.email || "пользователь"}</strong>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn primary" onClick={goDashboard}>Перейти в дашборд</button>
              <button className="btn secondary" onClick={doSignOut}>Выйти</button>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">
              Всё из коробки · 10 минут · Нативные лиды · Прогрев в чатах · Администрирование
            </div>
            <h1>Replymaster — автоматизация общения, лидогенерации и продаж в чатах</h1>
            <p className="lead">
              Всё работает из коробки и настраивается за 10 минут. Replymaster помогает находить клиентов в чужих чатах,
              прогревать их и продавать без навязчивости. Подходит для маркетологов, арбитражников, продавцов,
              комьюнити-менеджеров и фаундеров.
            </p>
            <div className="cta">
              <button className="btn primary" onClick={startFree}>Попробовать бесплатно</button>
              <a href="#demo" className="btn secondary">Посмотреть демо</a>
            </div>
          </div>
          <div className="mock" aria-label="Превью интерфейса">
            <div className="mock-inner">
              <img
                src="/images/dashboard-preview.png"
                alt="Превью Replymaster"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ... остальные секции такие же, как в предыдущей версии ... */}

      {/* FINAL CTA + SUPPORT + FOOTER */}
      <section>
        <div className="wrap">
          <div
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <strong>
                Replymaster — автоматизируй диалоги, ищи клиентов и продавай в чатах без рутины.
              </strong>
              <div className="muted">Всё работает из коробки. Настрой за 10 минут.</div>
            </div>
            <button className="btn primary" onClick={startFree}>
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" style={{ background: "#fafbff", borderTop: "1px solid #e6eaf0" }}>
        <div className="wrap">
          <h2>Поддержка</h2>
          <div className="card" style={{ textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: 16 }}>
              💬 Связаться с поддержкой в Telegram:<br />
              <a href="https://t.me/andrewbrown" target="_blank" rel="noopener noreferrer">
                @andrewbrown
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          © {year} Replymaster · Все права защищены ·{" "}
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </>
  );
}
