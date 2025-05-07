// src/components/Experience.tsx
import React from "react";
import AnimatedText from "./AnimatedText"; // Import the new component

const Experience = () => {
  const titleText = "Experience";
  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-secondary-bg scroll-mt-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Use AnimatedText for the title */}
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="text-3xl md:text-4xl font-bold font-fira-code text-primary text-center mb-12 md:mb-16"
        />
        <p className="text-center text-secondary">
          Experience section content will go here...
        </p>
      </div>
    </section>
  );
};

export default Experience;
