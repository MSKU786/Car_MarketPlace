/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@clerk/nextjs'],
  images: {
    domains: ['images.clerk.dev'], // Add this if you're using Clerk for authentication
  },
  turbopack: true,
};

export default nextConfig;
