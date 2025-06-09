// src/components/AnimatedText.tsx
"use client";

import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

interface AnimatedTextProps {
  text: string;
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
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
    <div ref={ref} className={`relative ${className}`}>
      <Tag className="invisible" aria-hidden="true">
        {text || " "}
      </Tag>

      {startTyping && (
        <Tag className="absolute top-0 left-0 w-full h-full">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(40).typeString(text).start();
            }}
            options={{
              loop: false,
              cursor: "|",
              cursorClassName: "Typewriter__cursor--style",
            }}
          />
        </Tag>
      )}
    </div>
  );
};

export default AnimatedText;
