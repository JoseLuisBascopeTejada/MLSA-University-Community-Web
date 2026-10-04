# MLSA-University-Community-Web

Interactive landing page for the Microsoft Student Ambassadors university community.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` tokens in `src/index.css`)
- Motion (`motion/react`) for springs, staggers, shared-element transitions
- Three.js (lazy-loaded in Phase 2; Phase 1 ships a dependency-free canvas stub)

## Design tokens

Fluent primary + Tailwind accents:

| Area       | Primary   | Glow/Accent |
| ---------- | --------- | ----------- |
| Operations | `#005FB8` | `#3B82F6`   |
| HR         | `#107C10` | `#22C55E`   |
| Finance    | `#FFB900` | `#EAB308`   |
| Marketing  | `#F7630C` | `#FB923C`   |

Finance yellow is restricted to dark surfaces (see `.on-dark-yellow`).

## Develop

```bash
npm install
npm run dev
```

Docker (Node 22 Alpine dev container):

```bash
docker build -t mlsa-web .
docker run --rm -p 5173:5173 -v ${PWD}:/app mlsa-web
```

## Verify

```bash
npx tsc --noEmit
npm run build
```

Last verification (2026-10-04): typecheck clean, production build success —
`dist/assets/index-Clj48UvV.js` 354 KB (gzip 112 KB),
`dist/assets/index-DPGjhJBb.css` 19 KB (gzip 4.5 KB).

## Specs

- `plan.md` — architecture and phased roadmap
- `agents.md` — SDD roles and responsibilities
- `project_state.md` — phase checklist and progress
