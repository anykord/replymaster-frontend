import Head from "next/head";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>ReplyMaster — AI-ответы и лидогенерация в Telegram</title>
        <meta name="description" content="Экспертные, нативные AI-ответы в Telegram-чатах: находите вопросы, отвечайте по делу, собирайте лиды — без спама." />
      </Head>

      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-copy">
            <span className="badge">SaaS • Telegram • GPT</span>
            <h1>Экспертные AI-ответы в Telegram<br/>и лиды из открытых групп</h1>
            <p className="lead">
              ReplyMaster находит вопросы по вашей нише в открытых чатах и отвечает нативно от вашего имени.
              Помогайте людям — и получайте входящие заявки. Без спама.
            </p>
            <div className="cta">
              <a className="btn" href="#auth">Начать бесплатно</a>
              <a className="btn ghost" href="#how">Как это работает</a>
            </div>
            <p className="muted tiny">В бесплатном плане — 10 ответов.</p>
          </div>

          <div className="hero-card" id="auth">
            <LoginForm />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <div className="container">
          <h2>Почему ReplyMaster</h2>
          <div className="grid3">
            <div className="card">
              <h3>Нативно и этично</h3>
              <p>Ответы звучат как эксперт. Мы работаем только в открытых чатах — без навязчивых рассылок.</p>
            </div>
            <div className="card">
              <h3>Тон и роль</h3>
              <p>Настрой контекст: «Лера — преподаватель корейского», стиль, ссылки и CTA. Помощь — на первом месте.</p>
            </div>
            <div className="card">
              <h3>Лиды — как следствие</h3>
              <p>Люди сами переходят к вам за дополнительной помощью, курсом, консультацией или туром.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section alt">
        <div className="container">
          <h2>Как это работает</h2>
        </div>
        <div className="container">
          <ol className="how">
            <li><strong>Подключение.</strong> Авторизация через Google, добавление аккаунта Telegram, выбор чатов.</li>
            <li><strong>Настройка.</strong> Роль/тон, триггеры тем, предустановки ответов, ссылка на ваш оффер.</li>
            <li><strong>Ответ.</strong> Система находит вопрос и формирует нативный экспертный ответ — авто/ручной режим.</li>
          </ol>
        </div>
      </section>

      {/* USE CASES */}
      <section id="use" className="section">
        <div className="container">
          <h2>Где можно использовать</h2>
          <ul className="bullets">
            <li>свои группы и каналы</li>
            <li>открытые тематические чаты</li>
            <li>личные сообщения по запросу</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div>© {new Date().getFullYear()} ReplyMaster</div>
          <div className="muted tiny">Этично и прозрачно: работаем только в открытых чатах.</div>
        </div>
      </footer>
    </>
  );
}
