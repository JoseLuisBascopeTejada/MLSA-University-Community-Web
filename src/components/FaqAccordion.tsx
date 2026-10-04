// FAQ accordion stub: shared-element highlight via Motion layoutId.
// Phase 4 expands this with full crossfade + blur overlay behavior.
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLanguage } from "../i18n/LanguageContext";
import { EASE_OUT_EXPO } from "../tokens/motion";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();
  const faqs = t.faq.entries;

  return (
    <section id="faq" className="mx-auto w-full max-w-4xl px-6 py-14">
      <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
        {t.faq.title}
      </h2>
      <div className="mt-6 space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={faq.q}
              className="glass-panel relative overflow-hidden rounded-2xl"
            >
              {open && !reducedMotion && (
                <motion.span
                  layoutId="faq-highlight"
                  transition={EASE_OUT_EXPO}
                  className="absolute inset-0 border border-sky-400/30 bg-sky-400/10"
                />
              )}
              <button
                type="button"
                aria-expanded={open}
                onClick={() => {
                  setOpenIndex(open ? null : index);
                }}
                className="relative flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-white sm:text-base"
              >
                {faq.q}
                <span aria-hidden="true" className="text-sky-300">
                  {open ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={EASE_OUT_EXPO}
                    className="relative overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-slate-300">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
