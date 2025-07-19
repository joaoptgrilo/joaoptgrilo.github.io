// src/app/[locale]/page.tsx
import React from "react";
import dynamic from "next/dynamic";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../i18n";
import { getData } from "@/data";

import Hero from "@/components/Hero";
import SectionSkeleton from "@/components/SectionSkeleton";

// Dynamically import sections that are below the fold
const About = dynamic(() => import("@/components/About"), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionSkeleton />,
});
const Certifications = dynamic(() => import("@/components/Certifications"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton />,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  // Data fetching remains on the server
  const dataLoaders = getData(locale as "en" | "pt");
  const [skillsData, experienceData, projectsData, certificationsData] =
    await Promise.all([
      dataLoaders.getSkillCategories(),
      dataLoaders.getExperience(),
      dataLoaders.getProjects(),
      dataLoaders.getCertifications(),
    ]);

  return (
    <main className="w-full bg-primary-bg/80 backdrop-blur-sm">
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
