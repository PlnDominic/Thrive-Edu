import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Photos uploaded from /admin (courses, ventures, gallery, team),
      // stored in the "media" Supabase Storage bucket and served from its
      // public URL.
      {
        protocol: "https",
        hostname: "**.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
