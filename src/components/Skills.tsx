// src/components/Skills.tsx
"use client";

import React from "react";
import Section from "./Section";
import Panel from "./Panel";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

interface SkillItem {
  key: string;
  name: string;
  isWide?: boolean;
}
interface SkillCategory {
  id: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    skills: [
      { key: "typescript", name: "TypeScript" },
      { key: "javascript", name: "JavaScript (ES6+)" },
      { key: "html5", name: "HTML5" },
      { key: "css", name: "CSS3 / SASS / SCSS", isWide: true },
      { key: "sql", name: "SQL" },
      { key: "csharp", name: "C#" },
      { key: "php", name: "PHP" },
      { key: "python", name: "Python" },
    ],
  },
  {
    id: "frontend",
    skills: [
      { key: "react", name: "React" },
      { key: "nextjs", name: "Next.js (App Router)" },
      { key: "tailwind", name: "Tailwind CSS" },
      { key: "responsive", name: "Responsive Web Design", isWide: true },
      {
        key: "frontend_perf",
        name: "Frontend Performance Optimization (Lighthouse >90)",
        isWide: true,
      },
      {
        key: "accessibility",
        name: "Web Accessibility (WCAG Basics)",
        isWide: true,
      },
      { key: "redux", name: "Redux (Conceptual)" },
      { key: "zustand", name: "Context API / Zustand (Planned)" },
    ],
  },
  {
    id: "backend",
    skills: [
      { key: "dotnet", name: ".NET Core" },
      { key: "nodejs", name: "Node.js" },
      { key: "rest_api", name: "REST API Development" },
      { key: "mvc", name: "MVC Architecture" },
      { key: "sockets", name: "Socket Programming" },
    ],
  },
  {
    id: "problem-solving",
    skills: [
      { key: "data_structures", name: "Data Structures" },
      { key: "algorithms", name: "Algorithms" },
    ],
  },
  {
    id: "databases",
    skills: [
      { key: "mysql", name: "MySQL" },
      { key: "redis", name: "Redis (Basic)" },
      { key: "elasticsearch", name: "Elasticsearch (Basic)" },
    ],
  },
  {
    id: "devops",
    skills: [
      { key: "git", name: "Git" },
      { key: "github_gitlab", name: "GitHub / GitLab" },
      { key: "docker", name: "Docker (Basic / Learning)" },
      { key: "agile", name: "Agile (Scrum/Kanban)" },
      { key: "npm", name: "npm" },
      { key: "vscode", name: "VS Code" },
    ],
  },
  {
    id: "cms",
    skills: [
      {
        key: "wordpress",
        name: "WordPress (Theme/Plugin Dev, API Integration, Optimization)",
        isWide: true,
      },
    ],
  },
  {
    id: "performance",
    skills: [
      {
        key: "perf_tuning",
        name: "Performance Tuning (Frontend/Backend)",
        isWide: true,
      },
      { key: "seo", name: "SEO Implementation & Analysis", isWide: true },
      { key: "lighthouse", name: "Google Lighthouse (>90 Scores)" },
      { key: "analytics", name: "Google Analytics" },
    ],
  },
  {
    id: "concepts",
    skills: [
      {
        key: "web_security",
        name: "Web Security Fundamentals (OWASP)",
        isWide: true,
      },
      {
        key: "os",
        name: "Operating Systems (Linux, Windows, WSL)",
        isWide: true,
      },
      {
        key: "ai_tools",
        name: "AI Tools Familiarity (ChatGPT, Claude, etc.)",
        isWide: true,
      },
    ],
  },
];

const Skills: React.FC = () => {
  const t = useTranslations("Skills");
  const tTooltips = useTranslations("skillTags");

  return (
    <Section id="skills" title="skills">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
        {SKILL_CATEGORIES.map((category) => (
          <Panel as="li" key={category.id} className="h-full" variant="default">
            <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-4 font-semibold">
              {t(category.id)}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.key}
                  title={tTooltips(skill.key)}
                  className={clsx(
                    "inline-block bg-tag-bg text-secondary-text px-3 py-1.5 rounded-md text-sm border border-border cursor-pointer interactive-glow",
                    { "w-full text-center": skill.isWide }
                  )}>
                  {skill.name}
                </span>
              ))}
            </div>
          </Panel>
        ))}
      </ul>
    </Section>
  );
};
export default Skills;
