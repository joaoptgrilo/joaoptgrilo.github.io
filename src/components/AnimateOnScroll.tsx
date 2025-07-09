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
        // UPDATED: Faster duration
        "transition-all duration-300 ease-out",
        hasBeenVisible
          ? "opacity-100 translate-y-0"
          : // UPDATED: Starting opacity is now 50% for a smoother reveal
            "opacity-50 translate-y-4",
        className
      )}
      style={{
        transitionDelay: `${staggerDelay}ms`,
      }}>
      {children}
    </Component>
  );
};

export default AnimateOnScroll;
