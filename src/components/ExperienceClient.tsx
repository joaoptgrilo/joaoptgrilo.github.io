// src/components/ExperienceClient.tsx
"use client";
import React from "react";
import Image from "next/image";
import { ExperienceItem } from "@/data";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCogs,
} from "react-icons/fa";
import Section from "./Section";
import Panel from "./Panel";
import { useTranslations } from "next-intl";

const ExperienceClient = ({
  experienceData,
}: {
  experienceData: ExperienceItem[];
}) => {
  const t = useTranslations("Experience");
  return (
    <Section id="experience" title="experience">
      {experienceData.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((item) => (
            <Panel key={item.id} variant="default">
              <article className="lg:grid lg:grid-cols-12 lg:gap-x-0">
                <div className="lg:col-span-5 lg:pr-6 mb-6 lg:mb-0">
                  <p className="text-xl md:text-2xl font-bold text-info-accent mb-4 leading-tight">
                    {item.role}
                  </p>
                  <div className="space-y-2.5 mb-6 text-sm">
                    <div className="flex items-center">
                      {item.companyLogoUrl ? (
                        <div
                          className={`mr-4 flex-shrink-0 w-20 h-20 relative p-3 overflow-hidden rounded-md border border-border bg-black opacity-80`}>
                          <div className="relative w-full h-full">
                            <Image
                              src={item.companyLogoUrl}
                              alt={
                                item.companyLogoAlt || `${item.company} logo`
                              }
                              fill
                              style={{ objectFit: "contain" }}
                              className="logo-stroke"
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
                          <span className="font_fira_code text-secondary-text text-xs">
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaCalendarAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />
                      <span className="font_fira_code text-secondary-text">
                        {item.period}
                      </span>
                    </div>
                  </div>
                  {item.keyTech && item.keyTech.length > 0 && (
                    <div>
                      <p className="font_fira_code text-xs text-secondary-text mb-2 uppercase tracking-wider flex items-center">
                        <FaCogs className="w-3.5 h-3.5 mr-1.5 text-info-accent" />
                        {t("keyTech")}
                      </p>
                      <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
                        {item.keyTech.map((tech) => (
                          <li key={tech.name}>
                            <span
                              title={tech.description}
                              className="inline-block bg-tag-bg text-secondary-text px-2.5 py-1 rounded text-xs border border-border interactive-glow cursor-default">
                              {tech.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-7 lg:pl-6 pt-6 lg:pt-0 relative border-l-transparent lg:border-l-2 lg:border-border lg:before:content-[''] lg:before:absolute lg:before:-left-px lg:before:top-0 lg:before:bottom-0 lg:before:w-px lg:before:bg-border">
                  <p className="font_fira_code text-sm text-secondary-text mb-3 uppercase tracking-wider">
                    {t("achievements")}
                  </p>
                  <ul className="space-y-2.5 text-secondary-text leading-relaxed text-[0.95rem]">
                    {item.descriptionItems.map((descItem, i) => (
                      <li key={i} className="flex">
                        <span className="text-accent mr-2.5 mt-1.5 flex-shrink-0 text-xs">
                          ◆
                        </span>
                        <span>{descItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Panel>
          ))}
        </div>
      ) : (
        <Panel variant="default" className="text-center">
          <p className="text-lg text-secondary-text">{t("noExperience")}</p>
        </Panel>
      )}
    </Section>
  );
};
export default ExperienceClient;
