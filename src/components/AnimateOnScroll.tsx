// src/components/AnimateOnScroll.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { clsx } from "clsx";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: React.ElementType;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className,
  staggerDelay = 0,
  as: Component = "div",
}) => {
  const ref = useRef<HTMLElement>(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const isInView = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (isInView && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isInView, hasBeenVisible]);

  return (
    <Component
      ref={ref}
      className={clsx(
        "transition-all ease-out opacity-100",
        {
          "translate-y-0 is-in-view": hasBeenVisible,
          "translate-y-8": !hasBeenVisible,
        },
        className
      )}
      style={{
        transitionDuration: "var(--animation-duration, 500ms)",
        transitionDelay: `${staggerDelay}ms`,
      }}
    >
      {children}
    </Component>
  );
};

export default AnimateOnScroll;
