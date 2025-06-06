// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google"; // Import from next/font/google
import "./globals.css"; // Your global styles
import Navigation from "@/components/Navigation"; // Assuming Navigation is part of every page
import Footer from "@/components/Footer"; // Assuming Footer is part of every page
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Assuming this is global

// Configure Poppins font with advanced fallback
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify all weights you use
  variable: "--font-poppins", // CSS variable for Tailwind
  display: "swap", // Recommended for performance
  adjustFontFallback: false, // Use custom fallback
  fallback: ["system-ui", "arial", "sans-serif"], // Provide specific fallbacks
});

// Configure Fira Code font with advanced fallback
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify all weights you use
  variable: "--font-fira-code", // CSS variable for Tailwind
  display: "swap",
  adjustFontFallback: false, // Use custom fallback
  fallback: ["ui-monospace", "monospace"], // Provide specific fallbacks
});

export const metadata: Metadata = {
  title: "João Grilo | Full-Stack Developer",
  description:
    "The professional portfolio of João Grilo, a results-driven Full-Stack Developer crafting high-performance web solutions and seamless user experiences.",
  // You can add more metadata here: openGraph, icons, etc.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply font variables to the <html> tag for global availability
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable} antialiased`}>
      <body>
        <Navigation /> {/* Global Navigation */}
        {children} {/* This will be your page.tsx content */}
        <ScrollToTopButton /> {/* Global ScrollToTopButton */}
        <Footer /> {/* Global Footer */}
      </body>
    </html>
  );
}
