// src/data/certificationsData.tsx
import React from "react";
import Highlight from "@/components/Highlight"; // Assuming Highlight component path

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string;
  credentialUrl: string;
  icon?: React.ElementType;
  description?: React.ReactNode; // UPDATED to React.ReactNode
  isInProgress?: boolean; // For styling "In Progress" items if needed
}

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    // UPDATED with Highlights
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
    // UPDATED with Highlights
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
    // UPDATED with Highlights
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
    // UPDATED with Highlights
    description: (
      <>
        Focuses on <Highlight>D3.js</Highlight> fundamentals, creating bar
        charts, scatterplots, heat maps, and other{" "}
        <Highlight>data-driven visualizations</Highlight>.
      </>
    ),
  },
  // Example for an "In Progress" item (we can style it differently later):
  // {
  //   id: 'aws-cloud-quest',
  //   name: 'AWS Cloud Quest: Cloud Practitioner',
  //   issuer: 'Amazon Web Services',
  //   credentialUrl: '#',
  //   description: <>Hands-on learning for <Highlight>AWS Cloud fundamentals</Highlight> and core services.</>,
  //   isInProgress: true,
  // },
];
