// src/app/[locale]/page.tsx
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import SectionSkeleton from "@/components/SectionSkeleton";
import { getData } from "@/data";

const Experience = dynamic(() => import("@/components/Experience"));
const Projects = dynamic(() => import("@/components/Projects"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Contact = dynamic(() => import("@/components/Contact"));

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const dataLoaders = getData(locale as "en" | "pt");
  const skillsData = await dataLoaders.getSkillCategories();

  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills skillsData={skillsData} />

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
