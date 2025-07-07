// src/data/skillsData.ts
import { SkillItem } from "./types";

export const SKILL_CATEGORIES_DATA: { id: string; skills: SkillItem[] }[] = [
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
