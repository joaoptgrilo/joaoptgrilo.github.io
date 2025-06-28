// src/components/Certifications.tsx
import "server-only";
import React from "react";
import { getData } from "@/data";
import { getLocale } from "next-intl/server";
import CertificationsClient from "./CertificationsClient";

const Certifications = async () => {
  const locale = (await getLocale()) as "en" | "pt";
  const dataLoaders = getData(locale);
  const certificationsData = await dataLoaders.getCertifications();

  return <CertificationsClient certificationsData={certificationsData} />;
};

export default Certifications;
