// src/components/ScrollSpy.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "@/lib/gtag";

const ScrollSpy = () => {
  const activeSectionId = useRef<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.findLast(
          (entry) => entry.isIntersecting
        );

        const newActiveId = visibleSection ? visibleSection.target.id : null;

        if (newActiveId !== activeSectionId.current) {
          activeSectionId.current = newActiveId;
          const hash = newActiveId ? `#${newActiveId}` : "";
          const url = pathname + hash;

          window.history.replaceState(null, "", url);
          gtag.pageview(new URL(url, window.location.origin));
        }
      },
      {
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0,
      }
    );

    const currentObserver = observer.current;

    document.querySelectorAll("section[id]").forEach((section) => {
      if (section) {
        currentObserver.observe(section);
      }
    });

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [pathname]);
  return null;
};

export default ScrollSpy;
