// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
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
      animation: {
        "subtle-pan": "subtlePan 120s linear infinite alternate",
        "glow-shadow": "glowShadow 2s ease-in-out infinite alternate", // For panel-with-corners
        // Add pulse-dot if not already present globally or locally for nav pill
        "pulse-dot": "pulseDot 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        subtlePan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        glowShadow: {
          // For panel-with-corners
          "0%": {
            boxShadow:
              "0 0 5px -2px var(--color-accent-shadow-start), 0 0 10px -3px var(--color-accent-shadow-end)",
          },
          "100%": {
            boxShadow:
              "0 0 15px 0px var(--color-accent-shadow-start), 0 0 25px -2px var(--color-accent-shadow-end)",
          },
        },
        pulseDot: {
          // For nav pill dot
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.75)" },
        },
      },
      boxShadow: {
        "accent-glow":
          "0 0 15px 2px var(--color-accent-shadow-start), 0 0 25px 5px var(--color-accent-shadow-end)",
        "info-accent-glow":
          "0 0 15px 2px rgba(96, 165, 250, 0.3), 0 0 25px 5px rgba(96, 165, 250, 0.1)",
      },
    },
  },
  plugins: [],
};
