// components/Header.jsx
export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <img src="/favicon.svg" alt="ReplyMaster" className="brand__logo" />
          <span className="brand__name">ReplyMaster</span>
        </div>
        <nav className="nav">
          <a href="#how" className="nav__link">Как работает</a>
          <a href="#features" className="nav__link">Преимущества</a>
          <a href="#use" className="nav__link">Где использовать</a>
        </nav>
      </div>
    </header>
  );
}
