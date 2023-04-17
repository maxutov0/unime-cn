/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // For docker container
  out: 'standalone',
}

module.exports = nextConfig
