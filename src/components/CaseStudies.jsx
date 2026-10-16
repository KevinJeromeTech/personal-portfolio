import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ReservationDiagram from "./ReservationDiagram.jsx";

const work = [
  {
    id: "classic-menswear",
    title: "Classic Menswear & StoreLens",
    context: "Client project through Auralith Systems",
    summary:
      "A Miami menswear and tailoring store was tracking its inventory in spreadsheets. I built its storefront and StoreLens, the staff dashboard that runs inventory, reservations, orders, and tailoring work orders. I later reused the StoreLens architecture for a second client, Redgine Creates.",
    facts: [
      "Reservations hold stock for 24 hours inside one Postgres transaction that locks inventory rows first, so two customers can't reserve the last unit.",
      "Row-level security on all 31 tables, with five roles and permissions the owner sets from the dashboard.",
      "Every stock change goes through one database function and is logged, including QR-code counts from a phone.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Claude API", "Playwright"],
    links: [
      { label: "classicmenswear.org", href: "https://classicmenswear.org", icon: "site" },
      { label: "Source", href: "https://github.com/KevinJeromeTech/classic-menswear-redesign", icon: "code" },
    ],
    visual: { type: "diagram" },
  },
  {
    id: "expenseiq",
    title: "ExpenseIQ",
    context: "Personal project",
    summary:
      "An expense tracker I built and use. The server works out the month's numbers first: spending by category, budget pace, and projected month-end total. Then Claude Haiku turns those numbers into specific, plain-English insights, and suggests a category for each new transaction.",
    facts: [
      "Auth built without a library: bcrypt, JWTs, Zod validation, rate limiting, and reset tokens that expire after an hour.",
      "TypeScript Express API on PostgreSQL through Prisma, with budgets, custom categories, and read-only share links.",
      "CI lints, unit-tests, and builds the client and typechecks the server on every push.",
    ],
    stack: ["React 19", "TypeScript", "Express", "PostgreSQL", "Prisma", "Claude API"],
    links: [
      { label: "Live demo", href: "https://expense-iq-lilac.vercel.app/", icon: "site" },
      { label: "Source", href: "https://github.com/KevinJeromeTech/ExpenseIQ", icon: "code" },
    ],
    visual: {
      type: "image",
      src: "/CaseStudies/expenseiq-budgets.webp",
      width: 1400,
      height: 710,
      alt: "ExpenseIQ category budgets and a spending-by-category donut chart",
    },
  },
  {
    id: "auralith",
    title: "Auralith Systems platform",
    context: "My consultancy",
    summary:
      "The platform I run Auralith on: a public site, a dashboard where clients follow their project's status and deliverables, and an admin portal for leads, projects, and invoices.",
    facts: [
      "Next.js front end with a Spring Boot (Java 21) backend on one PostgreSQL database.",
      "Separate access for public visitors, clients, and admins, checked on both the front end and the API.",
      "Invoices and project reports generated as PDFs in the browser.",
    ],
    stack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "Vercel"],
    links: [
      { label: "auralith-systems.vercel.app", href: "https://auralith-systems.vercel.app", icon: "site" },
      { label: "Read the build write-up", to: "/blog/building-auralith-systems" },
    ],
    visual: {
      type: "image",
      src: "/CaseStudies/auralith-dashboard.webp",
      width: 1600,
      height: 882,
      alt: "Auralith Systems admin dashboard with leads, projects, revenue, and quick actions",
    },
  },
];

function WorkLink({ link }) {
  if (link.to) {
    return <Link to={link.to} className="hm-link">{link.label}</Link>;
  }
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className="hm-link">
      {link.icon === "code" ? <FaGithub aria-hidden="true" /> : <FaExternalLinkAlt aria-hidden="true" />}
      {link.label}
    </a>
  );
}

export default function CaseStudies() {
  return (
    <section className="section-card cs-wrap" aria-labelledby="cs-title">
      <header className="hm-section-head">
        <h2 id="cs-title">Case studies</h2>
        <p>
          A closer look at three systems in production: one for a client, one
          for myself, and one that runs my consultancy.
        </p>
      </header>

      {work.map((item) => (
        <article key={item.id} className="hm-case" aria-labelledby={`case-${item.id}`}>
          <div className="hm-case-text">
            <p className="hm-case-context">{item.context}</p>
            <h3 id={`case-${item.id}`}>{item.title}</h3>
            <p className="hm-case-summary">{item.summary}</p>
            <ul className="hm-case-facts">
              {item.facts.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <p className="hm-case-stack">{item.stack.join(", ")}</p>
            <div className="hm-case-links">
              {item.links.map((l) => <WorkLink key={l.label} link={l} />)}
            </div>
          </div>

          <div className="hm-case-visual">
            {item.visual.type === "diagram" ? (
              <ReservationDiagram />
            ) : (
              <img
                src={item.visual.src}
                alt={item.visual.alt}
                width={item.visual.width}
                height={item.visual.height}
                loading="lazy"
                decoding="async"
                className="hm-shot"
              />
            )}
          </div>
        </article>
      ))}

    </section>
  );
}
