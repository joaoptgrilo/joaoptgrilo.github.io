// eslint.config.mjs
import jgConfig from "@joaoptgrilo/dev-config";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    ignores: [
      ".next/",
      "node_modules/",
      "out/",
      "playwright-report/",
      "test-results/",
      ".prettierrc.js",
      "caddy.exe",
    ],
  },
  
  ...jgConfig.next,
];