import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits .next/standalone with a self-contained server.js, so the server
  // runs `node server.js` without needing npm install.
  output: "standalone",
};

export default nextConfig;
