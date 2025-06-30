// src/components/Experience.tsx
import "server-only";
import React from "react";
import { getData } from "@/data";
import { getLocale, unstable_setRequestLocale } from "next-intl/server"; // Import the new API
import ExperienceClient from "./ExperienceClient";

const Experience = async () => {
  // The locale is not passed as a prop, so we get it from the server context.
  // We must call unstable_setRequestLocale here to opt into static rendering.
  const locale = await getLocale();
  unstable_setRequestLocale(locale);

  const dataLoaders = getData(locale as "en" | "pt");
  const experienceData = await dataLoaders.getExperience();

  return <ExperienceClient experienceData={experienceData} />;
};

export default Experience;