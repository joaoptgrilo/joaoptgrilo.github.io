// src/components/Navigation.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { clsx } from "clsx";

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
    closeMobileMenu();
  };

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

  const navClasses = clsx(
    "fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-3",
    {
      "dark:bg-secondary-bg/90 dark:backdrop-blur-sm nav-glow light:bg-white light:shadow-md  backdrop-blur-custom glass-effect":
        isActiveNavStyle,
      "bg-transparent shadow-none": !isActiveNavStyle,
    }
  );

  const mobileMenuContainerClasses = clsx(
    "lg:hidden absolute top-full left-0 right-0 pb-5 pt-2 glass-effect",
    "dark:bg-secondary-bg/95 dark:backdrop-blur-sm",
    "light:bg-white light:border-t light:border-border"
  );

  const pillClasses = clsx(
    "flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-fira_code font-semibold text-accent bg-primary-bg/80",
    "border border-accent",
    "panel-glow-anim",
    "hover:scale-105 hover:-translate-y-px hover:shadow-accent-glow"
  );

  const desktopNavLinkClasses =
    "font-poppins text-primary-text hover:text-accent transition-colors text-sm";
  const mobileMenuLinkClasses =
    "font-poppins text-primary-text hover:text-accent transition-colors py-2 text-base w-full text-center";

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto flex justify-between items-center h-14 sm:h-16">
          <Link
            href="#hero"
            scroll={false}
            onClick={handleNavClick}
            className={clsx(
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            tabIndex={isScrolled ? 0 : -1}
            aria-hidden={!isScrolled}>
            <span className={pillClasses}>
              <span className="mr-1.5 sm:mr-2 h-2 w-2 bg-accent rounded-full animate-pulse"></span>
              {t("namePill")}
            </span>
          </Link>
          <div className="hidden lg:flex items-center space-x-5">
            {navLinks.map((link: NavLinkItem) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                onClick={handleNavClick}
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
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              className="text-primary-text hover:text-accent focus:outline-none text-2xl p-1 -mr-1 relative z-10">
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className={mobileMenuContainerClasses}>
            <div className="container mx-auto flex flex-col items-center space-y-3 px-4">
              {navLinks.map((link: NavLinkItem) => (
                <Link
                  key={`mobile-${link.label}`}
                  href={link.href}
                  scroll={false}
                  className={mobileMenuLinkClasses}
                  onClick={handleNavClick}>
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
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm glass-effect lg:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navigation;
