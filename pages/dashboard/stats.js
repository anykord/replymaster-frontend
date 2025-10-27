import DashboardLayout from '../../components/dashboard/Layout';
import KPICards from '../../components/dashboard/KPICards';

const data = { incoming: 420, replied: 310, dm: 48, ctr: 17 };

export default function StatsPage() {
  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>Статистика</h1>
      <KPICards data={data} />
      <div className="mt-4 rm-card p-4">
        Графики будут добавлены позже (Recharts). Здесь появится динамика по дням, топ-темы и эффективность промтов.
      </div>
    </DashboardLayout>
  );
}

import { getSession } from 'next-auth/react';
export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
