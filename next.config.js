/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts, tsx"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
  },
};

module.exports = nextConfig;
