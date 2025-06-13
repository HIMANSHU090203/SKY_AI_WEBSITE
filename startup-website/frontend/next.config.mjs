/** @type {import('next').NextConfig} */
const nextConfig = {
  // All API routes in src/app/api/ will work automatically
  // No additional configuration needed for Vercel deployment
  eslint: {
    // Disable ESLint during builds for quick deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript errors during builds for quick deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 