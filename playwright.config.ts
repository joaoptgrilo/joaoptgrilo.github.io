// playwright.config.ts
import { defineConfig } from "@playwright/test";
import baseConfig from "@joaoptgrilo/dev-config/playwright/base.config";

export default defineConfig({
  ...baseConfig,

  testDir: "./e2e",
  use: {
    ...baseConfig.use,
    baseURL: "http://localhost:3000",
  },
  webServer: {
    ...baseConfig.webServer,
    command: "npm run start",
    url: "http://localhost:3000",
  },
});