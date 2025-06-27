"use client";

import { useEffect, useRef } from "react";

const ScrollSpy = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Find all sections with an 'id' attribute
    sectionsRef.current = Array.from(document.querySelectorAll("section[id]"));

    const handleScroll = () => {
      // Debounce the scroll handler to improve performance
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sectionsRef.current) {
          if (section.offsetTop <= scrollPosition) {
            currentSectionId = section.id;
          } else {
            break;
          }
        }

        // Update the URL hash without adding to history
        if (
          currentSectionId &&
          window.location.hash !== `#${currentSectionId}`
        ) {
          // Use replaceState to avoid polluting browser history
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}#${currentSectionId}`
          );
        } else if (!currentSectionId && window.location.hash) {
          // If we've scrolled to the top, clean the hash
          window.history.replaceState(null, "", window.location.pathname);
        }
      }, 100); // 100ms debounce
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return null; // This component renders nothing
};

export default ScrollSpy;
