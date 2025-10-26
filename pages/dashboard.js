import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Dashboard({ user }) {
  return (
    <div className="container" style={{paddingTop:40}}>
      <h2>Дашборд</h2>
      <p className="muted">MVP-страница: позже добавим статус Telethon, счётчики, настройки роли.</p>

      <div className="card" style={{marginTop:18, display:'flex', alignItems:'center', gap:14}}>
        {user?.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.image} alt="" width={48} height={48} style={{borderRadius:12}} />
        )}
        <div>
          <div><strong>{user?.name || 'Пользователь'}</strong></div>
          <div className="muted">{user?.email}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return { redirect: { destination: "/", permanent: false } };
  }
  const { name = null, email = null, image = null } = session.user || {};
  return { props: { user: { name, email, image } } };
}
