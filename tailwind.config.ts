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
        "primary-bg": "#070B1F",
        "secondary-bg": "#0D102D",
        primary: "#F2F2F2",
        secondary: "#D1D5DB",
        accent: { DEFAULT: "#00C8FF", hover: "#4DD6FF" },
        "code-bg": "#111827",
      },
      fontFamily: {
        "fira-code": ['"Fira Code"', "monospace"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
      },
      animation: {
        "blinking-cursor": "blink 1s step-end infinite",
        fadeInUp: "fadeInUpAnimation 0.7s ease-out forwards",
        "pulse-dot":
          "pulseDotAnimation 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // 'gradient-bg': 'gradient-bg 15s ease infinite', // This was for an earlier Hero bg, not active
      },
      keyframes: {
        blink: { "from, to": { opacity: "0" }, "50%": { opacity: "1" } },
        fadeInUpAnimation: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseDotAnimation: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        // 'gradient-bg': { /* ... */ },
      },
      // No custom boxShadow like 'nav-scroll' in this reverted state
    },
  },
  plugins: [],
};
export default config;
