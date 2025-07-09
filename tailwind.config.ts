// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // DEFINITIVE FIX: Change darkMode strategy to 'class'.
  // This disables the automatic @media (prefers-color-scheme) behavior
  // and relies solely on the class set on the <html> element by our script.
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        "tag-bg": "var(--color-light-panel-bg)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        fira_code: ["var(--font-fira-code)", "monospace"],
      },
      backdropBlur: {
        custom: "var(--blur-intensity)",
        nav: "10px",
      },
      boxShadow: {
        "accent-glow": "0 0 25px -5px var(--color-accent)",
      },
    },
  },
  plugins: [],
};

export default config;