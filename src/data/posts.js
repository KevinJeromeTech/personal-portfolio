const posts = [
  {
    id: "building-auralith-systems",
    title: "Auralith Systems: A Full-Stack Tech Consulting Platform from Scratch",
    logo: "/Logo/AuralithLogo.png",
    date: "2026-06-20",
    tags: ["Next.js", "Spring Boot", "TypeScript", "Java", "PostgreSQL"],
    excerpt:
      "How I designed and built the entire digital infrastructure for my tech consulting company, from a public-facing site and client dashboard to an admin portal with role-based access, PDF generation, and transactional email.",
    readTime: "10 min read",
    content: [
      {
        type: "p",
        text: "Auralith Systems is my tech consulting company. Rather than using a template or a no-code builder, I decided to engineer the entire platform myself. That means a public marketing site, a client dashboard where customers can track their projects, and an admin portal where I manage everything internally. The goal was to build something I would actually run a business on, not a portfolio piece that looks good but falls apart under real use.",
      },
      {
        type: "h2",
        text: "The Stack",
      },
      {
        type: "p",
        text: "This project has more moving parts than anything I have built before, so I was deliberate about choosing technologies that would scale with the business rather than just work for a demo.",
      },
      {
        type: "stack",
        items: [
          { label: "Frontend", value: "Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, Framer Motion" },
          { label: "Backend", value: "Spring Boot 3.5, Java 21, Maven 3.9, JPA/Hibernate, Spring Security" },
          { label: "Database", value: "PostgreSQL with Prisma 7.8 ORM" },
          { label: "Auth", value: "NextAuth.js 5 (beta), bcryptjs, role-based access control" },
          { label: "Email", value: "Resend + Nodemailer with Gmail SMTP" },
          { label: "PDF", value: "jsPDF for client-facing invoice and report generation" },
          { label: "Infrastructure", value: "Vercel (frontend), Docker, AWS, GitHub CI" },
        ],
      },
      {
        type: "h2",
        text: "Why Next.js + Spring Boot",
      },
      {
        type: "p",
        text: "This is probably the most interesting architectural decision in the project. Most developers would pair Next.js with a Node.js backend, but I chose Spring Boot with Java 21 deliberately. The frontend needs fast page loads, SEO for the marketing site, and React Server Components for the dashboards. Next.js handles all of that natively. But the backend needs to handle business logic that will grow in complexity: project management, invoicing, client communication workflows, and eventually internal tooling.",
      },
      {
        type: "p",
        text: "Spring Boot gives me a level of structure and type safety on the backend that Node.js does not enforce by default. JPA/Hibernate handles database relationships cleanly, Spring Security provides battle-tested authentication and authorization, and the whole thing runs in Docker containers that deploy the same way in development and production. Java 21 specifically was a deliberate pick for virtual threads and pattern matching, both of which simplify async service code.",
      },
      {
        type: "h2",
        text: "Three Applications, One Platform",
      },
      {
        type: "p",
        text: "The platform has three distinct interfaces, each with its own concerns and access level.",
      },
      {
        type: "bullets",
        items: [
          "The public site at auralith-systems.vercel.app is the marketing front. It covers services, company information, and a contact pipeline. SEO and page speed matter here, so it leans heavily on Next.js static generation and server-side rendering.",
          "The client dashboard lets customers log in, view project status, track milestones, and access deliverables. This is a fully authenticated SPA-style experience inside the Next.js app, gated by NextAuth.js sessions with role checks.",
          "The admin portal is where I manage projects, clients, invoices, and internal operations. It has elevated permissions, bulk actions, and reporting tools. Same Next.js app, different route group, different authorization layer.",
        ],
      },
      {
        type: "h2",
        text: "Authentication and Role-Based Access",
      },
      {
        type: "p",
        text: "I went with NextAuth.js v5 (the beta release that supports the App Router natively) for session management. It handles OAuth providers, credential-based login with bcryptjs password hashing, and session tokens in httpOnly cookies. On top of that, I built a role system with three tiers: public (unauthenticated), client, and admin.",
      },
      {
        type: "p",
        text: "Every protected route checks the session role before rendering. API routes on the Next.js side validate the session server-side before forwarding requests to the Spring Boot backend. The backend then does its own authorization check against the JWT, so even if someone bypasses the frontend, the API rejects unauthorized requests. Defense in depth is not optional when you are handling real client data.",
      },
      {
        type: "h2",
        text: "Transactional Email",
      },
      {
        type: "p",
        text: "The platform sends emails at several touchpoints: contact form submissions, project status updates, invoice delivery, and password resets. I set up a dual email system using Resend as the primary transactional email service and Nodemailer with Gmail SMTP as the fallback.",
      },
      {
        type: "p",
        text: "Resend handles the bulk of outgoing mail because it has better deliverability, built-in analytics, and a clean API. Nodemailer sits behind it as a reliability layer. If Resend's API returns an error, the system retries through Gmail SMTP before logging the failure. In practice, Resend handles everything, but having a fallback means a third-party outage does not silently drop client communications.",
      },
      {
        type: "h2",
        text: "PDF Generation",
      },
      {
        type: "p",
        text: "Clients need downloadable invoices and project summaries. I integrated jsPDF to generate these documents on demand directly in the browser. The admin portal lets me preview and download invoices with line items, totals, and company branding, all rendered client-side from the project data. No server-side PDF rendering, no headless browser dependency, and no temp files to clean up.",
      },
      {
        type: "callout",
        text: "Client-side PDF generation with jsPDF keeps the architecture simple, but it means you need to handle font embedding and layout math yourself. For complex multi-page documents, a server-side solution like Puppeteer might be worth the tradeoff.",
      },
      {
        type: "h2",
        text: "Database and ORM",
      },
      {
        type: "p",
        text: "PostgreSQL is the single source of truth, accessed through Prisma 7.8 on the Next.js side and JPA/Hibernate on the Spring Boot side. Having two ORMs against the same database sounds like it would cause problems, but in practice they serve different purposes. Prisma handles the frontend-adjacent queries: fetching dashboard data, running lightweight reads for server components, and managing user sessions. JPA handles the heavier business logic: complex joins, batch operations, and transactional writes that span multiple tables.",
      },
      {
        type: "p",
        text: "The schema is managed through Prisma migrations, which means the Next.js side owns the schema definition and the Spring Boot entities mirror it. This avoids conflicting migration systems and keeps one source of truth for the database structure.",
      },
      {
        type: "h2",
        text: "Infrastructure and Deployment",
      },
      {
        type: "p",
        text: "The Next.js frontend deploys to Vercel with automatic preview deployments on every pull request. The Spring Boot backend runs in Docker containers. For now, the production backend targets AWS, but the Docker setup means I can move it to any container host without changing the application code.",
      },
      {
        type: "p",
        text: "ESLint 9 with a flat config handles code quality on the frontend. GitHub Actions runs lint, type checks, and builds on every push. The Spring Boot side uses Maven for builds and dependency management. Docker Compose ties everything together locally so the full stack spins up with a single command.",
      },
      {
        type: "h2",
        text: "What's Next",
      },
      {
        type: "p",
        text: "The core platform is live, but there is a clear roadmap ahead. Internal tooling is the next priority: time tracking, automated reporting, and a CRM layer for managing leads and client relationships. Beyond that, I want to integrate AI-assisted project scoping using the Anthropic Claude API, similar to what I built for ExpenseIQ but applied to consulting proposals and cost estimation.",
      },
      {
        type: "p",
        text: "Auralith Systems is live and accepting clients. If you are interested in working together or want to know more about the technical architecture, reach out through the site.",
      },
      {
        type: "link",
        text: "Visit Auralith Systems",
        url: "https://auralith-systems.vercel.app",
      },
    ],
  },
  {
    id: "building-expenseiq",
    logo: "/Logo/ExpenseIQ.png",
    title: "Building ExpenseIQ: Full-Stack Expense Tracking with React 19 & Claude AI",
    date: "2025-03-12",
    tags: ["React 19", "TypeScript", "Node.js", "Claude AI", "PostgreSQL"],
    excerpt:
      "How I designed and built a full-stack expense intelligence dashboard, from JWT auth and Prisma ORM to AI-powered insights using the Anthropic Claude API.",
    readTime: "8 min read",
    content: [
      {
        type: "p",
        text: "I started ExpenseIQ because every expense app I tried was either too simple to be useful or too complex to bother with. I wanted something that actually helped me understand my spending, not just log it. So I built my own, and in the process shipped a production-grade full-stack application with JWT auth, AI-powered insights, real-time charts, and a full CI/CD pipeline.",
      },
      {
        type: "h2",
        text: "The Stack",
      },
      {
        type: "p",
        text: "Before writing a single line of code, I mapped out the full technology picture. I wanted real production experience with tools I'd use on a team, not just the obvious defaults.",
      },
      {
        type: "stack",
        items: [
          { label: "Frontend", value: "React 19, TypeScript, Vite, TanStack Query v5, Recharts" },
          { label: "Backend", value: "Node.js, Express, Prisma ORM" },
          { label: "Database", value: "Neon PostgreSQL (prod) · SQLite (local)" },
          { label: "AI", value: "Anthropic Claude API (claude-haiku-4-5)" },
          { label: "Auth", value: "JWT, bcrypt, rate limiting, Nodemailer password reset" },
          { label: "Deployment", value: "Vercel (frontend) · Render (backend)" },
          { label: "Testing", value: "Vitest (unit) · Playwright (E2E)" },
        ],
      },
      {
        type: "p",
        text: "React 19 was a deliberate choice. I wanted hands-on experience with its new features. TanStack Query handles all server state and caching, which turned out to be one of the best architectural decisions in the project, and Neon gives me serverless Postgres without managing infrastructure.",
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
          "express-rate-limit on all auth routes, capping it at 5 attempts per 15 minutes before lockout",
          "Access tokens (15-minute expiry) stored in memory, refresh tokens (7 days) in an httpOnly cookie",
          "Password reset via Nodemailer with a signed reset link that expires after one hour",
          "Zod validation on every auth endpoint to reject malformed input at the boundary",
        ],
      },
      {
        type: "p",
        text: "The trickiest part was the token refresh flow. Storing the refresh token in an httpOnly cookie means XSS attacks cannot steal it. Keeping the access token in memory rather than localStorage means CSRF attacks cannot use it directly. TanStack Query's request interceptor checks if the access token is expired before every API call and silently refreshes it, so from the user's perspective, they stay logged in without ever seeing an auth error.",
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
        text: "When you add a transaction, Claude reads the description and assigns it to a category automatically: Food, Transport, Bills, Entertainment. For insights, I batch the last 30 days of transactions and ask Claude to summarize patterns, flag anomalies, and suggest adjustments. I chose claude-haiku-4-5 specifically because it's fast and cheap enough to call per-transaction without impacting UX.",
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
        text: "The dashboard has three charts: a spending-by-category donut, a month-over-month bar chart, and a daily spending trend line, all built with Recharts. The real engineering here was making them feel instant.",
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
        text: "One pragmatic call: Neon PostgreSQL in production, SQLite locally. Prisma handles both with the same schema, so you just swap the datasource URL via environment variable. This lets me develop without a cloud DB connection, which matters when working on planes or with unreliable internet.",
      },
      {
        type: "h2",
        text: "Deployment & CI",
      },
      {
        type: "p",
        text: "The frontend deploys to Vercel on every push to main. The backend runs on Render's free tier, which cold-starts after 15 minutes of inactivity, so the live demo may take a few seconds on the first request.",
      },
      {
        type: "p",
        text: "GitHub Actions runs three jobs on every push: ESLint + TypeScript type-check, Vitest unit tests, and Playwright E2E tests against a local dev server. The CI pipeline caught regressions that code review missed. Playwright tests cover the full auth flow (register, login, add a transaction, verify it appears in the dashboard) and found two integration bugs that unit tests couldn't see.",
      },
      {
        type: "h2",
        text: "Lessons Learned",
      },
      {
        type: "bullets",
        items: [
          "TanStack Query is worth learning properly. The docs are dense, but the mental model (server state is async, treat it as a cache) pays off immediately once it clicks.",
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
