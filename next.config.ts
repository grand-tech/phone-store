import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.GITHUB_PAGES ? '/photo-store' : '',
  basePath:  process.env.GITHUB_PAGES ? '/photo-store' : '',
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

export default nextConfig;
