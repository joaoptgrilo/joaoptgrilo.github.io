// src/components/Panel.tsx
import React, { forwardRef } from "react";
import { clsx } from "clsx";

interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: "default" | "simple";
}

const Panel = forwardRef<HTMLElement, PanelProps>(
  (
    {
      children,
      className,
      as: Component = "div",
      variant = "default",
      ...props
    },
    ref
  ) => {
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
      {
        "panel-with-corners panel-glow-anim": variant === "default",
      },
      className
    );

    return (
      <Component ref={ref} className={combinedClasses} {...props}>
        {children}
      </Component>
    );
  }
);

Panel.displayName = "Panel";

export default Panel;
