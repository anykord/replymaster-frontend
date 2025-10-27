// pages/index.js
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
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

      {/* Logged-in banner (visible only when session exists) */}
      {session && (
        <div className="wrap" style={{ marginTop: 12 }}>
          <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div className="muted" style={{ fontSize: 14 }}>
                Вы вошли как <strong>{session.user?.name || session.user?.email || "пользователь"}</strong>
              </div>
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

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <h2>Короткое описание</h2>
          <div className="card">
            Replymaster — универсальная платформа, которая автоматизирует работу с чатами, группами и личными
            сообщениями. Она помогает находить и прогревать клиентов прямо в их среде общения — в Telegram, Discord или
            других сообществах. Всё подключается и работает без сложной настройки — просто войди, выбери чат и начни
            действовать.
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="wrap">
          <h2>Основные возможности</h2>
          <div className="grid cols-3">
            <div className="card">
              <strong>1. Нативные лиды из открытых чатов</strong>
              <p className="muted">
                Анализ диалогов и выдача людей, уже интересующихся темой. Без спама и холодных рассылок.
              </p>
            </div>
            <div className="card">
              <strong>2. Прогрев и продажи без давления</strong>
              <p className="muted">Подсказки фраз, генерация ответов, сохранение лучших скриптов.</p>
            </div>
            <div className="card">
              <strong>3. Администрирование своих сообществ</strong>
              <p className="muted">Автомодерация, приветствия, удаление спама, аналитика.</p>
            </div>
            <div className="card">
              <strong>4. Старт «из коробки»</strong>
              <p className="muted">Подключи чаты — и работай. Настройка до 10 минут.</p>
            </div>
            <div className="card">
              <strong>5. Автоматизация и аналитика</strong>
              <p className="muted">Метрики, отчёты и учёт лидов в одном месте.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section>
        <div className="wrap">
          <h2>Преимущества</h2>
          <div className="grid cols-2">
            <div className="card list">
              <div>Настройка за 10 минут.</div>
              <div>Готово к работе «из коробки».</div>
              <div>Только открытые чаты — без нарушений и спама.</div>
              <div>Рост продаж за счёт диалогов, а не рассылок.</div>
            </div>
            <div className="card list">
              <div>Telegram, Discord, Slack.</div>
              <div>AI адаптируется под твой стиль.</div>
              <div>Режим администратора для своих сообществ.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE */}
      <section id="free">
        <div className="wrap">
          <h2>10 бесплатных сообщений</h2>
          <div className="card">
            🎁 После регистрации — 10 бесплатных сообщений. Без карты и автосписаний.
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section>
        <div className="wrap">
          <h2>Работа со страхами и возражениями</h2>
          <div className="grid cols-2">
            <div className="card">
              <strong>Сложно?</strong>
              <p className="muted">Запуск до 10 минут, без обучения.</p>
            </div>
            <div className="card">
              <strong>Чужие чаты?</strong>
              <p className="muted">Только открытые чаты, нативные диалоги.</p>
            </div>
            <div className="card">
              <strong>Безопасность?</strong>
              <p className="muted">Соблюдаем правила платформ, приватность.</p>
            </div>
            <div className="card">
              <strong>Подойдёт мне?</strong>
              <p className="muted">Да, если вы работаете с аудиторией.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="wrap">
          <h2>Отзывы</h2>
          <div className="grid cols-3">
            <div className="card">
              <div className="muted">⭐️⭐️⭐️⭐️⭐️</div>
              <p>«Беру лидов прямо из нишевых групп!»</p>
              <div className="muted">— Артём</div>
            </div>
            <div className="card">
              <div className="muted">⭐️⭐️⭐️⭐️⭐️</div>
              <p>«Настроила за 8 минут. Управлять чатами стало просто.»</p>
              <div className="muted">— Ксения</div>
            </div>
            <div className="card">
              <div className="muted">⭐️⭐️⭐️⭐️⭐️</div>
              <p>«Теперь система сама находит людей и подсказывает ответы.»</p>
              <div className="muted">— Дмитрий</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <details>
            <summary>Сколько времени занимает настройка?</summary>
            <p className="muted">Около 10 минут.</p>
          </details>
          <details>
            <summary>Работает с чужими чатами?</summary>
            <p className="muted">Да, если они открытые.</p>
          </details>
          <details>
            <summary>Поддерживается Telegram?</summary>
            <p className="muted">Да, основная интеграция — Telegram.</p>
          </details>
          <details>
            <summary>Что входит в бесплатный тариф?</summary>
            <p className="muted">10 сообщений и тест всех функций.</p>
          </details>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="wrap">
          <h2>Тарифы</h2>
        <div className="plans">
            {/* FREE */}
            <div className="card plan" id="plan-free">
              <div className="title">Free</div>
              <div className="muted">Бесплатный старт</div>
              <ul className="muted" style={{ margin: "8px 0 0 18px" }}>
                <li>10 сообщений при старте</li>
                <li>+5 сообщений в день использования</li>
                <li>1 Telegram-группа</li>
                <li>Базовые автоответы</li>
              </ul>
              <div className="price">
                0 ₽ / <span className="muted">навсегда</span>
              </div>
              <button className="btn secondary" onClick={startFree}>
                Выбрать Free
              </button>
            </div>

            {/* PRO */}
            <div className="card plan pro" id="plan-pro">
              <div className="title">
                Pro <span className="muted" style={{ fontWeight: 600 }}>· рекомендуем</span>
              </div>
              <div className="muted">Для блогеров и экспертов</div>
              <ul className="muted" style={{ margin: "8px 0 0 18px" }}>
                <li>Безлимит сообщений</li>
                <li>До 3 Telegram-групп</li>
                <li>Подсказки: тон, стиль, примеры</li>
                <li>Расширенная аналитика</li>
                <li>Экспорт CSV/Sheets</li>
              </ul>
              <div className="price">
                990 ₽ / <span className="muted">мес</span>
              </div>
              <button className="btn" onClick={() => startPlan("pro")}>
                Выбрать Pro
              </button>
            </div>

            {/* TEAM */}
            <div className="card plan" id="plan-team">
              <div className="title">Team</div>
              <div className="muted">Для команд</div>
              <ul className="muted" style={{ margin: "8px 0 0 18px" }}>
                <li>Безлимит сообщений</li>
                <li>До 10 Telegram-групп</li>
                <li>До 5 участников</li>
                <li>Общие шаблоны и ответы</li>
              </ul>
              <div className="price">
                2 490 ₽ / <span className="muted">мес</span>
              </div>
              <button className="btn secondary" onClick={() => startPlan("team")}>
                Выбрать Team
              </button>
            </div>

            {/* ENTERPRISE */}
            <div className="card plan" id="plan-enterprise">
              <div className="title">Enterprise</div>
              <div className="muted">Под задачи бизнеса</div>
              <ul className="muted" style={{ margin: "8px 0 0 18px" }}>
                <li>Индивидуальный сервер</li>
                <li>White-label</li>
                <li>Расширенные лимиты и SLA</li>
              </ul>
              <div className="price">По запросу</div>
              <button className="btn secondary" onClick={() => startPlan("enterprise")}>
                Запросить предложение
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA + FOOTER */}
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

      <footer>
        <div className="wrap">
          © {year} Replymaster · Все права защищены ·{" "}
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </>
  );
}
