/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: [],
    unoptimized: true
  },
  output: 'export',
  distDir: '.next',
  experimental: {
    optimizeCss: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 