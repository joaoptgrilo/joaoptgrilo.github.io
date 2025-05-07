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
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "",
  elementType = "span",
  className = "",
}) => {
  const [startTyping, setStartTyping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Check for prefers-reduced-motion on mount
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

  // Start typing when in view and motion is not reduced
  useEffect(() => {
    if (inView && !reducedMotion) {
      setStartTyping(true);
    }
  }, [inView, reducedMotion]);

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

  // Calculate className - Apply cursor class ONLY in reduced motion case
  const computedClassName = useMemo(() => {
    const classes = [className];
    if (reducedMotion) {
      classes.push("with-blinking-cursor");
    }
    return classes.filter(Boolean).join(" ");
  }, [className, reducedMotion]);

  // Define the Tag component using a specific type compatible with intrinsic elements
  const Tag = elementType as React.ElementType;

  // If reduced motion, render text directly with our CSS cursor
  if (reducedMotion) {
    return (
      <Tag ref={ref} className={computedClassName}>
        {text}
      </Tag>
    );
  }

  // --- Layout Shift Fix: Absolute Overlay ---
  // Render a wrapper div that uses the ref for intersection observation
  // Inside, have two children:
  // 1. A hidden static version of the final text to reserve space.
  // 2. An absolutely positioned version for the typewriter effect.
  return (
    <div ref={ref} className={`relative ${computedClassName}`}>
      {" "}
      {/* Wrapper is relative */}
      {/* 1. Hidden element to reserve space */}
      <Tag className="invisible" aria-hidden="true">
        {" "}
        {/* Use invisible class */}
        {text || " "}
      </Tag>
      {/* 2. Absolutely positioned typewriter overlay */}
      {startTyping && (
        <Tag className="absolute top-0 left-0 right-0 bottom-0">
          {" "}
          {/* Absolute overlay */}
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
  // --- End Layout Shift Fix ---
};

export default AnimatedText;
