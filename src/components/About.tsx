// src/components/About.tsx
"use client";

import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import {
  FiBriefcase,
  FiTarget,
  FiCpu,
  FiZap,
  FiMessageSquare,
  FiGlobe,
} from "react-icons/fi";
import Highlight from "./Highlight";
import Section from "./Section";
import Panel from "./Panel";

interface InfoPanelProps {
  icon: IconType;
  title: string;
  value: string | React.ReactNode;
  className?: string;
  tooltip?: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  icon: IconComponent,
  title,
  value,
  className = "",
  tooltip,
}) => (
  <div
    title={tooltip}
    className={`flex flex-col items-center text-center p-4 rounded-lg border border-neutral-700/50 transform transition-transform hover:scale-105 cursor-default w-full interactive-glow ${className.trim()}`}>
    <IconComponent className="w-8 h-8 text-info-accent mb-2" />
    <p className="font-fira_code text-sm text-secondary-text mb-1">{title}</p>
    <p className="text-primary-text text-base md:text-lg font-semibold">
      {value}
    </p>
  </div>
);

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About"
      className="py-16 md:py-24 pt-32 md:pt-40 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
        <Panel className="lg:col-span-1">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
              <Image
                src="/images/joao-grilo-photo.webp"
                alt="João Grilo"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-2 border-info-accent shadow-lg"
                sizes="(max-width: 767px) 10rem, 12rem"
                priority
              />
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary-bg border-2 border-info-accent rounded-full flex items-center justify-center">
                <FiCpu className="w-5 h-5 text-info-accent" />
              </div>
            </div>
            <p className="text-2xl font-bold text-primary-text mb-1">
              João Grilo
            </p>
            <p className="font-fira_code text-info-accent text-sm mb-4">
              Full-Stack Developer
            </p>
            <p className="text-secondary-text text-center text-sm leading-relaxed">
              Based in Portimão, Portugal{" "}
              <FiGlobe className="inline-block ml-1" />
            </p>
          </div>
        </Panel>
        <Panel className="lg:col-span-2">
          <p className="font-fira_code text-xl md:text-2xl text-info-accent mb-4 text-center sm:text-left font-semibold">
            Professional Summary
          </p>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>
              A dedicated Full-Stack Developer with over{" "}
              <Highlight>4.5 years</Highlight> of experience crafting{" "}
              <Highlight>high-performance</Highlight>, scalable web
              applications. Skilled at transforming complex requirements into
              clean, robust solutions that reliably serve high traffic.
            </p>
            <p>
              Expertise in <Highlight>PHP</Highlight>,{" "}
              <Highlight>JavaScript (React)</Highlight>, and{" "}
              <Highlight>.NET Core</Highlight>. Known for enhancing user
              experience, achieving significant performance gains (e.g.,{" "}
              <Highlight>&gt;90 Lighthouse</Highlight> scores), and driving{" "}
              organic traffic growth of approximately{" "}
              <Highlight>~15%</Highlight> through SEO and performance
              optimization.
            </p>
            <p>
              Passionate about <Highlight>Agile methodologies</Highlight> and
              continuous learning, I embrace a{" "}
              <Highlight>user-centric approach</Highlight> to build scalable,
              secure, and intuitive software. Fluent in English (C2 level).
            </p>
            <p>
              In a <Highlight>remote work</Highlight> setting, values a{" "}
              <Highlight>healthy work-life balance</Highlight>, dedicating time
              to <Highlight>continuous learning</Highlight> through{" "}
              <Highlight>certifications</Highlight>, exploring{" "}
              <Highlight>new technologies</Highlight>, and enjoying meaningful
              moments with <Highlight>family and pets</Highlight>.
            </p>
          </div>
        </Panel>
      </div>
      <Panel>
        <p className="font-fira_code text-xl md:text-2xl text-info-accent mb-8 text-center font-semibold">
          Key Metrics & Info
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-stretch w-full max-w-4xl mx-auto">
          <InfoPanel
            icon={FiBriefcase}
            title="Experience"
            value="4.5+ Years"
            tooltip="Years of professional software development experience"
          />
          <InfoPanel
            icon={FiTarget}
            title="Lighthouse Avg."
            value=">90"
            tooltip="Average performance/accessibility score using Google Lighthouse"
          />
          <InfoPanel
            icon={FiZap}
            title="Traffic Growth (SEO)"
            value="~15%"
            tooltip="Estimated organic traffic increase through SEO & optimization"
          />
          <InfoPanel
            icon={FiCpu}
            title="Core Stacks"
            value="PHP, JS, .NET"
            tooltip="Main backend and frontend technologies used professionally"
          />
          <InfoPanel
            icon={FiMessageSquare}
            title="English Level"
            value="C2 Fluent"
            tooltip="Proficient in professional English communication (C2 level)"
          />
          <InfoPanel
            icon={FiGlobe}
            title="Work Preference"
            value="Remote"
            tooltip="Available and experienced in remote, asynchronous collaboration"
          />
        </div>
      </Panel>
    </Section>
  );
};
export default About;
