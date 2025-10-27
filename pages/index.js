import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';


export default function Home() {
  return (
    <>
      <Head>
        <title>Replymaster — AI программа для общения, лидогенерации и продаж в чатах</title>
        <meta name="description" content="Replymaster — нейросеть для автоматизации ответов и продаж в чатах." />
        <link rel="canonical" href="https://replymaster.top/" />
      </Head>

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
          <div>
  {/* Auth state */}
  {(() => {
    // small hook usage wrapper
    const S = require('next-auth/react').useSession;
    const { data: session } = S();
    if (session?.user) {
      return (
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <span className="small muted">Вошли как {session.user.name || session.user.email}</span>
          <a className="auth" href="/dashboard">Перейти в Dashboard</a>
        </div>
      );
    }
    return <button className="auth" onClick={()=>signIn('github', { callbackUrl: '/dashboard' })}>Войти через GitHub</button>;
  })()}
</div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">Всё из коробки · 10 минут · Нативные лиды · Прогрев в чатах · Администрирование</div>
            <h1>Replymaster — автоматизация общения, лидогенерации и продаж в чатах</h1>
            <p className="lead">Всё работает из коробки и настраивается за 10 минут. Replymaster помогает находить клиентов в чужих чатах, прогревать их и продавать без навязчивости. Подходит для маркетологов, арбитражников, продавцов, комьюнити‑менеджеров и фаундеров.</p>
            <div className="cta">
              <a onClick={()=>signIn('github', { callbackUrl: '/dashboard' })} className="btn primary">Попробовать бесплатно</a>
              <a href="/dashboard" className="btn secondary">Посмотреть демо</a>
            </div>
          </div>
          <div className="mock" aria-label="Превью интерфейса"><div className="mock-inner">Скриншот интерфейса / превью видео</div></div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <h2>Короткое описание</h2>
          <div className="card">
            Replymaster — это универсальная платформа, которая автоматизирует работу с чатами, группами и личными сообщениями. Она помогает находить и прогревать клиентов прямо в их среде общения — в Telegram. Всё подключается и работает без сложной настройки — просто войди, выбери чат и начни действовать.
          </div>
        </div>
      </section>

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

      <section id="free">
        <div className="wrap">
          <h2>10 бесплатных сообщений</h2>
          <div className="card">
            🎁 Начни бесплатно — всё включено: после регистрации ты получаешь 10 бесплатных сообщений, чтобы протестировать систему. Никаких карт, подписок и автосписаний. Просто попробуй и оцени результат.
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap">
          <h2>FAQ</h2>
          <details><summary>Сколько времени занимает настройка?</summary><p className="muted">В среднем 10 минут — всё работает из коробки.</p></details>
          <details><summary>Можно ли работать с чужими чатами?</summary><p className="muted">Да, если они открытые. Replymaster анализирует контент и помогает находить заинтересованных людей.</p></details>
          <details><summary>Работает ли это в Telegram?</summary><p className="muted">Да, основная интеграция именно с Telegram.</p></details>
          <details><summary>Это бот или программа?</summary><p className="muted">Это веб‑приложение с панелью управления и доступом через браузер.</p></details>
          <details><summary>Что входит в бесплатный тариф?</summary><p className="muted">10 сообщений, тест всех функций и безлимитный доступ к истории.</p></details>
        </div>
      </section>

      <section id="pricing">
        <div className="wrap">
          <h2>Тарифы</h2>
          <div className="plans">
            <div className="card plan" id="plan-free">
              <div className="title">Free</div>
              <div className="muted">Бесплатный старт</div>
              <ul className="muted" style={{margin:'8px 0 0 18px'}}>
                <li>10 сообщений при старте</li>
                <li>+5 сообщений каждый день использования</li>
                <li>1 Telegram‑группа</li>
                <li>Базовые автоответы (ChatGPT API)</li>
                <li>Простой анализ (эмоции, активность)</li>
                <li>Минимальные настройки (тон, приветствие)</li>
              </ul>
              <div className="price">0 ₽ / <span className="muted">навсегда</span></div>
              <div className="muted small note">Регистрация без карты</div>
              <a className="btn secondary" onClick={()=>signIn('github', { callbackUrl: '/dashboard' })}>Выбрать Free</a>
            </div>
            <div className="card plan pro" id="plan-pro">
              <div className="title">Pro <span className="muted" style={{fontWeight:600}}>· Рекомендуемый план</span></div>
              <div className="muted">Оптимально для блогеров и экспертов</div>
              <ul className="muted" style={{margin:'8px 0 0 18px'}}>
                <li>Безлимит сообщений</li>
                <li>До 3 Telegram‑групп</li>
                <li>Автоответы на основе GPT‑4‑mini</li>
                <li>Кастомные подсказки: тон, стиль, примеры</li>
                <li>Расширенная аналитика по группам</li>
                <li>Экспорт (CSV, Google Sheets)</li>
                <li>Базовая автоматизация (триггеры)</li>
              </ul>
              <div className="price">990 ₽ / <span className="muted">в месяц</span></div>
              <div className="muted small note">Оплата после регистрации · Можно начать с Free</div>
              <a className="btn" onClick={()=>signIn('github', { callbackUrl: '/checkout?plan=pro' })}>Выбрать Pro</a>
            </div>
            <div className="card plan" id="plan-team">
              <div className="title">Team</div>
              <div className="muted">Для команд и небольших проектов</div>
              <ul className="muted" style={{margin:'8px 0 0 18px'}}>
                <li>Безлимит сообщений</li>
                <li>До 10 Telegram‑групп</li>
                <li>До 5 участников команды</li>
                <li>Совместные автоответы и база шаблонов</li>
                <li>Отчёты по группам и участникам</li>
              </ul>
              <div className="price">2 490 ₽ / <span className="muted">в месяц</span></div>
              <div className="muted small note">Оплата после регистрации · Можно начать с Free</div>
              <a className="btn secondary" onClick={()=>signIn('github', { callbackUrl: '/checkout?plan=team' })}>Выбрать Team</a>
            </div>
            <div className="card plan" id="plan-enterprise">
              <div className="title">Enterprise</div>
              <div className="muted">Под задачи бизнеса</div>
              <ul className="muted" style={{margin:'8px 0 0 18px'}}>
                <li>Индивидуальный сервер</li>
                <li>White‑label</li>
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

      <section>
        <div className="wrap">
          <div className="card" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'16px',flexWrap:'wrap'}}>
            <div>
              <strong>Replymaster — автоматизируй диалоги, ищи клиентов и продавай в чатах без рутины.</strong>
              <div className="muted">Всё работает из коробки. Настрой за 10 минут.</div>
            </div>
            <a className="btn primary" href="#start">Попробовать бесплатно</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} Replymaster · Все права защищены · <a href="#">Политика конфиденциальности</a></div>
      </footer>
    </>
  )
}
