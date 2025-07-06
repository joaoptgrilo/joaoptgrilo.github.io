// src/components/About.tsx
"use client";

import Image from "next/image";
import React, { useRef } from "react";
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
import CountUp from "react-countup";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const AnimatedValue: React.FC<{
  value: string | React.ReactNode;
  startAnimation: boolean;
  delay: number;
}> = ({ value, startAnimation, delay }) => {
  if (typeof value !== "string") return <>{value}</>;
  const match = value.match(/([>~<]*)(\d+(\.\d+)?)(\+?%?.*)/);
  if (!match) return <>{value}</>;

  const prefix = match[1] || "";
  const number = parseFloat(match[2]);
  const suffix = match[4] || "";
  const decimals = (match[3] || ".").length - 1;

  return (
    <>
      {prefix}
      <CountUp
        start={0}
        end={startAnimation ? number : 0}
        duration={2.5}
        delay={delay}
        decimals={decimals > 0 ? decimals : 0}
        useEasing={true}
      />
      {suffix}
    </>
  );
};

interface InfoPanelProps {
  icon: IconType;
  title: string;
  value: string | React.ReactNode;
  tooltip?: string;
  startAnimation: boolean;
  delay: number;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ icon: IconComponent, title, value, tooltip, startAnimation, delay }) => (
  <div
    title={tooltip}
    className="flex flex-col items-center text-center p-4 rounded-lg border border-border interactive-glow"
  >
    <IconComponent className="w-8 h-8 text-info-accent mb-2" />
    <p className="font_fira_code text-sm text-secondary-text mb-1">{title}</p>
    <p className="text-primary-text text-base md:text-lg font-semibold">
      <AnimatedValue
        value={value}
        startAnimation={startAnimation}
        delay={delay}
      />
    </p>
  </div>
);

const About: React.FC = () => {
  const t = useTranslations("About");
  const h = useTranslations("Hero");

  const metricsPanelRef = useRef<HTMLDivElement | null>(null);
  const startAnimation = useIntersectionObserver(metricsPanelRef, {
    rootMargin: "0px 0px -150px 0px",
    threshold: 0.2,
  });

  const metricsData = [
    { id: 'experience', icon: FiBriefcase, title: t("experienceTitle"), value: t("experienceValue"), tooltip: t("experienceTooltip") },
    { id: 'lighthouse', icon: FiTarget, title: t("lighthouseTitle"), value: t("lighthouseValue"), tooltip: t("lighthouseTooltip") },
    { id: 'traffic', icon: FiZap, title: t("trafficTitle"), value: t("trafficValue"), tooltip: t("trafficTooltip") },
    { id: 'stacks', icon: FiCpu, title: t("stacksTitle"), value: t("stacksValue"), tooltip: t("stacksTooltip") },
    { id: 'english', icon: FiMessageSquare, title: t("englishTitle"), value: t("englishValue"), tooltip: t("englishTooltip") },
    { id: 'work', icon: FiGlobe, title: t("workTitle"), value: t("workValue"), tooltip: t("workTooltip") },
  ];

  return (
    <Section id="about" title="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-8 lg:mb-12">
        <Panel className="lg:col-span-1">
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
              <Image src="/images/joao-grilo-photo.webp" alt={h("name")} fill style={{ objectFit: "cover" }} className="rounded-full border-2 border-info-accent shadow-lg" sizes="(max-width: 767px) 10rem, 12rem" priority />
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary-bg border-2 border-info-accent rounded-full flex items-center justify-center"><FiCpu className="w-5 h-5 text-info-accent" /></div>
            </div>
            <p className="text-2xl font-bold text-primary-text mb-1">{h("name")}</p>
            <p className="font_fira_code text-info-accent text-sm mb-4">{t("jobTitle")}</p>
            <p className="text-secondary-text text-center text-sm leading-relaxed">{t("location")} <FiGlobe className="inline-block ml-1" /></p>
          </div>
        </Panel>
        <Panel className="lg:col-span-2">
          <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-4 text-center sm:text-left font-semibold">{t("summaryTitle")}</p>
          <div className="space-y-4 text-secondary-text leading-relaxed">
            <p>{t.rich("summaryP1", { highlight: (chunks) => <Highlight>{chunks}</Highlight> })}</p>
            <p>{t.rich("summaryP2", { highlight: (chunks) => <Highlight>{chunks}</Highlight> })}</p>
            <p>{t.rich("summaryP3", { highlight: (chunks) => <Highlight>{chunks}</Highlight> })}</p>
            <p>{t.rich("summaryP4", { highlight: (chunks) => <Highlight>{chunks}</Highlight> })}</p>
          </div>
        </Panel>
      </div>
      
      <Panel ref={metricsPanelRef}>
        <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-8 text-center font-semibold">
          {t("metricsTitle")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-stretch w-full max-w-4xl mx-auto">
          {metricsData.map((metric, index) => (
            <InfoPanel
              key={metric.id}
              icon={metric.icon}
              title={metric.title}
              value={metric.value}
              tooltip={metric.tooltip}
              startAnimation={startAnimation}
              delay={index * 0.15}
            />
          ))}
        </div>
      </Panel>
    </Section>
  );
};
export default About;