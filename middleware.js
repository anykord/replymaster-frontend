// middleware.js — защищаем только /dashboard
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard"],
};
