// src/components/Certifications.tsx
import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedPanel from "./AnimatedPanel";
// Assuming the .tsx extension will be resolved automatically by your bundler
import {
  certificationsData,
  CertificationItem,
} from "@/data/certificationsData";
import { FaCertificate, FaExternalLinkAlt, FaUniversity } from "react-icons/fa"; // Or other relevant icons

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="section-scroll-margin py-16 md:py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Certifications"
          elementType="h2"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center text-primary-text"
        />

        {certificationsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certificationsData.map(
              (cert: CertificationItem, index: number) => (
                <AnimatedPanel
                  key={cert.id}
                  className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 rounded-lg panel-with-corners relative animate-glow-shadow flex flex-col h-full" // Ensuring full height for consistent card size in grid
                  staggerDelay={index * 0.1} // Stagger animation
                >
                  <div className="flex-grow mb-4">
                    {" "}
                    {/* Allows description to take space */}
                    <div className="flex items-center mb-3">
                      <FaCertificate className="w-6 h-6 mr-3 text-info-accent flex-shrink-0" />
                      <h3 className="text-lg md:text-xl font-semibold text-accent leading-tight">
                        {cert.name}
                      </h3>
                    </div>
                    <div className="flex items-center text-xs text-secondary-text mb-3 font-fira_code">
                      <FaUniversity className="w-3.5 h-3.5 mr-1.5 text-neutral-400 flex-shrink-0" />
                      <span>Issued by: {cert.issuer}</span>
                    </div>
                    {cert.issueDate && ( // Conditionally render issue date
                      <p className="text-xs text-neutral-400 mb-3 font-fira_code">
                        Issued: {cert.issueDate}
                      </p>
                    )}
                    {cert.description && (
                      <p className="text-sm text-secondary-text leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* Call to Action / Verification Link */}
                  <div className="mt-auto pt-4 border-t border-neutral-700/30">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full text-sm text-info-accent hover:text-accent font-medium transition-colors duration-300 
                               bg-primary-bg/70 hover:bg-primary-bg px-4 py-2.5 rounded-md border border-info-accent/50 hover:border-accent interactive-glow">
                      <FaExternalLinkAlt className="mr-2 h-3.5 w-3.5" />
                      Verify Certificate
                    </a>
                  </div>
                </AnimatedPanel>
              )
            )}
          </div>
        ) : (
          <AnimatedPanel className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 rounded-lg panel-with-corners relative animate-glow-shadow text-center">
            <p className="text-lg text-secondary-text">
              Certification details are currently being updated. Please check
              back soon!
            </p>
          </AnimatedPanel>
        )}
      </div>
    </section>
  );
};

export default Certifications;
