import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5,  label: "Projects Shipped", suffix: "+" },
  { value: 15, label: "Technologies",     suffix: "+" },
  { value: 1,  label: "Live Client",      suffix: "" },
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
        Full-Stack Developer and CS graduate from Florida International University.
        I design and build modern web applications end to end with React, Next.js,
        TypeScript, Node.js, and PostgreSQL, integrating LLM APIs through Anthropic
        Claude and shipping everything through real CI/CD pipelines on Vercel and
        Render. My focus is clean architecture, accessible interfaces, and performance
        that holds up in production, not just in a demo.
      </p>

      <div className="about-stats">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} suffix={s.suffix} />
        ))}
      </div>

      <div className="preview-grid">
        <div className="preview-card">
          <h3>Full-Stack Builds</h3>
          <p>
            I work across the entire stack, from React and TypeScript interfaces
            to Node.js and Express APIs backed by PostgreSQL and Prisma. That
            means designing the database schema, building the auth and business
            logic, and wiring it all into a polished UI, then deploying and
            monitoring it like a real product.
          </p>
        </div>

        <div className="preview-card">
          <h3>Real Experience</h3>
          <p>
            My experience spans client work through Auralith Systems — including
            the StoreLens admin dashboard for Classic Menswear — alongside
            self-directed builds like ExpenseIQ and this portfolio. Each project
            pushed me to learn a new layer of the stack, from LLM API integration
            to automated testing and production deployment.
          </p>
        </div>

        <div className="preview-card">
          <h3>Result-Oriented</h3>
          <p>
            I treat every project like it has a real stakeholder, because most
            of mine have. That means defining a clear goal up front, scoping the
            work realistically, and shipping something that actually solves the
            problem rather than something that just looks good in a screenshot.
          </p>
        </div>

        <div className="preview-card">
          <h3>User-First Design</h3>
          <p>
            I design interfaces around how people actually use them: clear
            visual hierarchy, fast load times, keyboard and screen-reader
            support, and thoughtful micro-interactions. Accessibility and
            performance aren't an afterthought, they're part of the same design
            decisions from the start.
          </p>
        </div>
      </div>
    </section>
  );
}
