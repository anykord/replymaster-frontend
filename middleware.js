// next-auth middleware to guard all /dashboard pages
export { default } from 'next-auth/middleware';
export const config = { matcher: ['/dashboard/:path*'] };
