// src/hooks/useTechTooltip.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import { ExperienceTechItem } from "@/data";
import { useToast } from "@/contexts/ToastContext";

export const useTechTooltip = (ref: React.RefObject<HTMLElement>) => {
  const { showToast } = useToast();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [clickedTech, setClickedTech] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleTechMouseEnter = useCallback(
    (techName: string) => {
      if (!isTouchDevice) {
        setHoveredTech(techName);
      }
    },
    [isTouchDevice]
  );

  const handleTechMouseLeave = useCallback(() => {
    if (!isTouchDevice) {
      setHoveredTech(null);
    }
  }, [isTouchDevice]);

  const handleTechClick = useCallback(
    (tech: ExperienceTechItem) => {
      if (isTouchDevice) {
        showToast(tech.description || tech.name);
      } else {
        setHoveredTech(null);
        setClickedTech((prev) => (prev === tech.name ? null : tech.name));
      }
    },
    [isTouchDevice, showToast]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClickedTech(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return {
    activeTech: hoveredTech || clickedTech,
    handleTechMouseEnter,
    handleTechMouseLeave,
    handleTechClick,
  };
};
