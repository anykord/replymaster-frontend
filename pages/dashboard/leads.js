import DashboardLayout from '../../components/dashboard/Layout';
import LeadsTable from '../../components/dashboard/LeadsTable';

const mockLeads = [
  { username:'linguafan', source:'Учимся корейскому', stage:'cta_click', lastAction:'вчера' },
  { username:'studykorea', source:'Личка', stage:'purchase', lastAction:'сегодня' },
];

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Лиды</h1>
      <LeadsTable items={mockLeads} />
    </DashboardLayout>
  );
}


export { default } from './_secure';
