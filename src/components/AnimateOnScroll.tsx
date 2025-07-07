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

  // Use the generic observer to detect if it's currently in view
  const isInView = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    // Fire-once logic: if it's in view and hasn't been visible before, set it.
    if (isInView && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isInView, hasBeenVisible]);

  return (
    <Component
      ref={ref}
      className={clsx(
        "transition-all duration-700 ease-out",
        hasBeenVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4",
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
