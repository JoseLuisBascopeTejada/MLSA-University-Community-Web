import { BentoGrid } from "./components/BentoGrid";
import { FaqAccordion } from "./components/FaqAccordion";
import { Hero } from "./components/Hero";
import { LanguageToggle } from "./components/LanguageToggle";
import { ParticleField } from "./components/Background/ParticleField";
import { useLanguage } from "./i18n/LanguageContext";
import { AREA_COLORS } from "./tokens/colors";

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#060913] text-slate-100">
      <ParticleField />
      <div className="relative z-10 overflow-hidden">
        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <p className="text-sm font-extrabold tracking-tight text-white">
            MLSA <span className="text-sky-300">Community</span>
          </p>
          <nav className="flex items-center gap-4 text-xs font-bold text-slate-300">
            <a href="#areas" className="transition-colors hover:text-white">
              {t.nav.areas}
            </a>
            <a href="#faq" className="transition-colors hover:text-white">
              {t.nav.faq}
            </a>
            <LanguageToggle />
          </nav>
        </header>
        <Hero />
      </div>

      <main className="relative z-10">
        <BentoGrid />
        <FaqAccordion />
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">{t.footer.tagline}</p>
          <div className="flex items-center gap-2">
            {Object.values(AREA_COLORS).map((color) => (
              <span
                key={color.primary}
                title={color.primary}
                className="inline-block h-4 w-4 rounded-full border border-white/20"
                style={{ backgroundColor: color.primary }}
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
