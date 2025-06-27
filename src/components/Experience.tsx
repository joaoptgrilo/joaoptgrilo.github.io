import React from "react";
import { getData } from "@/data";
import { getLocale } from "next-intl/server";
import ExperienceClient from "./ExperienceClient";

const Experience = async () => {
  const locale = (await getLocale()) as "en" | "pt";
  const dataLoaders = getData(locale);
  const experienceData = await dataLoaders.getExperience();

  return <ExperienceClient experienceData={experienceData} />;
};

export default Experience;
