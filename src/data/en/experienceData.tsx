// src/data/en/experienceData.ts
import React from "react";
import Highlight from "@/components/Highlight";
import { ExperienceItem } from "../types";

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
        Architected, developed, and maintained mission-critical, high-traffic
        web platforms using a primary stack of <Highlight>PHP</Highlight> and{" "}
        <Highlight>MySQL</Highlight>, ensuring 99.9%+ uptime and robust
        scalability.
      </>,
      <>
        Engineered dynamic, reusable, and performant frontend components with{" "}
        <Highlight>React</Highlight> and modern{" "}
        <Highlight>JavaScript</Highlight>, improving user engagement metrics
        (e.g., ~10% reduced bounce rates, ~12% increased session duration).
      </>,
      <>
        {/* IMPROVED: Added context and impact. */}
        Designed and consumed secure, versioned <Highlight>
          REST APIs
        </Highlight>{" "}
        to power new features and{" "}
        <Highlight>enable partner integrations</Highlight>, significantly
        reducing data synchronization errors.
      </>,
      <>
        {/* IMPROVED: Added context and impact. */}
        Championed <Highlight>Agile</Highlight> practices and utilized{" "}
        <Highlight>Docker</Highlight> to create consistent dev environments,{" "}
        <Highlight>reducing "works on my machine" bugs by over 50%</Highlight>{" "}
        and accelerating new developer onboarding.
      </>,
      <>
        Led frontend and backend optimization initiatives, achieving Google
        Lighthouse scores &gt;90 and contributing to ~15% organic traffic
        growth.
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
        Developed and customized high-performance, secure{" "}
        <Highlight>WordPress</Highlight> websites and complex{" "}
        <Highlight>WooCommerce</Highlight> solutions, leveraging a deep
        understanding of the underlying <Highlight>PHP</Highlight> architecture
        and <Highlight>MySQL</Highlight> database interactions.
      </>,
      <>
        {/* IMPROVED: Added context. */}
        Engineered bespoke themes and custom plugins with{" "}
        <Highlight>JavaScript</Highlight>, <Highlight>HTML5</Highlight>, and{" "}
        <Highlight>CSS3</Highlight> to solve specific client business needs not
        met by off-the-shelf solutions.
      </>,
      <>
        Improved e-commerce clients' operational efficiency by up to 30% through
        automation of order processing and inventory sync.
      </>,
      <>
        Implemented comprehensive WPO techniques and security best practices,
        achieving ~40% average load time reductions across client sites.
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
