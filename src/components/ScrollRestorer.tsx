// src/components/ScrollRestorer.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollRestorer = () => {
  const pathname = usePathname();
  const storageKey = `scroll-position-${pathname}`;

  useEffect(() => {
    // Disable the browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Restore scroll position on mount
    const savedPosition = sessionStorage.getItem(storageKey);
    if (savedPosition) {
      const position = JSON.parse(savedPosition);
      window.scrollTo(0, position);
      sessionStorage.removeItem(storageKey); // Clean up after use
    }

    // Save scroll position on unload
    const handleBeforeUnload = () => {
      sessionStorage.setItem(storageKey, JSON.stringify(window.scrollY));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname, storageKey]);

  return null; // This component does not render anything
};

export default ScrollRestorer;