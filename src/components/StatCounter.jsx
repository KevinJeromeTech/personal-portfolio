import { useEffect, useRef, useState } from "react";

// Renders the real value from the first paint, so crawlers, link previews,
// screen readers and reduced-motion visitors never see "0". The count-up is a
// visual effect layered on top once the stat scrolls into view.
export default function StatCounter({ value, label, suffix = "" }) {
  const [count, setCount] = useState(value);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        let current = 0;
        const step = Math.max(1, Math.ceil(value / 35));
        setCount(0);
        timer = setInterval(() => {
          current = Math.min(current + step, value);
          setCount(current);
          if (current >= value) clearInterval(timer);
        }, 45);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [value]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
