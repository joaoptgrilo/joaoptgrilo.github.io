// src/data/index.ts
import type {
  CertificationItem,
  ExperienceItem,
  Project,
  MetricItem,
  SkillItem,
} from "./types";

type Locale = "en" | "pt";

interface DataLoaders {
  getCertifications: () => Promise<CertificationItem[]>;
  getExperience: () => Promise<ExperienceItem[]>;
  getProjects: () => Promise<Project[]>;
  getMetrics: () => Promise<MetricItem[]>;
  getSkillCategories: () => Promise<{ id: string; skills: SkillItem[] }[]>;
}

const dataLoaders: Record<Locale, Partial<DataLoaders>> = {
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

const commonData = {
  getMetrics: () => import("./metricsData").then((m) => m.metricsData),
  getSkillCategories: () =>
    import("./skillsData").then((m) => m.SKILL_CATEGORIES_DATA),
};

export const getData = (locale: Locale): DataLoaders => {
  return {
    ...commonData,
    ...(dataLoaders[locale] || dataLoaders.en),
  } as DataLoaders;
};

export * from "./types";
