// src/components/Projects.tsx
import React from "react";
import AnimatedText from "./AnimatedText"; // Import the new component

const Projects = () => {
  const titleText = "Projects";
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-primary-bg scroll-mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Use AnimatedText for the title */}
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16"
        />
        <p className="text-center text-secondary">
          Projects section content will go here...
        </p>
      </div>
    </section>
  );
};

export default Projects;
