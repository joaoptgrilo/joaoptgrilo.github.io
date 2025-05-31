// src/components/Projects.tsx
"use client";

import React from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimatedPanel from "./AnimatedPanel";
import { mockProjectsData, Project } from "@/data/projectsData";
import { FiExternalLink, FiGithub, FiMoreHorizontal } from "react-icons/fi";

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <AnimatedPanel
      className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 rounded-lg panel-with-corners relative animate-glow-shadow flex flex-col h-full"
      staggerDelay={index * 0.1}>
      {project.imageUrl && (
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-4 border border-neutral-700/30">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt || project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      {!project.imageUrl && (
        <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-4 border border-neutral-700/30 bg-secondary-bg/30 flex items-center justify-center">
          <FiMoreHorizontal className="w-12 h-12 text-neutral-600" />
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h3 className="font-fira_code text-xl text-info-accent mb-2">
          {project.title}
        </h3>
        <p className="text-secondary-text text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>
        <div className="mb-4">
          <h4 className="font-fira_code text-xs text-neutral-400 mb-1 uppercase tracking-wider">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-primary-bg/70 text-secondary-text px-2.5 py-1 rounded text-xs border border-neutral-700/50 interactive-glow">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-4 border-t border-neutral-700/30 flex items-center justify-start space-x-3">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium transition-colors interactive-glow px-3 py-1.5 rounded-md border border-accent/0 hover:border-accent">
            <FiExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
          </a>
        )}
        {project.codeLink && (
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium transition-colors interactive-glow px-3 py-1.5 rounded-md border border-accent/0 hover:border-accent">
            <FiGithub className="mr-1.5 h-4 w-4" /> View Code
          </a>
        )}
        {project.learnMoreLink && (
          <a
            href={project.learnMoreLink}
            className="inline-flex items-center text-sm text-accent hover:text-accent-hover font-medium transition-colors interactive-glow px-3 py-1.5 rounded-md border border-accent/0 hover:border-accent">
            <FiMoreHorizontal className="mr-1.5 h-4 w-4" /> Learn More
          </a>
        )}
      </div>
    </AnimatedPanel>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative section-scroll-margin" // ADDED class
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <AnimatedText
            text="Projects"
            elementType="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center"
          />
        </div>
        {mockProjectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {mockProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-secondary-text">
            Projects coming soon...
          </p>
        )}
      </div>
    </section>
  );
};
export default Projects;
