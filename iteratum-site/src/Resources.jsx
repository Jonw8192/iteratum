// src/Resources.jsx
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { insights } from "./resourcesData";

export default function Resources() {
  useEffect(() => {
    document.title = "Resources | Iteratum";
  }, []);

  const featured = insights.slice(0, 3);

  return (
    <>
      <Header />

      {/* Page Hero (H1) */}
      <section className="section-iteratum text-center py-24 border-b border-iteratum-gray-200 bg-iteratum-gradient-subtle">
        <h1 className="text-iteratum-hero mb-3">Resources</h1>
        <p className="text-iteratum-subtitle max-w-2xl mx-auto">
          Guides, templates, and insights that help teams work with clarity and confidence.
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link to="/resources/insights" className="btn-iteratum-primary">Read Insights</Link>
          <a href="/#contact" className="btn-iteratum-secondary">Get The Checklist</a>
        </div>
      </section>

      {/* Featured Insights (R1 grid) */}
      <section className="section-iteratum py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-iteratum-heading">Latest Insights</h2>
          <Link to="/resources/insights" className="text-sm underline">View All</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((post) => (
            <Link
              key={post.slug}
              to={`/resources/insights/${post.slug}`}
              className="card-iteratum p-6 hover-iteratum-lift block"
            >
              <div className="text-xs text-iteratum-steel">
                {new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })} • {post.readTime}
              </div>
              <h3 className="mt-2 font-semibold text-lg">{post.title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{post.excerpt}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {post.tags?.slice(0, 3).map((t) => (
                  <span key={t} className="pill-iteratum">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon Buckets */}
      <section className="section-iteratum pt-0 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-iteratum p-6">
            <div className="pill-iteratum mb-2">Coming Soon</div>
            <h3 className="font-semibold mb-1">Guides & Templates</h3>
            <p className="text-sm text-neutral-700">
              Practical downloads you can use right away. Setup guides, dashboards, and role-based checklists.
            </p>
          </div>
          <div className="card-iteratum p-6">
            <div className="pill-iteratum mb-2">Coming Soon</div>
            <h3 className="font-semibold mb-1">Case Studies</h3>
            <p className="text-sm text-neutral-700">
              Real rollouts with clear outcomes. What worked, what changed, and why adoption stuck.
            </p>
          </div>
          <div className="card-iteratum p-6">
            <div className="pill-iteratum mb-2">Coming Soon</div>
            <h3 className="font-semibold mb-1">Webinars</h3>
            <p className="text-sm text-neutral-700">
              Deep dives on ClickUp and Zoho structure, governance, and reporting.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
