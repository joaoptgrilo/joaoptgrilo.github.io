// src/components/About.tsx
import "server-only";

import Image from "next/image";
import React from "react";
import Highlight from "./Highlight";
import Section from "./Section";
import Panel from "./Panel";
import InfoPanel from "./InfoPanel";
import Icon from "./IconMap";
import { getTranslations, getLocale } from "next-intl/server";
import { getData } from "@/data";
import { FiCpu, FiGlobe } from "react-icons/fi";
import AnimateOnScroll from "./AnimateOnScroll";

const About = async () => {
  const t = await getTranslations("About");
  const h = await getTranslations("Hero");
  const locale = await getLocale();

  const dataLoaders = getData(locale as "en" | "pt");
  const metricsData = await dataLoaders.getMetrics();

  return (
    <Section id="about" title="about">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-8 lg:mb-12">
        <AnimateOnScroll staggerDelay={0} className="h-full lg:col-span-1">
          <Panel className="h-full">
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
        </AnimateOnScroll>
        <AnimateOnScroll staggerDelay={150} className="h-full lg:col-span-2">
          <Panel className="h-full flex flex-col">
            <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-4 text-center sm:text-left font-semibold">
              {t("summaryTitle")}
            </p>
            <div className="space-y-4 text-secondary-text leading-relaxed flex-grow">
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
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll staggerDelay={300}>
        <div className="p-6 md:p-8 rounded-lg glass-effect backdrop-blur-custom panel-with-corners">
          <p className="font_fira_code text-xl md:text-2xl text-info-accent mb-8 text-center font-semibold">
            {t("metricsTitle")}
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-stretch w-full max-w-4xl mx-auto">
            {metricsData.map((metric, index) => (
              <AnimateOnScroll
                as="li"
                key={metric.id}
                staggerDelay={index * 100}
              >
                <InfoPanel
                  metric={metric}
                  icon={
                    <Icon iconId={metric.iconId as any} className="w-12 h-12" />
                  }
                  staggerDelay={index}
                />
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>
    </Section>
  );
};
export default About;
