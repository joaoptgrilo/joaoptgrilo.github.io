// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full border-t border-border-divider bg-primary-bg py-8 text-center">
      <div className="container mx-auto px-6">
        {" "}
        {/* Standard container padding */}
        <p className="text-sm font-sans text-secondary-text">
          © {new Date().getFullYear()} João Grilo. All Rights Reserved.
        </p>
        {/* Future: Add social media icons or quick links if desired */}
      </div>
    </footer>
  );
};

export default Footer;
