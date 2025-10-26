import Head from "next/head";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const site = {
    url: "https://replymaster.top",
    name: "ReplyMaster — умный администратор для чатов и групп",
    description:
      "ReplyMaster — AI-инструмент, который отвечает, консультирует и продаёт в ваших Telegram-группах и чатах. Работает как администратор и помогает увеличить конверсию.",
    image: "/og-image.png", // загрузим в public (см. ниже)
  };

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ReplyMaster",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.url,
    description: site.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Бесплатный тестовый доступ",
    },
    publisher: {
      "@type": "Organization",
      name: "ReplyMaster",
      url: site.url,
    },
  };

  return (
    <>
      <Head>
        <title>{site.name}</title>
        <meta name="description" content={site.description} />
        <meta
          name="keywords"
          content="replymaster, telegram bot, администратор, автоответчик, искусственный интеллект, продажи, чаты, группы, лидогенерация, автоворонка, автоматизация"
        />
        {/* Canonical */}
        <link rel="canonical" href={site.url} />
        {/* Favicon & manifest */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />

        {/* Open Graph */}
        <meta property="og:title" content={site.name} />
        <meta property="og:description" content={site.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:image" content={`${site.url}${site.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.name} />
        <meta name="twitter:description" content={site.description} />
        <meta name="twitter:image" content={`${site.url}${site.image}`} />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </Head>

      <Header />

      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>ReplyMaster — ваш AI-администратор в Telegram-группах</h1>
            <p className="lead">
              Программа, которая автоматически отвечает, консультирует и
              обрабатывает заявки прямо в ваших чатах и каналах. Работает как
              администратор и поддерживает активность 24/7.
            </p>
            <div className="cta">
              <a href="#login" className="btn">Попробовать бесплатно</a>
              <a href="#features" className="btn secondary">Что умеет</a>
            </div>
          </div>
          <div className="hero-image">
            {/* Можно заменить на свой скрин/иллюстрацию */}
            <img src="/og-image.png" alt="ReplyMaster бот" />
          </div>
        </section>

        <section id="features" className="features">
          <h2>Что умеет ReplyMaster</h2>
          <ul className="feature-list">
            <li>🤖 Отвечает на вопросы пользователей как человек</li>
            <li>💬 Работает в Telegram-чатах, каналах и личных сообщениях</li>
            <li>🧠 Настраивается под ваши сценарии общения и продукты</li>
            <li>💰 Конвертирует диалоги в продажи</li>
            <li>📈 Собирает аналитику запросов и вовлечённости</li>
            <li>🔐 Работает только в разрешённых чатах — этично и безопасно</li>
          </ul>
        </section>

        <section id="how" className="how">
          <h2>Как это работает</h2>
          <ol>
            <li>Подключаете ReplyMaster к своему Telegram-аккаунту или группе.</li>
            <li>Указываете темы, интересы и ключевые слова.</li>
            <li>ReplyMaster автоматически отвечает и консультирует участников.</li>
            <li>Вы получаете статистику и лиды в удобном интерфейсе.</li>
          </ol>
        </section>

        <section id="use" className="use">
          <h2>Где можно использовать</h2>
          <ul>
            <li>В собственных Telegram-группах и каналах (как администратор)</li>
            <li>В открытых тематических чатах</li>
            <li>Для сбора заявок из личных сообщений</li>
            <li>Для сопровождения воронок, обучения и поддержки</li>
          </ul>
        </section>

        <section id="login" className="login">
          <LoginForm />
        </section>

        <footer className="footer">
          <p>© 2025 ReplyMaster · Все права защищены.</p>
          <p><a href="/policy">Политика и условия</a></p>
        </footer>
      </main>

      <style jsx>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 16px;
        }
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
          padding: 80px 0;
        }
        .hero-text h1 {
          font-size: 2.4rem;
          line-height: 1.3;
          margin-bottom: 16px;
        }
        .lead {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 24px;
        }
        .cta {
          display: flex;
          gap: 12px;
        }
        .btn {
          background: #0f172a;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }
        .btn.secondary {
          background: #e5e7eb;
          color: #111827;
        }
        .features, .how, .use {
          padding: 60px 0;
        }
        h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
        }
        ul, ol {
          margin-left: 20px;
          color: #333;
          line-height: 1.6;
        }
        .feature-list li {
          margin-bottom: 8px;
        }
        .footer {
          text-align: center;
          padding: 40px 0;
          color: #666;
          border-top: 1px solid #eee;
        }
        .hero-image img {
          width: 100%;
          max-width: 520px;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(2,6,23,.15);
        }
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-image img {
            max-width: 320px;
            margin: 0 auto;
          }
          .cta {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
