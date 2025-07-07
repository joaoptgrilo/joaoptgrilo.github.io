// src/components/InfoPanel.tsx
"use client";

import React from "react";
import AnimatedValue from "./AnimatedValue";
import Panel from "./Panel";
import type { MetricItem } from "@/data/types";
import { useTranslations } from "next-intl";

interface InfoPanelProps {
  metric: MetricItem;
  icon: React.ReactNode;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ metric, icon }) => {
  const t = useTranslations("About.metrics");
  const { id, value, decimals } = metric;
  const translationTemplate = t.raw(`${id}.displayValue`) as string;

  let displayValueNode: React.ReactNode;

  if (translationTemplate.includes("{value}")) {
    const parts = translationTemplate.split("{value}");
    const prefix = parts[0] || "";
    const suffix = parts[1] || "";

    displayValueNode = (
      <>
        {prefix}
        <AnimatedValue
          value={value}
          startAnimation={true}
          decimals={decimals}
        />
        {suffix}
      </>
    );
  } else {
    displayValueNode = <span>{translationTemplate}</span>;
  }

  return (
    <Panel
      variant="simple"
      title={t(id + ".tooltip")}
      className="flex flex-col items-center justify-center text-center p-4 interactive-glow h-full">
      {/* UPDATED: Sizing classes removed from this div */}
      <div className="text-info-accent mb-3">{icon}</div>
      <p className="font_fira_code text-sm text-secondary-text mb-1">
        {t(id + ".title")}
      </p>
      <p className="text-primary-text text-base md:text-lg font-semibold">
        {displayValueNode}
      </p>
    </Panel>
  );
};

export default InfoPanel;
