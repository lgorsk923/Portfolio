import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.3.133", "192.168.89.124"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
