import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { FiClock, FiTag, FiArrowLeft } from "react-icons/fi";
import posts from "../data/posts.js";
import "../styles/blog.css";

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ContentBlock({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="bp-h2">{block.text}</h2>;

    case "p":
      return <p className="bp-p">{block.text}</p>;

    case "bullets":
      return (
        <ul className="bp-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "stack":
      return (
        <div className="bp-stack-grid">
          {block.items.map((item) => (
            <div className="bp-stack-row" key={item.label}>
              <span className="bp-stack-label">{item.label}</span>
              <span className="bp-stack-value">{item.value}</span>
            </div>
          ))}
        </div>
      );

    case "code":
      return (
        <div className="bp-code-block">
          <span className="bp-code-lang">{block.lang}</span>
          <pre><code>{block.text}</code></pre>
        </div>
      );

    case "callout":
      return (
        <aside className="bp-callout">
          <span className="bp-callout-icon" aria-hidden="true">💡</span>
          <p>{block.text}</p>
        </aside>
      );

    default:
      return null;
  }
}

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" replace />;
  if (!post.content) return <Navigate to="/blog" replace />;

  return (
    <>
      <Helmet>
        <title>{post.title} | Kevin Jerome</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://kevinjerome.dev/blog/${post.id}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://kevinjerome.dev/blog/${post.id}`} />
      </Helmet>

      <motion.main
        id="main-content"
        className="container page-shell"
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Back link */}
        <div className="bp-back-wrap">
          <Link to="/blog" className="bp-back-link">
            <FiArrowLeft aria-hidden="true" />
            Back to Blog
          </Link>
        </div>

        {/* Header card */}
        <motion.section
          className="section-card bp-header-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bp-header-orb-1" aria-hidden="true" />
          <div className="bp-header-orb-2" aria-hidden="true" />

          <div className="bp-header-inner">
            {post.logo && (
              <img src={post.logo} alt="" className="bp-header-logo" aria-hidden="true" />
            )}
            <div className="bp-meta">
              <time className="blog-date" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span className="blog-read-time">
                <FiClock aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <h1 className="bp-title">{post.title}</h1>
            <p className="bp-excerpt">{post.excerpt}</p>

            <div className="blog-tags bp-header-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  <FiTag aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Body */}
        <motion.section
          className="section-card bp-body-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.48, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <article className="bp-article">
            {post.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </article>
        </motion.section>

        {/* Footer nav */}
        <div className="bp-footer-nav">
          <Link to="/blog" className="bp-back-link">
            <FiArrowLeft aria-hidden="true" />
            All Posts
          </Link>
          <Link to="/projects" className="hero-button">
            See Projects
          </Link>
        </div>
      </motion.main>
    </>
  );
}
