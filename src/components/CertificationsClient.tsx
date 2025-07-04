// src/components/CertificationsClient.tsx
"use client";
import React from "react";
import { CertificationItem } from "@/data";
import { FaCertificate, FaExternalLinkAlt, FaUniversity } from "react-icons/fa";
import { FiClock, FiActivity } from "react-icons/fi";
import Section from "./Section";
import Panel from "./Panel";
import { useTranslations } from "next-intl";

const CertificationsClient = ({
  certificationsData,
}: {
  certificationsData: CertificationItem[];
}) => {
  const t = useTranslations("MoreComing");
  const tCerts = useTranslations("Certifications");

  return (
    <Section id="certifications" title="certifications">
      {certificationsData.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificationsData.map((cert) => (
            <Panel
              as="li"
              key={cert.id}
              className="flex flex-col h-full group w-full"
              variant="default">
              <div className="flex-grow mb-4">
                <div className="flex items-start mb-3">
                  {cert.isInProgress ? (
                    <FiActivity className="w-5 h-5 md:w-6 md:h-6 mr-3 mt-1 text-info-accent flex-shrink-0 group-hover:text-accent transition-colors" />
                  ) : (
                    <FaCertificate className="w-5 h-5 md:w-6 md:h-6 mr-3 mt-1 text-info-accent flex-shrink-0 group-hover:text-accent transition-colors" />
                  )}
                  <p className="text-base md:text-lg font-semibold text-accent group-hover:text-accent-hover transition-colors leading-tight">
                    {cert.name}
                  </p>
                </div>
                <div className="flex items-center text-xs text-secondary-text mb-1 font_fira_code pl-9">
                  <FaUniversity className="w-3.5 h-3.5 mr-1.5 text-neutral-400 flex-shrink-0" />
                  <span>
                    {tCerts("issuerLabel")}: {cert.issuer}
                  </span>
                </div>
                {cert.issueDate && (
                  <p className="text-xs text-neutral-400 mb-3 font_fira_code pl-9">
                    {tCerts("dateLabel")}: {cert.issueDate}
                  </p>
                )}
                {cert.description && (
                  <p className="text-xs md:text-sm text-secondary-text leading-relaxed mt-2 pl-9">
                    {cert.description}
                  </p>
                )}
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-700/30">
                {cert.isInProgress ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View progress for ${cert.name}`}
                    className="inline-flex items-center justify-center w-full text-sm text-info-accent hover:text-accent font-medium transition-colors duration-300 bg-primary-bg/70 hover:bg-primary-bg px-4 py-2.5 rounded-md border border-info-accent/50 hover:border-accent interactive-glow">
                    <FiActivity className="mr-2 h-3.5 w-3.5" />
                    {tCerts("progressButton")}
                  </a>
                ) : (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.name} certificate`}
                    className="inline-flex items-center justify-center w-full text-sm text-info-accent hover:text-accent font-medium transition-colors duration-300 bg-primary-bg/70 hover:bg-primary-bg px-4 py-2.5 rounded-md border border-info-accent/50 hover:border-accent interactive-glow">
                    <FaExternalLinkAlt className="mr-2 h-3.5 w-3.5" />
                    {tCerts("verifyButton")}
                  </a>
                )}
              </div>
            </Panel>
          ))}
          <li className="flex">
            <div className="bg-light-panel-bg/10 backdrop-blur-md border-2 border-dashed border-neutral-700/50 p-6 rounded-lg panel-with-corners relative flex flex-col h-full items-center justify-center text-center group hover:border-accent/50 transition-all duration-300 w-full">
              <div className="animate-on-scroll p-6">
                <FiClock className="w-12 h-12 text-neutral-500 group-hover:text-accent transition-colors duration-300 mb-4 mx-auto" />
                <p className="font_fira_code text-lg text-secondary-text group-hover:text-primary-text transition-colors duration-300 font-semibold">
                  {t("title", { item: t("certifications") })}
                </p>
                <p className="text-sm text-neutral-500 group-hover:text-secondary-text transition-colors duration-300">
                  {t("description")}
                </p>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <Panel variant="default" className="text-center">
          <p className="text-lg text-secondary-text">{tCerts("noCerts")}</p>
        </Panel>
      )}
    </Section>
  );
};
export default CertificationsClient;
