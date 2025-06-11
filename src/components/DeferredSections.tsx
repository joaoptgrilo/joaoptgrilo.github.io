// src/components/DeferredSections.tsx
"use client";

import dynamic from "next/dynamic";
import React from "react";
import SectionSkeleton from "./SectionSkeleton";

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
