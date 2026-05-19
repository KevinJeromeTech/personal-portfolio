import { useEffect, useRef } from "react";

const CHARS = "{}[]<>()=/*;:.!?01#$%&|~^+-_@\\//=><=!==&&||const let var function return import export class extends async await";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animId;
    const fontSize = 13;
    let cols, drops;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      cols  = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    }

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.body.classList.contains("dark-mode");

    function draw() {
      const dark = isDark();
      ctx.fillStyle = dark
        ? "rgba(15, 17, 24, 0.12)"
        : "rgba(248, 248, 250, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const alpha = dark ? 0.35 : 0.22;

        ctx.fillStyle = dark
          ? `rgba(180, 0, 45, ${alpha + Math.random() * 0.15})`
          : `rgba(128, 0, 32, ${alpha + Math.random() * 0.1})`;

        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.4;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

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
