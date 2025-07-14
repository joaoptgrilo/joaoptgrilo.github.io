// src/components/ScrollRestorer.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollRestorer = () => {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleBeforeUnload = () => {
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

  return null;
};

export default ScrollRestorer;
