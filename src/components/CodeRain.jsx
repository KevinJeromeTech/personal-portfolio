import { useEffect, useRef } from "react";

const CHARS = "{}[]<>()=/*;:.!?01#$%&|~^+-_@\\//=><=!==&&||const let var function return import export class extends async await";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const isMobile = window.innerWidth < 768;

    const fontSize   = isMobile ? 11 : 13;
    const colSpacing = isMobile ? fontSize * 2 : fontSize;
    const fps        = isMobile ? 20 : 30;
    const interval   = 1000 / fps;

    // Offscreen canvas holds the accumulating trails
    const off    = document.createElement("canvas");
    const offCtx = off.getContext("2d");

    let animId, cols, drops, lastTime = 0;

    function resize() {
      canvas.width  = off.width  = window.innerWidth;
      canvas.height = off.height = window.innerHeight;
      cols  = Math.floor(canvas.width / colSpacing);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    }

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.body.classList.contains("dark-mode");

    function draw(timestamp) {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      const dark = isDark();

      // Fade existing trails to transparent (no colour accumulation)
      offCtx.globalCompositeOperation = "destination-out";
      offCtx.fillStyle = "rgba(0, 0, 0, 0.13)";
      offCtx.fillRect(0, 0, off.width, off.height);
      offCtx.globalCompositeOperation = "source-over";

      offCtx.font = `bold ${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char  = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x     = i * colSpacing;
        const rand  = Math.random();
        const alpha = dark
          ? (isMobile ? 0.55 : 0.7) + rand * 0.3
          : (isMobile ? 0.35 : 0.5) + rand * 0.25;

        offCtx.fillStyle = dark
          ? `rgba(220, 20, 60, ${alpha})`
          : `rgba(160, 0, 40, ${alpha})`;

        offCtx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      });

      // Composite trails onto the transparent overlay canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(off, 0, 0);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}
