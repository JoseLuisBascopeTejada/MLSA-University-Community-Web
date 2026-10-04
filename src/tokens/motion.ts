// Shared Motion physics constants: springs, staggers, easings.
// Animate only transform / opacity to hold 60/120 FPS.

import type { Transition } from "motion/react";

export const SPRING_CTA: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 1,
};

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 170,
  damping: 24,
  mass: 1,
};

export const EASE_OUT_EXPO: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
};

export const STAGGER_FAST = 0.06;
export const STAGGER_MEDIUM = 0.12;

export const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
} as const;
