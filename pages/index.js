import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Replymaster — AI программа для общения, лидогенерации и продаж в чатах</title>
        <meta name="description" content="Replymaster — нейросеть для автоматизации ответов и продаж в чатах. Всё из коробки, настройка за 10 минут." />
        <link rel="canonical" href="https://replymaster.top/" />
        <meta name="theme-color" content="#0b62ff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style dangerouslySetInnerHTML={{__html: `
        :root{--bg:#ffffff; --card:#ffffff; --ink:#0b1221; --text:#2a2f3a; --muted:#5c6473; --accent:#0a56e8; --soft:#eff3fb; --line:#e6eaf0; --radius:10px; --radius-sm:8px; --shadow:0 2px 10px rgba(2,13,46,.06); --shadow-soft:0 1px 4px rgba(2,13,46,.05);}
        *{box-sizing:border-box} html,body{height:100%} body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);background:var(--bg);}
        a{color:var(--accent);text-decoration:none}
        .wrap{max-width:1120px;margin:0 auto;padding:0 24px}
        .nav{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line)}
        .nav-inner{display:flex;align-items:center;justify-content:space-between;height:68px}
        .brand{display:flex;align-items:center;gap:10px;font-weight:800;color:var(--ink)} .brand .logo{width:24px;height:24px;border-radius:4px;background:#0a56e8}
        .menu{display:flex;gap:22px;color:var(--muted)}
        .auth{padding:10px 14px;border-radius:999px;background:var(--soft);color:var(--accent);font-weight:700}
        header.hero{padding:56px 0 40px;background:#fff}
        .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:32px;align-items:center}
        .badge{display:inline-flex;gap:10px;align-items:center;padding:8px 12px;border-radius:999px;background:var(--soft);color:var(--accent);font-weight:700;font-size:12px}
        h1{color:var(--ink);font-size:42px;line-height:1.15;margin:10px 0 8px;font-weight:800;letter-spacing:.1px}
        .lead{font-size:18px;line-height:1.6;color:var(--text);max-width:720px}
        .cta{display:flex;gap:12px;margin-top:16px}
        .btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 18px;border-radius:10px;font-weight:700;transition:all .15s ease}
        .btn.primary{background:var(--accent);color:#fff;border:1px solid transparent}
        .btn.secondary{background:#fff;color:var(--accent);border:1px solid #cfd7e6}
        .mock{background:#fff;border:1px solid var(--line);border-radius:12px;min-height:320px}
        .mock::before{content:"";display:block;height:44px;border-bottom:1px solid var(--line);background:#fafbff}
        .mock-inner{padding:16px;color:#8ea1bf;text-align:center}
        section{padding:56px 0;border-top:1px solid var(--line)} h2{font-size:26px;margin:0 0 12px;color:var(--ink);font-weight:750;letter-spacing:.2px}
        .grid{display:grid;gap:16px} .cols-3{grid-template-columns:repeat(3,1fr)} .cols-2{grid-template-columns:repeat(2,1fr)}
        .card{background:var(--card);border:1px solid var(--line);border-radius:8px;padding:18px}
        .muted{color:var(--muted)} .small{font-size:12px} .note{margin-top:6px}
        .plans{display:grid;gap:16px;grid-template-columns:repeat(4,1fr);align-items:stretch}
        .plan .title{font-weight:800;font-size:18px} .price{font-size:28px;font-weight:800;color:var(--ink)}
        .plan .btn{width:100%;margin-top:8px} .plan.pro{border:2px solid var(--accent)} .plan.pro .btn{background:var(--accent);color:#fff}
        details{border:1px solid var(--line);border-radius:12px;background:#fff;padding:10px 14px} details+details{margin-top:10px}
        summary{cursor:pointer;font-weight:700;color:var(--ink)}
        footer{padding:28px 0;color:var(--muted)}
        @media (max-width:980px){.hero-grid{grid-template-columns:1fr} h1{font-size:34px} .plans{grid-template-columns:1fr} .cols-3,.cols-2{grid-template-columns:1fr}}
      `}} />

      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand"><span className="logo" /> <span>Replymaster</span></div>
          <div className="menu">
            <a href="#about">Что это</a><a href="#features">Возможности</a><a href="#reviews">Отзывы</a><a href="#faq">FAQ</a><a href="#pricing">Тарифы</a>
          </div>
          <a className="auth" style={{background:'#fff',border:'1px solid #cfd7e6',color:'#0b1221',fontWeight:600}} href="/dashboard">Войти</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="badge">Всё из коробки · 10 минут · Нативные лиды · Прогрев в чатах · Администрирование</div>
            <h1>Replymaster — автоматизация общения, лидогенерации и продаж в чатах</h1>
            <p className="lead">Всё работает из коробки и настраивается за 10 минут. Replymaster помогает находить клиентов в чужих чатах, прогревать их и продавать без навязчивости.</p>
            <div className="cta">
              <a href="/signup?plan=free" className="btn primary">Попробовать бесплатно</a>
              <a href="#demo" className="btn secondary">Посмотреть демо</a>
            </div>
          </div>
          <div className="mock" aria-label="Превью интерфейса"><div className="mock-inner">Скриншот интерфейса / превью видео</div></div>
        </div>
      </header>

      <section id="about"><div className="wrap"><h2>Короткое описание</h2><div className="card">Replymaster — это универсальная платформа…</div></div></section>
      <section id="features">
        <div className="wrap">
          <h2>Основные возможности</h2>
          <div className="grid cols-3">
            <div className="card"><strong>1. Получать нативные лиды</strong><p className="muted">Анализируем открытые группы и подбираем людей…</p></div>
            <div className="card"><strong>2. Прогревать и продавать</strong><p className="muted">Естественные диалоги, подсказки, сценарии…</p></div>
            <div className="card"><strong>3. Режим администратора</strong><p className="muted">Автомодерация, приветствия, аналитика…</p></div>
          </div>
        </div>
      </section>

      <footer><div className="wrap">© {new Date().getFullYear()} Replymaster</div></footer>
    </>
  )
}