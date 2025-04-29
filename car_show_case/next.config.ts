import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio", // Replace with your actual image hostname
        pathname: "/**", // Allows all paths under the specified domain
      },
    ],
  },
};

export default nextConfig;
