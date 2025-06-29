// src/data/index.ts
import "server-only";
import { certificationsData as certificationsEN } from "./en/certificationsData";
import { experienceData as experienceEN } from "./en/experienceData";
import { projectsData as projectsEN } from "./en/projectsData";
import { certificationsData as certificationsPT } from "./pt/certificationsData";
import { experienceData as experiencePT } from "./pt/experienceData";
import { projectsData as projectsPT } from "./pt/projectsData";
import type {
  CertificationItem,
  ExperienceItem,
  Project,
  ProjectTechItem,
} from "./types";

type Locale = "en" | "pt";

interface DataLoaders {
  getCertifications: () => Promise<CertificationItem[]>;
  getExperience: () => Promise<ExperienceItem[]>;
  getProjects: () => Promise<Project[]>;
}

// Data is now imported statically and resolved immediately.
// The build process will handle tree-shaking and chunking.
const allData: Record<Locale, DataLoaders> = {
  en: {
    getCertifications: () => Promise.resolve(certificationsEN),
    getExperience: () => Promise.resolve(experienceEN),
    getProjects: () => Promise.resolve(projectsEN),
  },
  pt: {
    getCertifications: () => Promise.resolve(certificationsPT),
    getExperience: () => Promise.resolve(experiencePT),
    getProjects: () => Promise.resolve(projectsPT),
  },
};

export const getData = (locale: Locale) => {
  return allData[locale] || allData.en;
};

// Re-export types from the central types file
export * from "./types";