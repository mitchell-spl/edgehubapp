/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_HTTP_URL: process.env.NEXT_PUBLIC_HTTP_URL,
    NEXT_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_TOKEN
  },
};

module.exports = nextConfig;
