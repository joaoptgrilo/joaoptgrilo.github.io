// src/components/Skills.tsx
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-primary-bg scroll-mt-16">
      {" "}
      {/* Added scroll-mt-16 for consistency if nav is sticky */}
      <div className="container mx-auto px-6 max-w-7xl">
        {" "}
        {/* Added max-w-7xl for consistency */}
        <h2 className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16 with-blinking-cursor">
          {" "}
          {/* Added with-blinking-cursor and adjusted mb */}
          Skills
        </h2>
        <p className="text-center text-secondary">
          Skills section content will go here...
        </p>
      </div>
    </section>
  );
};

export default Skills;
