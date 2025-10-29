// src/About.jsx
import React from "react";
import Layout from "./components/Layout";
import { CheckCircle2, Users, Zap, Target, Workflow, Bot } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* ---------- Hero Section ---------- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50 to-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-iteratum-dark leading-tight">
            We Build Systems That Teams Actually Use
          </h1>
          <p className="mt-4 text-lg text-iteratum-slate">
            Iteratum helps growing teams bring order, clarity, and automation to their daily work — 
            without the complexity of enterprise systems or the chaos of DIY setups.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/resources" className="btn-iteratum-primary">Explore Resources</a>
            <a href="https://cal.com/jonwoods" className="btn-iteratum-secondary">Book A Call</a>
          </div>
        </div>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="py-20 bg-white border-t border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <Zap className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              ClickUp & Zoho Implementations
            </h3>
            <p className="text-sm text-neutral-600">
              We design and launch structured workspaces that scale. Clear roles, automation, and dashboards that drive adoption.
            </p>
          </div>
          <div>
            <Workflow className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              Automation & QA Systems
            </h3>
            <p className="text-sm text-neutral-600">
              We build repeatable workflows that reduce human error and improve visibility — so teams stay focused on what matters.
            </p>
          </div>
          <div>
            <Users className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              Training & Adoption
            </h3>
            <p className="text-sm text-neutral-600">
              A good system is useless if no one uses it. We make sure every person knows what to do and where to find it.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why We Do It ---------- */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">Why We Exist</h2>
          <p className="text-lg text-iteratum-slate leading-relaxed">
            We’ve seen too many smart, capable teams lose time and energy to poor systems. 
            Work feels harder than it should — not because people lack talent, but because their tools 
            and processes don’t align. Iteratum was created to fix that.
          </p>
          <p className="mt-4 text-iteratum-slate">
            Our goal is simple: give small and mid-sized teams the same level of operational clarity 
            that Fortune 500 companies enjoy — minus the bureaucracy, inflated cost, or consulting fluff.
          </p>
        </div>
      </section>

      {/* ---------- How We Work ---------- */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-iteratum-dark">How We Work</h2>
            <p className="text-lg text-iteratum-slate mt-3">
              We’re not a vendor — we’re a partner. Every project is built on collaboration, transparency, and iteration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <Target className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">Aligned From Day One</h3>
              <p className="text-sm text-neutral-700 mt-2">
                We start with discovery and planning — understanding your goals, challenges, and how your team actually works.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <Bot className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">Iterative Implementation</h3>
              <p className="text-sm text-neutral-700 mt-2">
                We build fast, test early, and adjust together. You’ll see progress every few days — not weeks later.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <CheckCircle2 className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">Done When It’s Right</h3>
              <p className="text-sm text-neutral-700 mt-2">
                We don’t just deliver and disappear. We stay with you until your team is confident, consistent, and in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Transparency & Trust ---------- */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-iteratum-cyan/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">
            Transparent Pricing. Predictable Delivery.
          </h2>
          <p className="text-lg text-iteratum-slate mb-8">
            Every client sees the full process, timelines, and cost before we start — no surprise fees, 
            no hidden hours, and no fluff. Our pricing reflects value, not guesswork.
          </p>
          <a href="/pricing" className="btn-iteratum-primary">View Pricing</a>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="py-24 text-center bg-white border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-iteratum-dark">
            Let’s Build Something Your Team Loves Using
          </h2>
          <p className="mt-4 text-lg text-iteratum-slate">
            We bring structure, automation, and clarity to your work — and we don’t stop until it works right.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://cal.com/jonwoods" className="btn-iteratum-primary">Book A Discovery Call</a>
            <a href="/resources" className="btn-iteratum-secondary">Explore Our Resources</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
