// src/components/ProjectsClient.tsx
"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Project, ProjectTechItem } from "@/data";
import {
  FiExternalLink,
  FiGithub,
  FiMoreHorizontal,
  FiEye,
  FiClock,
} from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";
import Section from "./Section";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const t = useTranslations("Projects");
  const isCodePenProject = project.codeLink?.includes("codepen.io");
  return (
    <Panel className="flex flex-col h-full group" variant="default">
      <article className="flex flex-col flex-grow h-full">
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-4 border border-border transition-transform duration-300 ease-out group-hover:scale-105">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.imageAlt || project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="transition-opacity duration-300 group-hover:opacity-90"
            />
          ) : (
            <div className="w-full h-full bg-secondary-bg/40 flex items-center justify-center">
              <FiMoreHorizontal className="w-12 h-12 text-neutral-500" />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <p className="font_fira_code text-xl text-info-accent mb-2 group-hover:text-accent transition-colors duration-300 font-semibold">
            {project.title}
          </p>
          <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>
          <div className="mb-4">
            <p className="font_fira_code text-xs text-neutral-400 mb-1.5 uppercase tracking-wider">
              {t("techStack")}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((tech: ProjectTechItem) => (
                <li key={tech.name}>
                  <span
                    title={tech.description || tech.name}
                    className="inline-block bg-tag-bg text-secondary-text px-2.5 py-1 rounded text-xs border border-border interactive-glow cursor-default">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-border flex items-center justify-start space-x-3">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Visit Website for ${project.title}`}
              className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium transition-colors interactive-glow px-3 py-1.5 rounded-md border border-transparent hover:border-accent/50">
              <FiExternalLink className="mr-1.5 h-4 w-4" /> {t("visitButton")}
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium transition-colors interactive-glow px-3 py-1.5 rounded-md border border-transparent hover:border-accent/50">
              {isCodePenProject ? (
                <FaCodepen className="mr-1.5 h-4 w-4" />
              ) : (
                <FiGithub className="mr-1.5 h-4" />
              )}{" "}
              {t("codeButton")}
            </a>
          )}
          {(project.type === "private" ||
            project.type === "description-focus") &&
            !project.liveLink &&
            !project.codeLink &&
            !project.learnMoreLink && (
              <span className="text-xs text-neutral-500 font_fira_code italic">
                {t("privateProject")}
              </span>
            )}
          {project.learnMoreLink && !(project.liveLink || project.codeLink) && (
            <a
              href={project.learnMoreLink}
              aria-label={`Learn more about ${project.title}`}
              className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium transition-colors interactive-glow px-3 py-1.5 rounded-md border border-transparent hover:border-accent/50">
              <FiEye className="mr-1.5 h-4 w-4" /> {t("learnMoreButton")}
            </a>
          )}
        </div>
      </article>
    </Panel>
  );
};

const ProjectsClient: React.FC<{ projectsData: Project[] }> = ({
  projectsData,
}) => {
  const tMore = useTranslations("MoreComing");
  const tProjects = useTranslations("Projects");

  const [activeFilter, setActiveFilter] = useState("All");

  const techList = useMemo(() => {
    const allTechs = projectsData.flatMap((project) =>
      project.techStack.map((tech) => tech.name)
    );
    const uniqueTechs = [...new Set(allTechs)];
    return ["All", ...uniqueTechs.sort()];
  }, [projectsData]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }
    return projectsData.filter((project) =>
      project.techStack.some((tech) => tech.name === activeFilter)
    );
  }, [activeFilter, projectsData]);

  const getFilterButtonClasses = (tech: string) => {
    return clsx(
      "px-3 py-1.5 text-sm rounded-md transition-all duration-300 ease-in-out font_fira_code font-medium interactive-glow",
      {
        "bg-accent text-primary-bg no-text-stroke scale-105 shadow-md shadow-accent/20":
          activeFilter === tech,
        "bg-light-panel-bg/20 text-secondary-text hover:bg-light-panel-bg/50 hover:text-primary-text":
          activeFilter !== tech,
      }
    );
  };

  return (
    <Section id="projects" title="projects">
      {projectsData.length > 0 ? (
        <>
          <Panel
            variant="simple"
            className="mb-10 animate-on-scroll max-w-4xl mx-auto p-4 md:p-6 panel-glow-anim"
          >
            <p className="text-center font-semibold text-lg text-info-accent mb-4">
              {tProjects("filterTitle")}
            </p>
            <div className="flex justify-center flex-wrap gap-2">
              {techList.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  className={getFilterButtonClasses(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </Panel>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            key={activeFilter} // Change key to force re-render and re-trigger animations
          >
            {filteredProjects.map((project, index) => (
              <li
                key={project.id}
                className="flex animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }} // Staggered animation
              >
                <ProjectCard project={project} />
              </li>
            ))}
            {activeFilter === "All" && (
              <li
                className="flex animate-on-scroll"
                style={{
                  animationDelay: `${filteredProjects.length * 100}ms`,
                }}
              >
                <div className="bg-light-panel-bg/10 backdrop-blur-md border-2 border-dashed border-border/50 p-6 rounded-lg panel-with-corners relative flex flex-col h-full items-center justify-center text-center group hover:border-accent/50 transition-all duration-300 w-full">
                  <div className="p-6">
                    <FiClock className="w-12 h-12 text-neutral-500 group-hover:text-accent transition-colors duration-300 mb-4 mx-auto" />
                    <p className="font_fira_code text-lg text-secondary-text group-hover:text-primary-text transition-colors duration-300 font-semibold">
                      {tMore("title", { item: tMore("projects") })}
                    </p>
                    <p className="text-sm text-neutral-500 group-hover:text-secondary-text transition-colors duration-300">
                      {tMore("description")}
                    </p>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </>
      ) : (
        <Panel variant="default" className="text-center">
          <p className="text-center text-secondary-text text-lg">
            {tProjects("noProjects")}
          </p>
        </Panel>
      )}
    </Section>
  );
};
export default ProjectsClient;