// src/components/Hero.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedText from "./AnimatedText";

interface SocialLink {
  href: string;
  icon: JSX.Element;
  ariaLabel: string;
}

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/joaoptgrilo",
      icon: <FaGithub />,
      ariaLabel: "João Grilo on GitHub",
    },
    {
      href: "https://www.linkedin.com/in/joaoptgrilo/",
      icon: <FaLinkedin />,
      ariaLabel: "João Grilo on LinkedIn",
    },
    {
      href: "mailto:joao.grilo.dev@gmail.com",
      icon: <FaEnvelope />,
      ariaLabel: "Email João Grilo",
    },
  ];

  const taglineText =
    "Crafting High-Performance Web Solutions & Seamless User Experiences";

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center text-primary-text hero-custom-background overflow-x-hidden">
      <div
        className="
          relative z-10 w-full h-full
          flex flex-col items-center justify-center text-center
          p-6 sm:p-8 md:p-12 lg:p-16
          bg-light-panel-bg/15 backdrop-blur-lg 
        ">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl w-full pt-16">
          {" "}
          {/* pt-16 to clear nav */}
          <h1 className="font-fira_code font-bold text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-text leading-tight animate-fadeInUp tracking-tight sm:tracking-normal">
            João Grilo
          </h1>
          <p className="font-fira_code font-semibold text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-text leading-snug animate-fadeInUp animation-delay-200 tracking-tight sm:tracking-normal">
            Results-Driven Full-Stack Developer
          </p>
          <AnimatedText
            text={taglineText}
            elementType="div"
            className="font-fira_code font-medium text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl text-accent animate-fadeInUp animation-delay-400 tracking-wide"
          />
          <div className="pt-3 sm:pt-4 md:pt-5 animate-fadeInUp animation-delay-600">
            <a
              href="#projects"
              className="inline-block bg-accent text-primary-bg font-poppins font-semibold text-sm sm:text-base md:text-lg py-3 px-8 sm:py-3.5 sm:px-10 rounded-lg shadow-lg hover:bg-accent-hover hover:shadow-accent-glow focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50 transition-colors duration-300">
              View My Projects
            </a>
          </div>
          <div className="flex justify-center space-x-5 xs:space-x-6 sm:space-x-7 pt-3 sm:pt-4 md:pt-5 animate-fadeInUp animation-delay-800">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-secondary-text hover:text-accent transition-colors duration-300 text-2xl sm:text-3xl md:text-4xl transform hover:scale-110">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
