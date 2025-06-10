// src/components/Experience.tsx
import React from "react";
import Image from "next/image";
import {
  experienceData,
  ExperienceItem,
  ExperienceTechItem,
} from "@/data/experienceData";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCogs,
} from "react-icons/fa";
import Section from "./Section";
import Panel from "./Panel";

const Experience = () => {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      // UPDATED: Padding reduced to the new standard `py-10 md:py-16`
      className="py-10 md:py-16 min-h-screen flex flex-col items-center justify-center">
      {experienceData.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((item: ExperienceItem) => (
            <Panel key={item.id}>
              <article className="lg:grid lg:grid-cols-12 lg:gap-x-0">
                <div className="lg:col-span-5 lg:pr-6 mb-6 lg:mb-0">
                  <p className="text-xl md:text-2xl font-bold text-accent mb-4 leading-tight">
                    {item.role}
                  </p>

                  <div className="space-y-2.5 mb-6 text-sm">
                    <div className="flex items-center">
                      {item.companyLogoUrl ? (
                        <div className="mr-4 flex-shrink-0 w-20 h-20 relative filter brightness-0 invert border border-neutral-700/50 rounded-md shadow-info-accent-glow overflow-hidden p-3">
                          <div className="relative w-full h-full">
                            <Image
                              src={item.companyLogoUrl}
                              alt={
                                item.companyLogoAlt || `${item.company} logo`
                              }
                              layout="fill"
                              objectFit="contain"
                            />
                          </div>
                        </div>
                      ) : (
                        <FaBriefcase className="w-8 h-8 mr-3 text-info-accent flex-shrink-0" />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium text-primary-text text-lg">
                          {item.companyLink ? (
                            <a
                              href={item.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent transition-colors duration-300">
                              {item.company}
                            </a>
                          ) : (
                            item.company
                          )}
                        </span>
                        <div className="flex items-start mt-1">
                          <FaMapMarkerAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />
                          <span className="font-fira_code text-secondary-text text-xs">
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaCalendarAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />
                      <span className="font-fira_code text-secondary-text">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {item.keyTech && item.keyTech.length > 0 && (
                    <div>
                      <p className="font-fira_code text-xs text-secondary-text mb-2 uppercase tracking-wider flex items-center">
                        <FaCogs className="w-3.5 h-3.5 mr-1.5 text-info-accent" />
                        Key Technologies
                      </p>
                      <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                        {item.keyTech.map((tech: ExperienceTechItem) => (
                          <li key={tech.name}>
                            <span
                              title={tech.description || tech.name}
                              className="inline-block bg-primary-bg/70 text-primary-text/90 px-2.5 py-1 rounded text-xs border border-neutral-700/40 interactive-glow cursor-default">
                              {tech.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 lg:pl-6 pt-6 lg:pt-0 relative border-l-transparent lg:border-l-2 lg:border-neutral-700/30 lg:before:content-[''] lg:before:absolute lg:before:-left-px lg:before:top-0 lg:before:bottom-0 lg:before:w-px lg:before:bg-neutral-700/50 lg:before:shadow-info-accent-glow lg:before:opacity-50">
                  <p className="font-fira_code text-sm text-secondary-text mb-3 uppercase tracking-wider">
                    Achievements & Responsibilities
                  </p>
                  <ul className="space-y-2.5 text-secondary-text leading-relaxed text-[0.95rem]">
                    {item.descriptionItems.map(
                      (descItem: React.ReactNode, descIndex: number) => (
                        <li key={descIndex} className="flex">
                          <span className="text-accent mr-2.5 mt-1.5 flex-shrink-0 text-xs">
                            ◆
                          </span>
                          <span>{descItem}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </article>
            </Panel>
          ))}
        </div>
      ) : (
        <Panel className="text-center">
          <p className="text-lg text-secondary-text">
            Professional Experience details are currently being updated. Please
            check back soon!
          </p>
        </Panel>
      )}
    </Section>
  );
};

export default Experience;
