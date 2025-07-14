// src/components/Contact.tsx
"use client";

import React from "react";
import Highlight from "./Highlight";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import Section from "./Section";
import { clsx } from "clsx";
import AnimateOnScroll from "./AnimateOnScroll";
import GlitchText from "./Glitch";
import * as gtag from "@/lib/gtag";

const ContactLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  eventName: string;
  newTab?: boolean;
  isPrimary?: boolean;
}> = ({ href, icon, label, eventName, newTab = false, isPrimary = false }) => {
  const baseClasses = `
    inline-flex items-center justify-center text-center 
    font_fira_code font-semibold rounded-lg transition-all duration-300 ease-in-out 
    w-full sm:w-auto px-6 py-3 text-sm md:text-base
    border-2 interactive-glow group
  `;
  const primaryClasses = isPrimary
    ? "bg-accent text-primary-bg border-accent hover:bg-accent-hover shadow-lg hover:shadow-accent-glow"
    : "bg-primary-bg/60 hover:bg-primary-bg text-primary-text border-neutral-700/50 hover:border-accent hover:text-accent";

  const handleContactClick = () => {
    gtag.event({
      action: eventName,
      category: "contact",
      label: label,
      value: 1,
    });
  };

  return (
    <a
      href={href}
      onClick={handleContactClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={clsx(baseClasses, primaryClasses)}
    >
      <span
        className={clsx("mr-2.5 text-xl", {
          "text-primary-bg": isPrimary,
          "text-info-accent group-hover:text-accent transition-colors duration-300":
            !isPrimary,
        })}
      >
        {icon}
      </span>
      <GlitchText triggerOnHover={true}>{label}</GlitchText>
    </a>
  );
};

const Contact: React.FC = () => {
  const t = useTranslations("Contact");
  const GITHUB_PROFILE_URL = "https://github.com/joaoptgrilo";

  return (
    <Section
      id="contact"
      title="contact"
      className="w-full py-16 md:py-24 min-h-[70vh] flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <AnimateOnScroll className="w-full max-w-2xl">
          <Panel variant="default" className="text-center">
            <p className="text-secondary-text max-w-md mx-auto mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
              {t.rich("description", {
                highlight: (chunks) => <Highlight>{chunks}</Highlight>,
              })}
            </p>
            <p className="font_fira_code text-info-accent mb-6 text-sm">
              {t("prompt")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <ContactLink
                href="mailto:joao.grilo.dev@gmail.com"
                icon={<FaEnvelope />}
                label={t("emailButton")}
                eventName="click_email"
                isPrimary={true}
              />
              <ContactLink
                href="https://www.linkedin.com/in/joaoptgrilo/"
                icon={<FaLinkedin />}
                label={t("linkedinButton")}
                eventName="click_linkedin"
                newTab={true}
              />
              <ContactLink
                href={GITHUB_PROFILE_URL}
                icon={<FaGithub />}
                label={t("githubButton")}
                eventName="click_github"
                newTab={true}
              />
            </div>
          </Panel>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default Contact;
