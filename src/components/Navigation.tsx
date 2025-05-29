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
  const activeNavLookClasses =
    "bg-gray-900/90 backdrop-blur-xl backdrop-saturate-150 animate-glow-shadow";

  // Classes for the <nav> element when at the top and mobile menu closed
  const topTransparentNavLookClasses = "bg-transparent shadow-none";

  // Classes for the Mobile Menu Dropdown container itself
  const mobileMenuContainerClasses = "bg-gray-900/95 animate-glow-shadow";

  // Pill (logo) styles with neon blue glow border and background
  const pillClasses = `flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-fira-code font-semibold 
                       bg-gray-800/70 backdrop-blur-sm border border-cyan-500/60
                       text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]`;

  // Desktop nav link styles
  const desktopNavLinkClasses =
    "font-poppins text-gray-100 hover:text-cyan-400 transition-colors text-sm";

  // Mobile nav link styles
  const mobileMenuLinkClasses =
    "font-poppins text-gray-100 hover:text-cyan-400 transition-colors py-2 text-base w-full text-center";

  return (
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
              <span className="mr-1.5 sm:mr-2 h-2 w-2 bg-cyan-400 rounded-full animate-pulse-dot"></span>
              João Grilo
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link: NavLinkItem) => (
              <Link
                key={link.label}
                href={link.href}
                className={desktopNavLinkClasses}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-gray-100 hover:text-cyan-400 focus:outline-none text-2xl p-1 -mr-1 relative z-10">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 pb-5 pt-2 ${mobileMenuContainerClasses}`}>
            <div className="container mx-auto flex flex-col items-center space-y-3 px-4">
              {navLinks.map((link: NavLinkItem) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className={mobileMenuLinkClasses}
                  onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Full Screen Background Blur Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
