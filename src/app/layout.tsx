// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google"; // Import chosen fonts
import "./globals.css"; // Import global styles

// Configure Poppins font (body text)
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Use swap for better performance
  weight: ["300", "400", "500", "600", "700"], // Include needed weights
  variable: "--font-poppins", // Define CSS variable
});

// Configure Fira Code font (headings, code)
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"], // Include needed weights
  variable: "--font-fira-code", // Define CSS variable
});

// Define Metadata
export const metadata: Metadata = {
  title: "João Grilo - Full-Stack Developer",
  description:
    "Portfolio of João Grilo, a results-driven Full-Stack Developer specializing in robust web applications.",
  // Add more metadata later (keywords, open graph, etc.)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add font variables to HTML or Body for Tailwind access */}
      <head>
        {/* Favicon links (assuming they are in /public) */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00c8ff" />
        <meta name="msapplication-TileColor" content="#070b1f" />
        <meta name="theme-color" content="#070b1f" />
      </head>
      <body
        className={`${poppins.variable} ${firaCode.variable} font-sans bg-primary-bg text-primary-text`}>
        {/* Set default font to Poppins (font-sans) */}
        {/* Apply base bg/text colors here instead of globals.css body if preferred */}
        {children}
      </body>
    </html>
  );
}
