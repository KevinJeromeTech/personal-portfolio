import { useEffect, useRef } from "react";

const CHARS = "{}[]<>()=/*;:.!?01#$%&|~^+-_@=><=!==&&||const let var function return import export class extends async await";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const isMobile = window.innerWidth < 768;

    const fontSize   = isMobile ? 11 : 13;
    const colSpacing = isMobile ? fontSize * 2.5 : fontSize;
    const fps        = isMobile ? 20 : 30;
    const interval   = 1000 / fps;

    // Draw straight onto the visible canvas: the old offscreen buffer cost a
    // full-screen clear and copy on every frame for no visual difference.
    const offCtx = ctx;

    let animId, cols, drops, lastTime = 0;

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      cols  = Math.floor(canvas.width / colSpacing);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    }

    resize();
    window.addEventListener("resize", resize);


    function draw(timestamp) {
      animId = requestAnimationFrame(draw);
      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;


      // Fade trails toward transparent
      offCtx.globalCompositeOperation = "destination-out";
      offCtx.fillStyle = "rgba(0,0,0,0.08)";
      offCtx.fillRect(0, 0, canvas.width, canvas.height);
      offCtx.globalCompositeOperation = "source-over";

      offCtx.font = `bold ${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x    = i * colSpacing;

        offCtx.fillStyle = `rgba(192, 30, 60, ${0.75 + Math.random() * 0.25})`;

        offCtx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      });
    }

    // Stop drawing entirely while the tab is in the background
    function onVisibility() {
      cancelAnimationFrame(animId);
      if (!document.hidden) animId = requestAnimationFrame(draw);
    }
    document.addEventListener("visibilitychange", onVisibility);

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
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
