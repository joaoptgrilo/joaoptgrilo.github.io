// src/components/About.tsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary-bg"> {/* Example padding and background */}
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold font-mono text-center mb-12">About Me</h2> {/* Placeholder heading */}
           <p className="text-center text-secondary-text">About section content will go here...</p>
        </div>
    </section>
  );
};

export default About;