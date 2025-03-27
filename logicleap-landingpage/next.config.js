/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: [],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig 