// src/About.jsx
import React from "react";
import Layout from "./components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-iteratum-dark mb-6">
          About Iteratum
        </h1>
        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
          Iteratum helps teams simplify how they work — without the fluff.
          We specialize in ClickUp and Zoho implementations that actually drive
          adoption, clarity, and accountability. Our approach blends project
          management expertise with intelligent automation to help small and
          mid-sized businesses operate like enterprise teams — fast.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              Our Mission
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              To give every team — no matter its size — the clarity, structure,
              and tools needed to execute with confidence. We believe project
              management systems should reduce noise, not create it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              What We Do
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We partner with growing teams to:
            </p>
            <ul className="list-disc list-inside text-neutral-700 space-y-1">
              <li>Implement and optimize ClickUp or Zoho systems</li>
              <li>Design workflows that align with how your team actually works</li>
              <li>Automate repetitive tasks and streamline handoffs</li>
              <li>Train users to adopt and sustain your new workspace</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              Why Teams Choose Us
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-2">
              Our clients trust us because we focus on results, not just
              configuration. Every engagement is guided by three principles:
            </p>
            <ul className="list-decimal list-inside text-neutral-700 space-y-1">
              <li>Clarity — one source of truth for every project.</li>
              <li>Accountability — clear ownership and visibility.</li>
              <li>Adoption — systems your team actually uses every day.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://cal.com/jonwoods"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-iteratum-primary inline-flex items-center"
          >
            Book A Discovery Call
          </a>
        </div>
      </section>
    </Layout>
  );
}
