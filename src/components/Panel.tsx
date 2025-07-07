// src/components/Panel.tsx
import React, { forwardRef } from "react";
import { clsx } from "clsx";

interface PanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: "default" | "simple" | "modal";
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
    const baseClasses = "rounded-lg transition-all duration-300 glass-effect";

    const variantClasses = {
      default: "p-6 md:p-8 panel-with-corners",
      simple: "p-6 md:p-8",
      modal:
        "!p-0 overflow-y-auto dark:bg-secondary-bg light:bg-white border dark:border-border light:border-neutral-200 backdrop-blur-none",
    };

    const combinedClasses = clsx(
      baseClasses,
      variantClasses[variant],
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
