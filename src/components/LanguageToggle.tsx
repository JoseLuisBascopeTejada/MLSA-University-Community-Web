// Segmented EN/ES toggle for the header. Instant switch, no reload.
import { LANGUAGES } from "../i18n/translations";
import type { Language } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

const LABELS: Record<Language, string> = {
  en: "EN",
  es: "ES",
};

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.toggleLabel}
      className="flex items-center rounded-full border border-white/15 p-0.5"
    >
      {LANGUAGES.map((option) => {
        const active = language === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => {
              setLanguage(option);
            }}
            className={
              active
                ? "rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-extrabold text-white"
                : "rounded-full px-2.5 py-1 text-[11px] font-bold text-slate-400 transition-colors hover:text-white"
            }
          >
            {LABELS[option]}
          </button>
        );
      })}
    </div>
  );
}
