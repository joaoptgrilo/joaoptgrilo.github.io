// src/components/Navigation.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

interface NavLinkItem {
  href: string;
  label: string;
}

const Navigation: React.FC = () => {
  const t = useTranslations("Navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const SCROLL_THRESHOLD = 10;

  const navLinks: NavLinkItem[] = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#experience", label: t("experience") },
    { href: "#projects", label: t("projects") },
    { href: "#certifications", label: t("certifications") },
    { href: "#contact", label: t("contact") },
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
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isActiveNavStyle = isScrolled || isMobileMenuOpen;

  const baseNavClasses =
    "fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-3 transition-[background-color] duration-300 ease-in-out";

  const activeNavLookClasses =
    "bg-secondary-bg/90 backdrop-blur-nav backdrop-saturate-150";

  const topTransparentNavLookClasses = "bg-transparent shadow-none";

  const mobileMenuContainerClasses = "bg-secondary-bg/95 backdrop-blur-nav";

  const pillClasses = `flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font_fira_code font-semibold text-accent bg-primary-bg/80 border border-accent shadow-md shadow-accent/20 transition-opacity duration-300 ease-in-out hover:opacity-90`;
  const desktopNavLinkClasses =
    "font-poppins text-primary-text hover:text-accent transition-colors text-sm";
  const mobileMenuLinkClasses =
    "font-poppins text-primary-text hover:text-accent transition-colors py-2 text-base w-full text-center";

  return (
    <>
      <nav
        className={`${baseNavClasses} ${
          isActiveNavStyle ? activeNavLookClasses : topTransparentNavLookClasses
        }`}>
        <div className="container mx-auto flex justify-between items-center h-14 sm:h-16">
          <Link
            href="#hero"
            onClick={closeMobileMenu}
            className={`${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300 ease-in-out`}
            style={{ transitionDelay: isScrolled ? "0.1s" : "0s" }}
            tabIndex={isScrolled ? 0 : -1}
            aria-hidden={!isScrolled}>
            <span className={pillClasses}>
              <span className="mr-1.5 sm:mr-2 h-2 w-2 bg-accent rounded-full animate-pulse-dot"></span>
              {t("namePill")}
            </span>
          </Link>
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={desktopNavLinkClasses}>
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className="text-primary-text hover:text-accent focus:outline-none text-2xl p-1 -mr-1 relative z-10">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden absolute top-full left-0 right-0 pb-5 pt-2 ${mobileMenuContainerClasses}`}>
            <div className="container mx-auto flex flex-col items-center space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  className={mobileMenuLinkClasses}
                  onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 mt-4">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        )}
      </nav>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
