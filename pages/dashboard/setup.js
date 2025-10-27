import DashboardLayout from '../../components/dashboard/Layout';
import PromptEditor from '../../components/dashboard/PromptEditor';
import FilesUploader from '../../components/dashboard/FilesUploader';
import PreviewBox from '../../components/dashboard/PreviewBox';

export default function SetupPage() {
  return (
    <DashboardLayout>
      <h1 className="rm-ink" style={{fontSize:28,fontWeight:800, marginBottom:16}}>AI Сетап</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <PromptEditor initial={'Я Лера, преподаватель корейского языка...'} />
        <FilesUploader />
      </div>
      <div className="mt-4">
        <PreviewBox />
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
