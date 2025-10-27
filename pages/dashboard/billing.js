// pages/dashboard/billing.js
import Head from "next/head";
import { getSession } from "next-auth/react";

export default function BillingPage({ plan }) {
  const title = plan ? `Оплата плана: ${plan}` : "Оплата (заглушка)";

  return (
    <>
      <Head>
        <title>{title} — Replymaster</title>
      </Head>

      <main style={{ maxWidth: 960, margin: "40px auto", padding: "0 20px" }}>
        <h1 style={{ fontSize: 28, margin: 0 }}>{title}</h1>
        <p style={{ color: "#5c6473", marginTop: 8 }}>
          Здесь будет страница оформления подписки. Пока это заглушка. Пользователь попадает сюда
          после входа через GitHub по платным планам.
        </p>

        <div
          style={{
            marginTop: 16,
            border: "1px solid #e6eaf0",
            borderRadius: 12,
            padding: 18,
            background: "#fff",
          }}
        >
          <ul style={{ margin: "0 0 0 18px", color: "#5c6473" }}>
            <li>План: <strong>{plan || "—"}</strong></li>
            <li>Статус: <strong>ожидание оплаты</strong></li>
          </ul>

          <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn primary" href="/dashboard">Перейти в дашборд</a>
            <button
              className="btn secondary"
              onClick={() => alert("Тут появится реальный платёжный провайдер")}
            >
              Оплатить (демо)
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

/** Требуем авторизацию: без сессии уводим на SignIn с возвратом обратно сюда */
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    // вернёмся на эту же страницу после логина
    const returnTo = encodeURIComponent(ctx.resolvedUrl || "/dashboard/billing");
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${returnTo}`,
        permanent: false,
      },
    };
  }

  const plan = ctx.query?.plan ?? null;
  return { props: { plan } };
}
