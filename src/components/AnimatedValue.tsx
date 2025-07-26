// src/components/AnimatedValue.tsx
"use client";

import CountUp from "react-countup";

interface AnimatedValueProps {
  value: number;
  startAnimation: boolean;
  decimals?: number;
  staggerDelay?: number;
}

const AnimatedValue = ({
  value,
  startAnimation,
  decimals = 0,
  staggerDelay = 0,
}: AnimatedValueProps) => {
  if (!startAnimation) {
    return <span aria-hidden="true"> </span>;
  }

  const finalDelay = 0.35 + staggerDelay;

  return (
    <CountUp
      start={0}
      end={value}
      duration={2.5}
      delay={finalDelay}
      decimals={decimals}
      useEasing={true}
    />
  );
};

export default AnimatedValue;
