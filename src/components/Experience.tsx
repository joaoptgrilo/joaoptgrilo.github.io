// src/components/Experience.tsx
import "server-only";
import React from "react";
import ExperienceClient from "./ExperienceClient";
import type { ExperienceItem } from "@/data/types";

// This is now a simple wrapper that receives props from page.tsx.
const Experience = ({
  experienceData,
}: {
  experienceData: ExperienceItem[];
}) => {
  return <ExperienceClient experienceData={experienceData} />;
};

export default Experience;
