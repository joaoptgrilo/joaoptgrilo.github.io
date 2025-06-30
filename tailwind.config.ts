// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        // UPDATED: Now points to our dynamic CSS variable
        custom: "var(--blur-intensity)",
      },
      colors: {
        "primary-bg": "var(--color-primary-bg)",
        "secondary-bg": "var(--color-secondary-bg)",
        "light-panel-bg": "var(--color-light-panel-bg)",
        "primary-text": "var(--color-primary-text)",
        "secondary-text": "var(--color-secondary-text)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "info-accent": "var(--color-info-accent)",
        border: "var(--color-border)",
        "tag-bg": "var(--color-tag-bg)",
        shadow: "var(--color-shadow)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        fira_code: ["var(--font-fira-code)", "monospace"],
      },
      keyframes: {
        glowShadow: {
          "0%": { boxShadow: "0 0 5px var(--color-accent-shadow-start)" },
          "50%": {
            boxShadow: "0 0 20px 5px var(--color-accent-shadow-strong)",
          },
          "100%": { boxShadow: "0 0 5px var(--color-accent-shadow-start)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "var(--color-accent)" },
        },
      },
      animation: {
        "glow-shadow": "glowShadow 5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
export default config;
