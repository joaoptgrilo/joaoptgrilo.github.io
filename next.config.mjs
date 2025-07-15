// next.config.mjs
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.BUILD_STATIC_EXPORT === "true" && {
    output: "export",
  }),

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl("./i18n.ts")(nextConfig);
