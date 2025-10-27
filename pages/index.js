// pages/index.js
import Head from "next/head";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Replymaster — AI программа для общения, лидогенерации и продаж в чатах</title>
        <meta name="description" content="Всё работает из коробки и настраивается за 10 минут. Нативные лиды из открытых чатов, прогрев и продажи без спама." />
        <meta property="og:title" content="Replymaster — AI для общения, лидов и продаж в чатах" />
        <meta property="og:description" content="Ищите клиентов в Telegram/группах, прогревайте и продавайте нативно. Бесплатно — 10 сообщений." />
        <meta property="og:image" content="/og-image.svg" />
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
          <button className="auth" onClick={() => signIn("github", { callbackUrl: "/dashboard" })}>
            Войти через GitHub
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">Всё из коробки · 10 минут · Нативные лиды · Прогрев в чатах · Администрирование</div>
            <h1>Replymaster — автоматизация общения, лидогенерации и продаж в чатах</h1>
            <p className="lead">
              Всё работает из коробки и настраивается за 10 минут. Replymaster помогает находить клиентов в чужих чатах,
              прогревать их и продавать без навязчивости. Подходит для маркетологов, арбитражников, продавцов, комьюнити-менеджеров и фаундеров.
            </p>
            <div className="cta">
              <a href="/signup?plan=free" className="btn primary">Попробовать бесплатно</a>
              <a href="#demo" className="btn secondary">Посмотреть демо</a>
            </div>
          </div>
          <div className="mock" aria-label="Превью интерфейса">
            <div className="mock-inner">
              <img src="/images/dashboard-preview.png" alt="Превью Replymaster" style={{maxWidth:'100%'}} />
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <h2>Короткое описание</h2>
          <div className="card">
            Replymaster — универсальная платформа, которая автоматизирует работу с чатами, группами и личными сообщениями. Она помогает находить и прогревать клиентов прямо в их среде общения — в Telegram, Discord или других сообществах. Всё подключается и работает без сложной настройки — просто войди, выбери чат и начни действовать.
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="wrap">
          <h2>Основные возможности</h2>
          <div className="grid cols-3">
            <div className="card"><strong>1. Получать нативные лиды из открытых чатов</strong><p className="muted">Анализ диалогов в открытых группах и выдача людей, которые уже интересуются вашим продуктом. Без спама и холодных рассылок.</p></div>
            <div className="card"><strong>2. Прогревать и продавать без давления</strong><p className="muted">Подсказки фраз, генерация ответов и сохранение лучших сценариев.</p></div>
            <div className="card"><strong>3. Администрирование собственных чатов и групп</strong><p className="muted">Автомодерация, приветствия, удаление спама и аналитика активности.</p></div>
            <div className="card"><strong>4. Старт «из коробки»</strong><p className="muted">Войди, подключи чаты и пользуйся. Настройка — до 10 минут.</p></div>
            <div className="card"><strong>5. Автоматизация и аналитика</strong><p className="muted">Отслеживание активности, учёт лидов и эффективность диалогов — метрики и отчёты в одном месте.</p></div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section>
        <div className="wrap">
          <h2>Преимущества</h2>
          <div className="grid cols-2">
            <div className="card list">
              <div>Настройка за 10 минут — без обучения.</div>
              <div>Готово к работе «из коробки».</div>
              <div>Только открытые чаты — без спама и нарушений.</div>
              <div>Рост продаж за счёт диалогов вместо холодных рассылок.</div>
            </div>
            <div className="card list">
              <div>Поддержка Telegram, Discord, Slack.</div>
              <div>AI адаптируется под стиль.</div>
              <div>Режим администратора для своих сообществ.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE */}
      <section id="free">
        <div className="wrap">
          <h2>10 бесплатных сообщений</h2>
          <div className="card">🎁 Начни бесплатно — после регистрации 10 бесплатных сообщений без карты и автосписаний.</div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section>
        <div className="wrap">
          <h2>Работа со страхами и возражениями</h2>
          <div className="grid cols-2">
            <div className="card"><strong>А вдруг это сложно?</strong><p className="muted">Запуск занимает до 10 минут, без обучения и техподдержки.</p></div>
            <div className="card"><strong>Чужие чаты — можно?</strong><p className="muted">Да, анализируются только открытые чаты; диалоги нативные, без спама.</p></div>
            <div className="card"><strong>Законно и безопасно?</strong><p className="muted">Соблюдаем правила платформ, приватность и отсутствие рассылок без вашего участия.</p></div>
            <div className="card"><strong>Подойдёт ли мне?</strong><p className="muted">Если вы работаете с аудиторией — да.</p></div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="wrap">
          <h2>Отзывы пользователей</h2>
          <div className="grid cols-3">
            <div className="card"><div className="muted">⭐️⭐️⭐️⭐️⭐️</div><p>«Беру лидов прямо из нишевых групп — захожу в диалог и общаюсь.»</p><div className="muted">— Артём, арбитражник</div></div>
            <div className="card"><div className="muted">⭐️⭐️⭐️⭐️⭐️</div><p>«Настроила за 8 минут. Управлять чатами стало просто.»</p><div className="muted">— Ксения, комьюнити-менеджер</div></div>
            <div className="card"><div className="muted">⭐️⭐️⭐️⭐️⭐️</div><p>«Теперь система сама находит людей и подсказывает ответы.»</p><div className="muted">— Дмитрий, инфомаркетолог</div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <details><summary>Сколько времени занимает настройка?</summary><p className="muted">Около 10 минут — всё работает из коробки.</p></details>
          <details><summary>Можно ли работать с чужими чатами?</summary><p className="muted">Да, если они открытые.</p></details>
          <details><summary>Работает ли в Telegram?</summary><p className="muted">Да, основная интеграция именно с Telegram.</p></details>
          <details><summary>Что входит в бесплатный тариф?</summary><p className="muted">10 сообщений и тест всех функций.</p></details>
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
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>10 сообщений при старте</li>
                <li>+5 сообщений каждый день использования</li>
                <li>1 Telegram-группа</li>
                <li>Базовые автоответы</li>
              </ul>
              <div className="price">0 ₽ / <span className="muted">навсегда</span></div>
              <a className="btn secondary" href="/signup?plan=free">Выбрать Free</a>
            </div>

            <div className="card plan pro" id="plan-pro">
              <div className="title">Pro <span className="muted" style={{ fontWeight: 600 }}>· рекомендуем</span></div>
              <div className="muted">Для блогеров и экспертов</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Безлимит сообщений</li>
                <li>До 3 Telegram-групп</li>
                <li>Подсказки: тон, стиль, примеры</li>
                <li>Расширенная аналитика</li>
                <li>Экспорт CSV/Sheets</li>
              </ul>
              <div className="price">990 ₽ / <span className="muted">мес</span></div>
              <a className="btn" href="/signup?plan=pro">Выбрать Pro</a>
            </div>

            <div className="card plan" id="plan-team">
              <div className="title">Team</div>
              <div className="muted">Для команд</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Безлимит сообщений</li>
                <li>До 10 Telegram-групп</li>
                <li>До 5 участников</li>
                <li>Общие шаблоны и ответы</li>
              </ul>
              <div className="price">2 490 ₽ / <span className="muted">мес</span></div>
              <a className="btn secondary" href="/signup?plan=team">Выбрать Team</a>
            </div>

            <div className="card plan" id="plan-enterprise">
              <div className="title">Enterprise</div>
              <div className="muted">Под задачи бизнеса</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Индивидуальный сервер</li>
                <li>White-label</li>
                <li>Расширенные лимиты и SLA</li>
              </ul>
              <div className="price">По запросу</div>
              <a className="btn secondary" href="/contact">Запросить предложение</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA + FOOTER */}
      <section>
        <div className="wrap">
          <div className="card" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, flexWrap:'wrap' }}>
            <div>
              <strong>Replymaster — автоматизируй диалоги, ищи клиентов и продавай в чатах без рутины.</strong>
              <div className="muted">Всё работает из коробки. Настрой за 10 минут.</div>
            </div>
            <a className="btn primary" href="/signup?plan=free">Попробовать бесплатно</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} Replymaster · Все права защищены · <a href="#">Политика конфиденциальности</a></div>
      </footer>
    </>
  );
}
