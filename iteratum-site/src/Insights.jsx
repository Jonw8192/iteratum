// src/Insights.jsx
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { insights } from "./resourcesData";

export default function Insights() {
  useEffect(() => {
    document.title = "Insights | Iteratum Resources";
  }, []);

  return (
    <>
      <Header />

      {/* Page Hero */}
      <section className="section-iteratum text-center py-24 border-b border-iteratum-gray-200 bg-iteratum-gradient-subtle">
        <h1 className="text-iteratum-hero mb-3">Insights</h1>
        <p className="text-iteratum-subtitle max-w-2xl mx-auto">
          Practical guidance on adoption, structure, and delivery. No fluff.
        </p>
      </section>

      {/* Grid (R1) */}
      <section className="section-iteratum py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((post) => (
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

      <Footer />
    </>
  );
}
