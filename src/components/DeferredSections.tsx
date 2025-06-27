// src/components/DeferredSections.tsx
import React from "react";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

// No longer needs to be a client component with dynamic imports,
// as the async data fetching handles the loading.
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
