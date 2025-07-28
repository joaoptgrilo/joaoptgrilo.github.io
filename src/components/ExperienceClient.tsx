// src/components/ExperienceClient.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ExperienceItem, ExperienceTechItem } from "@/data";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCogs,
} from "react-icons/fa";
import Section from "./Section";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import AnimateOnScroll from "./AnimateOnScroll";
import { useToast } from "@/contexts/ToastContext";
import Highlight from "./Highlight";

const parseWithHighlight = (text: string) => {
  const parts = text.split(/(\{[^}]+\})/g);
  return parts.map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      const content = part.substring(1, part.length - 1);
      return <Highlight key={index}>{content}</Highlight>;
    }
    return part;
  });
};

const ExperienceCard = ({
  item,
  onTechClick,
}: {
  item: ExperienceItem;
  onTechClick: (description: string) => void;
}) => {
  const t = useTranslations("Experience");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [clickedTech, setClickedTech] = useState<string | null>(null);
  const techListRef = useRef<HTMLUListElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleTechClick = (tech: ExperienceTechItem) => {
    if (isTouchDevice) {
      onTechClick(tech.description || tech.name);
    } else {
      setHoveredTech(null);
      setClickedTech((prev) => (prev === tech.name ? null : tech.name));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        techListRef.current &&
        !techListRef.current.contains(event.target as Node)
      ) {
        setClickedTech(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeTech = hoveredTech || clickedTech;

  return (
    <Panel variant="default">
      <article className="lg:grid lg:grid-cols-12 lg:gap-x-0">
        <div className="lg:col-span-5 lg:pr-6 mb-6 lg:mb-0">
          <p className="text-xl md:text-2xl font-bold text-info-accent mb-4 leading-tight">
            {item.role}
          </p>
          <div className="space-y-2.5 mb-6 text-sm">
            <div className="flex items-center">
              {item.companyLogoUrl ? (
                <div
                  className={`mr-4 flex-shrink-0 w-20 h-20 relative p-3 overflow-hidden rounded-md border border-border bg-black opacity-80`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.companyLogoUrl}
                      alt={item.companyLogoAlt || `${item.company} logo`}
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
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
                <div className="flex items-start mt-1">
                  <FaMapMarkerAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />
                  <span className="font-fira-code text-secondary-text text-xs">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <FaCalendarAlt className="w-4 h-4 mr-1.5 mt-0.5 text-info-accent flex-shrink-0" />
              <span className="font-fira-code text-secondary-text">
                {item.period}
              </span>
            </div>
          </div>
          {item.keyTech && item.keyTech.length > 0 && (
            <div>
              <p className="font-fira-code text-xs text-secondary-text mb-2 uppercase tracking-wider flex items-center">
                <FaCogs className="w-3.5 h-3.5 mr-1.5 text-info-accent" />
                {t("keyTech")}
              </p>
              <ul
                ref={techListRef}
                className="flex flex-wrap gap-x-2 gap-y-1.5"
              >
                {item.keyTech.map((tech) => (
                  <li
                    key={tech.name}
                    onMouseEnter={() =>
                      !isTouchDevice && setHoveredTech(tech.name)
                    }
                    onMouseLeave={() => !isTouchDevice && setHoveredTech(null)}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTechClick(tech);
                      }}
                      onFocus={() =>
                        !isTouchDevice && setHoveredTech(tech.name)
                      }
                      onBlur={() => !isTouchDevice && setHoveredTech(null)}
                      title={!isTouchDevice ? tech.description : undefined}
                      className="tag interactive-glow !cursor-pointer w-full h-full text-left"
                    >
                      {tech.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="lg:col-span-7 lg:pl-6 pt-6 lg:pt-0 relative border-l-transparent lg:border-l-2 lg:border-border lg:before:content-[''] lg:before:absolute lg:before:-left-px lg:before:top-0 lg:before:bottom-0 lg:before:w-px lg:before:bg-border">
          <p className="font-fira-code text-sm text-secondary-text mb-3 uppercase tracking-wider">
            {t("achievements")}
          </p>
          <ul className="space-y-2.5 text-secondary-text leading-relaxed text-[0.95rem]">
            {item.descriptionItems.map((descItem, i) => {
              const isDimmed =
                !isTouchDevice &&
                activeTech &&
                !descItem.toLowerCase().includes(activeTech.toLowerCase());

              return (
                <li
                  key={i}
                  className={clsx(
                    "flex transition-opacity duration-300 ease-in-out",
                    { "opacity-40": isDimmed }
                  )}
                >
                  <span className="text-accent mr-2.5 mt-1.5 flex-shrink-0 text-xs">
                    ◆
                  </span>
                  <span>{parseWithHighlight(descItem)}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </Panel>
  );
};

const ExperienceClient = ({
  experienceData,
}: {
  experienceData: ExperienceItem[];
}) => {
  const t = useTranslations("Experience");
  const { showToast } = useToast();

  return (
    <Section id="experience" title="experience">
      {experienceData.length > 0 ? (
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((item, index) => (
            <AnimateOnScroll key={item.id} staggerDelay={index * 150}>
              <ExperienceCard item={item} onTechClick={showToast} />
            </AnimateOnScroll>
          ))}
        </div>
      ) : (
        <AnimateOnScroll>
          <Panel variant="default" className="text-center">
            <p className="text-lg text-secondary-text">{t("noExperience")}</p>
          </Panel>
        </AnimateOnScroll>
      )}
    </Section>
  );
};
export default ExperienceClient;
