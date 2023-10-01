/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'agency.teamrabbil.com',
      },
    ],
    },
}

module.exports = nextConfig
