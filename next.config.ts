import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Deploy behind a reverse proxy; do not assume Taranak's existing app can be replaced.
};

export default nextConfig;
