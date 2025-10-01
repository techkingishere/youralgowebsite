import type { NextConfig } from "next";

const useGhPagesBase = process.env.USE_GH_BASE === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: useGhPagesBase ? "/youralgowebsite" : undefined,
  assetPrefix: useGhPagesBase ? "/youralgowebsite/" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
