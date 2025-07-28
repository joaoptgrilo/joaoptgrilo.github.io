// src/app/[locale]/layout.tsx
import type { Metadata, Viewport } from "next";
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
import { ToastProvider } from "@/contexts/ToastContext";
import ThemeInitializer from "@/components/ThemeInitializer";
import ScrollRestorer from "@/components/ScrollRestorer";
import ClientInitializer from "@/components/ClientInitializer";
import Analytics from "@/components/Analytics";
import { SITE_URL } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tSEO = await getTranslations({ locale, namespace: "SEO" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });

  const siteUrl = SITE_URL;

  const selectedOgImage =
    locale === "pt" ? "/og-image-pt.png" : "/og-image-en.png";

  const seoTitle = tSEO("title");
  const seoDescription = tSEO("description");

  const ogTitle = `${tHero("name")} | ${tHero("title")}`;
  const ogDescription = tSEO("description");

  return {
    manifest: "/site.webmanifest",
    title: seoTitle,
    description: seoDescription,
    authors: [{ name: "João Grilo", url: siteUrl }],
    creator: "João Grilo",
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
      <head></head>
      <body>
        <ThemeInitializer />
        <ThemeProvider>
          <Analytics />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ToastProvider>
              <ClientInitializer />
              <ScrollRestorer />
              <Navigation />
              <div className="bg-primary-bg/80 backdrop-blur-sm">
                {children}
                <Footer />
              </div>
              <ScrollToTopButton />
              <ScrollSpy />
            </ToastProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
