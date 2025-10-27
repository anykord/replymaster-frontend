import DashboardLayout from '../../components/dashboard/Layout';
import LeadsTable from '../../components/dashboard/LeadsTable';
import { getSession } from 'next-auth/react';

const seed = [
  { id:'1', username:'linguafan', source:'Учимся корейскому', stage:'cta_click', note:'интересуется алфавитом' },
  { id:'2', username:'studykorea', source:'Личка', stage:'purchase', note:'взял пакет Pro' },
];

export default function LeadsPage() {
  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>Лиды</h1>
      <LeadsTable items={seed} />
    </DashboardLayout>
  );
}

export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
