const projects = [
  {
    id: 6,
    title: "Auralith Systems",
    description:
      "My tech consulting company — client-facing site, multi-role admin and client dashboards, and internal tools built to manage real consulting engagements in production.",
    longDescription:
      "Auralith Systems is my own tech consulting company, and this platform is its operational backbone. It includes the public company site, a secure multi-role dashboard for managing clients and active projects, and is designed to scale with the business. Built with Next.js and TypeScript on the frontend, Tailwind CSS for design, Spring Boot handling the API and role-based access, and PostgreSQL as the single source of truth.",
    image: "/Images/Auralith.webp",
    imageFallback: "/Images/Auralith.png",
    github: "#",
    demo: "https://auralith-systems.vercel.app",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Built the full company site and multi-role dashboard serving both admin and client views from a single codebase.",
      "Spring Boot API handles role-based access control (RBAC), authentication, and all business logic.",
      "PostgreSQL database manages clients, projects, contacts, and company data across all platform surfaces.",
      "Next.js with TypeScript and Tailwind CSS — fully responsive, fast, and built to match the company brand.",
      "Live in production at auralith-systems.vercel.app — actively used for real consulting engagements.",
    ],
  },
  {
    id: 1,
    title: "ExpenseIQ",
    description:
      "Full-stack expense intelligence dashboard with React 19, TypeScript, JWT auth, AI-powered spending insights via Claude, and real-time data visualization.",
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
    featured: true,
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
      "Retail intelligence platform embedded into a live storefront — real-time inventory tracking, sales analytics, and AI-driven forecasting for store managers and staff.",
    longDescription:
      "StoreLens is a production retail intelligence platform built for Classic Menswear, embedded directly into the live storefront at /dashboard. It gives managers and staff real-time visibility into inventory levels, sales performance, and tailor productivity through a multi-service architecture: a Next.js frontend, a Spring Boot REST API for business logic and RBAC, and a Python FastAPI service powering AI-driven analytics, sales forecasting, and dead stock detection.",
    image: "/Images/StoreLens.webp",
    imageFallback: "/Images/StoreLens.png",
    github: "#",
    demo: "",
    featured: false,
    status: "In Progress",
    stack: ["Next.js", "Spring Boot", "Python", "PostgreSQL", "FastAPI"],
    highlights: [
      "Three-service architecture: Next.js 16 + TypeScript + Tailwind v4 frontend, Spring Boot Java API, and Python FastAPI analytics layer.",
      "Python AI service handles sales velocity analysis, demand forecasting, and automatic dead stock detection.",
      "Spring Boot manages RBAC, all REST endpoints, inventory writes, and webhook triggers for Next.js cache revalidation.",
      "Physical-to-digital inventory input via phone camera QR scanning and optional USB barcode scanner support.",
      "PostgreSQL as a single source of truth across products, inventory, orders, and staff for all three services.",
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
    featured: true,
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
