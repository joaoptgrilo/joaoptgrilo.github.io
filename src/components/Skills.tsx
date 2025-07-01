// src/components/Skills.tsx
"use client";

import React from "react";
import Section from "./Section";
import Panel from "./Panel";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import { SkillItem, ProficiencyLevel } from "@/data/types";

interface SkillCategory {
  id: string;
  skills: SkillItem[];
}

const proficiencyOrder: ProficiencyLevel[] = ["expert", "proficient", "familiar"];

// CORRECTED: Renders exactly 1, 2, or 3 bars. No placeholders.
const ProficiencyIndicator: React.FC<{ level: ProficiencyLevel }> = ({
  level,
}) => {
  const t = useTranslations("Proficiency");
  const levels = {
    expert: { bars: 3, color: "bg-accent", title: t("expert") },
    proficient: { bars: 2, color: "bg-info-accent", title: t("proficient") },
    familiar: { bars: 1, color: "bg-secondary-text/50", title: t("familiar") },
  };
  const currentLevel = levels[level];
  const barHeights = ["h-1.5", "h-3", "h-4"];

  return (
    <div
      className="flex h-4 items-end space-x-1" // Fixed height for alignment
      title={currentLevel.title}
      aria-label={`Proficiency: ${currentLevel.title}`}>
      {Array.from({ length: currentLevel.bars }).map((_, i) => (
        <span
          key={i}
          className={clsx(
            "w-1.5 rounded-sm",
            barHeights[i],
            currentLevel.color
          )}
        />
      ))}
    </div>
  );
};

// --- DATA STRUCTURE (Regenerated from your 1-10 scores) ---
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    skills: [
      { name: "PHP", proficiency: "expert", key: "php" },
      { name: "JavaScript (ES6+)", proficiency: "expert", key: "javascript" },
      { name: "HTML5", proficiency: "expert", key: "html5" },
      { name: "CSS3 / SASS", proficiency: "expert", key: "css" },
      { name: "SQL", proficiency: "proficient", key: "sql" },
      { name: "TypeScript", proficiency: "proficient", key: "typescript" },
      { name: "C#", proficiency: "proficient", key: "csharp" },
      { name: "Python", proficiency: "familiar", key: "python" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: ".NET Core", proficiency: "expert", key: "dotnet" },
      { name: "REST API Development", proficiency: "proficient", key: "rest_api" },
      { name: "MVC Architecture", proficiency: "proficient", key: "mvc" },
      { name: "Socket Programming", proficiency: "proficient", key: "sockets" },
      { name: "Cross-Platform Dev (.NET)", proficiency: "proficient", key: "cross_platform_dev" },
      { name: "Node.js", proficiency: "familiar", key: "nodejs" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { name: "Responsive Web Design", proficiency: "proficient", key: "responsive" },
      { name: "jQuery", proficiency: "proficient", key: "jquery" },
      { name: "React", proficiency: "proficient", key: "react" },
      { name: "State Management", proficiency: "proficient", key: "state_management" },
      { name: "DOM Manipulation", proficiency: "proficient", key: "dom_manipulation" },
      { name: "Bootstrap", proficiency: "proficient", key: "bootstrap" },
      { name: "Client-Side Routing", proficiency: "familiar", key: "client_side_routing" },
      { name: "Redux", proficiency: "familiar", key: "redux" },
    ],
  },
  {
    id: "performance",
    skills: [
      { name: "Performance Optimization", proficiency: "expert", key: "perf_tuning" },
      { name: "Lighthouse (>90)", proficiency: "expert", key: "lighthouse" },
      { name: "SEO Implementation", proficiency: "expert", key: "seo" },
      { name: "Platform Optimization", proficiency: "expert", key: "platform_optimization" },
      { name: "Google Analytics", proficiency: "proficient", key: "analytics" },
      { name: "Workflow Automation", proficiency: "proficient", key: "workflow_optimization" },
      { name: "Efficient Querying", proficiency: "proficient", key: "efficient_querying" },
    ],
  },
  {
    id: "cms",
    skills: [
      { name: "WordPress (Full Stack)", proficiency: "expert", key: "wordpress" },
      { name: "Custom Theme Development", proficiency: "proficient", key: "custom_theme_dev" },
      { name: "Custom Plugin Development", proficiency: "proficient", key: "custom_plugin_dev" },
      { name: "E-commerce Platforms", proficiency: "proficient", key: "ecommerce_platforms" },
      { name: "WordPress API Integrations", proficiency: "proficient", key: "wp_api_integrations" },
    ],
  },
  {
    id: "devops",
    skills: [
      { name: "Git", proficiency: "proficient", key: "git" },
      { name: "GitHub / GitLab", proficiency: "proficient", key: "github_gitlab" },
      { name: "Agile Methodologies", proficiency: "proficient", key: "agile" },
      { name: "Docker", proficiency: "familiar", key: "docker" },
      { name: "npm / yarn", proficiency: "familiar", key: "npm" },
    ],
  },
  {
    id: "concepts",
    skills: [
      { name: "Algorithms & Data Structures", proficiency: "proficient", key: "algorithms" },
      { name: "Web Security Fundamentals", proficiency: "proficient", key: "web_security" },
      { name: "AI Tool Familiarity", proficiency: "proficient", key: "ai_tools" },
      { name: "Proactive Monitoring", proficiency: "proficient", key: "proactive_monitoring" },
      { name: "IT Infrastructure", proficiency: "familiar", key: "it_infrastructure" },
      { name: "System Resource Monitoring", proficiency: "familiar", key: "system_resource_monitoring" },
    ],
  },
  {
    id: "databases",
    skills: [
      { name: "MySQL", proficiency: "expert", key: "mysql" },
      { name: "Redis", proficiency: "proficient", key: "redis" },
      { name: "Elasticsearch", proficiency: "familiar", key: "elasticsearch" },
    ],
  },
];


const Skills: React.FC = () => {
  const t = useTranslations("Skills");
  const tTooltips = useTranslations("skillTags");
  const tProficiency = useTranslations("Proficiency");

  return (
    <Section id="skills" title="skills">
      <div className="flex justify-center items-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 mb-10 text-sm text-secondary-text font_fira_code animate-on-scroll">
        <div className="flex items-center gap-2">
          <ProficiencyIndicator level="expert" />
          <span>{tProficiency("expert")}</span>
        </div>
        <div className="flex items-center gap-2">
          <ProficiencyIndicator level="proficient" />
          <span>{tProficiency("proficient")}</span>
        </div>
        <div className="flex items-center gap-2">
          <ProficiencyIndicator level="familiar" />
          <span>{tProficiency("familiar")}</span>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {SKILL_CATEGORIES.map((category) => (
          <Panel as="li" key={category.id} className="h-full" variant="default">
            <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-4 font-semibold">
              {t(category.id as any)}
            </p>
            <div className="flex flex-col space-y-2">
              {[...category.skills]
                .sort((a, b) => proficiencyOrder.indexOf(a.proficiency) - proficiencyOrder.indexOf(b.proficiency))
                .map((skill) => (
                  <div
                    key={skill.key}
                    title={tTooltips(skill.key as any)}
                    className="flex items-center justify-between bg-primary-bg/40 px-3 py-2 rounded-md border border-border cursor-default interactive-glow group"
                  >
                    <span className="text-sm text-secondary-text group-hover:text-primary-text transition-colors duration-300">
                      {skill.name}
                    </span>
                    <ProficiencyIndicator level={skill.proficiency} />
                  </div>
                ))}
            </div>
          </Panel>
        ))}
      </ul>
    </Section>
  );
};
export default Skills;