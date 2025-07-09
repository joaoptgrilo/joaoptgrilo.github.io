// src/components/InfoPanel.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import AnimatedValue from "./AnimatedValue";
import Panel from "./Panel";
import type { MetricItem } from "@/data/types";
import { useTranslations } from "next-intl";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface InfoPanelProps {
  metric: MetricItem;
  icon: React.ReactNode;
  staggerDelay: number;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  metric,
  icon,
  staggerDelay,
}) => {
  const t = useTranslations("About.metrics");
  const panelRef = useRef<HTMLDivElement>(null);

  const isPanelInView = useIntersectionObserver(panelRef, { threshold: 0.5 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isPanelInView && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isPanelInView, hasBeenVisible]);

  const { id, value, decimals, stacks } = metric;
  const valueClasses = "text-primary-text text-lg font-bold font-fira_code";

  let displayValueNode: React.ReactNode;

  if (stacks) {
    displayValueNode = (
      <p className={valueClasses}>
        {stacks.map((stack, index) => (
          <React.Fragment key={stack.name}>
            {stack.name}
            {index < stacks.length - 1 && <span>, </span>}
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
            startAnimation={hasBeenVisible}
            decimals={decimals}
            staggerDelay={staggerDelay * 0.1}
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
      ref={panelRef}
      variant="simple"
      title={t(id + ".tooltip")}
      className="flex flex-col items-center justify-center text-center p-4 interactive-glow h-full min-h-[160px]">
      <div className="w-10 h-10 text-info-accent mb-3">{icon}</div>
      <p className="flex-grow text-xs text-secondary-text mb-2">
        {t(id + ".title")}
      </p>
      {displayValueNode}
    </Panel>
  );
};

// ADDED: The missing default export line
export default InfoPanel;
