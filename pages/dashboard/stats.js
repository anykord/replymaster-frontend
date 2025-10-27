import DashboardLayout from '../../components/dashboard/Layout';
export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-2">Статистика</h1>
      <p className="text-gray-600">KPI, графики и отчеты по группам/аккаунтам.</p>
    </DashboardLayout>
  )
}
