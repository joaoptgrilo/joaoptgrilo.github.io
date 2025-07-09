// src/components/ScrollRestorer.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollRestorer = () => {
  const pathname = usePathname();

  useEffect(() => {
    // This effect runs once on component mount for the current page.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
      // Save the scroll position just before the page is left (e.g., on refresh)
      sessionStorage.setItem(
        `scroll-position-${pathname}`,
        window.scrollY.toString()
      );
    };

    const savedPosition = sessionStorage.getItem(`scroll-position-${pathname}`);
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      sessionStorage.removeItem(`scroll-position-${pathname}`);
    }

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollRestorer;
