// src/Resources.jsx
import React from "react";
import Layout from "./components/Layout";
import { ArrowRight, Download, Lightbulb, FileText, PenSquare, Sparkles } from "lucide-react";
import insightsData from "./insights.json";

export default function Resources() {
  const insights = Array.isArray(insightsData) ? insightsData : [];
  const featured = insights.slice(0, 3);

  return (
    <Layout>
      {/* ---------- Hero ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-iteratum-dark mb-4">
          Resources and Learning Hub
        </h1>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed mb-8">
          Guides, frameworks, and insights from the Iteratum team to help you build ClickUp
          and Zoho systems that drive real adoption. No fluff. Just practical, proven strategies
          for faster launches and stronger execution.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/resources/insights"
            className="btn-iteratum-primary inline-flex items-center gap-2"
          >
            Read Insights
          </a>
          <a
            href="#guides"
            className="btn-iteratum-secondary inline-flex items-center gap-2"
          >
            Explore Guides
          </a>
          <a
            href="https://cal.com/jonwoods"
            className="btn-iteratum-accent inline-flex items-center gap-2"
          >
            Book A Call
          </a>
        </div>
      </section>

      {/* ---------- Why It Matters ---------- */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-iteratum-cyan/5 border-t border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Sparkles className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
          <h2 className="text-3xl font-bold text-iteratum-dark mb-3">Why It Matters</h2>
          <p className="text-lg text-iteratum-slate leading-relaxed max-w-3xl mx-auto">
            Most “how-to” content is written by marketers, not builders.  
            Iteratum’s resources come from real-world implementation work.  
            Every guide, template, and article is field-tested with live teams using ClickUp and Zoho daily.  
            You’ll learn what actually moves projects forward — and how to avoid the mistakes that stall adoption.
          </p>
        </div>
      </section>

      {/* ---------- Featured Insights ---------- */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-iteratum-heading">Latest Insights</h2>
            <p className="text-iteratum-subtitle mt-2">
              Straight from our implementation floor — insights that help teams move faster and think smarter.
            </p>
          </div>

          {featured.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {featured.map((a, i) => (
                <a
                  key={i}
                  href={`/resources/insights/${a.slug}`}
                  className="block border rounded-2xl bg-white p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-center justify-between mb-3 text-xs text-neutral-500">
                    <span>{a.date}</span>
                    <span>{a.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-iteratum-dark">
                    {a.title}
                  </h3>
                  <p className="text-sm text-neutral-700 mb-4 line-clamp-3">
                    {a.content
                      ? a.content.replace(/<[^>]+>/g, "").slice(0, 180)
                      : ""}
                    ...
                  </p>
                  <span className="inline-flex items-center text-iteratum-cyan font-semibold text-sm">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral-600">
              No insights available at the moment. Check back soon for fresh strategies and updates.
            </p>
          )}

          <div className="text-center mt-12">
            <a
              href="/resources/insights"
              className="btn-iteratum-secondary inline-flex items-center gap-2"
            >
              View All Insights
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Guides & Templates ---------- */}
      <section id="guides" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-iteratum-heading">Guides and Templates</h2>
          <p className="text-iteratum-subtitle mt-2">
            Designed from real client systems — ready to use, adapt, and implement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-iteratum p-8 text-center">
            <div className="flex justify-center mb-4">
              <Download className="h-10 w-10 text-iteratum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
              Quick Setup Checklist
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              The exact checklist we use to align teams before kickoff. 
              A simple 15-minute tool to reduce rework and confusion.
            </p>
            <a
              href="mailto:hello@iteratum.com?subject=Request%20Quick%20Setup%20Checklist"
              className="btn-iteratum-primary inline-flex items-center gap-2"
            >
              Get Checklist
            </a>
          </div>

          <div className="card-iteratum p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-10 w-10 text-iteratum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
              The Adoption Framework
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              A step-by-step process to build accountability into every project.  
              Learn how to launch systems that stick.
            </p>
            <a
              href="/resources/insights/adoption-playbook"
              className="btn-iteratum-secondary inline-flex items-center gap-2"
            >
              Read Guide
            </a>
          </div>

          <div className="card-iteratum p-8 text-center">
            <div className="flex justify-center mb-4">
              <FileText className="h-10 w-10 text-iteratum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
              ClickUp Architecture Template
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              Our clean, scalable ClickUp workspace design — used by real clients to launch 
              faster and grow without chaos.
            </p>
            <a
              href="mailto:hello@iteratum.com?subject=Request%20ClickUp%20Template"
              className="btn-iteratum-accent inline-flex items-center gap-2"
            >
              Request Template
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Write With Us ---------- */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white border-t border-neutral-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <PenSquare className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
          <h2 className="text-3xl font-bold text-iteratum-dark mb-3">Write for Iteratum</h2>
          <p className="text-lg text-iteratum-slate leading-relaxed mb-8">
            Have insight into ClickUp, Zoho, or modern project management?  
            We welcome guest contributors who share our belief in practical, 
            real-world knowledge over theory.  
            Pitch your article idea and join a growing network of system builders.
          </p>
          <a
            href="mailto:hello@iteratum.com?subject=Contributor%20Inquiry"
            className="btn-iteratum-primary inline-flex items-center gap-2"
          >
            Pitch an Article
          </a>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">
            Build Systems That Teams Actually Use
          </h2>
          <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
            Whether you’re implementing ClickUp or Zoho, our frameworks turn
            complexity into clarity. Launch in 10 days, adopt for life.
          </p>
          <a
            href="https://cal.com/jonwoods"
            className="btn-iteratum-primary inline-flex items-center gap-2"
          >
            Book A Discovery Call
          </a>
        </div>
      </section>
    </Layout>
  );
}
