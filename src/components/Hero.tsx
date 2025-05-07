// src/components/Hero.tsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[85vh] md:min-h-screen w-full text-primary px-4 sm:px-6 py-10 pt-24 sm:pt-28 md:pt-32 relative overflow-hidden hero-custom-background">
      <div className="z-10 relative space-y-3 sm:space-y-4 md:space-y-5 max-w-3xl text-left">
        <h1 className="font-fira-code font-bold text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary leading-tight animate-fadeInUp tracking-tight sm:tracking-normal">
          João Grilo
        </h1>
        <p className="font-fira-code font-semibold text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary leading-snug animate-fadeInUp animation-delay-200 tracking-tight sm:tracking-normal">
          Results-Driven Full-Stack Developer
        </p>
        <p // Apply the new utility class here
          className="font-fira-code font-medium text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl text-accent animate-fadeInUp animation-delay-400 tracking-wide with-blinking-cursor">
          Crafting High-Performance Web Solutions & Seamless User Experiences
          {/* The span with the cursor is no longer needed here, it's handled by ::after */}
        </p>
        <div className="pt-3 sm:pt-4 animate-fadeInUp animation-delay-600 text-left">
          <a
            href="#projects"
            className="inline-block bg-accent text-primary-bg font-poppins font-semibold text-sm sm:text-base md:text-lg py-2.5 px-6 sm:py-3 sm:px-8 rounded shadow-lg hover:bg-accent-hover hover:shadow-accent/30 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50 transition-colors duration-300">
            View My Projects
          </a>
        </div>
        <div className="flex justify-start space-x-5 xs:space-x-6 sm:space-x-7 pt-3 sm:pt-4 animate-fadeInUp animation-delay-800">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-secondary hover:text-accent transition-colors duration-300 text-2xl sm:text-3xl md:text-4xl transform hover:scale-110">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
