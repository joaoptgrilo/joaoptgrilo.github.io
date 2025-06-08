// src/components/Footer.tsx
import React from "react";
import AnimatedPanel from "./AnimatedPanel";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const websiteVersion = "v0.8.0";

  return (
    <footer id="footer" className="w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <AnimatedPanel
          className="w-full bg-light-panel-bg/10 backdrop-blur-md 
                     border border-neutral-700/50 p-6 md:p-8 
                     rounded-lg panel-with-corners relative animate-glow-shadow text-center">
          <p className="text-sm text-secondary-text font-fira_code">
            © {currentYear} João Grilo. All Rights Reserved.
          </p>
          <p className="text-xs mt-2 text-neutral-500 font-fira_code">
            Version: {websiteVersion}
          </p>
        </AnimatedPanel>
      </div>
    </footer>
  );
};

export default Footer;
