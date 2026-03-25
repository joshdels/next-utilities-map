import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // for prod nato i fix
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "127.0.0.1",
  //       port: "8000",
  //       pathname: "/media/**",
  //     },
  //   ],
  // },
};

export default nextConfig;
