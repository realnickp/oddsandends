import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Junk removal was discontinued — send old URLs to the services hub
      { source: "/services/junk-removal", destination: "/services", permanent: true },
      {
        source: "/blog/junk-removal-rockland-county-complete-guide",
        destination: "/services",
        permanent: true,
      },
      // Westchester service areas were retired — send to the areas hub
      { source: "/areas/sleepy-hollow", destination: "/areas", permanent: true },
      { source: "/areas/tarrytown", destination: "/areas", permanent: true },
      { source: "/areas/irvington", destination: "/areas", permanent: true },
      { source: "/areas/dobbs-ferry", destination: "/areas", permanent: true },
    ];
  },
};

export default nextConfig;
