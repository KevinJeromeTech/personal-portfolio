const projects = [
  {
    id: 1,
    title: "ExpenseIQ",
    description:
      "Full-stack expense tracking dashboard with analytics, transaction history, and smart spending insights.",
    longDescription:
      "ExpenseIQ is a full-stack expense intelligence dashboard built to help users track spending, review transactions, and understand financial behavior through a clean, data-driven interface. Designed with a fintech aesthetic that balances data density with visual clarity.",
    image: "/Images/ExpenseIQ.webp",
    imageFallback: "/Images/ExpenseIQ.png",
    github: "https://github.com/KevinJeromeTech/ExpenseIQ",
    demo: "https://expense-iq-lilac.vercel.app/",
    featured: true,
    stack: ["React", "TypeScript", "Node.js"],
    highlights: [
      "Built a polished fintech-style dashboard for real-time expense tracking.",
      "Structured data presentation around modern analytics patterns.",
      "Implemented fully responsive layouts across desktop and mobile.",
      "Focused on clean UI, readability, and production-level polish.",
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
      "Retail analytics platform giving store owners clear performance data, inventory visibility, and actionable insights.",
    longDescription:
      "StoreLens is a retail intelligence platform in active development, built to give store owners and managers clear performance analytics, inventory visibility, and actionable insights. Built on a modern full-stack architecture, StoreLens brings enterprise-grade analytics to independent retailers without the enterprise complexity.",
    image: "/Images/StoreLens.webp",
    imageFallback: "/Images/StoreLens.png",
    github: "#",
    demo: "",
    featured: false,
    status: "In Progress",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Designed as a production-grade retail analytics product with real business value.",
      "Full-stack architecture using React frontend, Spring Boot API, and PostgreSQL.",
      "Implements role-based access control for managers, staff, and admins.",
      "Currently in active development toward a complete production release.",
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
