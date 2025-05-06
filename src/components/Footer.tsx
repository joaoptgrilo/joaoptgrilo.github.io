// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const websiteVersion = "v0.1.0";
  return (
    <footer className="w-full py-6 md:py-8 text-center text-secondary bg-secondary-bg border-t border-gray-700">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          © {currentYear} João Grilo. All Rights Reserved.
        </p>
        <p className="text-xs mt-1">Version: {websiteVersion}</p>
      </div>
    </footer>
  );
};
export default Footer;
