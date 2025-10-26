// pages/index.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const site = "https://replymaster.top";
  const title = "ReplyMaster — AI-администратор и экспертные ответы в Telegram-группах";
  const description =
    "ReplyMaster автоматически отвечает на вопросы, консультирует, собирает лиды и может работать как администратор ваших групп и каналов. Без спама — нативно и полезно.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site} />
        <meta property="og:image" content={`${site}/og-image.svg`} />
        <link rel="canonical" href={site} />
      </Head>

      <header className="header container">
        <Link href="/" className="brand">
          <Image src="/favicon.ico" width={28} height={28} alt="ReplyMaster" />
          <span>ReplyMaster</span>
        </Link>

        <nav className="nav">
          <a href="#how">Как работает</a>
          <a href="#features">Преимущества</a>
          <a href="#where">Где использовать</a>
          <a href="#login" className="btn btn-ghost">Войти</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero container">
          <div className="hero-text">
            <h1>
              Экспертные ответы и нативные продажи
              <br />в ваших и открытых группах
            </h1>
            <p className="lead">
              Программа автоматически отвечает, консультирует и обрабатывает
              заявки прямо в чатах и каналах. <strong>Работает как
              администратор</strong> (модерирует, закрепляет сообщения,
              поддерживает активность 24/7) — этично и без спама.
            </p>

            <div className="cta-wrap">
              <a className="btn btn-primary" href="#login">Попробовать бесплатно</a>
              <a className="btn btn-ghost" href="#features">Что умеет</a>
            </div>
          </div>

          <div className="hero-media">
            <Image
              src="/og-image.svg"
              width={520}
              height={360}
              priority
              alt="ReplyMaster бот"
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section container">
          <h2 className="section-title">Как работает</h2>
          <ol className="grid grid-3">
            <li className="card">
              <div className="card-title">1. Парсинг и анализ</div>
              <p>
                ReplyMaster собирает вопросы и контекст беседы, определяет
                намерение пользователя и пункт «боли».
              </p>
            </li>
            <li className="card">
              <div className="card-title">2. Экспертный ответ</div>
              <p>
                Генерирует понятный и полезный ответ от лица эксперта, с
                нативным переходом на ваш материал, бота или форму заявки.
              </p>
            </li>
            <li className="card">
              <div className="card-title">3. Роли администратора</div>
              <p>
                Может вести себя как <strong>админ</strong>: модерировать,
                предупреждать, закреплять посты, поддерживать обсуждения и
                активность, а также помогать новым участникам.
              </p>
            </li>
          </ol>
        </section>

        {/* FEATURES */}
        <section id="features" className="section container">
          <h2 className="section-title">Преимущества</h2>
          <ul className="grid grid-3">
            <li className="card">
              <div className="card-title">Нативно, а не спам</div>
              <p>
                Отвечает по делу, попадая в запрос человека. Никаких массовых
                рассылок и негативных реакций.
              </p>
            </li>
            <li className="card">
              <div className="card-title">Глубокий контекст</div>
              <p>
                Учитывает правила группы, прошлые сообщения, тональность и
                стиль — выглядит как работа модератора/эксперта.
              </p>
            </li>
            <li className="card">
              <div className="card-title">Лиды и заявки</div>
              <p>
                Встраивает форму/бота, собирает контакты, выгружает в ваш CRM
                или Telegram.
              </p>
            </li>
          </ul>
        </section>

        {/* WHERE */}
        <section id="where" className="section container">
          <h2 className="section-title">Где можно использовать</h2>
          <ul className="grid grid-3">
            <li className="card">
              <div className="card-title">Ваши группы/каналы</div>
              <p>Поддержка, ответы, модерирование, закрепы и анонсы 24/7.</p>
            </li>
            <li className="card">
              <div className="card-title">Открытые тематические чаты</div>
              <p>Экспертные ответы и мягкая подводка к вашему продукту.</p>
            </li>
            <li className="card">
              <div className="card-title">Личные по запросу</div>
              <p>Сценарии с согласия пользователя: консультация/заявка.</p>
            </li>
          </ul>
        </section>

        {/* LOGIN / CTA */}
        <LoginForm />
      </main>

      <footer className="footer container">
        <div>© {new Date().getFullYear()} ReplyMaster • Все права защищены.</div>
        <Link className="muted" href="/policy">
          Политика и условия
        </Link>
      </footer>
    </>
  );
}
