// pages/dashboard/_secure.js
import { getSession } from 'next-auth/react';

/**
 * Общий SSR-гвард для всех страниц /dashboard/*
 * - редиректит неавторизованных на /login
 * - отключает пререндер (SSG) для этих страниц
 */
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: { destination: '/login', permanent: false },
    };
  }
  return { props: { session } };
}
