// src/components/Experience.tsx
import React from "react";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import AnimatedPanel from "./AnimatedPanel";
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

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-scroll-margin py-16 md:py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Professional Experience"
          elementType="h2"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center text-primary-text"
        />

        {experienceData.length > 0 ? (
          <div className="space-y-12 md:space-y-16">
            {experienceData.map((item: ExperienceItem, index: number) => (
              <AnimatedPanel
                key={item.id}
                className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 md:p-8 rounded-lg panel-with-corners relative animate-glow-shadow"
                staggerDelay={index * 0.15}>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-0">
                  <div className="lg:col-span-5 lg:pr-6 mb-6 lg:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-4 leading-tight">
                      {item.role}
                    </h3>

                    {/* MODIFIED: Overall container for company/location/period info */}
                    <div className="space-y-2.5 mb-6 text-sm">
                      {" "}
                      {/* Adjusted space-y */}
                      <div className="flex items-center">
                        {item.companyLogoUrl ? (
                          <div
                            // MODIFIED: Logo border color changed
                            className="mr-4 flex-shrink-0 w-20 h-20 relative filter brightness-0 invert
                                       border border-neutral-700/50 rounded-md shadow-info-accent-glow overflow-hidden p-3">
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
                          {/* Location directly under company name, will align left */}
                          <div className="flex items-start mt-1">
                            <FaMapMarkerAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />{" "}
                            {/* Always show location icon */}
                            <span className="font-fira_code text-secondary-text text-xs">
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Period - now aligns left with the block */}
                      <div className="flex items-start">
                        {" "}
                        {/* Removed conditional padding */}
                        <FaCalendarAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />
                        <span className="font-fira_code text-secondary-text">
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {item.keyTech && item.keyTech.length > 0 && (
                      // ... (Key Technologies section remains the same)
                      <div>
                        <h4 className="font-fira_code text-xs text-secondary-text mb-2 uppercase tracking-wider flex items-center">
                          <FaCogs className="w-3.5 h-3.5 mr-1.5 text-info-accent" />
                          Key Technologies
                        </h4>
                        <div className="flex flex-wrap gap-x-2 gap-y-1.5">
                          {item.keyTech.map((tech: ExperienceTechItem) => (
                            <span
                              key={tech.name}
                              title={tech.description || tech.name}
                              className="inline-block bg-primary-bg/70 text-primary-text/90 px-2.5 py-1 rounded text-xs border border-neutral-700/40 interactive-glow cursor-default">
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* MODIFIED: Achievements left border color and pseudo-element bg color */}
                  <div
                    className="lg:col-span-7 lg:pl-6 pt-6 lg:pt-0 
                                relative border-l-transparent lg:border-l-2 lg:border-neutral-700/30 
                                lg:before:content-[''] lg:before:absolute lg:before:-left-px lg:before:top-0 lg:before:bottom-0 lg:before:w-px 
                                lg:before:bg-neutral-700/50 lg:before:shadow-info-accent-glow lg:before:opacity-50">
                    <h4 className="font-fira_code text-sm text-secondary-text mb-3 uppercase tracking-wider">
                      Achievements & Responsibilities
                    </h4>
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
                </div>
              </AnimatedPanel>
            ))}
          </div>
        ) : (
          // ... (Placeholder panel)
          <AnimatedPanel className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 md:p-8 rounded-lg panel-with-corners relative animate-glow-shadow text-center">
            <p className="text-lg text-secondary-text">
              Professional Experience details are currently being updated.
              Please check back soon!
            </p>
          </AnimatedPanel>
        )}
      </div>
    </section>
  );
};

export default Experience;
