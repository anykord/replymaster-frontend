// components/LoginForm.jsx
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <section id="login" className="section container">
      <h2 className="section-title">Войти в личный кабинет</h2>
      <p className="muted">
        Для демо используется авторизация через GitHub.
      </p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => signIn("github")}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          style={{ marginRight: 8 }}
        >
          <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.57v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.8.42-1.32.77-1.63-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.57A12 12 0 0 0 12 .5z" />
        </svg>
        Войти с GitHub
      </button>

      <p className="hint">
        После входа откроется дашборд. В продакшне можно будет подключить
        Google, Telegram OAuth и др., но для тестов достаточно GitHub.
      </p>
    </section>
  );
}
