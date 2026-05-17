import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

export default function ScrambleText({ text, as: Tag = "span", className = "" }) {
  const ref = useRef(null);
  const [displayed, setDisplayed] = useState(text);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;
        observer.unobserve(node);
        let frame = 0;
        const total = 24;
        let raf;
        const animate = () => {
          frame++;
          const progress = frame / total;
          setDisplayed(
            text
              .split("")
              .map((char, i) => {
                if (char === " ") return " ";
                if (i / text.length < progress) return char;
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              })
              .join("")
          );
          if (frame < total) raf = requestAnimationFrame(animate);
          else setDisplayed(text);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [text]);

  return (
    <Tag ref={ref} className={className}>
      {displayed}
    </Tag>
  );
}
