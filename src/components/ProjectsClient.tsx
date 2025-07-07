// src/components/ProjectsClient.tsx
"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Project, ProjectTechItem } from "@/data";
import { FiEye, FiClock } from "react-icons/fi";
import Section from "./Section";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import ProjectModal from "./ProjectModal";
import AnimateOnScroll from "./AnimateOnScroll";

const ProjectCard: React.FC<{
  project: Project;
  onCardClick: (project: Project) => void;
}> = ({ project, onCardClick }) => {
  const t = useTranslations("Projects");

  return (
    <button
      onClick={() => onCardClick(project)}
      className="flex flex-col h-full group w-full text-left"
      aria-label={`View details for ${project.title}`}>
      <Panel className="flex flex-col h-full" variant="default">
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
                <FiClock className="w-12 h-12 text-neutral-500" />
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
            <FiEye className="h-4 w-4 text-secondary-text" />
            <span className="text-xs text-secondary-text font_fira_code">
              {t("learnMoreButton")}
            </span>
          </div>
        </article>
      </Panel>
    </button>
  );
};

const ProjectsClient: React.FC<{ projectsData: Project[] }> = ({
  projectsData,
}) => {
  const tMore = useTranslations("MoreComing");
  const tProjects = useTranslations("Projects");

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isModalOpen = !!selectedProject;

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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
    <>
      <Section id="projects" title="projects">
        {projectsData.length > 0 ? (
          <>
            <AnimateOnScroll>
              <Panel
                variant="simple"
                className="mb-10 max-w-4xl mx-auto p-4 md:p-6">
                <p className="text-center font-semibold text-lg text-info-accent mb-4">
                  {tProjects("filterTitle")}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  {techList.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setActiveFilter(tech)}
                      className={getFilterButtonClasses(tech)}>
                      {tech}
                    </button>
                  ))}
                </div>
              </Panel>
            </AnimateOnScroll>

            <ul
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              key={activeFilter}>
              {filteredProjects.map((project, index) => (
                <li key={project.id} className="flex">
                  <AnimateOnScroll
                    as="div"
                    className="w-full h-full"
                    staggerDelay={index * 100}>
                    <ProjectCard
                      project={project}
                      onCardClick={handleOpenModal}
                    />
                  </AnimateOnScroll>
                </li>
              ))}
              {activeFilter === "All" && (
                <li className="flex">
                  <AnimateOnScroll
                    as="div"
                    className="w-full h-full"
                    staggerDelay={filteredProjects.length * 100}>
                    <Panel
                      variant="simple"
                      className="!border-dashed !border-neutral-700/60 hover:!border-accent/60 flex flex-col items-center justify-center text-center group w-full h-full transition-all duration-300">
                      <div className="p-6">
                        <FiClock className="w-12 h-12 text-neutral-500 group-hover:text-accent transition-colors duration-300 mb-4 mx-auto" />
                        <p className="font_fira_code text-lg text-secondary-text group-hover:text-primary-text transition-colors duration-300 font-semibold">
                          {tMore("title", { item: tMore("projects") })}
                        </p>
                        <p className="text-sm text-neutral-500 group-hover:text-secondary-text transition-colors duration-300">
                          {tMore("description")}
                        </p>
                      </div>
                    </Panel>
                  </AnimateOnScroll>
                </li>
              )}
            </ul>
          </>
        ) : (
          <AnimateOnScroll>
            <Panel variant="default" className="text-center">
              <p className="text-center text-secondary-text text-lg">
                {tProjects("noProjects")}
              </p>
            </Panel>
          </AnimateOnScroll>
        )}
      </Section>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};
export default ProjectsClient;
