// src/components/Section.tsx
import React from "react";
import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  title: string;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  title,
  className = "py-16 md:py-24",
  titleClassName = "mb-12 md:mb-16",
  containerClassName = "",
}) => {
  return (
    <section id={id} className={`section-scroll-margin ${className}`}>
      <div
        className={clsx(
          "container mx-auto px-4 animate-on-scroll",
          containerClassName
        )}>
        <div className="flex justify-center">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center ${titleClassName}`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
