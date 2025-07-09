// src/components/Certifications.tsx
import "server-only";
import React from "react";
import CertificationsClient from "./CertificationsClient";
import type { CertificationItem } from "@/data/types";

// This is now a simple wrapper that receives props from page.tsx.
const Certifications = ({
  certificationsData,
}: {
  certificationsData: CertificationItem[];
}) => {
  return <CertificationsClient certificationsData={certificationsData} />;
};

export default Certifications;
