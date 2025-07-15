// next.config.static.mjs
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl("./i18n.ts")(nextConfig);
