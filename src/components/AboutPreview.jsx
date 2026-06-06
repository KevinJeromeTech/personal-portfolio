import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5,  label: "Projects Built", suffix: "+" },
  { value: 15, label: "Technologies",   suffix: "+" },
  { value: 4,  label: "Years Learning", suffix: "+" },
];

function StatCounter({ value, label, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);
        let current = 0;
        const step = Math.ceil(value / 35);
        const timer = setInterval(() => {
          current = Math.min(current + step, value);
          setCount(current);
          if (current >= value) clearInterval(timer);
        }, 45);
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
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

export default function AboutPreview() {
  return (
    <section className="about-preview section-card">
      <h2>About Me</h2>
      <p>
        Full-Stack Developer and Computer Science student at FIU. I build modern
        web applications with React, Next.js, TypeScript, and Node.js, with a
        focus on clean design and real performance.
      </p>

      <div className="about-stats">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
        ))}
      </div>

      <div className="preview-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div className="preview-card">
          <h3>Full-Stack Builds</h3>
          <p>
            From frontend UI to backend APIs, I handle the full stack and ship
            projects that work in production.
          </p>
        </div>

        <div className="preview-card">
          <h3>Real Experience</h3>
          <p>
            Freelance client work, university projects, and personal builds
            across React, Node.js, and more.
          </p>
        </div>

        <div className="preview-card">
          <h3>Result-Oriented</h3>
          <p>
            Every project has a goal. I stay focused on delivering clean,
            functional solutions that actually move the needle.
          </p>
        </div>

        <div className="preview-card">
          <h3>User-First Design</h3>
          <p>
            Every interface is crafted with the end user in mind, intuitive,
            accessible, and built to leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
}
