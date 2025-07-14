// src/components/ScrollToTopButton.tsx
"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", pathname);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const buttonClasses = clsx(
    "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50",
    "w-11 h-11 flex items-center justify-center",
    "rounded-full text-accent bg-primary-bg/70 backdrop-blur-sm",
    "panel-glow-anim",
    "border border-accent",
    "transition-all duration-300 ease-in-out",
    "hover:scale-110 hover:-translate-y-1 hover:shadow-accent-glow",
    {
      "opacity-100 translate-y-0": isVisible,
      "opacity-0 translate-y-4 pointer-events-none": !isVisible,
    }
  );

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={buttonClasses}
      aria-label="Scroll to top"
    >
      <FaChevronUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
