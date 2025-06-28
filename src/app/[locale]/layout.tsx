// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NextIntlProvider from "@/components/NextIntlProvider";
import ScrollSpy from "@/components/ScrollSpy"; // THIS IS THE MISSING IMPORT

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "João Grilo | Full-Stack Developer",
  description:
    "The professional portfolio of João Grilo, a results-driven Full-Stack Developer crafting high-performance web solutions and seamless user experiences.",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${firaCode.variable} antialiased`}>
      <head>
        <link
          rel="preload"
          href="/images/coding-symbols.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body>
        <NextIntlProvider>
          <Navigation />
          {children}
          <ScrollToTopButton />
          <ScrollSpy />
          <Footer />
        </NextIntlProvider>
      </body>
    </html>
  );
}
