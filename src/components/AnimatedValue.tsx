// src/components/AnimatedValue.tsx
"use client";

import CountUp from "react-countup";

interface AnimatedValueProps {
  value: number;
  startAnimation: boolean;
  decimals?: number;
}

const AnimatedValue: React.FC<AnimatedValueProps> = ({
  value,
  startAnimation,
  decimals = 0,
}) => {
  if (!startAnimation) {
    return <span aria-hidden="true"> </span>;
  }

  return (
    <CountUp
      start={0}
      end={value}
      duration={2.5}
      // ADDED: Delay the start of the count-up by 0.5s to match the panel's animation
      delay={0.5}
      decimals={decimals}
      useEasing={true}
    />
  );
};

export default AnimatedValue;
