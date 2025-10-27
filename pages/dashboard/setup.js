import DashboardLayout from '../../components/dashboard/Layout';
import PromptEditor from '../../components/dashboard/PromptEditor';
import PreviewBox from '../../components/dashboard/PreviewBox';
import { getSession } from 'next-auth/react';

export default function SetupPage() {
  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>AI Сетап</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <PromptEditor initial={'Я Лера, преподаватель корейского языка. Отвечаю дружелюбно, по делу, приглашаю на бесплатный мини-курс и оставляю ссылку на расписание.'} />
        <PreviewBox />
      </div>
    </DashboardLayout>
  );
}

export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
