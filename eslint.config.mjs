// eslint.config.mjs
import globals from "globals";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      "@typescript-eslint/ban-types": [
        "error",
        {
          types: {
            "React.FC": { message: "Use arrow function syntax instead." },
            FC: { message: "Use arrow function syntax instead." },
            "React.FunctionComponent": {
              message: "Use arrow function syntax instead.",
            },
          },
          extendDefaults: true,
        },
      ],
    },
  },
];
