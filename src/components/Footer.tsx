// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="w-full py-8 text-center border-t border-border-divider mt-12"> {/* Example styling */}
        <div className="container mx-auto px-4">
            <p className="text-sm text-secondary-text">
                © {new Date().getFullYear()} João Grilo. All Rights Reserved.
            </p>
            {/* Links or other footer content can go here */}
        </div>
    </footer>
  );
};

export default Footer;