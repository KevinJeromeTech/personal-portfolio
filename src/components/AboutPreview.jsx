import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, label: "Projects Built", suffix: "+" },
  { value: 10, label: "Technologies", suffix: "+" },
  { value: 2, label: "Years Learning", suffix: "+" },
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
        As a passionate web designer and developer, I&apos;m committed to creating
        exceptional digital experiences. With a focus on custom solutions, I aim
        to help you stand out and succeed in today&apos;s digital landscape.
      </p>

      <div className="about-stats">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
        ))}
      </div>

      <h3 className="preview-grid-title">Core Strengths</h3>

      <div className="preview-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div className="preview-card">
          <h3>Innovative Solutions</h3>
          <p>
            Utilize creative strategies to provide unique solutions that cater to
            your specific business needs.
          </p>
        </div>

        <div className="preview-card">
          <h3>My Expertise</h3>
          <p>
            I bring real project experience and a passion for delivering
            excellence to every build.
          </p>
        </div>

        <div className="preview-card">
          <h3>Result-Oriented</h3>
          <p>
            Committed to achieving results that help you grow your presence and
            reach your goals.
          </p>
        </div>

        <div className="preview-card">
          <h3>User-First Design</h3>
          <p>
            Every interface I build is crafted with the end user in mind —
            intuitive, accessible, and built to leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  );
}
