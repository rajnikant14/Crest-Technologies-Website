import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Consolidate domain variations: apex → www (SEO.md §2).
      // HTTP → HTTPS is handled by the host (Vercel) automatically.
      {
        source: "/:path*",
        has: [{ type: "host", value: "crest-technologies.com" }],
        destination: "https://www.crest-technologies.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
