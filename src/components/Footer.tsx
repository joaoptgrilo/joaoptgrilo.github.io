// src/components/Footer.tsx
"use client";

import React from "react";
import Panel from "./Panel";
import { useTranslations } from "next-intl";
import AnimateOnScroll from "./AnimateOnScroll";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const websiteVersion = "v1.0.0";

  return (
    <footer id="footer" className="w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <Panel variant="default" className="text-center">
            <p className="text-sm text-secondary-text font_fira_code">
              {t("copyright", { currentYear })}
            </p>
            <p className="text-xs mt-2 text-neutral-500 font_fira_code">
              {t("version", { versionNumber: websiteVersion })}
            </p>
          </Panel>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
