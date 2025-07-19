// src/hooks/useGlitch.ts
"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface AutoGlitchOptions {
  interval: number;
  startDelay?: number;
}

interface UseGlitchOptions {
  onComplete?: () => void;
  duration?: number;
  scrambleRate?: number;
  autoGlitch?: AutoGlitchOptions;
}

const useGlitch = (
  text: string,
  {
    onComplete,
    duration = 500,
    scrambleRate = 1,
    autoGlitch,
  }: UseGlitchOptions = {}
) => {
  const [displayText, setDisplayText] = useState(text);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const lastScrambleTimeRef = useRef<number>(0);
  const displayTextRef = useRef<string>(text);

  const GLITCH_CHARS = "_-/>[]{}*";

  useEffect(() => {
    displayTextRef.current = displayText;
  }, [displayText]);

  const reset = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }
    setDisplayText(text);
    startTimeRef.current = undefined;
    lastScrambleTimeRef.current = 0;
  }, [text]);

  const animate = useCallback(
    (timestamp: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = timestamp;
        lastScrambleTimeRef.current = timestamp;
      }

      const elapsedTime = timestamp - startTimeRef.current;
      const revealProgress = Math.min(elapsedTime / duration, 1);
      const charsToReveal = Math.floor(text.length * revealProgress);

      const shouldScramble =
        timestamp - lastScrambleTimeRef.current > scrambleRate;
      if (shouldScramble) {
        lastScrambleTimeRef.current = timestamp;
      }

      const newDisplayText = text
        .split("")
        .map((char, index) => {
          if (index < charsToReveal) return char;
          if (char === " ") return " ";
          return shouldScramble
            ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            : displayTextRef.current[index];
        })
        .join("");

      setDisplayText(newDisplayText);

      if (revealProgress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
        onComplete?.();
      }
    },
    [text, duration, scrambleRate, onComplete]
  );

  const startGlitch = useCallback(() => {
    reset();
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [animate, reset]);

  useEffect(() => {
    if (!autoGlitch) return;

    let intervalId: NodeJS.Timeout | undefined;
    const initialDelay =
      autoGlitch.startDelay ?? Math.random() * autoGlitch.interval;

    const startTimeoutId = setTimeout(() => {
      startGlitch();
      intervalId = setInterval(startGlitch, autoGlitch.interval);
    }, initialDelay);

    return () => {
      clearTimeout(startTimeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoGlitch, startGlitch]);

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
