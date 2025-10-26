// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // необязательно, но удобно: свою страницу логина
  pages: {
    signIn: '/',           // форму логина показываем на главной
    error: '/',            // в случае ошибки тоже на главную
  },

  callbacks: {
    // добавляем id в session (иногда полезно)
    async session({ session, token }) {
      if (token?.sub) session.user.id = token.sub;
      return session;
    },

    // КЛЮЧЕВОЕ: после логина ведём на /dashboard
    async redirect({ url, baseUrl }) {
      // внутренние ссылки
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // те же origin
      if (new URL(url).origin === baseUrl) return url;
      // дефолт
      return `${baseUrl}/dashboard`;
    },
  },

  // безопаснее для продакшена
  secret: process.env.NEXTAUTH_SECRET,
});
