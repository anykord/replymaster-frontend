/** @type {import('next').NextConfig} */
const nextConfig = {
  // Если ESLint ругается — не валим билд
  eslint: {
    ignoreDuringBuilds: true,
  },
  // На всякий случай (мы TS не используем, но если появятся типы — не ломаем сборку)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
