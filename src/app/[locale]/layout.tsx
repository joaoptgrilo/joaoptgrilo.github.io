// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Poppins, Fira_Code } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollSpy from "@/components/ScrollSpy";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "../../../i18n";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeInitializer from "@/components/ThemeInitializer";
import ScrollRestorer from "@/components/ScrollRestorer";
import ClientInitializer from "@/components/ClientInitializer";

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

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tSEO = await getTranslations({ locale, namespace: "SEO" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });

  const siteUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://joaoptgrilo.github.io";

  const selectedOgImage =
    locale === "pt" ? "/og-image-pt.png" : "/og-image-en.png";

  const seoTitle = tSEO("title");
  const seoDescription = tSEO("description");

  const ogTitle = `${tHero("name")} | ${tHero("title")}`;
  const ogDescription = tSEO("description");

  return {
    // Standard SEO Metadata (This is correct)
    title: seoTitle,
    description: seoDescription,
    authors: [{ name: "João Grilo", url: siteUrl }],
    creator: "João Grilo",

    // Open Graph & Twitter Metadata
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: siteUrl,
      siteName: "João Grilo | Portfolio",
      images: [
        {
          url: selectedOgImage,
          width: 1200,
          height: 630,
          alt: `João Grilo - Full-Stack Developer Portfolio (${locale.toUpperCase()})`,
        },
      ],
      locale: locale === "pt" ? "pt_PT" : "en_US",
      type: "website",
      // CORRECTED: The 'article' property has been removed as it is not valid here.
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [selectedOgImage],
    },
  };
}

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
      suppressHydrationWarning
    >
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
            <ClientInitializer />
            <ScrollRestorer />
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
