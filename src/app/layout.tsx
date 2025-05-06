// src/app/layout.tsx
import type { Metadata } from "next";
import { Fira_Code, Poppins } from "next/font/google";
import "./globals.css";

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
  description: "João Grilo's professional portfolio.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${firaCode.variable} ${poppins.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
