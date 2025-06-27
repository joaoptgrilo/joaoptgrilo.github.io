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
import { useTranslations } from "next-intl";

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
    <p className="font_fira_code text-sm text-secondary-text mb-1">{title}</p>
    <p className="text-primary-text text-base md:text-lg font-semibold">
      {value}
    </p>
  </div>
);

const About: React.FC = () => {
  const t = useTranslations("About");
  const h = useTranslations("Hero");

  return (
    <Section
      id="about"
      title="about"
      className="py-16 md:py-24 pt-32 md:pt-40 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
        <Panel className="lg:col-span-1">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
              <Image
                src="/images/joao-grilo-photo.webp"
                alt={h("name")}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full border-2 border-info-accent shadow-lg"
                sizes="(max-width: 767px) 10rem, 12rem"
                priority
              />
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary-bg border-2 border-info-accent rounded-full flex items-center justify-center">
                <FiCpu className="w-5 h-5 text-info-accent" />
              </div>
            </div>
            <p className="text-2xl font-bold text-primary-text mb-1">
              {h("name")}
            </p>
            <p className="font_fira_code text-info-accent text-sm mb-4">
              {t("jobTitle")}
            </p>
            <p className="text-secondary-text text-center text-sm leading-relaxed">
              {t("location")} <FiGlobe className="inline-block ml-1" />
            </p>
          </div>
        </Panel>
        <Panel className="lg:col-span-2">
          <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-4 text-center sm:text-left font-semibold">
            {t("summaryTitle")}
          </p>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>
              {t.rich("summaryP1", {
                highlight: (chunks) => <Highlight>{chunks}</Highlight>,
              })}
            </p>
            <p>
              {t.rich("summaryP2", {
                highlight: (chunks) => <Highlight>{chunks}</Highlight>,
              })}
            </p>
            <p>
              {t.rich("summaryP3", {
                highlight: (chunks) => <Highlight>{chunks}</Highlight>,
              })}
            </p>
            <p>
              {t.rich("summaryP4", {
                highlight: (chunks) => <Highlight>{chunks}</Highlight>,
              })}
            </p>
          </div>
        </Panel>
      </div>
      <Panel>
        <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-8 text-center font-semibold">
          {t("metricsTitle")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-stretch w-full max-w-4xl mx-auto">
          <InfoPanel
            icon={FiBriefcase}
            title={t("experienceTitle")}
            value={t("experienceValue")}
            tooltip={t("experienceTooltip")}
          />
          <InfoPanel
            icon={FiTarget}
            title={t("lighthouseTitle")}
            value={t("lighthouseValue")}
            tooltip={t("lighthouseTooltip")}
          />
          <InfoPanel
            icon={FiZap}
            title={t("trafficTitle")}
            value={t("trafficValue")}
            tooltip={t("trafficTooltip")}
          />
          <InfoPanel
            icon={FiCpu}
            title={t("stacksTitle")}
            value={t("stacksValue")}
            tooltip={t("stacksTooltip")}
          />
          <InfoPanel
            icon={FiMessageSquare}
            title={t("englishTitle")}
            value={t("englishValue")}
            tooltip={t("englishTooltip")}
          />
          <InfoPanel
            icon={FiGlobe}
            title={t("workTitle")}
            value={t("workValue")}
            tooltip={t("workTooltip")}
          />
        </div>
      </Panel>
    </Section>
  );
};
export default About;
