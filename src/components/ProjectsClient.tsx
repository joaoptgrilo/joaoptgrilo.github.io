// src/components/ProjectsClient.tsx
"use client";
import React from "react";
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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const t = useTranslations("Projects");
  const isCodePenProject = project.codeLink?.includes("codepen.io");
  return (
    <Panel className="flex flex-col h-full group" variant="default">
      <article className="flex flex-col flex-grow h-full">
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-4 border border-neutral-700/30 transition-transform duration-300 ease-out group-hover:scale-105">
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
                    className="inline-block bg-primary-bg/70 text-secondary-text px-2.5 py-1 rounded text-xs border border-neutral-700/50 interactive-glow cursor-default">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t border-neutral-700/30 flex items-center justify-start space-x-3">
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
  const t = useTranslations("MoreComing");
  return (
    <Section id="projects" title="projects">
      {projectsData.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <li key={project.id} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
          <li className="flex">
            <div className="bg-light-panel-bg/10 backdrop-blur-md border-2 border-dashed border-neutral-700/50 p-6 rounded-lg panel-with-corners relative flex flex-col h-full items-center justify-center text-center group hover:border-accent/50 transition-all duration-300 w-full">
              <div className="animate-on-scroll p-6">
                <FiClock className="w-12 h-12 text-neutral-500 group-hover:text-accent transition-colors duration-300 mb-4 mx-auto" />
                <p className="font_fira_code text-lg text-secondary-text group-hover:text-primary-text transition-colors duration-300 font-semibold">
                  {t("title", { item: t("projects") })}
                </p>
                <p className="text-sm text-neutral-500 group-hover:text-secondary-text transition-colors duration-300">
                  {t("description")}
                </p>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <Panel variant="default" className="text-center">
          <p className="text-center text-secondary-text text-lg">
            {useTranslations("Projects")("noProjects")}
          </p>
        </Panel>
      )}
    </Section>
  );
};
export default ProjectsClient;
