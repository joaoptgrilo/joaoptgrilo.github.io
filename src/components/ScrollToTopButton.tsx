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
        
        bg-secondary-bg
        text-accent
        border border-neutral-700/80 

        transition-all duration-300 ease-in-out
        
        hover:border-accent
        hover:shadow-accent-glow 
        
        focus-visible:outline-none
        focus-visible:border-accent
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
      aria-label="Scroll to top">
      <FaChevronUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
