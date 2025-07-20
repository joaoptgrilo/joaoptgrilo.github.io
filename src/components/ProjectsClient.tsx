// src/components/ProjectsClient.tsx
"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { Project, ProjectTechItem } from "@/data";
import { FiEye } from "react-icons/fi";
import Section from "./Section";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import ProjectModal from "./ProjectModal";
import AnimateOnScroll from "./AnimateOnScroll";
import { useTheme } from "@/contexts/ThemeContext";
import Toast from "./Toast"; // Import the new Toast component

const ProjectCard: React.FC<{
  project: Project;
  onCardClick: (
    project: Project,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  onTechClick: (description: string) => void;
}> = ({ project, onCardClick, onTechClick }) => {
  const t = useTranslations("Projects");
  const { theme } = useTheme();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const placeholderIconSrc =
    theme === "dark"
      ? "/images/animated-placeholder-dark.svg"
      : "/images/animated-placeholder-light.svg";

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <button
      onClick={(e) => onCardClick(project, e)}
      className="flex flex-col h-full group w-full text-left"
      aria-label={`View details for ${project.title}`}>
      <Panel
        className="flex flex-col h-full interactive-glow"
        variant="default">
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
                <div className="relative w-16 h-16">
                  <Image
                    src={placeholderIconSrc}
                    alt="Placeholder"
                    fill
                    sizes="64px"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col flex-grow">
            <p className="font-fira-code text-xl text-info-accent mb-2 group-hover:text-accent transition-colors duration-300 font-semibold">
              {project.title}
            </p>
            <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>
            <div className="mb-4">
              <p className="font-fira-code text-xs text-neutral-400 mb-1.5 uppercase tracking-wider">
                {t("techStack")}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech: ProjectTechItem) => (
                  <li key={tech.name}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isTouchDevice) {
                          onTechClick(tech.description || tech.name);
                        }
                      }}
                      title={!isTouchDevice ? tech.description : undefined}
                      className="tag interactive-glow !cursor-pointer hover:text-primary-text">
                      {tech.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-border flex items-center justify-start space-x-3">
            <FiEye className="h-4 w-4 text-secondary-text" />
            <span className="text-xs text-secondary-text font-fira-code">
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
  const { theme } = useTheme();
  const placeholderIconSrc =
    theme === "dark"
      ? "/images/animated-placeholder-dark.svg"
      : "/images/animated-placeholder-light.svg";

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  const isModalOpen = !!selectedProject;

  const handleOpenModal = (
    project: Project,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedProject(project);
    triggerButtonRef.current = e.currentTarget;
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
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

  return (
    <>
      <Section id="projects" title="projects">
        {projectsData.length > 0 ? (
          <>
            <AnimateOnScroll>
              <Panel
                variant="simple"
                className="mb-10 max-w-4xl mx-auto p-4 md:p-6 interactive-glow">
                <p className="text-center font-semibold text-lg text-info-accent mb-4">
                  {tProjects("filterTitle")}
                </p>
                <div className="flex justify-center flex-wrap gap-2">
                  {techList.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setActiveFilter(tech)}
                      className={clsx(
                        "tag interactive-glow !cursor-pointer hover:text-primary-text",
                        {
                          "bg-accent text-primary-bg scale-105 border-accent":
                            activeFilter === tech,
                        }
                      )}>
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
                      onTechClick={handleShowToast}
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
                      className="border-spaced-dashed hover:border-solid hover:!border-accent/60 flex flex-col items-center justify-center text-center group w-full h-full transition-all duration-300">
                      <div className="p-6">
                        <div className="relative w-16 h-16 group-hover:opacity-80 transition-opacity duration-300 mb-4 mx-auto">
                          <Image
                            src={placeholderIconSrc}
                            alt="More items coming soon"
                            fill
                            sizes="64px"
                          />
                        </div>
                        <p className="font-fira-code text-lg text-secondary-text group-hover:text-primary-text transition-colors duration-300 font-semibold">
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
        triggerRef={triggerButtonRef}
      />
      <Toast
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};
export default ProjectsClient;
