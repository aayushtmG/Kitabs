/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kitabs.onrender.com', // Just the hostname, without "https://"
        pathname: '/uploads/products/**',
      },
      // {
      //   protocol: 'http',
      //   port:'5000',
      //   hostname: 'localhost', // Add localhost for development purposes
      //   pathname: '/uploads/products/**',
      // },
    ],
  },
};

export default nextConfig;

