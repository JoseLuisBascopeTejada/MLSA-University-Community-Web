// Reduced-motion hook: mirrors prefers-reduced-motion + Motion support.
import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia(QUERY).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      setReduced(event.matches);
    };
    mql.addEventListener("change", onChange);
    setReduced(mql.matches);
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return reduced;
}
