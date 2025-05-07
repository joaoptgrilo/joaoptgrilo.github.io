// src/components/Navigation.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLinkItem {
  href: string;
  label: string;
}

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const SCROLL_THRESHOLD = 10;

  const navLinks: NavLinkItem[] = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveNavStyle = isScrolled || isMobileMenuOpen;

  // Base classes for the <nav> element
  const baseNavClasses =
    "fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-3 transition-all duration-300 ease-in-out";
  // Classes for the <nav> element when scrolled or mobile menu is open (glassy effect)
  const activeNavLookClasses = `bg-secondary-bg/80 backdrop-blur-xl backdrop-saturate-150 animate-glow-shadow`;
  // Classes for the <nav> element when at the top and mobile menu closed
  const topTransparentNavLookClasses = "bg-transparent shadow-none";

  // --- NEW: Classes for the Mobile Menu Dropdown container itself ---
  // Needs background color and glow, but NO backdrop-blur (overlay handles that)
  const mobileMenuContainerClasses = `bg-secondary-bg/85 animate-glow-shadow`;
  // ---------------------------------------------------------------

  const pillClasses = `flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-fira-code font-semibold 
                       bg-nav-pill-bg backdrop-blur-sm border border-accent/20 
                       text-accent shadow-md`;

  return (
    // Use React.Fragment to handle multiple top-level elements conditionally (Nav + Overlay)
    <>
      <nav
        className={`${baseNavClasses} ${
          isActiveNavStyle ? activeNavLookClasses : topTransparentNavLookClasses
        }`}>
        <div className="container mx-auto flex justify-between items-center h-14 sm:h-16">
          {/* Pill Logo Link */}
          <Link
            href="#hero"
            onClick={closeMobileMenu}
            className={`${
              isActiveNavStyle
                ? "opacity-100 hover:opacity-90"
                : "opacity-0 pointer-events-none"
            } transition-opacity duration-300 ease-in-out`}
            aria-hidden={!isActiveNavStyle}
            tabIndex={isActiveNavStyle ? 0 : -1}
            style={{ transitionDelay: isActiveNavStyle ? "0.1s" : "0s" }}>
            <span className={pillClasses} style={{ willChange: "opacity" }}>
              <span className="mr-1.5 sm:mr-2 h-2 w-2 bg-accent rounded-full animate-pulse-dot"></span>
              João Grilo
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link: NavLinkItem) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-poppins text-primary hover:text-accent transition-colors text-sm">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-primary hover:text-accent focus:outline-none text-2xl p-1 -mr-1 relative z-10" // Ensure button is above overlay bg if needed
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        {/* Use the NEW specific mobileMenuContainerClasses (no backdrop-blur) */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 pb-5 pt-2 ${mobileMenuContainerClasses}`}
            // Ensure this div itself doesn't prevent clicks on the overlay behind it if there's empty space
            // This should be fine as it only covers the menu area itself.
          >
            <div className="container mx-auto flex flex-col items-center space-y-3 px-4">
              {navLinks.map((link: NavLinkItem) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className="font-poppins text-primary hover:text-accent transition-colors py-2 text-base w-full text-center"
                  onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* --- End Mobile Menu Dropdown --- */}
      </nav>

      {/* --- NEW: Full Screen Background Blur Overlay --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden" // z-40 is below nav's z-50
          onClick={closeMobileMenu} // Close menu when overlay is clicked
          aria-hidden="true"
        />
      )}
      {/* --- End Overlay --- */}
    </>
  );
};
export default Navigation;
