import DashboardLayout from '../../components/dashboard/Layout';
import LeadsTable from '../../components/dashboard/LeadsTable';

const mockLeads = [
  { username:'linguafan', source:'Учимся корейскому', stage:'cta_click', lastAction:'вчера' },
  { username:'studykorea', source:'Личка', stage:'purchase', lastAction:'сегодня' },
];

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>Лиды</h1>
      <LeadsTable items={mockLeads} />
    </DashboardLayout>
  );
}

import { getSession } from 'next-auth/react';
export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
