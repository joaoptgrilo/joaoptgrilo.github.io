// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollSpy from "@/components/ScrollSpy";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n"; // Import locales for static generation

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

// **FIX PART 1: Generate static pages for all locales**
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // **FIX PART 2: Enable static rendering**
  unstable_setRequestLocale(locale);

  const messages = useMessages();

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
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          {children}
          <ScrollToTopButton />
          <ScrollSpy />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}