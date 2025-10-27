import DashboardLayout from '../../components/dashboard/Layout';
export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-2">Аккаунты Telegram</h1>
      <p className="text-gray-600">Импорт .session, управление статусом и лимитами. Здесь появится апселл при превышении лимитов.</p>
    </DashboardLayout>
  )
}
