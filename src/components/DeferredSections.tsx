// src/components/DeferredSections.tsx
"use client"; // This is the crucial directive

import dynamic from "next/dynamic";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

// All sections below the fold are managed here with ssr: false
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
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

export default DeferredSections;
