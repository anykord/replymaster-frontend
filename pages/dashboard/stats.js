import DashboardLayout from '../../components/dashboard/Layout';
import KPICards from '../../components/dashboard/KPICards';

const data = { incoming: 420, replied: 310, dm: 48, ctr: 17 };

export default function StatsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Статистика</h1>
      <KPICards data={data} />
      <div className="mt-4 rounded-xl border bg-white p-4 shadow-sm text-sm text-gray-600">
        Графики будут добавлены позже (Recharts). Здесь появится динамика по дням, топ‑темы и эффективность промтов.
      </div>
    </DashboardLayout>
  );
}


export { default } from './_secure';
