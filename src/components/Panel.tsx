// src/components/Panel.tsx
import React from "react";
import { clsx } from "clsx";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: "default" | "simple"; // New 'variant' prop
}

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  as: Component = "div",
  variant = "default", // Default to the version with all effects
}) => {
  const baseClasses = `
    bg-light-panel-bg/10 backdrop-blur-lg
    border border-neutral-700/50 p-6 md:p-8 
    rounded-lg hover:border-accent/50 animate-glow-shadow transition-all duration-300
  `;

  // Conditionally add effects based on the variant prop
  const combinedClasses = clsx(
    baseClasses,
    {
      "panel-glow-anim panel-with-corners": variant === "default",
    },
    className
  );

  return <Component className={combinedClasses}>{children}</Component>;
};

export default Panel;
