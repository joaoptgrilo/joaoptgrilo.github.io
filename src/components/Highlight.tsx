// src/components/Highlight.tsx
import React from "react";
import Glitch from "./Glitch";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

const extractText = (node: React.ReactNode): string => {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node) && node.props.children) {
    return extractText(node.props.children);
  }
  return "";
};

const Highlight = ({ children, className = "" }: HighlightProps) => {
  const text = extractText(children);

  return (
    <span className={`font-fira-code text-accent font-medium ${className}`}>
      <Glitch autoGlitch={{ interval: 8000 + Math.random() * 6000 }}>
        {text}
      </Glitch>
    </span>
  );
};

export default Highlight;
