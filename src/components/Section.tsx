// src/components/Section.tsx
"use client";

import React, { forwardRef } from "react";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

// 1. Update props to accept standard HTML attributes
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  title: string;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

// 2. Wrap the component in forwardRef and accept the ref
const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      id,
      title,
      className = "py-16 md:py-24",
      titleClassName = "mb-12 md:mb-16",
      containerClassName = "",
      ...props // Capture other props like style
    },
    ref
  ) => {
    const t = useTranslations("SectionTitles");
    return (
      // 3. Apply the ref and spread other props to the section element
      <section
        ref={ref}
        id={id}
        className={clsx("section-scroll-margin", className)}
        {...props}>
        <div className={clsx("container mx-auto px-4", containerClassName)}>
          <div className="flex justify-center">
            <h2
              className={clsx(
                "section-title text-3xl sm:text-4xl md:text-5xl font-bold text-center",
                "will-animate", // Apply will-animate to the title
                titleClassName
              )}>
              {t(title as any)}
            </h2>
          </div>
          {children}
        </div>
      </section>
    );
  }
);

// 4. Add the display name
Section.displayName = "Section";

export default Section;
