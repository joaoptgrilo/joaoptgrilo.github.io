// src/components/DeferredSections.tsx
"use client"; // This component now manages dynamic imports, so it must be a client component.

import dynamic from "next/dynamic";
import SectionSkeleton from "./SectionSkeleton";

// Dynamically import each heavy section with a skeleton loader.
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <SectionSkeleton />,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <SectionSkeleton />,
});

const Certifications = dynamic(() => import("@/components/Certifications"), {
  loading: () => <SectionSkeleton />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <SectionSkeleton />,
});

const DeferredSections = () => {
  return (
    <>
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

export default DeferredSections;
