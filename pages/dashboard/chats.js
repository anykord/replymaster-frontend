import DashboardLayout from '../../components/dashboard/Layout';
export default function Page() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-2">Чаты и ответы</h1>
      <p className="text-gray-600">Поток входящих сообщений, Auto/Semi-auto режимы, отправка ответов.</p>
    </DashboardLayout>
  )
}
