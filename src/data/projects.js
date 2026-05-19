const projects = [
  {
    id: 1,
    title: "ExpenseIQ",
    description:
      "Smart expense intelligence for tracking, reviewing, and improving spending habits.",
    longDescription:
      "ExpenseIQ is a full-stack expense intelligence dashboard built to help users track spending, review transactions, and understand financial behaviour through a clean, professional analytics experience. The project was designed from the ground up with a fintech aesthetic — balancing data density with visual clarity.",
    image: "/Images/ExpenseIQ.webp",
    imageFallback: "/Images/ExpenseIQ.png",
    github: "https://github.com/KevinJeromeTech/ExpenseIQ",
    demo: "https://expense-iq-lilac.vercel.app/",
    featured: true,
    stack: ["React", "TypeScript", "Node.js"],
    highlights: [
      "Built a polished dashboard-style interface for modern expense tracking.",
      "Structured project data and presentation around real-world fintech patterns.",
      "Focused on clean UI, readability, and recruiter-facing project polish.",
      "Implemented responsive layouts that work across desktop and mobile viewports.",
    ],
  },
  {
    id: 2,
    title: "Universal Education Empowerment",
    description:
      "A project focused on impactful education-centered web design and access to learning resources.",
    longDescription:
      "Universal Education Empowerment is a mission-driven web project presenting educational resources through a strong visual identity and purposeful layout designed for accessibility, clarity, and impact. The goal was to make quality educational content feel approachable and inspiring for a wide audience.",
    image: "/Images/UEE.webp",
    imageFallback: "/Images/UEE.png",
    github: "https://github.com/KevinJeromeTech/UEE",
    demo: "https://spiketek241.github.io/Universal-Educational-Empowerment/",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Designed a visually engaging layout around a strong educational mission.",
      "Built fully responsive sections for content presentation and navigation.",
      "Focused on branding, structure, and real user-facing communication.",
      "Prioritised accessibility — semantic HTML, ARIA labels, and keyboard navigation.",
    ],
  },
  {
    id: 3,
    title: "Kairos",
    description:
      "A productivity-focused scheduling concept centered on structure, timing, and intentional planning.",
    longDescription:
      "Kairos is a productivity and scheduling concept centred around focused structure, time awareness, and intentional planning. The project explores how digital interfaces can support rhythm, organisation, and calm productivity — drawing inspiration from time-blocking and deep work methodologies. The interface was designed to feel deliberate and distraction-free.",
    image: "/Images/Kairos.webp",
    imageFallback: "/Images/Kairos.png",
    github: "https://github.com/Kairos-Moment/kairos-app?tab=readme-ov-file",
    demo: "",
    featured: false,
    stack: ["React", "Node.js", "CSS"],
    highlights: [
      "Built around a productivity-first concept rather than a generic CRUD layout.",
      "Combined strong visual structure with planning-focused interaction patterns.",
      "Explored time-blocking UI concepts with a calm, focused design language.",
      "Showcases product thinking and interface direction for future expansion.",
    ],
  },
  {
    id: 4,
    title: "StoreLens",
    description:
      "Retail intelligence platform providing analytics and insights for store performance. Currently in active development.",
    longDescription:
      "StoreLens is a retail intelligence platform currently in active development, focused on giving store owners and managers clear performance analytics, inventory visibility, and actionable insights. Built on a modern full-stack architecture, StoreLens aims to bring enterprise-grade analytics to independent retailers without the enterprise complexity.",
    image: "/Images/StoreLens.webp",
    imageFallback: "/Images/StoreLens.png",
    github: "#",
    demo: "",
    featured: false,
    status: "In Progress",
    stack: ["React", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Designed as a serious full-stack retail analytics product, not a toy project.",
      "Built around a React frontend, Spring Boot API, and PostgreSQL database.",
      "Implements role-based access control for managers, staff, and admins.",
      "Will be promoted to featured once the production version is complete.",
    ],
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "A redesigned portfolio showcasing projects, growth, branding, and professional identity.",
    longDescription:
      "This portfolio is a fully redesigned personal site built to present my work, technical growth, design instincts, and professional direction clearly to recruiters, engineers, and collaborators. Every section was intentionally crafted — from the animated hero to the project detail pages — to reflect both technical capability and design sensibility.",
    image: "/Images/nportfolio.webp",
    imageFallback: "/Images/nportfolio.png",
    github: "https://github.com/KevinJeromeTech/personal-portfolio",
    demo: "https://personal-portfolio-liard-xi-32.vercel.app/",
    featured: true,
    stack: ["React", "CSS", "Vite"],
    highlights: [
      "Rebuilt from a basic portfolio into a polished React-based experience.",
      "Introduced stronger project presentation, navigation, and brand identity.",
      "Implemented SEO, accessibility, code splitting, and Vercel Analytics.",
      "Focused on a consistent visual system across light and dark mode.",
    ],
  },
];

export default projects;
