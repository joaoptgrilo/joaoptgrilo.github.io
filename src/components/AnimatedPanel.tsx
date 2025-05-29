// src/components/AnimatedPanel.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface AnimatedPanelProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.5,
    },
  },
};

const AnimatedPanel: React.FC<AnimatedPanelProps> = ({
  children,
  className,
  staggerDelay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={panelVariants}
      className={className}
      style={{ transitionDelay: `${staggerDelay}s` }}>
      {children}
    </motion.div>
  );
};

export default AnimatedPanel;
