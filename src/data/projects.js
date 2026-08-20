const projects = [
  {
    id: 6,
    title: "Auralith Systems",
    description:
      "Software consultancy I founded in Dec 2025 — delivered a full storefront redesign and custom admin dashboard for a live client (Classic Menswear) as sole engineer.",
    longDescription:
      "Auralith Systems is the software consultancy I founded in December 2025. I own the full engineering lifecycle for every engagement — architecture, frontend, backend, admin tooling, and deployment — as a sole engineer. First client delivery: a complete storefront redesign and StoreLens admin dashboard for Classic Menswear, replacing a manual spreadsheet-based operation with a live site and centralized content management. Site is live at classicmenswear.org.",
    image: "/Images/StoreLens.webp",
    imageFallback: "/Images/StoreLens.png",
    github: "#",
    demo: "https://classicmenswear.org",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    highlights: [
      "Founded Dec 2025 — sole engineer delivering full-stack solutions for real clients.",
      "First client: Classic Menswear — storefront redesign + StoreLens admin dashboard shipped to production.",
      "Replaced manual spreadsheet management with a centralized, live content system.",
      "Owns the complete engineering lifecycle: architecture, frontend, admin tooling, and Vercel deployment.",
    ],
  },
  {
    id: 1,
    title: "ExpenseIQ",
    description:
      "Full-stack expense tracker with JWT auth, AI-powered spending insights via Claude, and real-time charts — deployed to production with a full CI/CD pipeline.",
    longDescription:
      "ExpenseIQ is a production-grade full-stack expense tracker that goes beyond logging — it actively helps you understand your spending. Built with React 19, TypeScript, and Node.js/Express, it features a complete JWT authentication system, AI-powered insights and transaction auto-categorization via the Anthropic Claude API, optimistic UI updates with TanStack Query v5, and real-time charts with Recharts. Deployed on Vercel and Render with a full CI/CD pipeline.",
    image: "/Images/ExpenseIQ.webp",
    imageFallback: "/Images/ExpenseIQ.png",
    github: "https://github.com/KevinJeromeTech/ExpenseIQ",
    demo: "https://expense-iq-lilac.vercel.app/",
    featured: true,
    stack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Claude AI"],
    highlights: [
      "JWT auth built from scratch — bcrypt hashing, rate limiting, httpOnly refresh tokens, and password reset via Nodemailer.",
      "Anthropic Claude API (claude-haiku-4-5) auto-categorizes transactions and generates plain-English spending insights in real time.",
      "TanStack Query v5 powers all server state — optimistic updates, 5-minute stale windows, and automatic rollback on failure.",
      "Recharts dashboard with a spending-by-category donut, month-over-month bar chart, and daily trend line — all feel instant.",
      "GitHub Actions CI runs ESLint, Vitest unit tests, and Playwright E2E across the full auth flow on every push.",
    ],
  },
  {
    id: 2,
    title: "Universal Education Empowerment",
    description:
      "Mission-driven education platform designed for accessibility, impact, and easy access to learning resources.",
    longDescription:
      "Universal Education Empowerment is a mission-driven web project presenting educational resources through a strong visual identity and purposeful layout built for accessibility, clarity, and real impact. The goal was to make quality educational content feel approachable and inspiring for a wide audience.",
    image: "/Images/UEE.webp",
    imageFallback: "/Images/UEE.png",
    github: "https://github.com/KevinJeromeTech/UEE",
    demo: "https://spiketek241.github.io/Universal-Educational-Empowerment/",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Designed a visually engaging layout around a strong educational mission.",
      "Built fully responsive sections for content presentation and navigation.",
      "Prioritized accessibility with semantic HTML, ARIA labels, and keyboard navigation.",
      "Focused on branding, structure, and clear user-facing communication.",
    ],
  },
  {
    id: 3,
    title: "Kairos",
    description:
      "Productivity and scheduling app built around intentional time-blocking and distraction-free planning.",
    longDescription:
      "Kairos is a productivity and scheduling application centered around focused structure, time awareness, and intentional planning. The project explores how digital interfaces can support rhythm, organization, and calm productivity, drawing inspiration from time-blocking and deep work methodologies.",
    image: "/Images/Kairos.webp",
    imageFallback: "/Images/Kairos.png",
    github: "https://github.com/Kairos-Moment/kairos-app?tab=readme-ov-file",
    demo: "",
    featured: false,
    stack: ["React", "Node.js", "CSS"],
    highlights: [
      "Built around a productivity-first concept with real planning workflows.",
      "Combined strong visual structure with focused interaction patterns.",
      "Explored time-blocking UI concepts with a calm, minimal design language.",
      "Demonstrates product thinking and interface direction beyond basic CRUD.",
    ],
  },
  {
    id: 4,
    title: "StoreLens",
    description:
      "Custom admin dashboard built for Classic Menswear — giving the owner centralized control over storefront content, inventory, and product tracking, replacing manual spreadsheet-based management.",
    longDescription:
      "StoreLens is a custom admin system built for Classic Menswear as part of a full storefront redesign delivered through Auralith Systems. The owner now has a single dashboard to manage storefront content, inventory, and product tracking — replacing the manual, spreadsheet-based process they had before. Delivered solo: architecture, frontend, admin tooling, and deployment on Vercel.",
    image: "/Images/StoreLens.webp",
    imageFallback: "/Images/StoreLens.png",
    github: "#",
    demo: "https://classicmenswear.org",
    featured: false,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Designed and deployed a mobile-first storefront with inquiry and reservation functionality, replacing an outdated web presence.",
      "Built StoreLens, a custom admin dashboard giving the owner full control over storefront content, inventory, and product tracking.",
      "Replaced manual spreadsheet-based management with a centralized digital system.",
      "Delivered end-to-end as a solo engineer through Auralith Systems: architecture, frontend, admin tooling, and Vercel deployment.",
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "Production-ready portfolio built with React and Vite featuring PWA support, animations, SEO, and performance optimizations.",
    longDescription:
      "This portfolio is a fully custom personal site built to present my work, technical growth, and professional direction. Every detail was intentionally crafted — from the animated code rain background and page transitions to the project detail pages and Lighthouse-optimized performance. Built with React, Vite, and a focus on real production quality.",
    image: "/Images/nportfolio.webp",
    imageFallback: "/Images/nportfolio.png",
    github: "https://github.com/KevinJeromeTech/personal-portfolio",
    demo: "https://kevinjerome.dev/",
    featured: false,
    stack: ["React", "Vite", "PWA", "CSS"],
    highlights: [
      "Built with React, Vite, PWA support, and a full CI/CD pipeline via GitHub Actions.",
      "Includes code rain canvas animation, page transitions, tilt effects, and scroll animations.",
      "Optimized for performance: WebP images, lazy loading, chunk splitting, and 1-year Vercel cache headers.",
      "Full SEO setup with JSON-LD, sitemap, Open Graph, and react-helmet-async per page.",
    ],
  },
];

export default projects;
