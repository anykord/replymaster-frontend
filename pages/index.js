import Head from 'next/head';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function AuthBlock() {
  const { data: session } = useSession();
  if (session?.user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span className="small muted">
          Вошли как {session.user.name || session.user.email}
        </span>
        <a className="auth" href="/dashboard">
          Перейти в Dashboard
        </a>
      </div>
    );
  }
  return (
    <button
      className="auth"
      onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
    >
      Войти через GitHub
    </button>
  );
}

/* ======= REVIEWS COMPONENT ======= */
function ReviewsCarousel() {
  const items = [
    {
      name: 'Артём',
      role: 'арбитражник',
      initials: 'А',
      avatar: '/avatars/artem.jpg',
      text: '«Беру лидов прямо из нишевых групп! Replymaster показывает, кто интересуется темой — я просто захожу в диалог и общаюсь.»',
      date: 'июнь 2025',
      rating: 5,
    },
    {
      name: 'Ксения',
      role: 'комьюнити-менеджер',
      initials: 'К',
      avatar: '/avatars/ksenia.jpg',
      text: '«Настроила за 8 минут. Работает идеально — даже не ожидала, что можно так просто управлять чатами.»',
      date: 'июнь 2025',
      rating: 5,
    },
    {
      name: 'Дмитрий',
      role: 'инфомаркетолог',
      initials: 'Д',
      avatar: '/avatars/dmitry.jpg',
      text: '«Раньше всё делал вручную — теперь Replymaster сам находит людей и помогает вести разговор. Очень органично!»',
      date: 'июнь 2025',
      rating: 5,
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  const go = (i) => setIdx((i + items.length) % items.length);

  return (
    <div className="reviews">
      <div
        className="review-track"
        style={{ transform: `translateX(-${idx * 100}%)` }}
        aria-live="polite"
      >
        {items.map((r, i) => (
          <div className="review" key={i}>
            <div className="bubble">
              <div className="head">
                {r.avatar ? (
                  <div className="avatar">
                    <img src={r.avatar} alt={r.name} className="avatar-img" />
                  </div>
                ) : (
                  <div className="avatar">{r.initials}</div>
                )}
                <div>
                  <div className="stars" aria-label={`${r.rating} из 5`}>
                    ★★★★★
                  </div>
                  <div className="small muted">
                    {r.name} · {r.role}
                  </div>
                </div>
              </div>
              <p className="muted" style={{ marginBottom: 6 }}>
                {r.text}
              </p>
              <div className="meta">Отзыв: {r.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="review-controls">
        <button onClick={() => go(idx - 1)}>‹</button>
        <button onClick={() => go(idx + 1)}>›</button>
      </div>

      <div className="review-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={i === idx ? 'active' : ''}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Replymaster",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://replymaster.top/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Артём" },
        "reviewBody": "Беру лидов прямо из нишевых групп! Replymaster показывает, кто интересуется темой — я просто захожу в диалог и общаюсь.",
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Ксения" },
        "reviewBody": "Настроила за 8 минут. Работает идеально — даже не ожидала, что можно так просто управлять чатами.",
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "author": { "@type": "Person", "name": "Дмитрий" },
        "reviewBody": "Раньше всё делал вручную — теперь Replymaster сам находит людей и помогает вести разговор. Очень органично!",
      },
    ]
  };

  return (
    <>
      <Head>
        <title>Replymaster — AI программа для общения, лидогенерации и продаж в чатах</title>
        <meta
          name="description"
          content="Replymaster — нейросеть для автоматизации ответов и продаж в чатах."
        />
        <link rel="canonical" href="https://replymaster.top/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <nav className="nav">
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
          <AuthBlock />
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">
              Всё из коробки · 10 минут · Нативные лиды · Прогрев в чатах ·
              Администрирование
            </div>
            <h1>
              Replymaster — автоматизация общения, лидогенерации и продаж в
              чатах
            </h1>
            <p className="lead">
              Всё работает из коробки и настраивается за 10 минут. Replymaster
              помогает находить клиентов в чужих чатах, прогревать их и
              продавать без навязчивости. Подходит для маркетологов,
              арбитражников, продавцов, комьюнити-менеджеров и фаундеров.
            </p>
            <div className="cta">
              <a
                className="btn primary"
                onClick={() =>
                  signIn('github', { callbackUrl: '/dashboard' })
                }
              >
                Попробовать бесплатно
              </a>
              <a className="btn secondary" href="/dashboard">
                Посмотреть демо
              </a>
            </div>
          </div>
          <div className="mock" aria-label="Превью интерфейса">
            <div className="mock-inner">Скриншот интерфейса / превью видео</div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <h2>Короткое описание</h2>
          <div className="card">
            Replymaster — это универсальная платформа, которая автоматизирует
            работу с чатами, группами и личными сообщениями. Она помогает
            находить и прогревать клиентов прямо в их среде общения — в
            Telegram. Всё подключается и работает без сложной настройки —
            просто войди, выбери чат и начни действовать.
          </div>
        </div>
      </section>

      <section id="features">
        <div className="wrap">
          <h2>Основные возможности</h2>
          <div className="grid cols-3">
            <div className="card">
              <strong>1. Нативные лиды из открытых чатов</strong>
              <p className="muted">
                Replymaster анализирует диалоги и подбирает людей, которые уже
                интересуются вашим продуктом.
              </p>
            </div>
            <div className="card">
              <strong>2. Прогрев и продажи без давления</strong>
              <p className="muted">
                Система помогает выстраивать естественные диалоги и сохраняет
                сценарии, которые работают лучше всего.
              </p>
            </div>
            <div className="card">
              <strong>
                3. Ведение собственных чатов и групп как администратор
              </strong>
              <p className="muted">
                Автомодерация, приветствия, удаление спама и аналитика
                активности.
              </p>
            </div>
            <div className="card">
              <strong>4. Старт «из коробки»</strong>
              <p className="muted">
                Войдите, подключите чаты и начните использовать. Настройка — до
                10 минут.
              </p>
            </div>
            <div className="card">
              <strong>5. Автоматизация и аналитика</strong>
              <p className="muted">
                Отслеживание активности, лидов и эффективности диалогов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section id="reviews">
        <div className="wrap">
          <h2>Отзывы пользователей</h2>
          <ReviewsCarousel />
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <details>
            <summary>Сколько времени занимает настройка?</summary>
            <p className="muted">
              В среднем 10 минут — всё работает из коробки.
            </p>
          </details>
          <details>
            <summary>Можно ли работать с чужими чатами?</summary>
            <p className="muted">
              Да, если они открытые. Replymaster анализирует контент и помогает
              находить заинтересованных людей.
            </p>
          </details>
          <details>
            <summary>Работает ли это в Telegram?</summary>
            <p className="muted">
              Да, основная интеграция именно с Telegram.
            </p>
          </details>
          <details>
            <summary>Это бот или программа?</summary>
            <p className="muted">
              Это веб-приложение с панелью управления и доступом через браузер.
            </p>
          </details>
          <details>
            <summary>Что входит в бесплатный тариф?</summary>
            <p className="muted">
              10 сообщений, тест всех функций и безлимитный доступ к истории.
            </p>
          </details>
        </div>
      </section>

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
              </ul>
              <div className="price">
                0 ₽ / <span className="muted">навсегда</span>
              </div>
              <a
                className="btn secondary"
                onClick={() =>
                  signIn('github', { callbackUrl: '/dashboard' })
                }
              >
                Выбрать Free
              </a>
            </div>

            <div className="card plan pro" id="plan-pro">
              <div className="title">Pro</div>
              <div className="muted">Для блогеров и экспертов</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Безлимит сообщений</li>
                <li>До 3 Telegram-групп</li>
                <li>GPT-4-mini автоответы</li>
              </ul>
              <div className="price">
                990 ₽ / <span className="muted">в месяц</span>
              </div>
              <a
                className="btn"
                onClick={() =>
                  signIn('github', { callbackUrl: '/checkout?plan=pro' })
                }
              >
                Выбрать Pro
              </a>
            </div>

            <div className="card plan" id="plan-team">
              <div className="title">Team</div>
              <div className="muted">Для команд</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Безлимит сообщений</li>
                <li>До 10 Telegram-групп</li>
              </ul>
              <div className="price">
                2 490 ₽ / <span className="muted">в месяц</span>
              </div>
              <a
                className="btn secondary"
                onClick={() =>
                  signIn('github', { callbackUrl: '/checkout?plan=team' })
                }
              >
                Выбрать Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          © {new Date().getFullYear()} Replymaster · Все права защищены ·{' '}
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </>
  );
}
