// src/components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50
        w-11 h-11 rounded-full 
        flex items-center justify-center
        
        bg-secondary-bg                 // Solid secondary background
        text-accent                     // Icon color: accent
        border border-gray-700          // Default subtle border

        transition-all duration-200 ease-in-out // General transition
        
        hover:border-accent             // On hover: border becomes accent
        hover:shadow-[0_0_12px_2px_var(--color-accent-DEFAULT-shadow)] // On hover: accent halo shadow
        
        focus-visible:outline-none
        focus-visible:border-accent     // On focus: border becomes accent
        focus-visible:ring-2 
        focus-visible:ring-accent
        focus-visible:ring-opacity-50
        focus-visible:ring-offset-2
        focus-visible:ring-offset-primary-bg
        
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      // We need to define --color-accent-DEFAULT-shadow in CSS or use a known hex for Tailwind JIT
      // For now, let's use an arbitrary value if your Tailwind JIT is set up for it,
      // otherwise, we'd put this shadow in a custom utility or define the color variable.
      // To make it work with JIT directly, we can use hex: hover:shadow-[0_0_12px_2px_#00C8FF55]
      // For the sake of providing a working example immediately, I'll use the hex version.
      // Replace #00C8FF55 with your actual accent color hex if it's different and add opacity.
      // This will be re-evaluated if needed.
      // For the shadow:
      // Default (no shadow class here, will be added by hover)
      // Hover: hover:shadow-[0_0_12px_2px_#00C8FF55]
      // Focus: focus-visible:shadow-[0_0_12px_2px_#00C8FF55] (covered by ring for now)
      aria-label="Scroll to top">
      <FaChevronUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
