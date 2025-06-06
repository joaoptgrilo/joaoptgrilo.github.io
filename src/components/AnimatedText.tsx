// src/components/AnimatedText.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

// --- Configuration for Dynamic Delay ---
const MAX_DELAY = 60;
const MIN_DELAY = 20;
const SHORT_TEXT_THRESHOLD = 15;
const LONG_TEXT_THRESHOLD = 80;
// -------------------------------------

interface AnimatedTextProps {
  text: string;
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
  threshold?: number;
  noAnimation?: boolean; // ADDED: Prop to disable animation for performance
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "",
  elementType = "span",
  className = "",
  threshold = 0.2,
  noAnimation = false, // ADDED: Default value
}) => {
  const [startTyping, setStartTyping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mediaQuery.matches);
      const listener = (event: MediaQueryListEvent) =>
        setReducedMotion(event.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  useEffect(() => {
    // Only start typing if animation is enabled and element is in view
    if (inView && !reducedMotion && !noAnimation) {
      setStartTyping(true);
    }
  }, [inView, reducedMotion, noAnimation]);

  const dynamicDelay = useMemo(() => {
    const length = text.length;
    if (length <= SHORT_TEXT_THRESHOLD) {
      return MAX_DELAY;
    }
    if (length >= LONG_TEXT_THRESHOLD) {
      return MIN_DELAY;
    }
    const lengthRange = LONG_TEXT_THRESHOLD - SHORT_TEXT_THRESHOLD;
    const delayRange = MAX_DELAY - MIN_DELAY;
    const fraction = (length - SHORT_TEXT_THRESHOLD) / lengthRange;
    return Math.round(MAX_DELAY - fraction * delayRange);
  }, [text]);

  const Tag = elementType as React.ElementType;

  // MODIFIED: If noAnimation is true or user prefers reduced motion, render statically
  if (noAnimation || reducedMotion) {
    // For LCP, we add a cursor with CSS instead of JS to avoid re-renders
    const staticClassName = `${className} ${
      noAnimation ? "static-with-cursor" : ""
    }`.trim();
    return (
      <Tag ref={ref} className={staticClassName}>
        {text}
      </Tag>
    );
  }

  // This part now only runs if animation is enabled
  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Invisible placeholder to reserve space and prevent layout shift */}
      <Tag className="invisible" aria-hidden="true">
        {text || " "}
      </Tag>

      {startTyping && (
        <Tag className="absolute top-0 left-0 w-full h-full">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(dynamicDelay).typeString(text).start();
            }}
            options={{
              loop: false,
              cursor: "|",
              cursorClassName: "Typewriter__cursor--style",
              wrapperClassName: "Typewriter__wrapper--inline",
            }}
          />
        </Tag>
      )}
    </div>
  );
};

export default AnimatedText;
