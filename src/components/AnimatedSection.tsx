// src/components/AnimatedSection.tsx
"use client";

import { useInView } from "react-intersection-observer";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  });

  return (
    <div
      ref={ref}
      className={`${className} section-animate ${inView ? "is-visible" : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
