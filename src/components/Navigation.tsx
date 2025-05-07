// src/components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

// CORRECTED INTERFACE DEFINITION
interface NavLinkItem {
  href: string;
  label: string; // Added label property
}

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false); // This IS used for isActiveNavStyle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const SCROLL_THRESHOLD = 10; // This IS used in handleScroll

  const navLinks: NavLinkItem[] = [ // Type applied correctly
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Correctly using SCROLL_THRESHOLD and setIsScrolled
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array is fine here as SCROLL_THRESHOLD is a const and setIsScrolled is stable

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveNavStyle = isScrolled || isMobileMenuOpen; // isScrolled is used here

  const baseNavClasses = "fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-3 transition-all duration-300 ease-in-out";
  const activeNavLookClasses = `bg-primary-bg/85 backdrop-blur-md backdrop-saturate-150 animate-glow-shadow`; 
  const topTransparentNavLookClasses = "bg-transparent shadow-none";
  const pillClasses = `flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-fira-code font-semibold 
                       bg-nav-pill-bg backdrop-blur-sm border border-accent/20 
                       text-accent shadow-md`;

  return (
    <nav
      className={`${baseNavClasses} ${isActiveNavStyle ? activeNavLookClasses : topTransparentNavLookClasses}`}
    >
      <div className="container mx-auto flex justify-between items-center h-14 sm:h-16">
        <Link 
          href="#hero" 
          onClick={closeMobileMenu}
          className={`${isActiveNavStyle ? 'opacity-100 hover:opacity-90' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 ease-in-out`}
          aria-hidden={!isActiveNavStyle}
          tabIndex={isActiveNavStyle ? 0 : -1}
          style={{ transitionDelay: isActiveNavStyle ? '0.1s' : '0s' }}
        >
          <span className={pillClasses} style={{ willChange: 'opacity' }}>
            <span className="mr-1.5 sm:mr-2 h-2 w-2 bg-accent rounded-full animate-pulse-dot"></span>
            João Grilo
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-5">
          {/* Correctly using link.label and link.href */}
          {navLinks.map((link: NavLinkItem) => (
            <Link
              key={link.label} 
              href={link.href}
              className="font-poppins text-primary hover:text-accent transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-primary hover:text-accent focus:outline-none text-2xl p-1 -mr-1"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div 
          className={`md:hidden absolute top-full left-0 right-0 pb-5 pt-2 ${activeNavLookClasses}`} 
        >
          <div className="container mx-auto flex flex-col items-center space-y-3 px-4">
            {/* Correctly using link.label and link.href */}
            {navLinks.map((link: NavLinkItem) => (
              <Link
                key={`mobile-${link.label}`}
                href={link.href}
                className="font-poppins text-primary hover:text-accent transition-colors py-2 text-base w-full text-center"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navigation;