// src/data/types.ts
import React from "react";

// For Skills
export type ProficiencyLevel = "expert" | "proficient" | "familiar";

export interface SkillItem {
  key: string;
  name: string;
  proficiency: ProficiencyLevel;
}

// For Projects
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
  techStack: ProjectTechItem[];
  liveLink?: string;
  codeLink?: string;
  learnMoreLink?: string;
  type: "public" | "private" | "description-focus";
}

// For Experience
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

// For Certifications
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