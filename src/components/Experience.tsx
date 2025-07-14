// src/components/Experience.tsx
import "server-only";
import React from "react";
import ExperienceClient from "./ExperienceClient";
import type { ExperienceItem } from "@/data/types";

const Experience = ({
  experienceData,
}: {
  experienceData: ExperienceItem[];
}) => {
  return <ExperienceClient experienceData={experienceData} />;
};

export default Experience;
