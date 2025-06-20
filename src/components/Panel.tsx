// src/components/Panel.tsx
import React from "react";
import { clsx } from "clsx";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  as: Component = "div",
}) => {
  const baseClasses = `
    bg-light-panel-bg/10 backdrop-blur-md 
    border border-neutral-700/50 p-6 md:p-8 
    rounded-lg panel-with-corners relative 
    transition-shadow duration-300 ease-out 
    shadow-lg shadow-black/20 
    hover:shadow-accent/10
    transform-gpu /* This is the key fix for backdrop-filter */
  `;

  return (
    <Component className={clsx(baseClasses, className)}>{children}</Component>
  );
};

export default Panel;