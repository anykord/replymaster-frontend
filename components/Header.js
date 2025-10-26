
export default function Header(){
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">ReplyMaster</div>
          <div style={{display:'flex', gap:14}}>
            <a href="#features" className="muted">Возможности</a>
            <a href="#how" className="muted">Как это работает</a>
            <a href="#auth" className="btn secondary">Войти</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
