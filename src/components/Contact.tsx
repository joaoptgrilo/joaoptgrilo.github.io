// src/components/Contact.tsx
import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedPanel from "./AnimatedPanel";
import Highlight from "./Highlight";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
  newTab?: boolean;
  isPrimary?: boolean;
}> = ({ href, icon, label, newTab = false, isPrimary = false }) => {
  const baseClasses = `
    inline-flex items-center justify-center text-center 
    font-medium rounded-lg transition-all duration-300 ease-in-out 
    w-full sm:w-auto px-6 py-3 text-sm md:text-base
    border-2 interactive-glow group
  `;
  const primaryClasses = isPrimary
    ? "bg-accent text-primary-bg border-accent hover:bg-accent-hover shadow-lg hover:shadow-accent-glow"
    : "bg-primary-bg/60 hover:bg-primary-bg text-primary-text border-neutral-700/50 hover:border-accent hover:text-accent";

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${primaryClasses}`}>
      <span
        className={`mr-2.5 text-xl ${
          isPrimary
            ? "text-primary-bg"
            : "text-info-accent group-hover:text-accent transition-colors duration-300"
        }`}>
        {icon}
      </span>
      {label}
    </a>
  );
};

const Contact: React.FC = () => {
  const titleText = "Get In Touch";
  const GITHUB_PROFILE_URL = "https://github.com/joaoptgrilo";

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 min-h-[70vh] flex flex-col items-center justify-center section-scroll-margin">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <AnimatedText
          text={titleText}
          elementType="h2"
          className="font-fira_code text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-10 md:mb-12 text-center whitespace-nowrap"
        />
        <AnimatedPanel
          className="w-full max-w-2xl bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 
                     p-6 md:p-10 rounded-lg panel-with-corners relative animate-glow-shadow text-center">
          <p className="text-secondary-text max-w-md mx-auto mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
            Have a <Highlight>project in mind</Highlight>, an{" "}
            <Highlight>opportunity</Highlight> to discuss, or just want to{" "}
            <Highlight>say hi</Highlight>? I&apos;m always open to{" "}
            <Highlight>connecting</Highlight>!
          </p>

          <p className="font-fira_code text-info-accent mb-6 text-sm">
            Let&apos;s connect:
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <ContactLink
              href="mailto:joao.grilo.dev@gmail.com"
              icon={<FaEnvelope />}
              label="Email Me"
              isPrimary={true}
            />
            <ContactLink
              href="https://www.linkedin.com/in/joaoptgrilo/"
              icon={<FaLinkedin />}
              label="LinkedIn"
              newTab={true}
            />
            <ContactLink
              href={GITHUB_PROFILE_URL}
              icon={<FaGithub />}
              label="GitHub"
              newTab={true}
            />
          </div>
        </AnimatedPanel>
      </div>
    </section>
  );
};

export default Contact;
