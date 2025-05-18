/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.clerk.dev'], // Add this if you're using Clerk for authentication
  },
  experimental: {
    turbo: {
      rules: {
        // Configure Turbopack rules if needed
      },
    },
  },
};

export default nextConfig;
