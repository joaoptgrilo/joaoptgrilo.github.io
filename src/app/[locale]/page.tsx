// src/app/[locale]/page.tsx
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";

// Load components visible "above the fold"
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

// Load the component that manages all "below the fold" sections
const DeferredSections = dynamic(() => import("@/components/DeferredSections"));

// Generate static pages for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      {/* Render the client component that will manage deferred loading */}
      <DeferredSections />
    </main>
  );
}