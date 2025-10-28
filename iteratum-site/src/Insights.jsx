// src/Insights.jsx
import React from "react";
import Layout from "./components/Layout";
import { ArrowRight, Calendar, Tag, Download, BookOpen, CheckCircle2 } from "lucide-react";
import insightsData from "./data/insights.json";

export default function Insights() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16">
        {/* ---------- Header ---------- */}
        <h1 className="text-4xl font-bold text-iteratum-dark mb-4">
          Insights & Articles
        </h1>
        <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
          Short, practical reads on clarity, adoption, and automation.
          Every article comes from real-world implementation experience — not theory.
        </p>

        {/* ---------- Articles Grid ---------- */}
        {insightsData.length === 0 ? (
          <p className="text-neutral-600 text-center py-20">
            No articles yet. Check back soon.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {insightsData.map((a, i) => (
              <a
                key={i}
                href={`/resources/insights/${a.slug}`}
                className="block border rounded-2xl bg-white p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-3 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {a.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    {a.category}
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-iteratum-dark">
                  {a.title}
                </h2>
                <p className="text-sm text-neutral-700 mb-4 line-clamp-3">
                  {a.content.replace(/<[^>]+>/g, "").slice(0, 180)}...
                </p>
                <span className="inline-flex items-center text-iteratum-cyan font-semibold text-sm">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </a>
            ))}
          </div>
        )}

        {/* ---------- CTA ---------- */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-iteratum-dark mb-3">
            Want Help Putting These Ideas Into Practice?
          </h3>
          <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
            We help teams implement real systems that deliver clarity, speed,  
            and adoption — in about 10 business days.
          </p>
          <a
            href="https://cal.com/jonwoods"
            className="btn-iteratum-primary inline-flex items-center gap-2"
          >
            Book A Discovery Call
          </a>
        </div>
      </section>

      {/* ---------- Featured Resources ---------- */}
      <section className="bg-iteratum-gradient-subtle border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-iteratum-heading">Featured Resources</h2>
            <p className="text-iteratum-subtitle mt-2">
              Practical tools and templates built from real client systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Checklist */}
            <div className="card-iteratum p-8 text-center">
              <div className="flex justify-center mb-4">
                <Download className="h-10 w-10 text-iteratum-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
                Quick Setup Checklist
              </h3>
              <p className="text-sm text-neutral-700 mb-4">
                Use the same guide we use to align teams and launch fast.
              </p>
              <a
                href="https://cal.com/jonwoods"
                className="btn-iteratum-primary inline-flex items-center gap-2"
              >
                Get The Checklist
              </a>
            </div>

            {/* Case Studies */}
            <div className="card-iteratum p-8 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-10 w-10 text-iteratum-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
                Client Success Stories
              </h3>
              <p className="text-sm text-neutral-700 mb-4">
                See how teams achieved 95% adoption and faster delivery.
              </p>
              <a
                href="/about#results"
                className="btn-iteratum-secondary inline-flex items-center gap-2"
              >
                Read Stories
              </a>
            </div>

            {/* Implementation Guide */}
            <div className="card-iteratum p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-iteratum-cyan" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
                The 10-Day Implementation Plan
              </h3>
              <p className="text-sm text-neutral-700 mb-4">
                A clear, step-by-step roadmap for launching your new system.
              </p>
              <a
                href="/#how-it-works"
                className="btn-iteratum-accent inline-flex items-center gap-2"
              >
                View The Plan
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
