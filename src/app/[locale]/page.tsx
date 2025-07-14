// src/app/[locale]/page.tsx
import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import { getData } from "@/data";

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

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

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
