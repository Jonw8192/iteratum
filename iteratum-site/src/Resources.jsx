// src/Resources.jsx
import React from "react";
import Layout from "./components/Layout";
import { ArrowRight, Download, BookOpen, Lightbulb, FileText } from "lucide-react";
import insightsData from "./data/insights.json";

export default function Resources() {
  const featured = insightsData.slice(0, 3); // show top 3 insights

  return (
    <Layout>
      {/* ---------- Hero ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-iteratum-dark mb-4">
          Resources & Learning Center
        </h1>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed mb-8">
          Practical tools, guides, and insights to help teams implement  
          ClickUp and Zoho systems that actually work — fast.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/resources/insights" className="btn-iteratum-primary inline-flex items-center gap-2">
            Read Insights
          </a>
          <a href="#guides" className="btn-iteratum-secondary inline-flex items-center gap-2">
            Explore Guides
          </a>
          <a href="https://cal.com/jonwoods" className="btn-iteratum-accent inline-flex items-center gap-2">
            Book A Call
          </a>
        </div>
      </section>

      {/* ---------- Featured Insights ---------- */}
      <section className="bg-iteratum-gradient-subtle border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-iteratum-heading">Latest Insights</h2>
            <p className="text-iteratum-subtitle mt-2">
              Quick reads from our team on clarity, adoption, and automation.
            </p>
          </div>

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
                  {a.content.replace(/<[^>]+>/g, "").slice(0, 180)}...
                </p>
                <span className="inline-flex items-center text-iteratum-cyan font-semibold text-sm">
                  Read More <ArrowRight className="h-4 w-4 ml-1" />
                </span>
              </a>
            ))}
          </div>

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
          <h2 className="text-iteratum-heading">Guides & Templates</h2>
          <p className="text-iteratum-subtitle mt-2">
            Tools built from real client systems — ready to use or adapt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Guide 1 */}
          <div className="card-iteratum p-8 text-center">
            <div className="flex justify-center mb-4">
              <Download className="h-10 w-10 text-iteratum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
              Quick Setup Checklist
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              The same alignment checklist we use with clients to start projects fast.
            </p>
            <a
              href="https://cal.com/jonwoods"
              className="btn-iteratum-primary inline-flex items-center gap-2"
            >
              Download
            </a>
          </div>

          {/* Guide 2 */}
          <div className="card-iteratum p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-10 w-10 text-iteratum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
              The Adoption Framework
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              A step-by-step playbook for increasing system usage and team accountability.
            </p>
            <a
              href="/resources/insights/adoption-playbook"
              className="btn-iteratum-secondary inline-flex items-center gap-2"
            >
              Read Guide
            </a>
          </div>

          {/* Guide 3 */}
          <div className="card-iteratum p-8 text-center">
            <div className="flex justify-center mb-4">
              <FileText className="h-10 w-10 text-iteratum-cyan" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-iteratum-dark">
              ClickUp Architecture Template
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              A clean hierarchy and workflow design for scalable ClickUp systems.
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

      {/* ---------- Call to Action ---------- */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">
            Build Systems That Teams Actually Use
          </h2>
          <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
            Whether you’re implementing ClickUp or Zoho, our framework helps  
            teams reach full adoption in about 10 days.
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
