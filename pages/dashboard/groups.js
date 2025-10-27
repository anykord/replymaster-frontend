import { useState } from 'react';
import DashboardLayout from '../../components/dashboard/Layout';
import UsageBadge from '../../components/dashboard/UsageBadge';
import LimitUpsell from '../../components/dashboard/LimitUpsell';
import GroupCard from '../../components/dashboard/GroupCard';
import AddGroupDialog from '../../components/dashboard/AddGroupDialog';

export default function GroupsPage() {
  const [groups, setGroups] = useState([
    { id:'g1', title:'Учимся корейскому', members:1200, autoMode:false },
  ]);
  const quotas = { used: groups.length, limit: 1 }; // Free mock

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-4">
        <h1 className="rm-ink" style={{fontSize:28,fontWeight:800}}>Группы</h1>
        <AddGroupDialog onAdd={(g)=>setGroups([...groups, {id:Date.now()+'', ...g}])} />
      </div>

      <div className="mb-4"><UsageBadge label="Группы" used={quotas.used} limit={quotas.limit} /></div>

      {quotas.used >= quotas.limit && (
        <div className="mb-4">
          <LimitUpsell
            title="Лимит групп исчерпан"
            text="Добавьте +1 группу за 290 ₽ или перейдите на Pro, чтобы работать с несколькими группами."
            onAddon={()=>alert('Покупка +1 группы (мок)')}
            onUpgrade={()=>alert('Апгрейд тарифа (мок)')}
          />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {groups.map(g=> <GroupCard key={g.id} group={g} />)}
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
