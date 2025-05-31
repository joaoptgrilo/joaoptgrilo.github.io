// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
import type { PluginAPI } from "tailwindcss/types/config";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem",
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
      },
      fontFamily: {
        // UPDATED TO USE CSS VARIABLES FROM NEXT/FONT
        poppins: ["var(--font-poppins)", "sans-serif"],
        fira_code: ["var(--font-fira-code)", "monospace"],
      },
      animation: {
        "glow-shadow":
          "diffuseGlowShadowKeyframes 4s ease-in-out infinite alternate",
        fadeInUp: "fadeInUpKeyframes 0.5s ease-out forwards",
        "blink-cursor": "blinkKeyframes 1s step-end infinite",
        "pulse-dot":
          "pulseDotKeyframes 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        diffuseGlowShadowKeyframes: {
          "0%": {
            boxShadow:
              "0 0 5px 0px var(--color-accent-shadow-start), 0 0 5px 0px var(--color-accent-shadow-start) inset",
          },
          "100%": {
            boxShadow:
              "0 0 20px 5px var(--color-accent-shadow-end), 0 0 20px 5px var(--color-accent-shadow-end) inset",
          },
        },
        fadeInUpKeyframes: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blinkKeyframes: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulseDotKeyframes: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.75)" },
        },
      },
      boxShadow: {
        "accent-glow": "0 0 12px 2px var(--color-accent-shadow-strong)",
        "info-accent-glow": "0 0 12px 3px rgba(59,130,246,0.75)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".animation-delay-200": { "animation-delay": "0.2s" },
        ".animation-delay-400": { "animation-delay": "0.4s" },
        ".animation-delay-600": { "animation-delay": "0.6s" },
        ".animation-delay-800": { "animation-delay": "0.8s" },
      });
    },
  ],
};
