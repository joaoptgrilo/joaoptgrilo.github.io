// src/components/Projects.tsx
import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-primary-bg scroll-mt-16" /* Consistent padding, ensuring primary bg, and scroll-margin */
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {" "}
        {/* Consistent container and padding */}
        <h2 className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16 with-blinking-cursor">
          {" "}
          {/* Consistent heading styles + cursor */}
          Projects
        </h2>
        <p className="text-center text-secondary">
          {" "}
          {/* Consistent paragraph text color */}
          Projects section content will go here...
        </p>
      </div>
    </section>
  );
};

export default Projects;
