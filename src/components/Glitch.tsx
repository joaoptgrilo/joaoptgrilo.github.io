// src/components/Glitch.tsx
"use client";

import React, { useEffect, useMemo } from "react";
import { clsx } from "clsx";
import useGlitch from "@/hooks/useGlitch";
import { useInView } from "react-intersection-observer";

interface GlitchProps {
  children: string;
  className?: string;
  triggerOnHover?: boolean;
  triggerOnVisible?: boolean;
}

const Glitch: React.FC<GlitchProps> = ({
  children,
  className,
  triggerOnHover = false,
  triggerOnVisible = false,
}) => {
  const { displayText, startGlitch, reset } = useGlitch(children);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    skip: !triggerOnVisible,
  });

  const randomDelay = useMemo(() => {
    return triggerOnVisible ? 3000 + Math.random() * 5000 : 0;
  }, [triggerOnVisible]);

  useEffect(() => {
    if (inView && triggerOnVisible) {
      const timer = setTimeout(() => {
        startGlitch();
      }, randomDelay);
      return () => clearTimeout(timer);
    }
  }, [inView, triggerOnVisible, startGlitch, randomDelay]);

  const handleMouseEnter = triggerOnHover ? startGlitch : undefined;
  const handleMouseLeave = triggerOnHover ? reset : undefined;

  return (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        "relative inline-block align-baseline", // Changed from align-middle
        className
      )}
    >
      <span aria-hidden="true" className="absolute inset-0">
        {displayText}
      </span>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="opacity-0">
        {children}
      </span>
    </span>
  );
};

export default Glitch;
