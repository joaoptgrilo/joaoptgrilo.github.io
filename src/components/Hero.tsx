// src/components/Hero.tsx
"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import Glitch from "./Glitch";
import * as gtag from "@/lib/gtag";
import Panel from "./Panel";

interface SocialLink {
  href: string;
  icon: JSX.Element;
  ariaLabel: string;
}

const Hero: React.FC = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();

  const handleCVDownload = () => {
    gtag.event({
      action: "download_cv",
      category: "engagement",
      label: `CV Download - ${locale.toUpperCase()}`,
      value: 1,
    });
  };

  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/joaoptgrilo",
      icon: <FaGithub />,
      ariaLabel: t("githubAria"),
    },
    {
      href: "https://www.linkedin.com/in/joaoptgrilo/",
      icon: <FaLinkedin />,
      ariaLabel: t("linkedinAria"),
    },
    {
      href: "mailto:joao.grilo.dev@gmail.com",
      icon: <FaEnvelope />,
      ariaLabel: t("emailAria"),
    },
  ];

  const taglineText = t("tagline");

  const cvFileEN = "JoaoGrilo-CV.pdf";
  const cvFilePT = "JoaoGrilo-CV-PT.pdf";
  const cvToDownload = locale === "pt" ? cvFilePT : cvFileEN;

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center text-primary-text overflow-hidden p-0">
      <Panel
        variant="default"
        className="w-full h-full flex flex-col items-center justify-center rounded-none border-b border-border">
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl w-full pt-16 md:pt-0">
            <h1 className="font_fira_code font-bold text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-text leading-tight tracking-tight sm:tracking-normal">
              <Glitch autoGlitch={{ interval: 8000 + Math.random() * 6000 }}>
                {t("name")}
              </Glitch>
            </h1>
            <p className="font_fira_code font-semibold text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-text leading-snug tracking-tight sm:tracking-normal animate-fade-in-up animation-delay-100">
              <Glitch autoGlitch={{ interval: 8000 + Math.random() * 6000 }}>
                {t("title")}
              </Glitch>
            </p>
            <div className="h-24 sm:h-20 md:h-16 lg:h-12 flex items-center justify-center animate-fade-in-up animation-delay-200">
              <div className="hidden lg:block">
                <div className="font_fira_code font-medium text-xl text-accent tracking-wide typewriter-css">
                  {taglineText}
                </div>
              </div>
              <p
                className="block lg:hidden font_fira_code font-medium text-base sm:text-lg text-accent tracking-wide"
                dangerouslySetInnerHTML={{
                  __html: taglineText.replace(" & ", "<br />& "),
                }}
              />
            </div>
            <div className="pt-3 sm:pt-4 md:pt-5 flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-6 animate-fade-in-up animation-delay-300">
              <a href="#projects" className="btn-primary">
                <Glitch triggerOnHover={true}>{t("projectsButton")}</Glitch>
              </a>
              <a
                href={`/${cvToDownload}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCVDownload}
                className="btn-secondary">
                <FaDownload className="mr-2.5 h-4 w-4 sm:h-5 sm:w-5" />
                <Glitch triggerOnHover={true}>{t("cvButton")}</Glitch>
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
                  className="text-secondary-text hover:text-accent transition-all duration-300 text-2xl sm:text-3xl md:text-4xl transform hover:scale-110">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </section>
  );
};

export default Hero;
