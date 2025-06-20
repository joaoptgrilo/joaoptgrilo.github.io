// src/components/Footer.tsx
import React from "react";
import Panel from "./Panel";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const websiteVersion = "v1.0.0-perf-baseline";

  return (
    <footer id="footer" className="w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <Panel className="text-center animate-on-scroll">
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