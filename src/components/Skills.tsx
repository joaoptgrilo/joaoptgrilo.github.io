// src/components/Skills.tsx
"use client";

import React, { useRef } from "react";
import Section from "./Section";
import Panel from "./Panel";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { SkillItem, ProficiencyLevel } from "@/data/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

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

const SKILL_CATEGORIES_DATA: { id: string; skills: SkillItem[] }[] = [
  {
    id: "languages",
    skills: [
      { name: "JavaScript", proficiency: 3, key: "javascript" },
      { name: "C#", proficiency: 3, key: "csharp" },
      { name: "PHP", proficiency: 3, key: "php" },
      { name: "HTML5", proficiency: 3, key: "html5" },
      { name: "CSS3 / SASS", proficiency: 3, key: "css" },
      { name: "TypeScript", proficiency: 2, key: "typescript" },
      { name: "SQL", proficiency: 2, key: "sql" },
      { name: "Python", proficiency: 1, key: "python" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { name: "React", proficiency: 3, key: "react" },
      { name: "Vanilla JavaScript", proficiency: 3, key: "javascript" },
      { name: "Responsive Web Design", proficiency: 3, key: "responsive" },
      { name: "jQuery", proficiency: 3, key: "jquery" },
      { name: "Web Accessibility", proficiency: 2, key: "accessibility" },
      { name: "State Management", proficiency: 2, key: "state_management" },
      { name: "Bootstrap", proficiency: 2, key: "bootstrap" },
      {
        name: "Client-Side Routing",
        proficiency: 1,
        key: "client_side_routing",
      },
      { name: "Redux", proficiency: 1, key: "redux" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: ".NET Core", proficiency: 3, key: "dotnet" },
      { name: "MVC Architecture", proficiency: 3, key: "mvc" },
      { name: "Node.js", proficiency: 2, key: "nodejs" },
      { name: "REST API Development", proficiency: 2, key: "rest_api" },
      { name: "Socket Programming", proficiency: 2, key: "sockets" },
      {
        name: "Cross-Platform Dev (.NET)",
        proficiency: 2,
        key: "cross_platform_dev",
      },
    ],
  },
  {
    id: "databases",
    skills: [
      { name: "MySQL", proficiency: 3, key: "mysql" },
      { name: "Redis", proficiency: 2, key: "redis" },
      { name: "Elasticsearch", proficiency: 1, key: "elasticsearch" },
    ],
  },
  {
    id: "performance",
    skills: [
      { name: "Performance Optimization", proficiency: 3, key: "perf_tuning" },
      { name: "Lighthouse (>90)", proficiency: 3, key: "lighthouse" },
      { name: "SEO Implementation", proficiency: 3, key: "seo" },
      {
        name: "Platform Optimization",
        proficiency: 3,
        key: "platform_optimization",
      },
      { name: "Google Analytics", proficiency: 3, key: "analytics" },
      {
        name: "Workflow Automation",
        proficiency: 2,
        key: "workflow_optimization",
      },
      {
        name: "Efficient Querying (MySQL)",
        proficiency: 2,
        key: "efficient_querying",
      },
    ],
  },
  {
    id: "cms",
    skills: [
      { name: "WordPress (Full Stack)", proficiency: 3, key: "wordpress" },
      {
        name: "Custom Theme Development",
        proficiency: 2,
        key: "custom_theme_dev",
      },
      {
        name: "Custom Plugin Development",
        proficiency: 2,
        key: "custom_plugin_dev",
      },
      {
        name: "E-commerce Platforms",
        proficiency: 2,
        key: "e-commerce_platforms",
      },
      {
        name: "WordPress API Integrations",
        proficiency: 2,
        key: "wp_api_integrations",
      },
    ],
  },
  {
    id: "devops",
    skills: [
      { name: "Git", proficiency: 3, key: "git" },
      { name: "GitHub / GitLab", proficiency: 3, key: "github_gitlab" },
      { name: "Agile Methodologies", proficiency: 3, key: "agile" },
      { name: "Docker", proficiency: 2, key: "docker" },
      { name: "npm / yarn", proficiency: 2, key: "npm" },
    ],
  },
  {
    id: "security_systems",
    skills: [
      {
        name: "Security Best Practices",
        proficiency: 2,
        key: "security_best_practices",
      },
      { name: "Proactive Security", proficiency: 2, key: "proactive_security" },
      {
        name: "SQLi/XSS/CSRF Awareness",
        proficiency: 2,
        key: "security_awareness",
      },
      { name: "HTTPS", proficiency: 2, key: "https" },
      {
        name: "Encryption Concepts",
        proficiency: 2,
        key: "encryption_concepts",
      },
      { name: "Rate Limiting", proficiency: 2, key: "rate_limiting" },
      { name: "Logging & Auditing", proficiency: 2, key: "logging_auditing" },
      { name: "Linux / WSL", proficiency: 2, key: "linux_os" },
      { name: "Windows", proficiency: 2, key: "windows_os" },
      {
        name: "Compression Algorithms",
        proficiency: 2,
        key: "compression_concepts",
      },
    ],
  },
  {
    id: "concepts",
    skills: [
      {
        name: "Continuous Learning",
        proficiency: 3,
        key: "continuous_learning",
      },
      { name: "Troubleshooting", proficiency: 3, key: "troubleshooting" },
      { name: "AI Tool Familiarity", proficiency: 3, key: "ai_tools" },
      { name: "Technical Support", proficiency: 3, key: "tech_support" },
      {
        name: "Algorithms & Data Structures",
        proficiency: 2,
        key: "algorithms",
      },
      { name: "IT Infrastructure", proficiency: 1, key: "it_infrastructure" },
      {
        name: "System Resource Monitoring",
        proficiency: 1,
        key: "system_resource_monitoring",
      },
    ],
  },
];

const Skills: React.FC = () => {
  const tProficiency = useTranslations("Proficiency");
  const tSkills = useTranslations("Skills");
  const tSkillTags = useTranslations("skillTags");

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const proficiencyKeyMap: Record<
    ProficiencyLevel,
    "expert" | "proficient" | "familiar"
  > = { 3: "expert", 2: "proficient", 1: "familiar" };

  return (
    <Section
      ref={sectionRef}
      id="skills"
      title="skills"
      className={clsx({ "is-in-view": isInView })}
    >
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
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {SKILL_CATEGORIES_DATA.map((category) => (
          <Panel as="li" key={category.id} className="h-full" variant="default">
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
                      className="flex items-center justify-between bg-primary-bg/40 px-3 py-2 rounded-md border border-border cursor-default interactive-glow group"
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
        ))}
      </ul>
    </Section>
  );
};
export default Skills;
