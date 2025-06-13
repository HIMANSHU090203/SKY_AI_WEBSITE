import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Updated to use the new serverExternalPackages instead of deprecated experimental.serverComponentsExternalPackages
  serverExternalPackages: ['mongoose']
};

export default nextConfig;
