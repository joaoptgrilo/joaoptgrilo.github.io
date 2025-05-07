// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { 
        'primary-bg': '#070B1F',
        'secondary-bg': '#0D102D',
        primary: '#F2F2F2',
        secondary: '#D1D5DB',
        accent: { DEFAULT: '#00C8FF', hover: '#4DD6FF' },
        'code-bg': '#111827',
        'nav-pill-bg': 'rgba(10, 50, 70, 0.75)', 
      },
      fontFamily: { 
        'fira-code': ['var(--font-fira-code)', 'monospace'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-.075em', 'tighter': '-.05em', 'tight': '-.025em',
        'normal': '0', 'wide': '.025em', 'wider': '.05em', 'widest': '.1em',
      },
      animation: {
        'blink': 'blinkKeyframes 1s step-end infinite',
        'fadeInUp': 'fadeInUpKeyframes 0.7s ease-out forwards',
        'pulse-dot': 'pulseDotKeyframes 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-shadow': 'glowShadowKeyframes 2.5s ease-in-out infinite alternate',
        // No body-pattern-scroll animation defined here as SVG animates internally
      },
      keyframes: {
        blinkKeyframes: { 
          'from, to': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        fadeInUpKeyframes: { 
          'from': { opacity: '0', transform: 'translate3d(0, 20px, 0)' },
          'to': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        pulseDotKeyframes: { 
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        glowShadowKeyframes: { 
          '0%': { boxShadow: `0 0 5px 0px ${'#00C8FF'}33, 0 0 10px 0px ${'#00C8FF'}22, 0 0 15px 0px ${'#00C8FF'}11` },
          '100%': { boxShadow: `0 0 10px 2px ${'#00C8FF'}66, 0 0 20px 5px ${'#00C8FF'}44, 0 0 30px 10px ${'#00C8FF'}22` },
        },
      },
    },
  },
  plugins: [],
};
export default config;