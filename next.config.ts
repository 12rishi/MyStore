import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "nkqitxsrzpicyotpiotv.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
