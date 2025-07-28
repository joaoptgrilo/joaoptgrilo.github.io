// src/lib/utils.tsx
import React from "react";
import Highlight from "@/components/Highlight";

export const parseWithHighlight = (text: string): React.ReactNode => {
  if (!text) return text;

  const parts = text.split(/(\{[^}]+\})/g);

  return parts.map((part, index) => {
    if (part.startsWith("{") && part.endsWith("}")) {
      const content = part.substring(1, part.length - 1);
      return <Highlight key={index}>{content}</Highlight>;
    }
    return part;
  });
};
