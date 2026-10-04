// Color-coded area card: Fluent primary band + Tailwind glow on hover.
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { SPRING_SOFT } from "../tokens/motion";
import type { AreaKey } from "../tokens/colors";
import { AREA_COLORS } from "../tokens/colors";

interface AreaCardProps {
  areaKey: AreaKey;
  title: string;
  tagline: string;
  discoverLabel: string;
}

export function AreaCard({
  areaKey,
  title,
  tagline,
  discoverLabel,
}: AreaCardProps) {
  const reducedMotion = useReducedMotion();
  const color = AREA_COLORS[areaKey];

  return (
    <motion.article
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={SPRING_SOFT}
      className="glass-panel group relative overflow-hidden rounded-2xl p-6 text-left"
      style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5"
        style={{
          background: `linear-gradient(90deg, ${color.primary}, ${color.glow})`,
        }}
      />
      <span
        aria-hidden="true"
        className="mb-4 inline-block h-10 w-10 rounded-xl"
        style={{ backgroundColor: color.primary }}
      />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{tagline}</p>
      <span
        className="mt-4 inline-block text-xs font-bold tracking-wide uppercase"
        style={{ color: color.glow }}
      >
        {discoverLabel}
      </span>
    </motion.article>
  );
}
