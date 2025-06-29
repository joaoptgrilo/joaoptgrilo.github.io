// next.config.mjs
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export
  output: "export",
};

export default withNextIntl("./i18n.ts")(nextConfig);