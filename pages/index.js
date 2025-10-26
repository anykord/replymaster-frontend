
import Head from 'next/head'
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'
import LoginForm from '../components/LoginForm'

export default function Home(){
  return (
    <>
      <Head>
        <title>ReplyMaster — AI‑ассистент для Telegram</title>
        <meta name="description" content="Автоматизация экспертных ответов в Telegram. 10 бесплатных сообщений." />
      </Head>
      <Header />
      <main className="container">
        <section className="hero">
          <div>
            <span className="badge">AI для Telegram‑чатов</span>
            <h1>Экспертные ответы и нативные продажи<br/>в ваших и открытых группах</h1>
            <p className="lead">ReplyMaster отвечает как вы: персонализация под ваш стиль, связка с GPT и Telethon. Тест: 10 бесплатных сообщений.</p>
            <div className="cta">
              <a href="#auth" className="btn">Попробовать бесплатно</a>
              <a className="btn secondary" href="#how">Как это работает</a>
            </div>
          </div>
          <div className="card">
            <h3 style={{marginTop:0}}>Быстрый старт</h3>
            <ol className="muted">
              <li>Авторизуйтесь и создайте бота</li>
              <li>Подключите открытые чаты или свои группы</li>
              <li>Опишите тон и цели — остальное сделает AI</li>
            </ol>
          </div>
        </section>

        <section id="features" style={{marginTop:10}}>
          <h2>Преимущества</h2>
          <div className="grid3">
            <FeatureCard title="Без спама" desc="Ответы выглядят как ваши, а не как реклама. Нативный формат, контекст из чата." />
            <FeatureCard title="Глубокая персонализация" desc="Настраиваем роль: “Я Лера, преподаю корейский...” и стиль ответов." />
            <FeatureCard title="Гибкая монетизация" desc="Лиды в личку, бесплатные уроки, автоматические воронки." />
          </div>
        </section>

        <section id="how" style={{marginTop:30}}>
          <h2>Как это работает</h2>
          <div className="how">
            <div className="step"><b>1. Подключение</b><p className="muted">Авторизация, подключение чатов, выбор триггеров.</p></div>
            <div className="step"><b>2. Генерация</b><p className="muted">GPT формирует экспертные ответы и предлагает нативные офферы.</p></div>
            <div className="step"><b>3. Аналитика</b><p className="muted">Счётчик сообщений, лиды, конверсия в запросы и продажи.</p></div>
          </div>
        </section>

        <section style={{marginTop:30, display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
          <LoginForm />
          <div className="card">
            <h3 style={{marginTop:0}}>Где можно использовать</h3>
            <ul className="muted">
              <li>ваши группы и каналы</li>
              <li>открытые тематические чаты</li>
              <li>личные сообщения по запросу</li>
            </ul>
            <p className="muted">Мы действуем этично: только в открытых чатах и без навязчивых рассылок.</p>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">© {new Date().getFullYear()} ReplyMaster • Политика и условия — по запросу</div>
      </footer>
    </>
  )
}
