import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // IA v2 (Phase A): case studies moved from /work/* to /projects/*.
      // Permanent (308) so search engines and old links carry over.
      {
        source: "/work/:slug",
        destination: "/projects/:slug",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
