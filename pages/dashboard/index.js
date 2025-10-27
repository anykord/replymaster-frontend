
import Link from 'next/link';
function Card({ title, desc, href }) {
  return (
    <Link href={href} className="block rounded-xl border bg-white p-4 shadow hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{desc}</p>
      <span className="text-indigo-600 text-sm font-medium">Перейти →</span>
    </Link>
  );
}

import DashboardLayout from '../../components/dashboard/Layout';
export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-2">Добро пожаловать в Dashboard</h1>
      <p className="text-gray-600">Подключите аккаунты Telegram, добавьте группы и настройте AI-ответы.</p>
    <div className="grid gap-4 md:grid-cols-3 mt-6">
  <Card title="Аккаунты Telegram" desc="Добавьте свой Telegram-аккаунт (.session)" href="/dashboard/accounts" />
  <Card title="Группы" desc="Подключите группы для мониторинга" href="/dashboard/groups" />
  <Card title="AI Сетап" desc="Создайте и протестируйте промт" href="/dashboard/setup" />
</div>
</DashboardLayout>
  )
}
