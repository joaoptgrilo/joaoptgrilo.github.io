// src/components/Certifications.tsx
import React from "react";
import AnimatedText from "./AnimatedText";
import AnimatedPanel from "./AnimatedPanel";
import {
  certificationsData,
  CertificationItem,
} from "@/data/certificationsData";
import { FaCertificate, FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

const Certifications = () => {
  const nextCertIndex = certificationsData.length;

  return (
    <section
      id="certifications"
      className="section-scroll-margin py-16 md:py-24 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Certifications & Continued Learning"
          elementType="h2"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center text-primary-text"
        />

        {certificationsData.length > 0 ? (
          // MODIFIED: Changed div to ul
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {certificationsData.map(
              (cert: CertificationItem, index: number) => (
                // MODIFIED: Wrapped panel in li
                <li key={cert.id} className="flex">
                  <AnimatedPanel
                    className="bg-light-panel-bg/10 backdrop-blur-md border border-neutral-700/50 p-6 rounded-lg panel-with-corners relative animate-glow-shadow flex flex-col h-full group w-full"
                    staggerDelay={index * 0.1}>
                    <div className="flex-grow mb-4">
                      <div className="flex items-start mb-3">
                        <FaCertificate className="w-5 h-5 md:w-6 md:h-6 mr-3 mt-1 text-info-accent flex-shrink-0 group-hover:text-accent transition-colors" />
                        <p className="text-base md:text-lg font-semibold text-accent group-hover:text-accent-hover transition-colors leading-tight">
                          {cert.name}
                        </p>
                      </div>
                      <div className="flex items-center text-xs text-secondary-text mb-1 font-fira_code pl-9">
                        <FaUniversity className="w-3.5 h-3.5 mr-1.5 text-neutral-400 flex-shrink-0" />
                        <span>Issued by: {cert.issuer}</span>
                      </div>
                      {cert.issueDate && (
                        <p className="text-xs text-neutral-400 mb-3 font-fira_code pl-9">
                          Issued: {cert.issueDate}
                        </p>
                      )}
                      {cert.description && (
                        <p className="text-xs md:text-sm text-secondary-text leading-relaxed mt-2 pl-9">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-auto pt-4 border-t border-neutral-700/30">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${cert.name} certificate`}
                        className="inline-flex items-center justify-center w-full text-sm text-info-accent hover:text-accent font-medium transition-colors duration-300 bg-primary-bg/70 hover:bg-primary-bg px-4 py-2.5 rounded-md border border-info-accent/50 hover:border-accent interactive-glow">
                        <FaExternalLinkAlt className="mr-2 h-3.5 w-3.5" />
                        Verify Certificate
                      </a>
                    </div>
                  </AnimatedPanel>
                </li>
              )
            )}

            {/* MODIFIED: Wrapped panel in li */}
            <li className="flex">
              <AnimatedPanel
                className="bg-light-panel-bg/10 backdrop-blur-md border-2 border-dashed border-neutral-700/50 p-6 rounded-lg panel-with-corners relative flex flex-col h-full items-center justify-center text-center group hover:border-accent/50 hover:animate-glow-shadow transition-all duration-300 w-full"
                staggerDelay={nextCertIndex * 0.1}>
                <FiClock className="w-10 h-10 md:w-12 md:h-12 text-neutral-500 group-hover:text-accent transition-colors duration-300 mb-4" />
                <p className="font-fira_code text-base md:text-lg text-secondary-text group-hover:text-primary-text transition-colors duration-300 font-semibold">
                  More Certifications
                </p>
                <p className="text-xs md:text-sm text-neutral-500 group-hover:text-secondary-text transition-colors duration-300">
                  And learning milestones coming soon...
                </p>
              </AnimatedPanel>
            </li>
          </ul>
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