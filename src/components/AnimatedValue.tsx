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
  // If the animation hasn't started, render a non-breaking space
  // to hold the space without showing a "0".
  if (!startAnimation) {
    return <span aria-hidden="true"> </span>;
  }

  // Once triggered, render the CountUp component to animate the number.
  return (
    <CountUp
      start={0}
      end={value}
      duration={2.5}
      decimals={decimals}
      useEasing={true}
    />
  );
};

export default AnimatedValue;
