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
    bg-light-panel-bg/10 backdrop-blur-lg border-2 border-dashed border-neutral-700/50 p-6 rounded-lg panel-with-corners relative flex flex-col h-full items-center justify-center text-center group hover:border-accent/50 animate-glow-shadow transition-all duration-300 w-full
  `;

  return (
    <Component className={clsx(baseClasses, className)}>{children}</Component>
  );
};

export default Panel;