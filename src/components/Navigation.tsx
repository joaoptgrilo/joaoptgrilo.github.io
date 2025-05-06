// src/components/Navigation.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 10; // Was 50, then 10. Keep 10 for quick feedback.

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseNavClasses =
    "fixed top-0 left-0 right-0 z-50 w-full px-6 sm:px-10 py-3 transition-colors duration-300 ease-in-out border-b border-solid";

  // Scrolled state: opaque primary-bg, shadow, and primary (white) border
  const scrolledNavClasses = "bg-primary-bg shadow-lg border-primary";
  const topNavClasses = "bg-transparent border-transparent"; // Transparent bg and border

  // Pill background: using code-bg as per one of the iterations for "pop"
  const pillBackgroundClass = "bg-code-bg";

  return (
    <nav
      className={`${baseNavClasses} ${
        isScrolled ? scrolledNavClasses : topNavClasses
      }`}>
      <div className="container mx-auto flex justify-between items-center h-10">
        <Link
          href="#hero"
          className={`transition-opacity duration-300 ease-in-out
                      ${
                        isScrolled
                          ? "opacity-100 hover:opacity-90"
                          : "opacity-0 pointer-events-none"
                      }`}
          aria-hidden={!isScrolled}
          tabIndex={isScrolled ? 0 : -1}>
          <span
            className={`flex items-center px-3 py-1.5 rounded-full text-sm font-fira-code font-semibold ${pillBackgroundClass} text-accent shadow-md`}>
            {/* Ensure animate-pulse-dot uses the keyframe 'pulseDotAnimation' */}
            <span className="mr-2 h-2.5 w-2.5 bg-accent rounded-full animate-pulse-dot shadow-accent/50 shadow-[0_0_8px_2px]"></span>
            João Grilo
          </span>
        </Link>
        <div className="space-x-6 md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-poppins text-primary hover:text-accent transition-colors text-sm sm:text-base">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
