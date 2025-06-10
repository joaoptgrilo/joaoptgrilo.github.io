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
    border border-neutral-700/50 
    rounded-lg panel-with-corners relative animate-glow-shadow
    overflow-hidden /* Add overflow-hidden to contain the animated content */
  `;

  return (
    // The Panel container is NOT animated. It is always visible.
    <Component className={clsx(baseClasses, className)}>
      {/* This new inner div IS animated. It will fade/slide the content in. */}
      {/* Padding is now applied here to ensure the content animates within the padded area. */}
      <div className="animate-on-scroll p-6 md:p-8">{children}</div>
    </Component>
  );
};

export default Panel;
