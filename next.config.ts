import { NextConfig } from "next/dist/server/config";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: 'http://localhost:8000/chat',  // Your FastAPI URL
      },
    ];
  },
};

export default nextConfig;
