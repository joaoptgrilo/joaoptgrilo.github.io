// src/components/Panel.tsx
import React, { forwardRef } from "react";
import { clsx } from "clsx";
import { useTheme } from "@/contexts/ThemeContext";

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
    const { theme } = useTheme();

    const applyGlassEffect = !(variant === "modal" && theme === "light");

    const baseClasses = "rounded-lg transition-all duration-300";

    const variantClasses = {
      default: "p-6 md:p-8 panel-with-corners",
      simple: "p-6 md:p-8",
      modal:
        "!p-0 overflow-y-auto border backdrop-blur-none dark:bg-secondary-bg dark:border-border light:bg-white light:border-neutral-200",
    };

    const combinedClasses = clsx(
      baseClasses,
      { "glass-effect": applyGlassEffect }, // Apply glass-effect conditionally
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
