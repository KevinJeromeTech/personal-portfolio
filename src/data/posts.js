const posts = [
  {
    id: "building-expenseiq",
    title: "Building ExpenseIQ: Full-Stack Expense Tracking with React 19 & Claude AI",
    date: "2025-03-12",
    tags: ["React 19", "TypeScript", "Node.js", "Claude AI", "PostgreSQL"],
    excerpt:
      "How I designed and built a full-stack expense intelligence dashboard — from JWT auth and Prisma ORM to AI-powered insights using the Anthropic Claude API.",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "I started ExpenseIQ because every expense app I tried was either too simple to be useful or too complex to bother with. I wanted something that actually helped me understand my spending — not just log it. So I built my own, and in the process shipped a production-grade full-stack application with JWT auth, AI-powered insights, real-time charts, and a full CI/CD pipeline.",
      },
      {
        type: "h2",
        text: "The Stack",
      },
      {
        type: "p",
        text: "Before writing a single line of code, I mapped out the full technology picture. I wanted real production experience with tools I'd use on a team — not just the obvious defaults.",
      },
      {
        type: "stack",
        items: [
          { label: "Frontend", value: "React 19, TypeScript, Vite, TanStack Query v5, Recharts" },
          { label: "Backend", value: "Node.js, Express, Prisma ORM" },
          { label: "Database", value: "Neon PostgreSQL (prod) · SQLite (local)" },
          { label: "AI", value: "Anthropic Claude API — claude-haiku-4-5" },
          { label: "Auth", value: "JWT, bcrypt, rate limiting, Nodemailer password reset" },
          { label: "Deployment", value: "Vercel (frontend) · Render (backend)" },
          { label: "Testing", value: "Vitest (unit) · Playwright (E2E)" },
        ],
      },
      {
        type: "p",
        text: "React 19 was a deliberate choice — I wanted hands-on experience with its new features. TanStack Query handles all server state and caching, which turned out to be one of the best architectural decisions in the project. And Neon gives me serverless Postgres without managing infrastructure.",
      },
      {
        type: "h2",
        text: "Authentication",
      },
      {
        type: "p",
        text: "I built JWT auth from scratch instead of reaching for an auth library. My reasoning: knowing how it actually works is more valuable than abstracting it away, and the requirements were scoped enough to be manageable. The system covers all the production basics:",
      },
      {
        type: "bullets",
        items: [
          "bcrypt password hashing at 10 rounds",
          "express-rate-limit on all auth routes — 5 attempts per 15 minutes before lockout",
          "Access tokens (15-minute expiry) stored in memory, refresh tokens (7 days) in an httpOnly cookie",
          "Password reset via Nodemailer — signed reset link with a 1-hour expiry",
          "Zod validation on every auth endpoint to reject malformed input at the boundary",
        ],
      },
      {
        type: "p",
        text: "The trickiest part was the token refresh flow. Storing the refresh token in an httpOnly cookie means XSS attacks cannot steal it. Keeping the access token in memory rather than localStorage means CSRF attacks cannot use it directly. TanStack Query's request interceptor checks if the access token is expired before every API call and silently refreshes it — from the user's perspective, they stay logged in without ever seeing an auth error.",
      },
      {
        type: "h2",
        text: "AI Integration with Claude",
      },
      {
        type: "p",
        text: "This was the part I was most excited to build. I integrated the Anthropic Claude API to do two things: auto-categorize transactions and generate plain-English spending insights.",
      },
      {
        type: "p",
        text: "When you add a transaction, Claude reads the description and assigns it to a category automatically — Food, Transport, Bills, Entertainment. For insights, I batch the last 30 days of transactions and ask Claude to summarize patterns, flag anomalies, and suggest adjustments. I chose claude-haiku-4-5 specifically because it's fast and cheap enough to call per-transaction without impacting UX.",
      },
      {
        type: "code",
        lang: "js",
        text: `const response = await anthropic.messages.create({
  model: "claude-haiku-4-5",
  max_tokens: 512,
  messages: [{
    role: "user",
    content: \`Analyze these transactions and return a JSON object with:
    "summary" (1-2 sentences), "topCategory" (string), "insights" (array of 3 strings).
    Transactions: \${JSON.stringify(transactions)}\`
  }]
});`,
      },
      {
        type: "callout",
        text: "Always validate Claude's output with Zod before rendering. Even with a strict prompt, LLMs can return slightly malformed JSON or add extra commentary. A schema check with a graceful fallback is not optional.",
      },
      {
        type: "h2",
        text: "Real-Time Data Visualization",
      },
      {
        type: "p",
        text: "The dashboard has three charts: a spending-by-category donut, a month-over-month bar chart, and a daily spending trend line — all built with Recharts. The real engineering here was making them feel instant.",
      },
      {
        type: "p",
        text: "TanStack Query caches chart data with a 5-minute stale window, so charts don't re-fetch on every navigation. I also implemented optimistic updates: when you add a transaction, the chart updates immediately while the API call runs in the background. If the request fails, TanStack Query rolls back the UI automatically. The result is a dashboard that feels live without unnecessary network requests.",
      },
      {
        type: "h2",
        text: "Database Design with Prisma",
      },
      {
        type: "p",
        text: "Prisma made schema design feel natural. The core models are lean: User (with hashed password, refresh token, and reset token fields), Transaction (amount, description, category, date), and Budget (per-category monthly limit). Foreign keys enforce the relationships and Prisma's migration system handles schema evolution without manual SQL.",
      },
      {
        type: "p",
        text: "One pragmatic call: Neon PostgreSQL in production, SQLite locally. Prisma handles both with the same schema — you swap the datasource URL via environment variable. This lets me develop without a cloud DB connection, which matters when working on planes or with unreliable internet.",
      },
      {
        type: "h2",
        text: "Deployment & CI",
      },
      {
        type: "p",
        text: "The frontend deploys to Vercel on every push to main. The backend runs on Render's free tier — which cold-starts after 15 minutes of inactivity, so the live demo may take a few seconds on the first request.",
      },
      {
        type: "p",
        text: "GitHub Actions runs three jobs on every push: ESLint + TypeScript type-check, Vitest unit tests, and Playwright E2E tests against a local dev server. The CI pipeline caught regressions that code review missed. Playwright tests cover the full auth flow — register, login, add a transaction, verify it appears in the dashboard — and found two integration bugs that unit tests couldn't see.",
      },
      {
        type: "h2",
        text: "Lessons Learned",
      },
      {
        type: "bullets",
        items: [
          "TanStack Query is worth learning properly. The docs are dense but the mental model — server state is async, treat it as a cache — pays off immediately once it clicks.",
          "Rate limiting is not optional. A login form without it is an open door. express-rate-limit takes ten minutes to add and it matters.",
          "Claude output needs validation. Structured prompts produce consistent output, but not guaranteed output. Always parse and validate before rendering.",
          "E2E tests catch what unit tests miss. Integration bugs in the auth flow only appear when all the pieces run together. Both test layers earn their place.",
        ],
      },
      {
        type: "p",
        text: "ExpenseIQ is live at expense-iq-lilac.vercel.app and the full source is on GitHub. If you have questions about any part of the build, reach out.",
      },
    ],
  },
  {
    id: "react-performance-tips",
    title: "5 React Performance Patterns I Actually Use",
    date: "2025-02-04",
    tags: ["React", "Performance"],
    excerpt:
      "A practical breakdown of memoisation, code splitting, and lazy loading — with real examples from my own projects.",
    readTime: "5 min read",
  },
  {
    id: "css-design-systems",
    title: "Building a Design System with Pure CSS Variables",
    date: "2025-01-18",
    tags: ["CSS", "Design"],
    excerpt:
      "How I structured a scalable token-based design system without a framework — covering colour, spacing, and dark mode.",
    readTime: "4 min read",
  },
];

export default posts;
