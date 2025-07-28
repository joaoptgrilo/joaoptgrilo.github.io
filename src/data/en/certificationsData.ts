// src/data/en/certificationsData.ts
import { CertificationItem } from "../types";

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    description:
      "Demonstrated mastery of foundational web technologies, including {semantic HTML}, modern {CSS (Flexbox & Grid)}, and core principles of {accessible, responsive design}.",
  },
  {
    id: "fcc-js-algorithms-data-structures",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/javascript-algorithms-and-data-structures-v8",
    description:
      "Developed a strong command of JavaScript fundamentals and {ES6+}, with a focus on applying {data structures} and {algorithmic thinking} to solve complex problems efficiently.",
  },
  {
    id: "fcc-frontend-dev-libraries",
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/front-end-development-libraries",
    description:
      "Acquired hands-on experience building dynamic user interfaces with popular libraries and frameworks, including {React}, {Redux}, and {SASS}.",
  },
  {
    id: "fcc-data-visualization",
    name: "Data Visualization",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/data-visualization",
    description:
      "Mastered the {D3.js} library to transform complex datasets into clear, interactive, and {insightful data visualizations}.",
  },
  {
    id: "leetcode-problem-solving",
    name: "LeetCode Problem Solving",
    issuer: "LeetCode",
    credentialUrl: "https://leetcode.com/u/joaoptgrilo/",
    description:
      "Continuously honing {problem-solving skills} by tackling algorithmic challenges, focusing on {time/space complexity} to write highly efficient code.",
    isInProgress: true,
  },
  {
    id: "aws-cloud-quest",
    name: "AWS Cloud Quest",
    issuer: "Amazon Web Services",
    credentialUrl: "https://www.credly.com/users/joao.grilo.dev/badges",
    description:
      "Building practical, real-world cloud skills through AWS's gamified learning platform. Targeting the {Cloud Practitioner} certification to validate expertise in {core AWS services} and architecture.",
    isInProgress: true,
  },
  {
    id: "tryhackme-learning-paths",
    name: "TryHackMe Learning Paths",
    issuer: "TryHackMe",
    credentialUrl: "https://tryhackme.com/p/joao.grilo.dev",
    description:
      "Proactively strengthening {cybersecurity knowledge} through hands-on labs in {Web Hacking} and Pentesting to build more secure and {resilient applications}.",
    isInProgress: true,
  },
];
