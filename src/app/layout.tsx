// src/app/layout.tsx
import type { Metadata } from "next";
import { Fira_Code, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "@/components/ScrollToTopButton"; // Import the new component

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "João Grilo - Full-Stack Developer",
  description:
    "João Grilo's professional portfolio showcasing skills, projects, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaCode.variable} ${poppins.variable}`}>
      <body className={`${poppins.className} antialiased`}>
        {" "}
        {/* Added antialiased here for consistency, if not already inherited */}
        {children}
        <ScrollToTopButton />{" "}
        {/* Add the button here, outside main content but within body */}
      </body>
    </html>
  );
}
