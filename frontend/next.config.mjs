/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "https://kitabs.onrender.com" || 'localhost',
        pathname: '/uploads/products/**',
      },
    ],
  },
};

export default nextConfig;
