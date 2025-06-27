// src/data/experienceData.tsx
import React from "react";
import Highlight from "@/components/Highlight"; // Ensure this path is correct

export interface ExperienceTechItem {
  name: string;
  description?: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  companyLink?: string;
  companyLogoUrl?: string;
  companyLogoAlt?: string;
  location: string;
  period: string;
  descriptionItems: React.ReactNode[]; // Array of React Nodes (strings or JSX)
  keyTech?: ExperienceTechItem[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "Fedrax",
    companyLink: "https://www.fedrax.com/",
    companyLogoUrl: "/images/logos/fedrax-logo.svg",
    companyLogoAlt: "Fedrax Logo",
    location: "Portimão, Portugal",
    period: "Feb 2020 – Oct 2023",
    descriptionItems: [
      <>
        Architected, developed, and maintained{" "}
        <Highlight>mission-critical</Highlight>,{" "}
        <Highlight>high-traffic</Highlight> web platforms (e.g., Gameblog.fr,
        CineSeries) ensuring <Highlight>99.9%+ uptime</Highlight> and robust{" "}
        <Highlight>scalability</Highlight>.
      </>,
      <>
        Led frontend and backend <Highlight>optimization initiatives</Highlight>
        , achieving <Highlight>Google Lighthouse scores &gt;90</Highlight> and
        contributing to <Highlight>~15% organic traffic growth</Highlight>.
      </>,
      <>
        Designed, implemented, and consumed{" "}
        <Highlight>secure, versioned RESTful APIs</Highlight> for seamless data
        exchange.
      </>,
      <>
        Engineered dynamic, reusable, and{" "}
        <Highlight>performant frontend components</Highlight> with{" "}
        <Highlight>React</Highlight>, improving user engagement metrics (e.g.,{" "}
        <Highlight>~10% reduced bounce rates</Highlight>,{" "}
        <Highlight>~12% increased session duration</Highlight>).
      </>,
      <>
        Championed <Highlight>Agile (Scrum/Kanban)</Highlight> practices,{" "}
        <Highlight>Git (Gitflow)</Highlight>, and <Highlight>Docker</Highlight>{" "}
        for efficient, collaborative, and reproducible development environments.
      </>,
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Server-side scripting language widely used for web development.",
      },
      {
        name: "JavaScript",
        description:
          "High-level, versatile language for front-end and back-end development.",
      },
      {
        name: "React",
        description: "JavaScript library for building user interfaces.",
      },
      {
        name: "MySQL",
        description:
          "Popular open-source relational database management system.",
      },
      {
        name: "REST APIs",
        description:
          "Designing and consuming REpresentational State Transfer APIs.",
      },
      {
        name: "Docker",
        description:
          "Platform for developing, shipping, and running applications in containers.",
      },
      {
        name: "Agile",
        description:
          "Iterative approach to project management and software development.",
      },
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "ZeroUm",
    companyLink: "https://zeroum.pt/",
    companyLogoUrl: "/images/logos/zeroum-logo.png",
    companyLogoAlt: "ZeroUm Logo",
    location: "Silves, Portugal",
    period: "Mar 2019 – Feb 2020",
    descriptionItems: [
      <>
        Developed and customized{" "}
        <Highlight>high-performance, secure WordPress websites</Highlight> and
        complex <Highlight>WooCommerce solutions</Highlight> for diverse
        clientele.
      </>,
      <>
        Engineered <Highlight>bespoke WordPress themes</Highlight> and{" "}
        <Highlight>custom plugins</Highlight>, integrating third-party APIs
        (payment, shipping, CRM).
      </>,
      <>
        Improved e-commerce clients&apos;{" "}
        <Highlight>operational efficiency by up to 30%</Highlight> through
        automation of order processing and inventory sync.
      </>,
      <>
        Implemented comprehensive <Highlight>WPO techniques</Highlight> and{" "}
        <Highlight>security best practices</Highlight>, achieving{" "}
        <Highlight>~40% average load time reductions</Highlight>.
      </>,
    ],
    keyTech: [
      {
        name: "PHP",
        description: "Server-side scripting language for web development.",
      },
      {
        name: "WordPress",
        description: "Popular content management system for building websites.",
      },
      { name: "WooCommerce", description: "E-commerce plugin for WordPress." },
      {
        name: "MySQL",
        description: "Open-source relational database management system.",
      },
      {
        name: "JavaScript",
        description:
          "Language for client-side and server-side web development.",
      },
      {
        name: "HTML5",
        description: "Latest version of HyperText Markup Language.",
      },
      {
        name: "CSS3",
        description: "Latest version of Cascading Style Sheets.",
      },
    ],
  },
];
