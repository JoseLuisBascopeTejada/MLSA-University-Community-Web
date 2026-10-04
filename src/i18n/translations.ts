// English/Spanish UI dictionary. User-facing strings only;
// code comments stay in English per the project language rule.
import type { AreaKey } from "../tokens/colors";

export const LANGUAGES = ["en", "es"] as const;
export type Language = (typeof LANGUAGES)[number];

export function isLanguage(value: string): value is Language {
  return (LANGUAGES as readonly string[]).includes(value);
}

export interface AreaContent {
  title: string;
  tagline: string;
}

export interface FaqEntry {
  q: string;
  a: string;
}

export interface Dictionary {
  nav: {
    areas: string;
    faq: string;
    toggleLabel: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleGradient: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  sections: {
    areasTitle: string;
    areasSubtitle: string;
    discoverMore: string;
  };
  areas: Record<AreaKey, AreaContent>;
  faq: {
    title: string;
    entries: FaqEntry[];
  };
  footer: {
    tagline: string;
  };
}

export const translations: Record<Language, Dictionary> = {
  en: {
    nav: {
      areas: "Areas",
      faq: "FAQ",
      toggleLabel: "Language",
    },
    hero: {
      eyebrow: "Microsoft Student Ambassadors",
      titlePrefix: "Learn, build, and",
      titleGradient: "grow together",
      description:
        "Join hackathons, workshops, and community programs across Operations, HR, Finance, and Marketing.",
      primaryCta: "Explore the 4 areas",
      secondaryCta: "How to join",
    },
    sections: {
      areasTitle: "Four areas, one community",
      areasSubtitle:
        "Each pillar owns its programs and is identified by its Fluent color.",
      discoverMore: "Discover more",
    },
    areas: {
      operations: {
        title: "Operations",
        tagline: "Hackathons, workshops, and event management",
      },
      hr: {
        title: "Human Resources",
        tagline: "Onboarding, member growth, and team coordination",
      },
      finance: {
        title: "Finance",
        tagline: "Sponsors, budgeting, and partnerships",
      },
      marketing: {
        title: "Marketing",
        tagline: "Banners, social media, and outreach",
      },
    },
    faq: {
      title: "Frequently asked questions",
      entries: [
        {
          q: "Who can join the community?",
          a: "Any university student interested in technology, community building, and shared learning.",
        },
        {
          q: "Do I need prior experience?",
          a: "No. Each area offers onboarding paths from beginner workshops to advanced hackathons.",
        },
        {
          q: "How are the 4 areas organized?",
          a: "Operations runs events, HR onboards members, Finance manages sponsors, and Marketing leads outreach.",
        },
      ],
    },
    footer: {
      tagline:
        "Microsoft Student Ambassadors — University Community. Phase 1 foundation build.",
    },
  },
  es: {
    nav: {
      areas: "Áreas",
      faq: "FAQ",
      toggleLabel: "Idioma",
    },
    hero: {
      eyebrow: "Microsoft Student Ambassadors",
      titlePrefix: "Aprende, crea y",
      titleGradient: "crece en comunidad",
      description:
        "Únete a hackathons, talleres y programas comunitarios en Operaciones, Recursos Humanos, Finanzas y Marketing.",
      primaryCta: "Explora las 4 áreas",
      secondaryCta: "Cómo unirse",
    },
    sections: {
      areasTitle: "Cuatro áreas, una comunidad",
      areasSubtitle:
        "Cada pilar lidera sus programas y se identifica por su color Fluent.",
      discoverMore: "Descubre más",
    },
    areas: {
      operations: {
        title: "Operaciones",
        tagline: "Hackathons, talleres y gestión de eventos",
      },
      hr: {
        title: "Recursos Humanos",
        tagline: "Incorporación, crecimiento y coordinación del equipo",
      },
      finance: {
        title: "Finanzas",
        tagline: "Patrocinios, presupuestos y alianzas",
      },
      marketing: {
        title: "Marketing",
        tagline: "Carteles, redes sociales y difusión",
      },
    },
    faq: {
      title: "Preguntas frecuentes",
      entries: [
        {
          q: "¿Quién puede unirse a la comunidad?",
          a: "Cualquier estudiante universitario con interés en la tecnología, la comunidad y el aprendizaje compartido.",
        },
        {
          q: "¿Necesito experiencia previa?",
          a: "No. Cada área ofrece rutas de incorporación desde talleres para principiantes hasta hackathons avanzados.",
        },
        {
          q: "¿Cómo se organizan las 4 áreas?",
          a: "Operaciones organiza eventos, Recursos Humanos incorpora miembros, Finanzas gestiona patrocinios y Marketing lidera la difusión.",
        },
      ],
    },
    footer: {
      tagline:
        "Microsoft Student Ambassadors — Comunidad universitaria. Base de la Fase 1.",
    },
  },
};
