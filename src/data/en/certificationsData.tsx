// src/data/en/certificationsData.ts
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
        Covers <Highlight>HTML</Highlight>, <Highlight>CSS</Highlight>, Visual
        Design, <Highlight>Accessibility</Highlight>, Responsive Design
        principles, and CSS <Highlight>Flexbox</Highlight> &{" "}
        <Highlight>Grid</Highlight>.
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
        Focuses on JavaScript fundamentals, <Highlight>ES6</Highlight>, Regular
        Expressions, Debugging,
        <Highlight>Data Structures</Highlight>, and{" "}
        <Highlight>Algorithm Scripting</Highlight>.
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
        Teaches modern frontend libraries including{" "}
        <Highlight>Bootstrap</Highlight>, jQuery, <Highlight>SASS</Highlight>,
        <Highlight>React</Highlight>, and <Highlight>Redux</Highlight>.
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
        Focuses on <Highlight>D3.js</Highlight> fundamentals, creating bar
        charts, scatterplots, heat maps, and other{" "}
        <Highlight>data-driven visualizations</Highlight>.
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
        Actively solving challenges to sharpen{" "}
        <Highlight>algorithmic thinking</Highlight> and master{" "}
        <Highlight>data structures</Highlight> for optimal, efficient code.
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
        Hands-on learning for <Highlight>AWS Cloud fundamentals</Highlight> and
        core services, pursuing the <Highlight>Cloud Practitioner</Highlight>{" "}
        role and other badges.
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
        Progressing through cybersecurity paths, including{" "}
        <Highlight>Web Hacking</Highlight> and{" "}
        <Highlight>Offensive Pentesting</Highlight>, to build a defensive
        mindset.
      </>
    ),
    isInProgress: true,
  },
];
