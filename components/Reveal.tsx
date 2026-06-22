"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger helper: delay in seconds before this element animates in. */
  delay?: number;
  className?: string;
  /** Render as a different element (e.g. "li", "section"). */
  as?: "div" | "li" | "section";
};

/**
 * Subtle fade + small upward translation when scrolled into view.
 * Animates once, and collapses to a plain fade (no motion) when the
 * user prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
