import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => {
      setHovering(!!e.target.closest("a, button, [role='button'], input, textarea, select"));
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{ x, y }}
      animate={{
        scale: hovering ? 1.9 : 1,
        opacity: visible ? (hovering ? 0.7 : 0.45) : 0,
      }}
      transition={{ duration: 0.15 }}
      aria-hidden="true"
    />
  );
}
