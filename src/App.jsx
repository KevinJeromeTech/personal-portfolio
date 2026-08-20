import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
const ThreeBackground = lazy(() => import("./components/ThreeBackground.jsx"));

const Home          = lazy(() => import("./pages/Home.jsx"));
const About         = lazy(() => import("./pages/About.jsx"));
const Skills        = lazy(() => import("./pages/Skills.jsx"));
const Projects      = lazy(() => import("./pages/Projects.jsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.jsx"));
const Blog          = lazy(() => import("./pages/Blog.jsx"));
const BlogPost      = lazy(() => import("./pages/BlogPost.jsx"));
const Contact       = lazy(() => import("./pages/Contact.jsx"));
const NotFound      = lazy(() => import("./pages/NotFound.jsx"));

function PageLoader() {
  return (
    <div className="page-loader" aria-label="Loading page" role="status">
      <div className="page-loader-bar" />
    </div>
  );
}

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #9b2d20, #c0392b, #e05c50)",
        zIndex: 9999,
        transition: "width 0.08s linear",
        pointerEvents: "none",
        borderRadius: "0 2px 2px 0",
      }}
    />
  );
}

function useSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const handle = (e) => {
      const card = e.target.closest(
        ".section-card, .project-showcase-card, .skill-area-card, .tech-group-card, .about-highlight-card, .core-value-card, .soft-skill-card, .preview-card, .info-card, .blog-card"
      );
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, []);
}

function useTilt() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const SEL = ".tilt-card";
    const onMove = (e) => {
      const el = e.target.closest(SEL);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform 0.1s linear";
      el.style.transform = `perspective(900px) rotateX(${ny * -6}deg) rotateY(${nx * 6}deg)`;
    };
    const onLeave = (e) => {
      const el = e.target.closest(SEL);
      if (!el) return;
      el.style.transition = "transform 0.5s ease";
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave, true);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, []);
}

function App() {
  const location = useLocation();
  useSpotlight();
  useTilt();

  return (
    <>
      <Analytics />
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#1f1225", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" },
          success: { iconTheme: { primary: "#4ade80", secondary: "#1f1225" } },
          error:   { iconTheme: { primary: "#ef4444", secondary: "#1f1225" } },
        }}
      />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="sync" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/"              element={<Home />} />
              <Route path="/about"         element={<About />} />
              <Route path="/skills"        element={<Skills />} />
              <Route path="/projects"      element={<Projects />} />
              <Route path="/projects/:id"  element={<ProjectDetail />} />
              <Route path="/blog"          element={<Blog />} />
              <Route path="/blog/:id"      element={<BlogPost />} />
              <Route path="/contact"       element={<Contact />} />
              <Route path="*"              element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
