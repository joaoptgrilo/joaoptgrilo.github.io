// src/components/Section.tsx
"use client";

import React, { forwardRef } from "react";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";
import Glitch from "./Glitch";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
  title: string;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      id,
      title,
      className = "py-16 md:py-24",
      titleClassName = "mb-12 md:mb-16",
      containerClassName = "",
      ...props
    },
    ref
  ) => {
    const t = useTranslations("SectionTitles");
    const translatedTitle = t(title as any);

    return (
      <section
        ref={ref}
        id={id}
        className={clsx("section-scroll-margin", className)}
        {...props}>
        <div className={clsx("container mx-auto px-4", containerClassName)}>
          <div className="flex justify-center">
            <h2
              className={clsx(
                "text-3xl sm:text-4xl md:text-5xl font-bold text-center",
                titleClassName
              )}>
              <Glitch triggerOnVisible={true}>{translatedTitle}</Glitch>
            </h2>
          </div>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
