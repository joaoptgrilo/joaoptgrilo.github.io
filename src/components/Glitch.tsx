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
  autoGlitch?: {
    interval: number;
    startDelay?: number;
  };
}

const Glitch: React.FC<GlitchProps> = ({
  children,
  className,
  triggerOnHover = false,
  triggerOnVisible = false,
  autoGlitch,
}) => {
  const { displayText, startGlitch, reset } = useGlitch(children, {
    autoGlitch,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
    skip: !triggerOnVisible,
  });

  useEffect(() => {
    if (inView && triggerOnVisible) {
      startGlitch();
    }
  }, [inView, triggerOnVisible, startGlitch]);

  const handleMouseEnter = triggerOnHover ? startGlitch : undefined;
  const handleMouseLeave = triggerOnHover ? reset : undefined;

  return (
    <span
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx("relative inline-block align-baseline", className)}>
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
