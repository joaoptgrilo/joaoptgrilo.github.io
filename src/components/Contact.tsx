// src/components/Contact.tsx
"use client";

import React from "react";
import Highlight from "./Highlight";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import Section from "./Section";
import AnimateOnScroll from "./AnimateOnScroll";
import GlitchText from "./Glitch";
import * as gtag from "@/lib/gtag";

import {
  EMAIL_ADDRESS,
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "@/lib/constants";

const Contact = () => {
  const t = useTranslations("Contact");

  const handleContactClick = (eventName: string, label: string) => {
    gtag.event({
      action: eventName,
      category: "contact",
      label: label,
      value: 1,
    });
  };

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
            <p className="font_fira_code text-sm mb-6">
              <Highlight>{t("prompt")}</Highlight>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                onClick={() =>
                  handleContactClick("click_email", t("emailButton"))
                }
                className="btn-primary flex items-center justify-center !py-3 !px-6 !text-base"
              >
                <span className="text-xl mr-2.5 text-primary-bg">
                  <FaEnvelope />
                </span>
                <GlitchText triggerOnHover={true}>
                  {t("emailButton")}
                </GlitchText>
              </a>
              <a
                href={LINKEDIN_PROFILE_URL}
                onClick={() =>
                  handleContactClick("click_linkedin", t("linkedinButton"))
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-3 !px-6 !text-base !bg-primary-bg/50"
              >
                <span className="text-xl mr-2.5">
                  <FaLinkedin />
                </span>
                <GlitchText triggerOnHover={true}>
                  {t("linkedinButton")}
                </GlitchText>
              </a>
              <a
                href={GITHUB_PROFILE_URL}
                onClick={() =>
                  handleContactClick("click_github", t("githubButton"))
                }
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-3 !px-6 !text-base !bg-primary-bg/50"
              >
                <span className="text-xl mr-2.5">
                  <FaGithub />
                </span>
                <GlitchText triggerOnHover={true}>
                  {t("githubButton")}
                </GlitchText>
              </a>
            </div>
          </Panel>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default Contact;
