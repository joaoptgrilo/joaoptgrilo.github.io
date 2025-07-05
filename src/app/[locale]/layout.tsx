// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollSpy from "@/components/ScrollSpy";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeInitializer from "@/components/ThemeInitializer";
import ScrollRestorer from "@/components/ScrollRestorer"; // <-- IMPORT NEW COMPONENT

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${poppins.variable} ${firaCode.variable} antialiased`}
      suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/images/coding-symbols.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body>
        <ThemeInitializer />
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ScrollRestorer /> {/* <-- ADD COMPONENT HERE */}
            <Navigation />
            {children}
            <ScrollToTopButton />
            <ScrollSpy />
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}