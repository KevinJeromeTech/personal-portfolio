const projects = [
  {
    id: 6,
    title: "Auralith Systems",
    description:
      "Software consultancy I founded in Dec 2025 and run as the sole engineer. Two client engagements delivered: Classic Menswear and Redgine Creates.",
    longDescription:
      "Auralith Systems is the software consultancy I founded in December 2025. I handle every engagement end to end as the only engineer: gathering requirements from the business owner, designing the data model, building the application, and deploying it. The first engagement was a full storefront and back-office system for Classic Menswear, a Miami menswear retailer. I then reused the same inventory and admin architecture for a second client, Redgine Creates. Auralith also runs on its own platform, with a public site, client dashboard, and admin portal.",
    image: "/CaseStudies/auralith-dashboard.webp",
    imageFallback: "/CaseStudies/auralith-dashboard.webp",
    github: "#",
    demo: "https://auralithsystems.dev",
    featured: true,
    impact: "2 Clients",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Spring Boot", "Vercel"],
    highlights: [
      "Founded Dec 2025. Sole engineer on every engagement, from requirements to deployment.",
      "Client 1: Classic Menswear. Customer-facing storefront plus StoreLens, an inventory and operations dashboard, in production at classicmenswear.org.",
      "Client 2: Redgine Creates. Inventory system built by reusing the StoreLens architecture.",
      "Auralith's own platform: public site, client dashboard, and admin portal with role-based access.",
    ],
  },
  {
    id: 4,
    title: "Classic Menswear & StoreLens",
    description:
      "Production storefront and back-office system for a Miami menswear retailer: online reservations, customer accounts, inventory, tailoring work orders, and a staff dashboard (StoreLens) with role-based access.",
    longDescription:
      "Classic Menswear tracked its inventory in spreadsheets. I built a replacement through Auralith Systems: a Next.js storefront where customers browse stock, reserve items, and manage their accounts, backed by StoreLens, a staff dashboard for inventory, orders, alterations, and storefront content. The data layer is a 31-table Supabase Postgres schema with row-level security enabled on every table and access controlled by role (owner, staff, tailor, consultant, customer). I've also worked at Classic Menswear on the sales floor since 2019.",
    image: "/Images/StoreLens-transparent.webp",
    imageFallback: "/Images/StoreLens-transparent.png",
    github: "https://github.com/KevinJeromeTech/classic-menswear-redesign",
    demo: "https://classicmenswear.org",
    featured: true,
    impact: "Live Client",
    stack: ["Next.js", "TypeScript", "Supabase (Postgres)", "Tailwind CSS", "Claude API", "Playwright"],
    highlights: [
      "Designed a 31-table Postgres schema with row-level security on every table, five user roles, and per-role permissions the owner configures from the dashboard.",
      "Built 24-hour reservation holds in a single Postgres transaction that locks inventory rows first, so two customers can't both reserve the last unit.",
      "StoreLens dashboard: inventory with size variants, stock-movement history, QR-code stock counts, orders, and tailoring work orders.",
      "Owner-facing insights: server action aggregates sales, inventory, and tailoring data and asks Claude for restock alerts and slow-mover recommendations.",
      "Transactional email via Resend; Playwright end-to-end tests cover the storefront and authentication gating.",
    ],
  },
  {
    id: 1,
    title: "ExpenseIQ",
    description:
      "Full-stack expense tracker with JWT auth, budgets, analytics charts, and Claude-powered spending insights and transaction categorization. Deployed on Vercel and Render.",
    longDescription:
      "ExpenseIQ is a full-stack expense tracker I built and use, along with a few other people. The frontend is React 19 and TypeScript with TanStack Query for server state; the backend is a TypeScript Express API on PostgreSQL through Prisma. Instead of sending raw transactions to an LLM, the server computes the numbers first (category totals, budget usage, daily average, projected month-end spend) and gives Claude Haiku that summary to turn into specific insights. Claude also suggests a category when you add a transaction.",
    image: "/Images/ExpenseIQ-dashboard.webp",
    imageFallback: "/Images/ExpenseIQ-dashboard.jpg",
    github: "https://github.com/KevinJeromeTech/ExpenseIQ",
    demo: "https://expense-iq-lilac.vercel.app/",
    featured: true,
    impact: "In Production",
    stack: ["React 19", "TypeScript", "Express", "PostgreSQL", "Prisma", "Claude API"],
    highlights: [
      "TypeScript/Express REST API on PostgreSQL via Prisma: transactions, budgets, custom categories, and read-only share links.",
      "Auth built without a library: bcrypt hashing, JWTs, Zod validation on auth and user routes, rate limiting on /api/auth, and emailed password-reset tokens that expire after one hour.",
      "AI insights: the server computes spending metrics and budget pace, then sends that summary to Claude Haiku, which returns structured insights; Claude also auto-categorizes new transactions.",
      "Analytics dashboard built with Recharts; TanStack Query handles caching and refetching.",
      "GitHub Actions CI lints, unit-tests (Vitest), and builds the client and typechecks the server on every push; Playwright E2E specs cover auth, dashboard, and sharing.",
    ],
  },
  {
    id: 3,
    title: "Kairos",
    description:
      "Collaborative task and time-management app built with a 3-person team as the CodePath capstone.",
    longDescription:
      "Kairos is a task and time-management application built by a three-person team for the CodePath capstone. It is organized around time-blocking: planning the day in focused blocks rather than an open-ended to-do list. I worked across the React frontend and Node.js backend and ran the team's GitHub workflow.",
    image: "/Images/Kairos.webp",
    imageFallback: "/Images/Kairos.png",
    github: "https://github.com/Kairos-Moment/kairos-app?tab=readme-ov-file",
    demo: "",
    featured: false,
    impact: "Team Project",
    stack: ["React", "Node.js", "SQL"],
    highlights: [
      "Built with a 3-person team using React and Node.js, delivered within a single semester.",
      "REST API with persistent task storage.",
      "Ran the team's GitHub workflow: branching strategy and pull-request reviews.",
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "This site. React and Vite single-page app with per-page SEO, PWA support, and CI on every push.",
    longDescription:
      "This portfolio is a custom React and Vite site. Content (projects, blog posts) lives in plain data files so updating the site doesn't mean touching components. It ships with per-page metadata through react-helmet-async, an offline-capable PWA build, and long-lived cache headers for static assets on Vercel.",
    image: "/Images/Portfolio-home.webp",
    imageFallback: "/Images/Portfolio-home.jpg",
    github: "https://github.com/KevinJeromeTech/personal-portfolio",
    demo: "https://kevinjerome.dev/",
    featured: false,
    impact: "Live Site",
    stack: ["React", "Vite", "PWA", "CSS"],
    highlights: [
      "GitHub Actions CI runs lint, Vitest tests, and a production build on every push.",
      "WebP images, lazy loading, route-level code splitting, and 1-year immutable cache headers for hashed assets.",
      "Per-page SEO with react-helmet-async, JSON-LD, sitemap, and Open Graph tags.",
    ],
  },
  {
    id: 2,
    title: "Universal Education Empowerment",
    description:
      "Responsive, accessible static site presenting educational resources. CodePath WEB101 coursework.",
    longDescription:
      "Universal Education Empowerment is a static website built for CodePath's WEB101 course. It presents educational resources with a focus on responsive layout and accessibility.",
    image: "/Images/UEE-site.webp",
    imageFallback: "/Images/UEE-site.jpg",
    github: "https://github.com/KevinJeromeTech/UEE",
    demo: "https://spiketek241.github.io/Universal-Educational-Empowerment/",
    featured: false,
    impact: "Coursework",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Responsive layout for content and navigation across screen sizes.",
      "Semantic HTML, ARIA labels, and keyboard navigation.",
    ],
  },
];

export default projects;
