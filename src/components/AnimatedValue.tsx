// src/components/AnimatedValue.tsx
"use client";

import CountUp from "react-countup";

interface AnimatedValueProps {
  value: number;
  startAnimation: boolean;
  decimals?: number;
  staggerDelay?: number; // New prop for cascading effect
}

const AnimatedValue: React.FC<AnimatedValueProps> = ({
  value,
  startAnimation,
  decimals = 0,
  staggerDelay = 0,
}) => {
  if (!startAnimation) {
    return <span aria-hidden="true"> </span>;
  }

  // The final delay is a base value (for the panel to appear) + a staggered value
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
