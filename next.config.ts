import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Handled by the CI
  },
  typescript: {
    ignoreBuildErrors: true, // Handled by the CI
  },
  compress: true,
};

export default nextConfig;
