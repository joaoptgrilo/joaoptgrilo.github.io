// src/components/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16"> {/* Added padding-top to account for fixed nav */}
      <h2 className="text-4xl font-bold font-mono text-center">Hero Section</h2> {/* Placeholder heading */}
    </section>
  );
};

export default Hero;