"use client";
import React from "react";
import { clsx } from "clsx";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("SectionTitles");
  return (
    <section id={id} className={`section-scroll-margin ${className}`}>
      <div className={clsx("container mx-auto px-4", containerClassName)}>
        <div className="flex justify-center">
          <h2
            className={clsx(
              "text-3xl sm:text-4xl md:text-5xl font-bold text-center",
              "animate-on-scroll",
              "[text-shadow:0_0_10px_rgba(0,0,0,0.8)]",
              titleClassName
            )}>
            {t(title as any)}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};
export default Section;
