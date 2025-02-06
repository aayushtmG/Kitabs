/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SERVER_ADDRESS || 'localhost',
        pathname: '/uploads/products/**',
      },
    ],
  },
};

export default nextConfig;
