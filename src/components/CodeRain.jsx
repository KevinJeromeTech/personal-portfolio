import { useEffect, useRef } from "react";

const CHARS = "{}[]<>()=/*;:.!?01#$%&|~^+-_@\\//=><=!==&&||const let var function return import export class extends async await";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animId;
    const fontSize = 13;
    let cols, drops;
    let lastTime = 0;
    const FPS = 30;
    const INTERVAL = 1000 / FPS;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      cols  = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    }

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.body.classList.contains("dark-mode");

    function draw(timestamp) {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastTime < INTERVAL) return;
      lastTime = timestamp;

      const dark = isDark();
      ctx.fillStyle = dark
        ? "rgba(15, 17, 24, 0.18)"
        : "rgba(248, 248, 250, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const rand = Math.random();
        const alpha = dark ? 0.6 + rand * 0.4 : 0.45 + rand * 0.35;

        ctx.fillStyle = dark
          ? `rgba(220, 20, 60, ${alpha})`
          : `rgba(160, 0, 40, ${alpha})`;

        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      });
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
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
