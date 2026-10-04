// Lightweight ambient background: 2D canvas particles + spotlight.
// Phase 1 stub is dependency-free (no three.js import) to keep the
// initial bundle lean. Phase 2 swaps this file for a lazy-loaded
// three.js particle field with the same props and fallback behavior.
import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const PARTICLE_COUNT = 70;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const ctx = canvas.getContext("2d");
    if (ctx === null) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const mouse = { x: -9999, y: -9999 };

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.8 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      hue: Math.random() < 0.5 ? 210 : 25,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (spotlight: boolean) => {
      ctx.clearRect(0, 0, width, height);

      if (spotlight) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260,
        );
        glow.addColorStop(0, "rgba(59, 130, 246, 0.14)");
        glow.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x * width, p.y * height, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          p.hue > 100
            ? "rgba(147, 197, 253, 0.55)"
            : "rgba(251, 146, 60, 0.45)";
        ctx.fill();
      }
    };

    const tick = () => {
      for (const p of particles) {
        p.x = (p.x + p.vx + 1) % 1;
        p.y = (p.y + p.vy + 1) % 1;
      }
      draw(true);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    if (reducedMotion) {
      draw(false);
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
