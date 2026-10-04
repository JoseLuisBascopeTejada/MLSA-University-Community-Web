# Project State: Microsoft Student Ambassadors Landing Page

## Current Status Overview
* **Phase:** Phase 2 - Immersive Background & Hero Section (Active; Phase 1 complete and verified 2026-10-04)
* **Active Environment:** Docker container running OpenCode with SDD methodology
* **Language/Localization:** English (Strict adherence across code, comments, and documentation)

---

## Task Checklist & Progress Tracking

### Phase 1: Foundation & Design System Setup
- [x] Initialize Vite + React 19 + TypeScript template structure
- [x] Configure Tailwind CSS v4 with custom color variables for the 4 areas:
  - Operations (`--color-ops-blue: #005FB8`)
  - RRHH (`--color-rrhh-green: #107C10`)
  - Finance (`--color-fin-yellow: #FFB900`)
  - Marketing (`--color-mkt-orange: #F7630C`)
- [x] Setup accessibility base and `prefers-reduced-motion` global mixins
- [x] Verified: `npx tsc -b` clean, `npm run build` success (dist JS 354 KB / gzip 112 KB)

### Phase 2: Immersive Background & Hero Section
- [ ] Implement lightweight Three.js particle background with spotlight effect (Phase 1 ships dependency-free canvas stub; Spline dropped per decision)
- [ ] Build Hero Section with staggered headline reveals and spring physics CTAs (stub exists, needs scroll triggers + full polish)

### Phase 3: Core Area Modules (Bento Grid)
- [ ] Construct Bento Grid layout featuring the 4 organizational pillars with color accents
- [ ] Integrate interactive hover states and depth elevation effects

### Phase 4: Advanced Animations & Interactive Components
- [ ] Implement FAQ accordion using Motion `layoutId` (Shared Element Transition)
- [ ] Add crossfade tab switching and dynamic blur overlays
- [ ] Build staggered entrance animations for section elements

### Phase 5: Verification & Deployment Readiness
- [ ] Run final bundle analysis and performance audit
- [x] Verify container build success inside Docker environment (`mlsa-web:phase1` image builds + `npm run build` clean, identical artifacts)