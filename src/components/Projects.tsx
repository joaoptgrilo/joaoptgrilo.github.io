// src/components/Projects.tsx
import "server-only";
import React from "react";
import { getData } from "@/data";
import { getLocale } from "next-intl/server";
import ProjectsClient from "./ProjectsClient";

const Projects = async () => {
  const locale = (await getLocale()) as "en" | "pt";
  const dataLoaders = getData(locale);
  const projectsData = await dataLoaders.getProjects();

  return <ProjectsClient projectsData={projectsData} />;
};

export default Projects;
