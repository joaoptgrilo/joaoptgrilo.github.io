// src/data/en/certificationsData.tsx
import React from "react";
import Highlight from "@/components/Highlight";
import { CertificationItem } from "../types";

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    description: (
      <>
        Demonstrated mastery of foundational web technologies, including{" "}
        <Highlight>semantic HTML</Highlight>, modern{" "}
        <Highlight>CSS (Flexbox & Grid)</Highlight>, and core principles of{" "}
        <Highlight>accessible, responsive design</Highlight>.
      </>
    ),
  },
  {
    id: "fcc-js-algorithms-data-structures",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/javascript-algorithms-and-data-structures-v8",
    description: (
      <>
        Developed a strong command of JavaScript fundamentals and{" "}
        <Highlight>ES6+</Highlight>, with a focus on applying{" "}
        <Highlight>data structures</Highlight> and{" "}
        <Highlight>algorithmic thinking</Highlight> to solve complex problems
        efficiently.
      </>
    ),
  },
  {
    id: "fcc-frontend-dev-libraries",
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/front-end-development-libraries",
    description: (
      <>
        Acquired hands-on experience building dynamic user interfaces with
        popular libraries and frameworks, including <Highlight>React</Highlight>
        , <Highlight>Redux</Highlight>, and <Highlight>SASS</Highlight>.
      </>
    ),
  },
  {
    id: "fcc-data-visualization",
    name: "Data Visualization",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/data-visualization",
    description: (
      <>
        Mastered the <Highlight>D3.js</Highlight> library to transform complex
        datasets into clear, interactive, and{" "}
        <Highlight>insightful data visualizations</Highlight>.
      </>
    ),
  },
  {
    id: "leetcode-problem-solving",
    name: "LeetCode Problem Solving",
    issuer: "LeetCode",
    credentialUrl: "https://leetcode.com/u/joaoptgrilo/",
    description: (
      <>
        Continuously honing <Highlight>problem-solving skills</Highlight> by
        tackling algorithmic challenges, focusing on{" "}
        <Highlight>time/space complexity</Highlight> to write highly efficient
        code.
      </>
    ),
    isInProgress: true,
  },
  {
    id: "aws-cloud-quest",
    name: "AWS Cloud Quest",
    issuer: "Amazon Web Services",
    credentialUrl: "https://www.credly.com/users/joao.grilo.dev",
    description: (
      <>
        Building practical, real-world cloud skills through AWS's gamified
        learning platform. Targeting the{" "}
        <Highlight>Cloud Practitioner</Highlight> certification to validate
        expertise in <Highlight>core AWS services</Highlight> and architecture.
      </>
    ),
    isInProgress: true,
  },
  {
    id: "tryhackme-learning-paths",
    name: "TryHackMe Learning Paths",
    issuer: "TryHackMe",
    credentialUrl: "https://tryhackme.com/p/joao.grilo.dev",
    description: (
      <>
        Proactively strengthening <Highlight>cybersecurity knowledge</Highlight>{" "}
        through hands-on labs in <Highlight>Web Hacking</Highlight> and
        Pentesting to build more secure and{" "}
        <Highlight>resilient applications</Highlight>.
      </>
    ),
    isInProgress: true,
  },
];
