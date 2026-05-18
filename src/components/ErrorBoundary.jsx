import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container page-shell error-boundary-page">
          <section className="section-card not-found-card">
            <p className="not-found-code" aria-label="Error">!</p>
            <h2>Something went wrong</h2>
            <p className="not-found-msg">An unexpected error occurred. Try refreshing the page.</p>
            <Link to="/" className="hero-button hero-btn-primary">Go Home</Link>
          </section>
        </div>
      );
    }
    return this.props.children;
  }
}
