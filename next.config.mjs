// next.config.mjs
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default withNextIntl("./i18n.ts")(nextConfig);
