import { getSession } from 'next-auth/react';
import Page from './index';
export default Page;
export async function getServerSideProps(ctx){
  const session = await getSession(ctx);
  if(!session){ return { redirect: { destination: '/login', permanent: false } } }
  return { props: { session } };
}
