import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "antalyakemercocukdoktoru.com",
          },
        ],
        destination: "https://www.antalyakemercocukdoktoru.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
