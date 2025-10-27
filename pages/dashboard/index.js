import Link from 'next/link';
import DashboardLayout from '../../components/dashboard/Layout';

function Card({ title, desc, href }) {
  return (
    <Link href={href} className="block rm-card p-4 rm-shadow-soft transition">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm muted mb-2">{desc}</p>
      <span className="text-indigo-600 text-sm font-medium">Перейти →</span>
    </Link>
  );
}

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="badge" style={{marginBottom:8}}>Панель управления</div>
      <h1 className="rm-ink" style={{fontSize:32,fontWeight:800,marginBottom:8}}>Добро пожаловать в Dashboard</h1>
      <p className="muted mb-6">
        Подключите аккаунты Telegram, добавьте группы и настройте AI-ответы.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Аккаунты Telegram" desc="Добавьте свой Telegram-аккаунт (.session)" href="/dashboard/accounts" />
        <Card title="Группы" desc="Подключите группы для мониторинга" href="/dashboard/groups" />
        <Card title="AI Сетап" desc="Создайте и протестируйте промт" href="/dashboard/setup" />
      </div>
    </DashboardLayout>
  );
}

// ⛔️ Guard: redirect to /login if not authenticated
import { getSession } from 'next-auth/react';
export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
