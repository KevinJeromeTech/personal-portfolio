const groups = [
  { area: "Frontend", tools: "React, Next.js, TypeScript, Tailwind CSS, TanStack Query" },
  { area: "Backend", tools: "Node.js, Express, Next.js server actions, Spring Boot" },
  { area: "Data", tools: "PostgreSQL, Prisma, Supabase, row-level security" },
  { area: "AI", tools: "Claude API, with structured output checked before it reaches the UI" },
  { area: "Testing and delivery", tools: "Vitest, Playwright, GitHub Actions, Vercel, Render" },
];

export default function StackStrip() {
  return (
    <section className="hm-stack" aria-labelledby="hm-stack-title">
      <div className="hm-stack-intro">
        <h2 id="hm-stack-title">What I work with</h2>
        <p>
          The tools I&apos;ve used in production, grouped by where they sit in
          the stack.
        </p>
      </div>
      <dl className="hm-stack-list">
        {groups.map((g) => (
          <div key={g.area} className="hm-stack-row">
            <dt>{g.area}</dt>
            <dd>{g.tools}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
