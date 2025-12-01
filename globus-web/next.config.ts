// next.config.ts
const nextConfig = {
  reactStrictMode: true,
  env: {
    CHATBASE_SECRET_KEY: process.env.CHATBASE_SECRET_KEY,
  },
};

module.exports = nextConfig;