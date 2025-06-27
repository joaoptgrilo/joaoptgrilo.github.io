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
  const baseClasses = `
    bg-light-panel-bg/10 backdrop-blur-lg
    border border-neutral-700/50 p-6 md:p-8 
    rounded-lg hover:border-accent/50 transition-all duration-300
  `;

  // The 'animate-glow-shadow' class is the key to the subtle glow.
  // We ensure it's applied correctly to the default variant.
  const combinedClasses = clsx(
    baseClasses,
    "animate-on-scroll",
    {
      "panel-with-corners animate-glow-shadow": variant === "default",
    },
    className
  );

  return <Component className={combinedClasses}>{children}</Component>;
};

export default Panel;
