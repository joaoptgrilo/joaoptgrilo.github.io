// src/components/Navigation.tsx
import React from "react";
import Link from "next/link"; // For client-side navigation to sections

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  return (
    <header // Changed from <nav> to <header> for better semantics of a site header
      id="navigation"
      className="w-full fixed top-0 left-0 z-50 bg-primary-bg/80 backdrop-blur-md border-b border-border-divider shadow-md"
      // Using bg-primary-bg/80 for opacity, backdrop-blur-md for the glass effect
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {" "}
        {/* Fixed height for nav, e.g., h-16 */}
        {/* Logo/Name */}
        <Link href="#hero" legacyBehavior>
          <a className="text-xl font-mono font-bold text-accent hover:text-accent-hover transition-colors">
            João Grilo
          </a>
        </Link>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label} legacyBehavior>
              <a className="font-sans text-primary-text hover:text-accent transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
        {/* Mobile Navigation (Hamburger Menu - Placeholder for now) */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-primary-text hover:text-accent focus:outline-none focus:text-accent"
            aria-label="Toggle menu">
            {/* Hamburger Icon (can be SVG or text) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {/* Mobile menu content would go here, conditionally rendered */}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
