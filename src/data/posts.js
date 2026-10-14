const posts = [
  {
    id: "building-auralith-systems",
    title: "Auralith Systems: A Full-Stack Tech Consulting Platform from Scratch",
    logo: "/Logo/AuralithLogo.webp",
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
        type: "image",
        src: "/AuralithMedia/AuralithDashboard.webp",
        alt: "Auralith Systems admin dashboard",
        caption: "The Auralith admin dashboard for managing projects and clients.",
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
        type: "image",
        src: "/AuralithMedia/AuralithProjectView.webp",
        alt: "Auralith Systems project view",
        caption: "Client-facing project view showing status and deliverables.",
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
        type: "image",
        src: "/AuralithMedia/AuralithLiveProjectView.webp",
        alt: "Auralith Systems live project tracking",
        caption: "Live project tracking with milestone timelines.",
      },
      {
        type: "image",
        src: "/AuralithMedia/AuralithProjectTimeline.webp",
        alt: "Auralith Systems project timeline",
        caption: "Project timeline view for tracking progress across phases.",
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
    logo: "/Logo/ExpenseIQ.webp",
    title: "Building ExpenseIQ: Full-Stack Expense Tracking with React 19 & Claude",
    date: "2026-10-14",
    tags: ["React 19", "TypeScript", "Express", "PostgreSQL", "Claude API"],
    excerpt:
      "How I built a full-stack expense tracker, from hand-rolled JWT auth and a Prisma/Postgres API to spending insights generated by Claude from metrics the server computes first.",
    readTime: "7 min read",
    content: [
      {
        type: "p",
        text: "I started ExpenseIQ because the expense apps I tried were either too simple to tell me anything or too heavy to keep using. I wanted something that showed me where my money was going and whether I was on pace for the month. So I built it: a React front end, a TypeScript/Express API on PostgreSQL, and Claude for categorization and insights. I use it myself, and so do a few other people.",
      },
      {
        type: "image",
        src: "/ExpenseIQ/IQLandingPage.webp",
        alt: "ExpenseIQ landing page",
        caption: "The ExpenseIQ landing page.",
      },
      {
        type: "h2",
        text: "The Stack",
      },
      {
        type: "stack",
        items: [
          { label: "Frontend", value: "React 19, TypeScript, Vite, TanStack Query v5, Recharts" },
          { label: "Backend", value: "Node.js, Express, TypeScript, Prisma ORM" },
          { label: "Database", value: "PostgreSQL (Docker Compose locally)" },
          { label: "AI", value: "Anthropic Claude API (Claude Haiku 4.5)" },
          { label: "Auth", value: "JWT, bcrypt, Zod, express-rate-limit, Nodemailer password reset" },
          { label: "Deployment", value: "Vercel (frontend) · Render (backend)" },
          { label: "Testing", value: "Vitest (unit) · Playwright (E2E)" },
        ],
      },
      {
        type: "p",
        text: "TanStack Query handles all server state on the client. Every list and chart reads from the query cache, and mutations invalidate the queries they affect, so the dashboard stays consistent without hand-written refresh logic.",
      },
      {
        type: "image",
        src: "/ExpenseIQ/IQRevampedDashboard.webp",
        alt: "ExpenseIQ dashboard with charts and spending overview",
        caption: "The main ExpenseIQ dashboard.",
      },
      {
        type: "h2",
        text: "Authentication",
      },
      {
        type: "p",
        text: "I built auth without an auth library because I wanted to understand each piece. The current implementation covers:",
      },
      {
        type: "bullets",
        items: [
          "bcrypt password hashing",
          "Signed JWTs with a 7-day expiry, checked by an Express middleware on every protected route",
          "express-rate-limit on all /api/auth routes (20 requests per 15 minutes per client)",
          "Zod schemas on the auth and user routes, so malformed input is rejected before it reaches the database",
          "Password reset via Nodemailer: a random reset token stored with a one-hour expiry",
        ],
      },
      {
        type: "callout",
        text: "Known tradeoff: the token is stored in localStorage, which keeps the client simple but is readable by any script that runs on the page. The next step is short-lived access tokens with a refresh token in an httpOnly cookie.",
      },
      {
        type: "image",
        src: "/ExpenseIQ/IQLoginPage.webp",
        alt: "ExpenseIQ login page",
        caption: "The login page.",
      },
      {
        type: "h2",
        text: "AI Integration with Claude",
      },
      {
        type: "p",
        text: "Claude does two jobs in ExpenseIQ: suggesting a category for a new transaction, and generating spending insights.",
      },
      {
        type: "p",
        text: "For insights, I don't send raw transactions to the model. The server first computes the numbers for the current month: total spent, daily average, projected month-end total, spending by category, largest purchase, and how far along each budget is. That summary goes to Claude Haiku with a system prompt asking for five specific, actionable insights as a JSON array. Doing the arithmetic in code means the numbers in the insights are correct, and the prompt stays small.",
      },
      {
        type: "p",
        text: "Categorization is a much smaller call: the merchant name and notes go in with the user's list of categories, and the model is told to reply with exactly one category name.",
      },
      {
        type: "image",
        src: "/ExpenseIQ/IQSmartInsights.webp",
        alt: "ExpenseIQ spending insights generated by Claude",
        caption: "Spending insights generated by Claude from server-computed metrics.",
      },
      {
        type: "callout",
        text: "Never render model output directly. The insights endpoint extracts the JSON array from the response and keeps only entries with a valid type and message before returning them to the client.",
      },
      {
        type: "h2",
        text: "Data Visualization",
      },
      {
        type: "p",
        text: "The dashboard and analytics pages use Recharts for spending by category and trends over time. Because the chart data comes from the same TanStack Query cache as the transaction list, adding or editing a transaction refreshes the charts through query invalidation.",
      },
      {
        type: "image",
        src: "/ExpenseIQ/IQTransaction.webp",
        alt: "ExpenseIQ transaction management",
        caption: "Transaction management with auto-categorization.",
      },
      {
        type: "image",
        src: "/ExpenseIQ/IQDashboardPartII.webp",
        alt: "ExpenseIQ dashboard charts",
        caption: "Spending breakdown and trend analysis.",
      },
      {
        type: "h2",
        text: "Database Design with Prisma",
      },
      {
        type: "p",
        text: "The Prisma schema has four models: User (including password-reset token fields), Category (per-user custom categories), Transaction (merchant, amount, category, type, recurrence), and Budget (an overall monthly limit or a per-category limit). Locally, Postgres runs in Docker Compose, so development matches production.",
      },
      {
        type: "h2",
        text: "Deployment & CI",
      },
      {
        type: "p",
        text: "The frontend deploys to Vercel and the API to Render's free tier, which sleeps after inactivity, so the first request to the live demo can take a few seconds.",
      },
      {
        type: "p",
        text: "GitHub Actions runs two jobs on every push: the client job lints, runs the Vitest unit tests, and builds; the server job generates the Prisma client and typechecks. Playwright specs for auth, the dashboard, and share links run locally. Adding them to CI is next.",
      },
      {
        type: "h2",
        text: "Lessons Learned",
      },
      {
        type: "bullets",
        items: [
          "TanStack Query is worth learning properly. Treating server state as a cache removed a whole category of stale-data bugs.",
          "Compute first, then prompt. Giving the model pre-computed numbers produced more accurate and more specific insights than handing it raw data.",
          "Validate model output. Structured prompts make the output consistent, not guaranteed.",
          "Every security decision is a tradeoff. Writing down where the auth falls short made the next steps obvious.",
        ],
      },
      {
        type: "p",
        text: "ExpenseIQ is live at expense-iq-lilac.vercel.app and the full source is on GitHub. If you have questions about any part of the build, reach out.",
      },
    ],
  },
];

export default posts;
