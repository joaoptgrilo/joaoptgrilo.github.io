// src/data/certificationsData.tsx
import React from "react"; // Needed if we ever embed JSX directly, good practice

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate?: string; // Optional, e.g., "March 2023" or specific date
  credentialUrl: string;
  icon?: React.ElementType; // Optional: For an icon like freeCodeCamp's logo if we had it
  description?: string; // Optional: Brief description if needed
}

export const certificationsData: CertificationItem[] = [
  {
    id: "fcc-responsive-web-design",
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    // issueDate: 'Specify Date if known/desired',
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/responsive-web-design",
    description:
      "Covers HTML, CSS, Visual Design, Accessibility, Responsive Design principles, and CSS Flexbox & Grid.",
  },
  {
    id: "fcc-js-algorithms-data-structures",
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    // issueDate: 'Specify Date if known/desired',
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/javascript-algorithms-and-data-structures-v8",
    description:
      "Focuses on JavaScript fundamentals, ES6, Regular Expressions, Debugging, Data Structures, and Algorithm Scripting.",
  },
  {
    id: "fcc-frontend-dev-libraries",
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    // issueDate: 'Specify Date if known/desired',
    credentialUrl:
      "https://www.freecodecamp.org/certification/JoaoGrilo/front-end-development-libraries",
    description:
      "Teaches modern frontend libraries including Bootstrap, jQuery, SASS, React, and Redux.",
  },
  // Future certifications can be added here
  // Example for an "In Progress" item (we can style it differently later):
  // {
  //   id: 'aws-cloud-quest',
  //   name: 'AWS Cloud Quest: Cloud Practitioner (In Progress)',
  //   issuer: 'Amazon Web Services',
  //   credentialUrl: '#', // Placeholder or link to Cloud Quest profile
  //   description: 'Hands-on learning for AWS Cloud fundamentals and core services.',
  //   isInProgress: true, // Custom flag
  // },
];
