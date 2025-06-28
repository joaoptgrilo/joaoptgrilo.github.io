import "server-only";
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

export type { CertificationItem, ExperienceItem, Project, ProjectTechItem };