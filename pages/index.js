import Head from "next/head";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReplyMaster — умный администратор для чатов и групп</title>
        <meta
          name="description"
          content="ReplyMaster — AI-инструмент, который отвечает, консультирует и продаёт в ваших Telegram-группах, чатах и каналах. Работает как администратор и помогает увеличить конверсию."
        />
        <meta
          name="keywords"
          content="replymaster, telegram bot, администратор, автоответчик, искусственный интеллект, продажи, чаты, группы, лидогенерация, автоворонка, автоматизация"
        />
        <meta property="og:title" content="ReplyMaster — AI-администратор для ваших групп и чатов" />
        <meta
          property="og:description"
          content="Автоматизируйте ответы, продажи и коммуникацию в Telegram-группах с помощью ReplyMaster."
        />
        <meta property="og:url" content="https://replymaster.top" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>ReplyMaster — ваш AI-администратор в Telegram-группах</h1>
            <p className="lead">
              Программа, которая умеет автоматически отвечать на вопросы, обрабатывать заявки и
              увеличивать продажи прямо в ваших чатах и каналах.  
              Работает как администратор и помогает держать активность 24/7.
            </p>
            <div className="cta">
              <a href="#login" className="btn">Попробовать бесплатно</a>
              <a href="#features" className="btn secondary">Что умеет</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/bot-illustration.png" alt="ReplyMaster бот" />
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
            <li>Указываете интересы, темы и ключевые слова.</li>
            <li>ReplyMaster автоматически отвечает и консультирует участников.</li>
            <li>Вы получаете статистику и лиды в удобном интерфейсе.</li>
          </ol>
        </section>

        <section id="use" className="use">
          <h2>Где можно использовать</h2>
          <ul>
            <li>В собственных Telegram-группах и каналах</li>
            <li>В открытых чатах по интересам</li>
            <li>Для сбора заявок из личных сообщений</li>
            <li>Для сопровождения воронок и обучения</li>
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
          background: #0070f3;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
        }
        .btn.secondary {
          background: #e0e0e0;
          color: #222;
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
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-image img {
            max-width: 300px;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  );
}
