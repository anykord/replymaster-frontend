import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <nav className="topbar">
      <div className="topbar-inner container">
        <div className="brand">
          <Link href="/"><span className="logo">ReplyMaster</span></Link>
        </div>

        <ul className="menu">
          <li><a href="#features">Возможности</a></li>
          <li><a href="#how">Как работает</a></li>
          <li><a href="#use">Где использовать</a></li>
        </ul>

        <div className="actions">
          {session ? (
            <>
              <Link className="btn ghost" href="/dashboard">Дашборд</Link>
              <button className="btn secondary" onClick={() => signOut()}>Выйти</button>
            </>
          ) : (
            <button className="btn" onClick={() => signIn("github")}>Войти с GitHub</button>
          )}
        </div>
      </div>
    </nav>
  );
}
