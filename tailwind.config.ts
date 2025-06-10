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
      colors: {
        "primary-bg": "var(--color-primary-bg)",
        "secondary-bg": "var(--color-secondary-bg)",
        "light-panel-bg": "var(--color-light-panel-bg)",
        "primary-text": "var(--color-primary-text)",
        "secondary-text": "var(--color-secondary-text)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "info-accent": "var(--color-info-accent)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        fira_code: ["var(--font-fira-code)", "monospace"],
      },
      // UPDATED: All animations and keyframes are now defined to be high-performance.
      keyframes: {
        // High-performance glow using opacity and transform
        glowShadow: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(1.02)" },
        },
        // High-performance pan using transform
        subtlePan: {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(50px) translateY(50px)" },
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
        // Connects the keyframes to utility classes.
        "glow-shadow": "glowShadow 5s ease-in-out infinite alternate",
        "subtle-pan": "subtlePan 120s linear infinite alternate",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "typewriter-css":
          "typing 3.5s steps(40, end) 1s forwards, blink-caret 0.75s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
