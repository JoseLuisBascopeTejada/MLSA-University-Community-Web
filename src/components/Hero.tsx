// Hero section: staggered headline reveal + spring-physics CTAs.
import { motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "../i18n/LanguageContext";
import { EASE_OUT_EXPO, SPRING_CTA, STAGGER_MEDIUM } from "../tokens/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER_MEDIUM } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: EASE_OUT_EXPO },
};

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.section
      variants={container}
      initial={reducedMotion ? false : "hidden"}
      animate="show"
      className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-16 text-center sm:pt-32"
    >
      <motion.p
        variants={item}
        className="mb-4 inline-block rounded-full border border-white/15 px-4 py-1 text-xs font-semibold tracking-widest text-sky-300 uppercase"
      >
        {t.hero.eyebrow}
      </motion.p>
      <motion.h1
        variants={item}
        className="mx-auto max-w-3xl text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-6xl"
      >
        {t.hero.titlePrefix}{" "}
        <span className="bg-gradient-to-r from-[#3B82F6] via-[#22C55E] to-[#FB923C] bg-clip-text text-transparent">
          {t.hero.titleGradient}
        </span>
      </motion.h1>
      <motion.p
        variants={item}
        className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg"
      >
        {t.hero.description}
      </motion.p>
      <motion.div
        variants={item}
        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <motion.a
          href="#areas"
          whileHover={reducedMotion ? undefined : { scale: 1.04 }}
          whileTap={reducedMotion ? undefined : { scale: 0.97 }}
          transition={SPRING_CTA}
          className="rounded-xl bg-[#005FB8] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/40"
        >
          {t.hero.primaryCta}
        </motion.a>
        <motion.a
          href="#faq"
          whileHover={reducedMotion ? undefined : { scale: 1.04 }}
          whileTap={reducedMotion ? undefined : { scale: 0.97 }}
          transition={SPRING_CTA}
          className="glass-panel rounded-xl px-6 py-3 text-sm font-bold text-white"
        >
          {t.hero.secondaryCta}
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
