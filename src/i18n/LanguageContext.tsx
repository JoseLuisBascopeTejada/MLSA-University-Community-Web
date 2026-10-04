// Language state: browser detection, localStorage persistence,
// and <html lang> sync. Switching is instant, no reload required.
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Dictionary, Language } from "./translations";
import { isLanguage, translations } from "./translations";

const STORAGE_KEY = "mlsa-lang";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLanguage(): Language {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored !== null && isLanguage(stored)) {
      return stored;
    }
    if (
      typeof navigator !== "undefined" &&
      navigator.language.toLowerCase().startsWith("es")
    ) {
      return "es";
    }
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(detectLanguage);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (ctx === null) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
