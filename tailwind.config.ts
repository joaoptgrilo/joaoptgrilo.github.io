// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if using pages router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Standard for App Router
  ],
  theme: {
    extend: {
      // --- Add Design System Colors ---
      colors: {
        "primary-bg": "#070B1F", // Deep Blue/Black
        "secondary-bg": "#0D102D", // Slight Navy/Dark Blue
        "primary-text": "#F2F2F2", // Near White / Very Light Grey
        "secondary-text": "#D1D5DB", // Light Grey
        accent: "#00C8FF", // Bright Cyan
        "accent-hover": "#4DD6FF", // Lighter Cyan
        "border-divider": "#1F2937", // Dark Grey-Blue
        "code-bg": "#111827", // Very Dark Grey
        // Optional Status Colors
        "status-success": "#34D399",
        "status-warning": "#FBBF24",
        "status-danger": "#F87171",
      },
      // --- Add Design System Fonts ---
      fontFamily: {
        // Default sans-serif font
        sans: ["Poppins", "sans-serif"],
        // Monospace font for headings, code
        mono: ["Fira Code", "monospace"],
      },
      // --- Optional: Add Font Sizes if needed beyond Tailwind defaults ---
      // fontSize: {
      //   // Example: 'h1': ['3.75rem', { lineHeight: '1.2' }], // 60px
      // }
    },
  },
  plugins: [],
};
export default config;
