import DashboardLayout from '../../components/dashboard/Layout';
import LimitUpsell from '../../components/dashboard/LimitUpsell';

export default function BillingPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Подписка</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <h4 className="font-semibold mb-2">Текущий план: Free</h4>
          <p className="text-sm text-gray-600">1 аккаунт, 1 группа, 20 сообщений/день</p>
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


export { default } from './_secure';
