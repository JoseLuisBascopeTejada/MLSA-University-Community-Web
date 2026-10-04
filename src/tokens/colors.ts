// Canonical design tokens: Fluent primary + Tailwind accents.
// English-only comments per project_state.md language rule.

export const AREA_COLORS = {
  operations: {
    primary: "#005FB8",
    glow: "#3B82F6",
    cssVar: "var(--color-ops-blue)",
  },
  hr: {
    primary: "#107C10",
    glow: "#22C55E",
    cssVar: "var(--color-rrhh-green)",
  },
  finance: {
    primary: "#FFB900",
    glow: "#EAB308",
    cssVar: "var(--color-fin-yellow)",
  },
  marketing: {
    primary: "#F7630C",
    glow: "#FB923C",
    cssVar: "var(--color-mkt-orange)",
  },
} as const;

export type AreaKey = keyof typeof AREA_COLORS;
