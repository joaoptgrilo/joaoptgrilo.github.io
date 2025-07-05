// src/hooks/useIntersectionObserver.ts
"use client";

import { useState, useEffect, RefObject } from "react";

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for prefers-reduced-motion immediately
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when intersection changes
        if (entry.isIntersecting) {
          setIntersecting(true);
          // Stop observing once it has intersected
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
      }
    );

    observer.observe(element);

    // Cleanup function
    return () => {
      observer.unobserve(element);
    };
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return isIntersecting;
}
