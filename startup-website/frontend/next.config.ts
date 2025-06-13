import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed rewrites since API routes are in the same Next.js app
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  }
};

export default nextConfig;
