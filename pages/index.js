// pages/index.js
import Head from "next/head";
import { signIn, getSession } from "next-auth/react";

export default function Home() {
  const year = new Date().getFullYear();

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
          <button
            className="auth"
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          >
            Войти через GitHub
          </button>
        </div>
      </nav>

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
              <a href="/signup?plan=free" className="btn primary">Попробовать бесплатно</a>
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
              <a className="btn secondary" href="/signup?plan=free">
                Выбрать Free
              </a>
            </div>

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
              <a className="btn" href="/signup?plan=pro">
                Выбрать Pro
              </a>
            </div>

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
              <a className="btn secondary" href="/signup?plan=team">
                Выбрать Team
              </a>
            </div>

            <div className="card plan" id="plan-enterprise">
              <div className="title">Enterprise</div>
              <div className="muted">Под задачи бизнеса</div>
              <ul className="muted" style={{ margin: "8px 0 0 18px" }}>
                <li>Индивидуальный сервер</li>
                <li>White-label</li>
                <li>Расширенные лимиты и SLA</li>
              </ul>
              <div className="price">По запросу</div>
              <a className="btn secondary" href="/contact">
                Запросить предложение
              </a>
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
            <a className="btn primary" href="/signup?plan=free">
              Попробовать бесплатно
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          © {year} Replymaster · Все права защищены ·{" "}
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>

      {/* ==== глобальные стили лендинга (styled-jsx) ==== */}
      <style jsx global>{`
        :root {
          --bg: #ffffff;
          --card: #ffffff;
          --ink: #0b1221;
          --text: #2a2f3a;
          --muted: #5c6473;
          --accent: #0a56e8;
          --soft: #eff3fb;
          --line: #e6eaf0;
        }
        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body { margin: 0; color: var(--text); background: var(--bg); }
        a { color: var(--accent); text-decoration: none; }
        .wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        /* Navbar */
        .sticky-nav { position: sticky; top: 0; z-index: 50; background: #fff; border-bottom: 1px solid var(--line); }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 68px; }
        .brand { display: flex; align-items: center; gap: 10px; font-weight: 800; color: var(--ink); }
        .brand .logo { width: 24px; height: 24px; border-radius: 4px; background: #0a56e8; }
        .menu { display: flex; gap: 22px; color: var(--muted); }
        .menu a { color: var(--muted); }
        .menu a:hover { color: var(--ink); text-decoration: underline; }
        .auth { padding: 10px 14px; border-radius: 999px; background: var(--soft); color: var(--accent); font-weight: 700; border: 0; cursor: pointer; }

        /* Hero */
        header.hero { padding: 56px 0 40px; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 32px; align-items: center; }
        .badge { display: inline-flex; gap: 10px; align-items: center; padding: 8px 12px; border-radius: 999px; background: var(--soft); color: var(--accent); font-weight: 700; font-size: 12px; }
        h1 { color: var(--ink); font-size: 42px; line-height: 1.15; margin: 10px 0 8px; font-weight: 800; letter-spacing: 0.1px; }
        .lead { font-size: 18px; line-height: 1.6; color: var(--text); max-width: 720px; }
        .cta { display: flex; gap: 12px; margin-top: 16px; }
        .btn { display: inline-flex; align-items: center; justify-content: center; padding: 13px 18px; border-radius: 10px; font-weight: 700; transition: all 0.15s ease; }
        .btn.primary { background: var(--accent); color: #fff; border: 1px solid transparent; }
        .btn.secondary { background: #fff; color: var(--accent); border: 1px solid #cfd7e6; }
        .btn.primary:hover { filter: brightness(0.96); }
        .btn.secondary:hover { background: #f7faff; border-color: var(--accent); }
        .mock { background: #fff; border: 1px solid var(--line); border-radius: 12px; min-height: 320px; }
        .mock::before { content: ""; display: block; height: 44px; border-bottom: 1px solid var(--line); background: #fafbff; }
        .mock-inner { padding: 16px; color: #8ea1bf; text-align: center; }

        /* Sections */
        section { padding: 56px 0; border-top: 1px solid var(--line); }
        h2 { font-size: 26px; margin: 0 0 12px; color: var(--ink); font-weight: 750; letter-spacing: 0.2px; }
        .grid { display: grid; gap: 16px; }
        .cols-3 { grid-template-columns: repeat(3, 1fr); }
        .cols-2 { grid-template-columns: repeat(2, 1fr); }
        .card { background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 18px; }
        .card:hover { border-color: #d6deea; }
        .muted { color: var(--muted); }
        .list { display: grid; gap: 8px; }

        /* Pricing */
        .plans { display: grid; gap: 16px; grid-template-columns: repeat(4, 1fr); align-items: stretch; }
        .plan .title { font-weight: 800; font-size: 18px; letter-spacing: 0.2px; }
        .price { font-size: 28px; font-weight: 800; color: var(--ink); margin-top: 8px; }
        .plan .btn { width: 100%; margin-top: 8px; }
        .plan.pro { border: 2px solid var(--accent); }

        /* FAQ + Footer */
        details { border: 1px solid var(--line); border-radius: 12px; background: #fff; padding: 10px 14px; }
        details + details { margin-top: 10px; }
        summary { cursor: pointer; font-weight: 650; }
        footer { padding: 28px 0; color: var(--muted); }

        /* Responsive */
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; }
          h1 { font-size: 34px; }
          .plans { grid-template-columns: 1fr; }
          .cols-3 { grid-template-columns: 1fr; }
          .cols-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

/**
 * SSR: если пользователь авторизован — редиректим на /dashboard
 */
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return { props: {} };
}
