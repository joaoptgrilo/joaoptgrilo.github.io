// src/components/Panel.tsx
import React from "react";
import { clsx } from "clsx";

interface PanelProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType; // Allows rendering as 'li', 'div', etc.
}

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  as: Component = "div",
}) => {
  const baseClasses = `
    bg-light-panel-bg/10 backdrop-blur-md 
    border border-neutral-700/50 p-6 md:p-8 
    rounded-lg panel-with-corners relative animate-glow-shadow
  `;

  return (
    <Component className={clsx(baseClasses, className)}>{children}</Component>
  );
};

export default Panel;
