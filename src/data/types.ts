// src/data/types.ts
import React from "react";

export type ProficiencyLevel = 3 | 2 | 1;

export interface SkillItem {
  key: string;
  name: string;
  proficiency: ProficiencyLevel;
}

export interface ProjectTechItem {
  name: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  description: string;
  detailedDescription?: React.ReactNode[];
  techStack: ProjectTechItem[];
  liveLink?: string;
  codeLink?: string;
  learnMoreLink?: string;
  type: "public" | "private" | "description-focus";
}

export interface ExperienceTechItem {
  name: string;
  description?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyLink?: string;
  companyLogoUrl?: string;
  companyLogoAlt?: string;
  location: string;
  period: string;
  descriptionItems: React.ReactNode[];
  keyTech?: ExperienceTechItem[];
}
export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  credentialUrl: string;
  icon?: React.ElementType;
  description?: React.ReactNode;
  isInProgress?: boolean;
}

export interface StackItem {
  name: string;
}

export interface MetricItem {
  id: string;
  iconId: string;
  value?: number;
  decimals?: number;
  stacks?: StackItem[];
}
