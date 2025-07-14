// next.config.mjs
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",

  basePath: "/joaoptgrilo.github.io",

  images: {
    unoptimized: true,
  },
};

export default withNextIntl("./i18n.ts")(nextConfig);
