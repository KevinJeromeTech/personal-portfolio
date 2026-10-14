import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2,  label: "Auralith Clients",   suffix: "" },
  { value: 3,  label: "Apps in Production", suffix: "" },
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
        Full-stack software engineer and CS graduate from Florida International
        University. I build web applications end to end with React, Next.js,
        TypeScript, Node.js, and PostgreSQL, deploy them on Vercel and Render, and
        use the Claude API where it does real work, like turning computed spending
        or inventory data into specific recommendations.
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
            I work across the stack: React and TypeScript interfaces, Express and
            Next.js APIs, and PostgreSQL schemas through Prisma or Supabase. On
            StoreLens that meant 30 tables with row-level security and role-based
            permissions, not just a UI on top of a database.
          </p>
        </div>

        <div className="preview-card">
          <h3>Client Work</h3>
          <p>
            Through Auralith Systems I built the Classic Menswear storefront and
            the StoreLens operations dashboard, then reused that architecture for
            a second client, Redgine Creates. ExpenseIQ, my own full-stack app,
            is where I worked through auth, testing, and CI.
          </p>
        </div>

        <div className="preview-card">
          <h3>From Requirements to Software</h3>
          <p>
            My client projects start with a business owner describing how things
            work today, such as inventory tracked in spreadsheets. I turn
            that into requirements, scope it, and build the system that replaces
            the manual process.
          </p>
        </div>

        <div className="preview-card">
          <h3>Built for Real Workflows</h3>
          <p>
            StoreLens is a tool for store staff, so the dashboard is organized
            around their daily tasks: QR-code stock counts, tailoring work
            orders, and customer reservations.
          </p>
        </div>
      </div>
    </section>
  );
}
