// src/app/[locale]/page.tsx
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import { getData } from "@/data";

// Direct imports for all components.
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// The Home page is an async Server Component that fetches everything upfront.
export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  // Use Promise.all to fetch all data concurrently for maximum server efficiency.
  const dataLoaders = getData(locale as "en" | "pt");
  const [skillsData, experienceData, projectsData, certificationsData] =
    await Promise.all([
      dataLoaders.getSkillCategories(),
      dataLoaders.getExperience(),
      dataLoaders.getProjects(),
      dataLoaders.getCertifications(),
    ]);

  return (
    <main className="w-full">
      {/* 
        All components are rendered directly on the server.
        Data is passed down as props.
        There are no <Suspense> or <DeferredSections> wrappers.
      */}
      <Hero />
      <About />
      <Skills skillsData={skillsData} />
      <Experience experienceData={experienceData} />
      <Projects projectsData={projectsData} />
      <Certifications certificationsData={certificationsData} />
      <Contact />
    </main>
  );
}
