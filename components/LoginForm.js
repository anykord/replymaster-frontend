import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginForm(){
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="login-card"><p className="muted">Загружаем профиль…</p></div>;
  }

  if (session) {
    return (
      <div className="login-card">
        <h3>Вы вошли</h3>
        <div className="user">
          {session.user?.image && <img src={session.user.image} alt="" />}
          <div>
            <div className="name">{session.user?.name}</div>
            <div className="muted">{session.user?.email}</div>
          </div>
        </div>
        <div className="login-actions">
          <a className="btn" href="/dashboard">Перейти в дашборд</a>
          <button className="btn secondary" onClick={() => signOut()}>Выйти</button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-card">
      <h3>Войти в личный кабинет</h3>
      <p className="muted">Выберите Google-аккаунт — это безопасно.</p>
      <button className="btn wide" onClick={() => signIn("google")}>Войти с Google</button>
      <p className="tiny muted">Авторизация нужна только для доступа к дашборду и настройкам.</p>
    </div>
  );
}
