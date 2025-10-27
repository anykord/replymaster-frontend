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
        <a className="auth" href="/dashboard">Перейти в Dashboard</a>
      </div>
    );
  }
  return (
    <button className="auth" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
      Войти через GitHub
    </button>
  );
}

/* ======= Reviews (карусель) ======= */
/* Имена классов rv-* чтобы не конфликтовать с твоими стилями */
function ReviewsCarousel() {
  const items = [
    {
      name: 'Артём',
      role: 'арбитражник',
      text: '«Беру лидов прямо из нишевых групп! Replymaster показывает, кто интересуется темой — я просто захожу в диалог и общаюсь.»',
      date: 'июнь 2025',
      rating: 5,
      avatar: '/avatars/artem.jpg',   // положи файл в public/avatars/
      initials: 'А',
    },
    {
      name: 'Ксения',
      role: 'комьюнити-менеджер',
      text: '«Настроила за 8 минут. Работает идеально — даже не ожидала, что можно так просто управлять чатами.»',
      date: 'июнь 2025',
      rating: 5,
      avatar: '/avatars/ksenia.jpg',
      initials: 'К',
    },
    {
      name: 'Дмитрий',
      role: 'инфомаркетолог',
      text: '«Раньше всё делал вручную — теперь Replymaster сам находит людей и помогает вести разговор. Очень органично!»',
      date: 'июнь 2025',
      rating: 5,
      avatar: '/avatars/dmitry.jpg',
      initials: 'Д',
    },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);

  const go = (i) => setIdx((i + items.length) % items.length);

  return (
    <div className="rv reviews">
      <div className="review-track" style={{ transform: `translateX(-${idx * 100}%)` }} aria-live="polite">
        {items.map((r, i) => (
          <div className="review" key={i}>
            <div className="bubble">
              <div className="head">
                {r.avatar ? (
                  <div className="rv-avatar">
                    <img src={r.avatar} alt={r.name} className="rv-avatar-img" />
                  </div>
                ) : (
                  <div className="rv-avatar">{r.initials}</div>
                )}
                <div>
                  <div className="stars" aria-label={`${r.rating} из 5`}>★★★★★</div>
                  <div className="small muted">{r.name} · {r.role}</div>
                </div>
              </div>
              <p className="muted" style={{ marginBottom: 6 }}>{r.text}</p>
              <div className="meta">Отзыв: {r.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="review-controls" aria-hidden="false">
        <button onClick={() => go(idx - 1)} aria-label="Предыдущий отзыв">‹</button>
        <button onClick={() => go(idx + 1)} aria-label="Следующий отзыв">›</button>
      </div>

      <div className="review-dots" role="tablist">
        {items.map((_, i) => (
          <button key={i} className={i === idx ? 'active' : ''} onClick={() => go(i)} aria-label={`Показать отзыв ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  // JSON-LD: отзывы + агрегированный рейтинг
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Replymaster",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://replymaster.top/",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "ratingCount": "3" },
    "review": [
      { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Артём" }, "reviewBody": "Беру лидов прямо из нишевых групп! Replymaster показывает, кто интересуется темой — я просто захожу в диалог и общаюсь." },
      { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Ксения" }, "reviewBody": "Настроила за 8 минут. Работает идеально — даже не ожидала, что можно так просто управлять чатами." },
      { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Дмитрий" }, "reviewBody": "Раньше всё делал вручную — теперь Replymaster сам находит людей и помогает вести разговор. Очень органично!" }
    ]
  };

  return (
    <>
      <Head>
        <title>Replymaster — AI программа для общения, лидогенерации и продаж в чатах</title>
        <meta name="description" content="Replymaster — нейросеть для автоматизации ответов и продаж в чатах." />
        <link rel="canonical" href="https://replymaster.top/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* NAVBAR */}
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand"><span className="logo" /> <span>Replymaster</span></div>
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

      {/* HERO */}
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">Всё из коробки · 10 минут · Нативные лиды · Прогрев в чатах · Администрирование</div>
            <h1>Replymaster — автоматизация общения, лидогенерации и продаж в чатах</h1>
            <p className="lead">Всё работает из коробки и настраивается за 10 минут. Replymaster помогает находить клиентов в чужих чатах, прогревать их и продавать без навязчивости. Подходит для маркетологов, арбитражников, продавцов, комьюнити-менеджеров и фаундеров.</p>
            <div className="cta">
              <a className="btn primary" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>Попробовать бесплатно</a>
              <a className="btn secondary" href="/dashboard">Посмотреть демо</a>
            </div>
          </div>
          <div className="mock" aria-label="Превью интерфейса"><div className="mock-inner">Скриншот интерфейса / превью видео</div></div>
        </div>
      </header>

      {/* SHORT ABOUT */}
      <section id="about">
        <div className="wrap">
          <h2>Короткое описание</h2>
          <div className="card">
            Replymaster — это универсальная платформа, которая автоматизирует работу с чатами, группами и личными сообщениями. Она помогает находить и прогревать клиентов прямо в их среде общения — в Telegram. Всё подключается и работает без сложной настройки — просто войди, выбери чат и начни действовать.
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="wrap">
          <h2>Основные возможности</h2>
          <div className="grid cols-3">
            <div className="card"><strong>1. Получать нативные лиды из открытых чатов</strong><p className="muted">Replymaster анализирует диалоги в открытых группах и подбирает людей, которые уже интересуются вашим продуктом. Вы получаете горячие контакты без спама и холодных рассылок.</p></div>
            <div className="card"><strong>2. Прогревать и продавать без давления</strong><p className="muted">Система помогает выстраивать естественные диалоги, подсказывает фразы, генерирует ответы и сохраняет сценарии, которые работают лучше всего.</p></div>
            <div className="card"><strong>3. Вести собственные чаты и группы как администратор</strong><p className="muted">Автомодерация, приветствия, удаление спама и аналитика активности — экономит время и поддерживает здоровую коммуникацию.</p></div>
            <div className="card"><strong>4. Старт «из коробки»</strong><p className="muted">Не нужно программировать — войдите, подключите чаты и начните использовать. Полная настройка занимает до 10 минут.</p></div>
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
              <div>Настройка за 10 минут — не требуется обучение и интеграторы.</div>
              <div>Готово к работе «из коробки».</div>
              <div>Работа с открытыми чатами — без нарушений правил и без спама.</div>
              <div>Рост продаж за счёт диалогов вместо холодных рассылок.</div>
            </div>
            <div className="card list">
              <div>Поддержка нескольких платформ: Telegram, Discord, Slack.</div>
              <div>Искусственный интеллект, адаптирующийся под ваш стиль.</div>
              <div>Режим администратора для собственных сообществ.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FREE 10 */}
      <section id="free">
        <div className="wrap">
          <h2>10 бесплатных сообщений</h2>
          <div className="card">
            🎁 Начни бесплатно — всё включено: после регистрации ты получаешь 10 бесплатных сообщений, чтобы протестировать систему. Никаких карт, подписок и автосписаний. Просто попробуй и оцени результат.
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews">
        <div className="wrap">
          <h2>Отзывы пользователей</h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <details><summary>Сколько времени занимает настройка?</summary><p className="muted">В среднем 10 минут — всё работает из коробки.</p></details>
          <details><summary>Можно ли работать с чужими чатами?</summary><p className="muted">Да, если они открытые. Replymaster анализирует контент и помогает находить заинтересованных людей.</p></details>
          <details><summary>Работает ли это в Telegram?</summary><p className="muted">Да, основная интеграция именно с Telegram.</p></details>
          <details><summary>Это бот или программа?</summary><p className="muted">Это веб-приложение с панелью управления и доступом через браузер.</p></details>
          <details><summary>Что входит в бесплатный тариф?</summary><p className="muted">10 сообщений, тест всех функций и безлимитный доступ к истории.</p></details>
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
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>10 сообщений при старте</li>
                <li>+5 сообщений каждый день использования</li>
                <li>1 Telegram-группа</li>
                <li>Базовые автоответы (ChatGPT API)</li>
                <li>Простой анализ (эмоции, активность)</li>
                <li>Минимальные настройки (тон, приветствие)</li>
              </ul>
              <div className="price">0 ₽ / <span className="muted">навсегда</span></div>
              <div className="muted small note">Регистрация без карты</div>
              <a className="btn secondary" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>Выбрать Free</a>
            </div>

            {/* PRO */}
            <div className="card plan pro" id="plan-pro">
              <div className="title">Pro <span className="muted" style={{ fontWeight: 600 }}>· Рекомендуемый план</span></div>
              <div className="muted">Оптимально для блогеров и экспертов</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Безлимит сообщений</li>
                <li>До 3 Telegram-групп</li>
                <li>Автоответы на основе GPT-4-mini</li>
                <li>Кастомные подсказки: тон, стиль, примеры</li>
                <li>Расширенная аналитика по группам</li>
                <li>Экспорт (CSV, Google Sheets)</li>
                <li>Базовая автоматизация (триггеры)</li>
              </ul>
              <div className="price">990 ₽ / <span className="muted">в месяц</span></div>
              <div className="muted small note">Оплата после регистрации · Можно начать с Free</div>
              <a className="btn" onClick={() => signIn('github', { callbackUrl: '/checkout?plan=pro' })}>Выбрать Pro</a>
            </div>

            {/* TEAM */}
            <div className="card plan" id="plan-team">
              <div className="title">Team</div>
              <div className="muted">Для команд и небольших проектов</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Безлимит сообщений</li>
                <li>До 10 Telegram-групп</li>
                <li>До 5 участников команды</li>
                <li>Совместные автоответы и база шаблонов</li>
                <li>Отчёты по группам и участникам</li>
              </ul>
              <div className="price">2 490 ₽ / <span className="muted">в месяц</span></div>
              <div className="muted small note">Оплата после регистрации · Можно начать с Free</div>
              <a className="btn secondary" onClick={() => signIn('github', { callbackUrl: '/checkout?plan=team' })}>Выбрать Team</a>
            </div>

            {/* ENTERPRISE (опционально) */}
            <div className="card plan" id="plan-enterprise">
              <div className="title">Enterprise</div>
              <div className="muted">Под задачи бизнеса</div>
              <ul className="muted" style={{ margin: '8px 0 0 18px' }}>
                <li>Индивидуальный сервер</li>
                <li>White-label</li>
                <li>Расширенные лимиты и SLA</li>
                <li>Персональный менеджер</li>
              </ul>
              <div className="price">По запросу</div>
              <div className="muted small note">Оставьте заявку — свяжемся для предложения</div>
              <a className="btn secondary" href="/contact">Запросить предложение</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="wrap">
          <div className="card" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'16px', flexWrap:'wrap' }}>
            <div>
              <strong>Replymaster — автоматизируй диалоги, ищи клиентов и продавай в чатах без рутины.</strong>
              <div className="muted">Всё работает из коробки. Настрой за 10 минут.</div>
            </div>
            <a className="btn primary" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>Попробовать бесплатно</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} Replymaster · Все права защищены · <a href="#">Политика конфиденциальности</a></div>
      </footer>
    </>
  );
}
