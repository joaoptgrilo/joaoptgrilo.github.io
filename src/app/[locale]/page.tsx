// src/app/[locale]/page.tsx
import React, { Suspense } from "react"; // Import Suspense
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import SectionSkeleton from "@/components/SectionSkeleton"; // Import the skeleton

// Above-the-fold components can be loaded normally or dynamically without a skeleton
// if they are fast, which they are.
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));

// --- CORRECTED APPROACH ---
// Each of these are now Server Components that fetch their own data.
// We'll lazy load them using React Suspense.
const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Contact = dynamic(() => import("@/components/Contact"));
// --- END CORRECTED APPROACH ---

// Generate static pages for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />

      {/* 
        Wrap each deferred section in its own Suspense boundary.
        The server will render the skeleton, then stream the full component
        once its data fetching is complete. This is the idiomatic way.
      */}
      <Suspense fallback={<SectionSkeleton />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Certifications />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  );
}
