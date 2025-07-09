// src/components/ScrollSpy.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ScrollSpy = () => {
  const activeSectionId = useRef<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Disconnect any existing observer before creating a new one
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create the single observer instance
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the last entry that is intersecting.
        // This works because the browser processes entries in document order.
        // The "last" one visible in our trigger zone is the one we want active.
        const visibleSection = entries.findLast(
          (entry) => entry.isIntersecting
        );

        const newActiveId = visibleSection ? visibleSection.target.id : null;

        // Only update the URL if the active section has changed, preventing unnecessary history updates
        if (newActiveId !== activeSectionId.current) {
          activeSectionId.current = newActiveId;
          const hash = newActiveId ? `#${newActiveId}` : "";
          const url = pathname + hash;
          // Use replaceState to avoid polluting browser history and triggering re-renders
          window.history.replaceState(null, "", url);
        }
      },
      {
        // This defines a horizontal "trigger line" that is 30% from the top of the viewport.
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0,
      }
    );

    const currentObserver = observer.current;

    // Observe all sections that have an ID
    document.querySelectorAll("section[id]").forEach((section) => {
      if (section) {
        currentObserver.observe(section);
      }
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [pathname]); // Re-run this effect if the page path changes

  return null; // This component renders nothing
};

export default ScrollSpy;
