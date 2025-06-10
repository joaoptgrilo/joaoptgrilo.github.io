// src/components/DeferredSections.tsx
"use client"; // This marks the component as a Client Component

import dynamic from "next/dynamic";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

// The Skills component is now deferred along with the others.
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Certifications = dynamic(() => import("@/components/Certifications"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <SectionSkeleton />,
});

const DeferredSections = () => {
  return (
    <>
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

export default DeferredSections;
