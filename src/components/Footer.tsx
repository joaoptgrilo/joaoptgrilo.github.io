// src/components/Footer.tsx
import React from "react";
import Panel from "./Panel";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const websiteVersion = "v0.9.3"; // Bump patch version for accessibility fix

  return (
    <footer id="footer" className="w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <Panel className="text-center">
          <p className="text-sm text-secondary-text font-fira_code">
            © {currentYear} João Grilo. All Rights Reserved.
          </p>
          {/* UPDATED: text-neutral-500 changed to text-neutral-400 for better contrast */}
          <p className="text-xs mt-2 text-neutral-400 font-fira_code">
            Version: {websiteVersion}
          </p>
        </Panel>
      </div>
    </footer>
  );
};

export default Footer;
