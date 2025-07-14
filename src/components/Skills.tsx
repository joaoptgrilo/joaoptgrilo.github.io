// src/components/Skills.tsx
"use client";

import React, { useRef } from "react";
import Section from "./Section";
import Panel from "./Panel";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { SkillItem, ProficiencyLevel } from "@/data/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import AnimateOnScroll from "./AnimateOnScroll";

interface SkillsProps {
  skillsData: { id: string; skills: SkillItem[] }[];
}

const ProficiencyIndicator: React.FC<{
  level: ProficiencyLevel;
  delayIndex?: number;
}> = ({ level, delayIndex = 0 }) => {
  const levels: Record<ProficiencyLevel, { bars: number; color: string }> = {
    3: { bars: 3, color: "bg-accent" },
    2: { bars: 2, color: "bg-info-accent" },
    1: { bars: 1, color: "bg-[var(--color-prof-familiar)]" },
  };
  const currentLevel = levels[level];

  return (
    <div className="flex h-4 items-end space-x-1">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="h-full w-1.5 rounded-sm bg-neutral-500/50">
          {i < currentLevel.bars && (
            <div
              className={clsx(
                "h-full w-full rounded-sm bar-fill",
                currentLevel.color
              )}
              style={{ transitionDelay: `${delayIndex * 50 + i * 100}ms` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const SkillPanel: React.FC<{
  category: { id: string; skills: SkillItem[] };
  index: number;
}> = ({ category, index }) => {
  const tSkills = useTranslations("Skills");
  const tSkillTags = useTranslations("skillTags");
  const tProficiency = useTranslations("Proficiency");

  const panelRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(panelRef, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  });

  const proficiencyKeyMap: Record<
    ProficiencyLevel,
    "expert" | "proficient" | "familiar"
  > = { 3: "expert", 2: "proficient", 1: "familiar" };

  return (
    <AnimateOnScroll as="li" staggerDelay={index * 100}>
      <Panel
        ref={panelRef}
        className={clsx("h-full", { "is-in-view": isInView })}
        variant="default"
      >
        <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-4 font-semibold">
          {tSkills(category.id as any)}
        </p>
        <div className="flex flex-col space-y-2">
          {[...category.skills]
            .sort((a, b) => b.proficiency - a.proficiency)
            .map((skill, skillIndex) => {
              const proficiencyKey = proficiencyKeyMap[skill.proficiency];
              const proficiencyLabel = tProficiency(proficiencyKey);
              const skillDescription = tSkillTags(skill.key as any);
              const combinedTooltip = `${proficiencyLabel}: ${skillDescription}`;
              return (
                <div
                  key={skill.key}
                  title={combinedTooltip}
                  className="flex items-center justify-between px-3 py-2 rounded-md border border-border cursor-default interactive-glow group"
                >
                  <span className="text-sm text-secondary-text group-hover:text-primary-text transition-colors duration-300">
                    {skill.name}
                  </span>
                  <ProficiencyIndicator
                    level={skill.proficiency}
                    delayIndex={skillIndex}
                  />
                </div>
              );
            })}
        </div>
      </Panel>
    </AnimateOnScroll>
  );
};

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  const tProficiency = useTranslations("Proficiency");

  return (
    <Section id="skills" title="skills">
      <AnimateOnScroll>
        <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-10 text-sm text-secondary-text font_fira_code">
          <div className="flex items-center gap-2">
            <ProficiencyIndicator level={3} />
            <span>{tProficiency("expert")}</span>
          </div>
          <div className="flex items-center gap-2">
            <ProficiencyIndicator level={2} />
            <span>{tProficiency("proficient")}</span>
          </div>
          <div className="flex items-center gap-2">
            <ProficiencyIndicator level={1} />
            <span>{tProficiency("familiar")}</span>
          </div>
        </div>
      </AnimateOnScroll>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {skillsData.map((category, index) => (
          <SkillPanel key={category.id} category={category} index={index} />
        ))}
      </ul>
    </Section>
  );
};
export default Skills;
