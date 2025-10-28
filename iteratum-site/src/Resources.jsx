// src/Resources.jsx
import React from "react";
import Layout from "./components/Layout";
import { FileText, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

export default function Resources() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-iteratum-dark mb-4">
          Resources & Insights
        </h1>
        <p className="text-lg text-neutral-700 leading-relaxed mb-10">
          Practical guides, process frameworks, and insights to help your team work smarter.  
          These are the same resources we use when helping clients design better systems,  
          improve adoption, and deliver projects faster.
        </p>

        {/* Featured Resources */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border rounded-2xl bg-white hover:shadow-lg transition">
            <FileText className="h-8 w-8 text-iteratum-cyan mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Quick Setup Checklist
            </h2>
            <p className="text-neutral-700 text-sm mb-4">
              A step-by-step checklist to align your workspace fast.  
              Use it to build clarity and accountability from day one.
            </p>
            <a
              href="#"
              className="text-iteratum-cyan text-sm font-semibold inline-flex items-center gap-1 hover:underline"
            >
              Get The Checklist <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="p-6 border rounded-2xl bg-white hover:shadow-lg transition">
            <BookOpen className="h-8 w-8 text-iteratum-cyan mb-4" />
            <h2 className="text-xl font-semibold mb-2">Adoption Playbook</h2>
            <p className="text-neutral-700 text-sm mb-4">
              Learn how to drive adoption across your team with simple  
              frameworks that keep everyone aligned and accountable.
            </p>
            <a
              href="/resources/insights/adoption-playbook"
              className="text-iteratum-cyan text-sm font-semibold inline-flex items-center gap-1 hover:underline"
            >
              Read Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="p-6 border rounded-2xl bg-white hover:shadow-lg transition">
            <Lightbulb className="h-8 w-8 text-iteratum-cyan mb-4" />
            <h2 className="text-xl font-semibold mb-2">Insights & Articles</h2>
            <p className="text-neutral-700 text-sm mb-4">
              Browse short articles on process design, automation, and  
              change management — written for real-world teams.
            </p>
            <a
              href="/resources/insights"
              className="text-iteratum-cyan text-sm font-semibold inline-flex items-center gap-1 hover:underline"
            >
              View Insights <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold mb-3 text-iteratum-dark">
            Want help implementing what you learn?
          </h3>
          <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
            We can take your team from reading to results — guiding you through  
            structure, automation, and adoption in about 10 days.
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
