// Bento grid: the 4 organizational pillars with color accents.
import type { AreaKey } from "../tokens/colors";
import { useLanguage } from "../i18n/LanguageContext";
import { AreaCard } from "./AreaCard";

const AREA_ORDER: AreaKey[] = ["operations", "hr", "finance", "marketing"];

export function BentoGrid() {
  const { t } = useLanguage();

  return (
    <section id="areas" className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
        {t.sections.areasTitle}
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
        {t.sections.areasSubtitle}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {AREA_ORDER.map((areaKey) => (
          <AreaCard
            key={areaKey}
            areaKey={areaKey}
            title={t.areas[areaKey].title}
            tagline={t.areas[areaKey].tagline}
            discoverLabel={t.sections.discoverMore}
          />
        ))}
      </div>
    </section>
  );
}
