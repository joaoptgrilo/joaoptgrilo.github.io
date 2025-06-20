// src/components/Footer.tsx
import React from "react";
import Panel from "./Panel";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const websiteVersion = "v1.0.0-perf-baseline";

  return (
    <footer id="footer" className="bg-light-panel-bg/10 backdrop-blur-md border-2 border-dashed border-neutral-700/50 p-6 rounded-lg panel-with-corners relative flex flex-col h-full items-center justify-center text-center group hover:border-accent/50 animate-glow-shadow transition-all duration-300 w-full">
      <div className="container mx-auto px-4 animate-on-scroll">
        <Panel className="text-center">
          <p className="text-sm text-secondary-text font-fira_code">
            © {currentYear} João Grilo. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-neutral-500 font-fira_code">
            Version: {websiteVersion}
          </p>
        </Panel>
      </div>
    </footer>
  );
};

export default Footer;
