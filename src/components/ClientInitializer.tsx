// src/components/ClientInitializer.tsx
"use client";

import { useScrollVelocity } from "@/hooks/useScrollVelocity";

const ClientInitializer = () => {
  // This component's only purpose is to run client-side hooks at the root level.
  useScrollVelocity();

  return null; // It renders nothing.
};

export default ClientInitializer;
