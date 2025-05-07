// src/components/Experience.tsx
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-secondary-bg scroll-mt-16" /* Consistent padding, bg, and scroll-margin */
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {" "}
        {/* Consistent container and padding */}
        <h2 className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16 with-blinking-cursor">
          {" "}
          {/* Consistent heading styles + cursor */}
          Experience
        </h2>
        <p className="text-center text-secondary">
          {" "}
          {/* Consistent paragraph text color */}
          Experience section content will go here...
        </p>
      </div>
    </section>
  );
};

export default Experience;
