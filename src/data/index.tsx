import "server-only";
// Import the types from their original source file
import type { CertificationItem } from "./en/certificationsData";
import type { ExperienceItem } from "./en/experienceData";
import type { Project, ProjectTechItem } from "./en/projectsData"; // Add ProjectTechItem here

type Locale = "en" | "pt";

interface DataLoaders {
  getCertifications: () => Promise<CertificationItem[]>;
  getExperience: () => Promise<ExperienceItem[]>;
  getProjects: () => Promise<Project[]>;
}

const dataLoaders: Record<Locale, DataLoaders> = {
  en: {
    getCertifications: () =>
      import("./en/certificationsData").then((m) => m.certificationsData),
    getExperience: () =>
      import("./en/experienceData").then((m) => m.experienceData),
    getProjects: () => import("./en/projectsData").then((m) => m.projectsData),
  },
  pt: {
    getCertifications: () =>
      import("./pt/certificationsData").then((m) => m.certificationsData),
    getExperience: () =>
      import("./pt/experienceData").then((m) => m.experienceData),
    getProjects: () => import("./pt/projectsData").then((m) => m.projectsData),
  },
};

export const getData = (locale: Locale) => {
  return dataLoaders[locale] || dataLoaders.en;
};

// THIS IS THE FIX: Re-export ProjectTechItem alongside the others
export type { CertificationItem, ExperienceItem, Project, ProjectTechItem };
