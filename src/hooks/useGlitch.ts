// src/hooks/useGlitch.ts
"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface UseGlitchOptions {
  onComplete?: () => void;
}

const useGlitch = (text: string, options?: UseGlitchOptions) => {
  const [displayText, setDisplayText] = useState(text);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const GLITCH_CHARS = "<>*#{}[]/\\";
  const REVEAL_DURATION_MS = 400;
  const SCRAMBLE_UPDATE_RATE_MS = 25;
  let lastScrambleTime = 0;

  const reset = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setDisplayText(text);
    startTimeRef.current = undefined;
  }, [text]);

  const animate = useCallback(
    (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
        lastScrambleTime = timestamp;
      }

      const elapsedTime = timestamp - startTimeRef.current;
      const revealProgress = Math.min(elapsedTime / REVEAL_DURATION_MS, 1);
      const charsToReveal = Math.floor(text.length * revealProgress);

      let shouldScramble =
        timestamp - lastScrambleTime > SCRAMBLE_UPDATE_RATE_MS;
      if (shouldScramble) {
        lastScrambleTime = timestamp;
      }

      const newDisplayText = text
        .split("")
        .map((char, index) => {
          if (index < charsToReveal) return text[index];
          if (char === " ") return " ";
          return shouldScramble
            ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            : displayText[index];
        })
        .join("");

      setDisplayText(newDisplayText);

      if (revealProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        options?.onComplete?.();
      }
    },
    [text, displayText, options]
  );

  const startGlitch = useCallback(() => {
    reset();
    requestAnimationFrame(animate);
  }, [animate, reset]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return { displayText, startGlitch, reset };
};

export default useGlitch;