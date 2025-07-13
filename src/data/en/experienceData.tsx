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
        Engineered a library of dynamic, reusable, and performant frontend
        components with <Highlight>React</Highlight> and modern{" "}
        <Highlight>JavaScript</Highlight>, directly improving key user
        engagement metrics including a ~10% reduction in bounce rates and a ~12%
        increase in session duration.
      </>,
      <>
        Orchestrated the full lifecycle of secure, versioned{" "}
        <Highlight>REST APIs</Highlight> that powered new product features and{" "}
        <Highlight>enabled critical partner integrations</Highlight>, expanding
        business capabilities and eliminating data synchronization errors.
      </>,
      <>
        Championed <Highlight>Agile</Highlight> methodologies and standardized
        development environments with <Highlight>Docker</Highlight>, which{" "}
        <Highlight>reduced "works on my machine" bugs by over 50%</Highlight>{" "}
        and accelerated new developer onboarding, boosting overall team
        velocity.
      </>,
      <>
        Spearheaded a full-stack performance overhaul by optimizing database
        queries, implementing advanced caching, and refining asset delivery,
        boosting Google Lighthouse scores to 90+ and driving a ~15% increase in
        organic traffic.
      </>,
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Core backend language for building robust web applications and APIs.",
      },
      {
        name: "JavaScript",
        description:
          "High-level language for creating dynamic and interactive user experiences.",
      },
      {
        name: "React",
        description:
          "A JavaScript library for building component-based, high-performance UIs.",
      },
      {
        name: "MySQL",
        description:
          "Relational database system for storing and managing application data.",
      },
      {
        name: "REST APIs",
        description:
          "Designing, building, and consuming APIs for seamless service communication.",
      },
      {
        name: "Docker",
        description:
          "Containerization platform for creating consistent and portable dev environments.",
      },
      {
        name: "Agile",
        description:
          "Iterative project management for delivering high-quality software efficiently.",
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
        Engineered and scaled bespoke <Highlight>WordPress</Highlight> sites and
        complex <Highlight>WooCommerce</Highlight> solutions by writing clean,
        object-oriented <Highlight>PHP</Highlight> and optimizing{" "}
        <Highlight>MySQL</Highlight> queries for high-traffic e-commerce.
      </>,
      <>
        Developed custom themes and plugins using{" "}
        <Highlight>JavaScript</Highlight>, <Highlight>HTML5</Highlight>, and{" "}
        <Highlight>CSS3</Highlight> to deliver tailored functionality like
        payment gateways and API integrations, increasing client revenue and
        operational autonomy.
      </>,
      <>
        Streamlined e-commerce client operations by automating order processing
        and inventory synchronization, boosting efficiency by up to 30%.
      </>,
      <>
        Executed comprehensive Web Performance Optimization (WPO) and security
        hardening, achieving a ~40% average reduction in load times and
        improving clients' user experience and search engine rankings.
      </>,
    ],
    keyTech: [
      {
        name: "PHP",
        description:
          "Primary language for WordPress/WooCommerce development and customization.",
      },
      {
        name: "WordPress",
        description:
          "CMS for building and managing content-rich, customized websites.",
      },
      {
        name: "WooCommerce",
        description:
          "E-commerce platform for creating powerful and scalable online stores.",
      },
      {
        name: "MySQL",
        description:
          "The underlying database for managing products, orders, and user data.",
      },
      {
        name: "JavaScript",
        description:
          "Used for creating interactive frontend features and custom functionality.",
      },
      { name: "HTML5", description: "Standard for structuring web content." },
      {
        name: "CSS3",
        description: "Used for styling and designing web pages.",
      },
    ],
  },
];
