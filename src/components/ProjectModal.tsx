// src/components/ProjectModal.tsx
"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Project } from "@/data";
import { FiX, FiExternalLink, FiGithub, FiEye } from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Panel from "./Panel";
import { clsx } from "clsx";
import FocusTrap from "focus-trap-react";
import * as gtag from "@/lib/gtag";
import { useTheme } from "@/contexts/ThemeContext";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  triggerRef,
}) => {
  const t = useTranslations("Projects");
  const { theme } = useTheme();

  const handleProjectLinkClick = (action: string, linkUrl: string) => {
    gtag.event({
      action: action,
      category: "project_engagement",
      label: `${project?.title} - ${linkUrl}`,
      value: 1,
    });
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const isCodePenProject = project.codeLink?.includes("codepen.io");
  const descriptionContent = project.detailedDescription
    ? project.detailedDescription.map((content, index) => (
        <div key={index}>{content}</div>
      ))
    : project.description;

  const overlayClasses = clsx(
    "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
    "light:bg-neutral-800/60",
    isOpen ? "opacity-100" : "opacity-0"
  );
  const modalClasses = clsx(
    "relative w-11/12 max-w-3xl max-h-[90vh] flex flex-col transition-transform duration-300",
    isOpen ? "scale-100" : "scale-95"
  );

  return createPortal(
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        onDeactivate: () => {
          triggerRef.current?.focus();
        },
        initialFocus: ".modal-close-button",
        fallbackFocus: ".modal-close-button",
      }}>
      <div
        className={overlayClasses}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title">
        <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
          <Panel
            variant="modal"
            className={clsx("flex-1", {
              "light:bg-white": theme === "light",
              "!glass-effect": theme === "dark",
            })}>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="modal-close-button absolute top-3 right-3 z-20 p-2 rounded-full text-white bg-black/40 hover:bg-black/60 transition-colors light:text-primary-text light:bg-neutral-200 hover:light:bg-neutral-300">
              <FiX className="h-6 w-6" />
            </button>
            <div className="relative w-full aspect-video rounded-t-lg overflow-hidden border-b border-border">
              {project.imageUrl && (
                <Image
                  src={project.imageUrl}
                  alt={project.imageAlt || project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 767px) 90vw, (max-width: 1023px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="p-6 md:p-8 backdrop-blur-custom glass-effect">
              <h2
                id="project-modal-title"
                className="text-2xl md:text-3xl font-bold text-accent mb-4">
                {project.title}
              </h2>
              <div className="mb-6">
                <p className="font_fira_code text-sm text-secondary-text mb-2 uppercase tracking-wider">
                  {t("techStack")}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li key={tech.name}>
                      <span
                        title={tech.description || tech.name}
                        className="tag interactive-glow !cursor-pointer hover:text-primary-text">
                        {tech.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-secondary-text leading-relaxed space-y-4 mb-8">
                {descriptionContent}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-border">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    onClick={() =>
                      handleProjectLinkClick(
                        "click_project_live",
                        project.liveLink!
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary grow !py-2.5 !px-6 !text-sm !md:text-base">
                    <FiExternalLink className="mr-2" /> {t("visitButton")}
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    onClick={() =>
                      handleProjectLinkClick(
                        "click_project_code",
                        project.codeLink!
                      )
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary grow !py-2.5 !px-6 !text-sm !md:text-base">
                    {isCodePenProject ? (
                      <FaCodepen className="mr-2" />
                    ) : (
                      <FiGithub className="mr-2" />
                    )}{" "}
                    {t("codeButton")}
                  </a>
                )}
                {project.learnMoreLink &&
                  !(project.liveLink || project.codeLink) && (
                    <a
                      href={project.learnMoreLink}
                      onClick={() =>
                        handleProjectLinkClick(
                          "click_project_learn_more",
                          project.learnMoreLink!
                        )
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary grow !py-2.5 !px-6 !text-sm !md:text-base">
                      <FiEye className="mr-2" /> {t("learnMoreButton")}
                    </a>
                  )}
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </FocusTrap>,
    document.body
  );
};
export default ProjectModal;
