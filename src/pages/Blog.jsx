import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FiClock, FiTag } from "react-icons/fi";
import posts from "../data/posts.js";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
});

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Kevin Jerome</title>
        <meta name="description" content="Thoughts on React, full-stack development, performance, and building things for the web." />
        <link rel="canonical" href="https://kevinjerome.dev/blog" />
        <meta property="og:title" content="Blog | Kevin Jerome" />
        <meta property="og:url" content="https://kevinjerome.dev/blog" />
      </Helmet>

      <motion.main
        id="main-content"
        className="container page-shell"
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="section-card blog-hero-card">
          <div className="projects-hero-orb-1" aria-hidden="true" />
          <div className="projects-hero-orb-2" aria-hidden="true" />
          <div className="blog-hero-inner">
            <span className="page-eyebrow">Writing</span>
            <h1 className="page-hero-title">Blog</h1>
            <p className="projects-lead">
              Thoughts on React, full-stack development, performance, and lessons
              learned from building real products.
            </p>
          </div>
        </section>

        <section className="section-card">
          <div className="blog-list">
            {posts.map((post, i) => (
              <motion.article key={post.id} className="blog-card" {...fadeUp(i * 0.08)}>
                <div className="blog-card-meta">
                  <time className="blog-date" dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="blog-read-time">
                    <FiClock aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      <FiTag aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="blog-coming-soon">Full post coming soon</span>
              </motion.article>
            ))}
          </div>
        </section>
      </motion.main>
    </>
  );
}
