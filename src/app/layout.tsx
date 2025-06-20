// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["system-ui", "arial", "sans-serif"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
  adjustFontFallback: false,
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: "João Grilo | Full-Stack Developer",
  description:
    "The professional portfolio of João Grilo, a results-driven Full-Stack Developer crafting high-performance web solutions and seamless user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${firaCode.variable} antialiased`}>
      <head>
        {/* ADDED: Preload the background SVG to prevent it from render-blocking */}
        <link
          rel="preload"
          href="/images/coding-symbols.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body>
        <Navigation />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
