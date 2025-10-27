import DashboardLayout from '../../components/dashboard/Layout';
export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-2">Лиды</h1>
      <p className="text-gray-600">Таблица лидов, стадии воронки, заметки и экспорт.</p>
    </DashboardLayout>
  )
}
