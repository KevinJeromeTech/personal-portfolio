import { useEffect, useRef } from "react";

const CHARS = "{}[]<>()=/*;:.!?01#$%&|~^+-_@\\//=><=!==&&||const let var function return import export class extends async await";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const isMobile = window.innerWidth < 768;

    let animId;
    const fontSize = isMobile ? 11 : 13;
    const colSpacing = isMobile ? fontSize * 2 : fontSize;
    const fps = isMobile ? 20 : 30;
    const interval = 1000 / fps;
    let cols, drops;
    let lastTime = 0;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * colSpacing;
        const rand = Math.random();
        const alpha = dark
          ? (isMobile ? 0.18 : 0.22) + rand * 0.12
          : (isMobile ? 0.12 : 0.16) + rand * 0.08;

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
        zIndex: 2,
        pointerEvents: "none",
      }}
    />
  );
}
