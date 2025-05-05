// src/components/Navigation.tsx
import React from 'react';

const Navigation = () => {
  return (
    // We'll likely move this to layout.tsx or handle differently for sticky later
    <nav id="navigation" className="w-full p-4 border-b border-border-divider fixed top-0 left-0 bg-primary-bg bg-opacity-80 backdrop-blur-sm z-50"> {/* Basic example fixed nav */}
      <h2 className="text-xl font-bold font-mono text-center text-accent">Navigation Placeholder</h2>
      {/* Links will go here later */}
    </nav>
  );
};

export default Navigation;