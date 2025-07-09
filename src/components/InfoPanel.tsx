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
  const { id, value, decimals, stacks } = metric;

  let displayValueNode: React.ReactNode;
  const valueClasses = "text-primary-text text-lg font-bold font-fira_code";

  if (stacks) {
    displayValueNode = (
      <p className={valueClasses}>
        {stacks.map((stack, index) => (
          <React.Fragment key={stack.name}>
            {stack.name}
            {index < stacks.length - 1 && <span className="mx-1">,</span>}
          </React.Fragment>
        ))}
      </p>
    );
  } else {
    const translationTemplate = t.raw(`${id}.displayValue`) as string;
    if (value !== undefined && translationTemplate.includes("{value}")) {
      const parts = translationTemplate.split("{value}");
      const prefix = parts[0] || "";
      const suffix = parts[1] || "";

      displayValueNode = (
        <p className={valueClasses}>
          {prefix}
          <AnimatedValue
            value={value}
            startAnimation={true}
            decimals={decimals}
          />
          {suffix}
        </p>
      );
    } else {
      displayValueNode = <p className={valueClasses}>{translationTemplate}</p>;
    }
  }

  return (
    <Panel
      variant="simple"
      title={t(id + ".tooltip")}
      className="flex flex-col items-center justify-center text-center p-4 interactive-glow h-full min-h-[160px]">
      <div className="w-10 h-10 text-info-accent mb-3">{icon}</div>
      <p className="flex-grow text-xs text-secondary-text mb-2">
        {t(id + ".title")}
      </p>
      {/* REMOVED: The incorrect transition styles from this element */}
      {displayValueNode}
    </Panel>
  );
};

export default InfoPanel;
