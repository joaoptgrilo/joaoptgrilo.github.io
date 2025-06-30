// src/components/Panel.tsx
import React from "react";
import { clsx } from "clsx";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: "default" | "simple";
}

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  as: Component = "div",
  variant = "default",
}) => {
  const baseClasses = "p-6 md:p-8 rounded-lg transition-all duration-300";

  const darkThemeClasses = `
    dark:bg-light-panel-bg/5
    dark:backdrop-blur-custom 
    dark:border-border
    dark:hover:border-accent/50
  `;

  const lightThemeClasses = `
    light:bg-light-panel-bg/90  
    light:backdrop-blur-custom 
    light:border-border
    light:shadow-[0_4px_16px_var(--color-shadow)]
    light:hover:border-accent
  `;

  const combinedClasses = clsx(
    baseClasses,
    darkThemeClasses,
    lightThemeClasses,
    "animate-on-scroll",
    {
      "panel-with-corners panel-glow-anim": variant === "default",
    },
    className
  );

  return <Component className={combinedClasses}>{children}</Component>;
};

export default Panel;
