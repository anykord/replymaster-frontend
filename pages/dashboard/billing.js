import DashboardLayout from '../../components/dashboard/Layout';
import LimitUpsell from '../../components/dashboard/LimitUpsell';

export default function BillingPage() {
  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>Подписка</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rm-card p-4">
          <h4 className="font-semibold mb-2">Текущий план: Free</h4>
          <p className="muted text-sm">1 аккаунт, 1 группа, 20 сообщений/день</p>
        </div>
        <LimitUpsell
          title="Хотите больше возможностей?"
          text="Перейдите на Pro/Team или купите аддон: +1 аккаунт (390 ₽), +1 группа (290 ₽)."
          onAddon={()=>alert('Добавление аддона (мок)')}
          onUpgrade={()=>alert('Апгрейд тарифа (мок)')}
        />
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
