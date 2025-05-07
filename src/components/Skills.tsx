// src/components/Skills.tsx
import React from "react";
import AnimatedText from "./AnimatedText"; // Import the new component

const Skills = () => {
  const titleText = "Skills";
  return (
    <section id="skills" className="py-16 md:py-24 bg-primary-bg scroll-mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Use AnimatedText for the title */}
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16"
        />
        <p className="text-center text-secondary">
          Skills section content will go here...
        </p>
      </div>
    </section>
  );
};

export default Skills;
