// src/components/AnimatedText.tsx
"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';

// --- Configuration for Dynamic Delay ---
const MAX_DELAY = 60; 
const MIN_DELAY = 20; 
const SHORT_TEXT_THRESHOLD = 15;
const LONG_TEXT_THRESHOLD = 80;  
// -------------------------------------

interface AnimatedTextProps {
  text: string;
  elementType?: keyof JSX.IntrinsicElements;
  className?: string;
  threshold?: number; 
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "", 
  elementType = 'span',
  className = '',
  threshold = 0.2, 
}) => {
  const [startTyping, setStartTyping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: threshold, 
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotion(mediaQuery.matches);
        const listener = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    if (inView && !reducedMotion) {
      setStartTyping(true);
    }
  }, [inView, reducedMotion]);

  const dynamicDelay = useMemo(() => {
    const length = text.length;
    if (length <= SHORT_TEXT_THRESHOLD) { return MAX_DELAY; }
    if (length >= LONG_TEXT_THRESHOLD) { return MIN_DELAY; }
    const lengthRange = LONG_TEXT_THRESHOLD - SHORT_TEXT_THRESHOLD;
    const delayRange = MAX_DELAY - MIN_DELAY;
    const fraction = (length - SHORT_TEXT_THRESHOLD) / lengthRange;
    return Math.round(MAX_DELAY - (fraction * delayRange));
  }, [text]);

  const baseTagClassName = useMemo(() => className, [className]);
  const Tag = elementType as React.ElementType; 

  if (reducedMotion) {
    const reducedMotionClassName = `${baseTagClassName} with-blinking-cursor`.trim();
    return (
      <Tag ref={ref} className={reducedMotionClassName}>
        {text}
      </Tag>
    );
  }

  return (
    <div ref={ref} className={`relative ${baseTagClassName}`}>
      <Tag className="invisible" aria-hidden="true">
        {text || ' '} 
      </Tag>
      
      {startTyping && (
        <Tag className="absolute top-0 left-0 w-full h-full"> 
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(dynamicDelay)
                .typeString(text)
                .start();
            }}
            options={{
              loop: false,
              cursor: '|', 
              cursorClassName: 'Typewriter__cursor--style',
              wrapperClassName: 'Typewriter__wrapper--inline', 
            }}
          />
        </Tag>
      )}
      {!startTyping && ( 
         <Tag className="invisible" aria-hidden="true">{text || ' '}</Tag>
      )}
    </div>
  );
};

export default AnimatedText;