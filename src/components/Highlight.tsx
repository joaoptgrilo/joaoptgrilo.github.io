// src/components/Highlight.tsx
import React from "react";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

const Highlight: React.FC<HighlightProps> = ({ children, className = "" }) => {
  return (
    <span className={`font-fira_code text-accent font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Highlight;
