// src/components/Projects.tsx
import "server-only";
import React from "react";
import ProjectsClient from "./ProjectsClient";
import type { Project } from "@/data/types";

// This is now a simple wrapper that receives props from page.tsx.
const Projects = ({ projectsData }: { projectsData: Project[] }) => {
  return <ProjectsClient projectsData={projectsData} />;
};

export default Projects;
