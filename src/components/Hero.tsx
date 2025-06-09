// src/components/Hero.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
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
  const CV_FILENAME = "JoaoGrilo-CV.pdf";

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center text-primary-text overflow-x-hidden">
      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center
                    p-6 sm:p-8 md:p-12 lg:p-16 bg-light-panel-bg/15 backdrop-blur-lg ">
        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl w-full pt-16 md:pt-0">
          <h1 className="font-fira_code font-bold text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-text leading-tight tracking-tight sm:tracking-normal">
            João Grilo
          </h1>

          <p className="font-fira_code font-semibold text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-text leading-snug tracking-tight sm:tracking-normal animate-fade-in-up animation-delay-100">
            Results-Driven Full-Stack Developer
          </p>

          <div className="h-24 sm:h-20 md:h-16 lg:h-8 flex items-center justify-center animate-fade-in-up animation-delay-200">
            {/* Desktop view: CSS typewriter for performance */}
            <div className="hidden lg:block">
              <AnimatedText
                text={taglineText}
                elementType="div"
                className="font-fira_code font-medium text-xl text-accent tracking-wide"
                useCssAnimation={true}
              />
            </div>
            {/* Mobile/Tablet view: Simple static text for responsiveness and CLS prevention */}
            <p className="block lg:hidden font-fira_code font-medium text-base sm:text-lg text-accent tracking-wide">
              Crafting High-Performance Web Solutions
              <br />& Seamless User Experiences
            </p>
          </div>

          <div className="pt-3 sm:pt-4 md:pt-5 flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-300">
            <a
              href="#projects"
              className="inline-block bg-accent text-primary-bg font-poppins font-semibold text-sm sm:text-base md:text-lg py-3 px-8 sm:py-3.5 sm:px-10 rounded-lg shadow-lg hover:bg-accent-hover hover:shadow-accent-glow focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50 transition-colors duration-300 w-full sm:w-auto">
              View My Projects
            </a>
            <a
              href={`/${CV_FILENAME}`}
              download
              className="inline-flex items-center justify-center bg-transparent text-accent font-poppins font-semibold text-sm sm:text-base md:text-lg py-3 px-8 sm:py-3.5 sm:px-10 rounded-lg border-2 border-accent hover:bg-accent/10 hover:text-accent-hover hover:shadow-accent-glow focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50 transition-all duration-300 w-full sm:w-auto interactive-glow">
              <FaDownload className="mr-2.5 h-4 w-4 sm:h-5 sm:w-5" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center space-x-5 xs:space-x-6 sm:space-x-7 pt-3 sm:pt-4 md:pt-5 animate-fade-in-up animation-delay-400">
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
