import { useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

const COLORS = ["#ffffff", "#ff4d7b", "#800020", "#ffbfd0", "#4ade80", "#facc15", "#60a5fa"];

export default function Confetti({ active }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 56 }, (_, i) => ({
        id: i,
        color: COLORS[i % COLORS.length],
        x: (((i * 37 + 13) % 100) - 50) * 5.8,
        y: -(((i * 53 + 7) % 80) * 3.5 + 60),
        rotate: ((i * 67) % 360) - 180,
        scale: ((i % 5) * 0.14) + 0.42,
        isSquare: i % 3 !== 0,
        size: (i % 4) * 2 + 5,
      })),
    []
  );

  return (
    <AnimatePresence>
      {active && (
        <div className="confetti-container" aria-hidden="true">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="confetti-piece"
              style={{
                background: p.color,
                width: p.size,
                height: p.isSquare ? p.size : p.size * 0.5,
                borderRadius: p.isSquare ? 2 : p.size,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0, rotate: 0 }}
              animate={{ x: p.x, y: p.y, opacity: 0, scale: p.scale, rotate: p.rotate }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
