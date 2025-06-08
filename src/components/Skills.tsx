// src/components/Skills.tsx
"use client";

import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedPanel from "./AnimatedPanel";

interface SkillItem {
  name: string;
  description?: string;
}
interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      {
        name: "TypeScript",
        description: "Typed superset of JavaScript for scalable apps",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Modern JavaScript with ES6+ features",
      },
      {
        name: "HTML5",
        description: "Markup language for structuring web content",
      },
      {
        name: "CSS3 / SASS / SCSS",
        description: "Styling languages and preprocessors for web design",
      },
      { name: "SQL", description: "Structured Query Language for databases" },
      {
        name: "C#",
        description: "Object-oriented programming language from Microsoft",
      },
      {
        name: "PHP",
        description: "Server-side scripting language for web development",
      },
      {
        name: "Python",
        description: "High-level, versatile programming language",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      {
        name: "React",
        description: "JavaScript library for building user interfaces",
      },
      {
        name: "Next.js (App Router)",
        description: "React framework for server-side rendering & routing",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "Responsive Web Design",
        description: "Designing web layouts that adapt to different devices",
      },
      {
        name: "Frontend Performance Optimization (Lighthouse >90)",
        description: "Improving website speed & efficiency",
      },
      {
        name: "Web Accessibility (WCAG Basics)",
        description: "Ensuring websites are usable by everyone",
      },
      {
        name: "Redux (Conceptual)",
        description: "State management library for JavaScript apps",
      },
      {
        name: "Context API / Zustand (Planned)",
        description: "State management tools in React ecosystem",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      {
        name: ".NET Core",
        description: "Cross-platform framework for building backend apps",
      },
      {
        name: "Node.js",
        description: "JavaScript runtime for server-side development",
      },
      {
        name: "REST API Development",
        description: "Creating web APIs following REST principles",
      },
      {
        name: "MVC Architecture",
        description: "Model-View-Controller design pattern",
      },
      {
        name: "Socket Programming",
        description: "Real-time communication via network sockets",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MySQL", description: "Popular open-source relational database" },
      {
        name: "Redis (Basic)",
        description: "In-memory data structure store, used as database/cache",
      },
      {
        name: "Elasticsearch (Basic)",
        description: "Search engine based on Lucene library",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps, Tools & Methodologies",
    skills: [
      { name: "Git", description: "Version control system" },
      {
        name: "GitHub / GitLab",
        description: "Online platforms for Git repositories and collaboration",
      },
      {
        name: "Docker (Basic / Learning)",
        description: "Containerization platform for software",
      },
      {
        name: "Agile (Scrum/Kanban)",
        description: "Project management and development methodologies",
      },
      { name: "npm", description: "Node.js package manager" },
      { name: "VS Code", description: "Popular source-code editor" },
    ],
  },
  {
    id: "cms",
    title: "CMS",
    skills: [
      {
        name: "WordPress (Theme/Plugin Dev, API Integration, Optimization)",
        description: "Content management system with extensive customization",
      },
    ],
  },
  {
    id: "performance",
    title: "Performance & Optimization",
    skills: [
      {
        name: "Performance Tuning (Frontend/Backend)",
        description: "Optimizing application performance",
      },
      {
        name: "SEO Implementation & Analysis",
        description: "Search Engine Optimization techniques",
      },
      {
        name: "Google Lighthouse (>90 Scores)",
        description: "Tool for auditing website quality",
      },
      {
        name: "Google Analytics",
        description: "Web analytics service to track traffic and user behavior",
      },
    ],
  },
  {
    id: "concepts",
    title: "Concepts & Other",
    skills: [
      {
        name: "Web Security Fundamentals (OWASP)",
        description: "Understanding common web security vulnerabilities",
      },
      {
        name: "Operating Systems (Linux, Windows, WSL)",
        description: "Familiarity with multiple OS environments",
      },
      {
        name: "AI Tools Familiarity (ChatGPT, Claude, etc.)",
        description: "Experience with AI language models and tools",
      },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 relative section-scroll-margin">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <AnimatedText
            text="Skills"
            elementType="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center"
          />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category: SkillCategory, index: number) => (
            <li key={category.id}>
              <AnimatedPanel
                className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 rounded-lg panel-with-corners relative animate-glow-shadow h-full"
                staggerDelay={index * 0.04}>
                <p className="font-fira_code text-xl md:text-2xl text-info-accent mb-4 font-semibold">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: SkillItem) => (
                    <span
                      key={skill.name}
                      title={skill.description}
                      className="inline-block bg-primary-bg/70 text-secondary-text px-3 py-1.5 rounded-md text-sm border border-neutral-700/50 cursor-default interactive-glow">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </AnimatedPanel>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Skills;
