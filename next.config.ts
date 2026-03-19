import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/Fur-bearing",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      ".mp3": {
        as: "resource",
        loaders: ["file-loader"],
      },
       "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js"
      }
    },
  },
};

export default nextConfig;
