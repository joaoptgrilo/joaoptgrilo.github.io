// next.config.mjs
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...{
    output: process.env.BUILD_STATIC_EXPORT === "true" ? "export" : undefined,
  },

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl("./i18n.ts")(nextConfig);
