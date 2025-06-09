// src/components/CssAnimatedText.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CssAnimatedTextProps {
  text: string;
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
}

const CssAnimatedText: React.FC<CssAnimatedTextProps> = ({
  text = "",
  elementType = "span",
  className = "",
}) => {
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
    }
  }, [inView]);

  const Tag = elementType as React.ElementType;

  return (
    <div ref={ref} className={className}>
      {startTyping ? (
        <Tag className="typewriter-css">{text}</Tag>
      ) : (
        <Tag> </Tag>
      )}
    </div>
  );
};

export default CssAnimatedText;
