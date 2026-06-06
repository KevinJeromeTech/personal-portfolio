const projects = [
  {
    id: 1,
    title: "ExpenseIQ",
    description:
      "Full-stack expense tracker with React 19, TypeScript, Node.js/Express, PostgreSQL, and Claude AI for smart spending insights and auto-categorization.",
    longDescription:
      "ExpenseIQ is a production-grade full-stack expense intelligence dashboard built with React 19, TypeScript, and Node.js/Express. It features a complete JWT auth system, AI-powered spending insights via the Anthropic Claude API, real-time data visualization with Recharts, and is deployed on Vercel and Render with a Neon PostgreSQL database.",
    image: "/Images/ExpenseIQ.webp",
    imageFallback: "/Images/ExpenseIQ.png",
    github: "https://github.com/KevinJeromeTech/ExpenseIQ",
    demo: "https://expense-iq-lilac.vercel.app/",
    featured: true,
    stack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Claude AI"],
    highlights: [
      "Built full JWT auth system with bcrypt password hashing, rate limiting, and password reset via Nodemailer.",
      "Integrated Anthropic Claude API (claude-haiku-4-5) for AI-generated spending insights and transaction auto-categorization.",
      "React 19 with TanStack Query v5 and Recharts for real-time data visualization and intelligent caching.",
      "Prisma ORM with PostgreSQL (Neon) in production and SQLite locally, validated with Zod on all auth endpoints.",
      "Deployed on Vercel and Render with GitHub Actions CI, Vitest unit tests, and Playwright E2E coverage.",
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
      "Retail intelligence platform embedded into a live storefront — real-time inventory, sales analytics, and AI-powered forecasting for store managers and staff.",
    longDescription:
      "StoreLens is a production retail intelligence platform built for Classic Menswear, embedded directly into the storefront at /dashboard. It gives managers and staff real-time visibility into inventory, sales performance, and tailor productivity through a multi-service architecture spanning a Next.js frontend, Spring Boot API, and a Python FastAPI service for AI-driven analytics.",
    image: "/Images/StoreLens.webp",
    imageFallback: "/Images/StoreLens.png",
    github: "#",
    demo: "",
    featured: false,
    status: "In Progress",
    stack: ["Next.js", "Spring Boot", "Python", "PostgreSQL", "FastAPI"],
    highlights: [
      "Multi-service architecture: Next.js 16 + TypeScript + Tailwind v4 frontend, Spring Boot (Java) API, and Python FastAPI analytics service.",
      "Python AI layer handles sales forecasting, velocity analysis, and dead stock detection.",
      "Spring Boot manages RBAC, REST endpoints, inventory writes, and webhook triggers for on-demand Next.js cache revalidation.",
      "Physical-to-digital inventory input via phone camera QR scanning and optional USB barcode scanner.",
      "PostgreSQL as a single source of truth for products, inventory, orders, and staff across all services.",
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
    demo: "https://personal-portfolio-liard-xi-32.vercel.app/",
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
