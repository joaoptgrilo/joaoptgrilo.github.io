// src/components/InfoPanel.tsx
"use client";

import React, { useRef } from "react";
import AnimatedValue from "./AnimatedValue";
import type { MetricItem } from "@/data/types";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface InfoPanelProps {
  metric: MetricItem;
  icon: React.ReactNode;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ metric, icon }) => {
  const t = useTranslations("About.metrics");
  const panelRef = useRef<HTMLDivElement>(null);
  const startAnimation = useIntersectionObserver(panelRef, {
    threshold: 0.5,
  });

  const { id, value, decimals } = metric;
  const translationTemplate = t.raw(`${id}.displayValue`) as string;

  let displayValueNode: React.ReactNode;

  // Manually construct the JSX to avoid i18n function ambiguity
  if (translationTemplate.includes("{value}")) {
    const parts = translationTemplate.split("{value}");
    const prefix = parts[0] || "";
    const suffix = parts[1] || "";

    displayValueNode = (
      <>
        {prefix}
        <AnimatedValue
          value={value}
          startAnimation={startAnimation}
          decimals={decimals}
        />
        {suffix}
      </>
    );
  } else {
    // This handles static strings like "Remote".
    displayValueNode = <span>{translationTemplate}</span>;
  }

  return (
    <div
      ref={panelRef}
      title={t(id + ".tooltip")}
      className="flex flex-col items-center text-center p-4 rounded-lg border border-border interactive-glow">
      <div className="w-8 h-8 text-info-accent mb-2">{icon}</div>
      <p className="font_fira_code text-sm text-secondary-text mb-1">
        {t(id + ".title")}
      </p>
      <p className="text-primary-text text-base md:text-lg font-semibold">
        {displayValueNode}
      </p>
    </div>
  );
};

export default InfoPanel;
