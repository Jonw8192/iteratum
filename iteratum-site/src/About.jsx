// src/About.jsx
import React from "react";
import Layout from "./components/Layout";
import { CheckCircle2, Users, Zap, Target, Workflow, Bot, ShieldCheck, Clock, BarChart } from "lucide-react";

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
            Iteratum helps growing organizations replace chaos with clarity. 
            We build ClickUp and Zoho systems that simplify collaboration, 
            automate busywork, and keep teams aligned on what matters most.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/resources" className="btn-iteratum-primary">
              Explore Resources
            </a>
            <a href="https://cal.com/jonwoods" className="btn-iteratum-secondary">
              Book A Call
            </a>
          </div>
        </div>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="py-20 bg-white border-t border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <Zap className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              ClickUp and Zoho Implementations
            </h3>
            <p className="text-sm text-neutral-600">
              We design, structure, and launch modern workspaces built to last. 
              From roles and permissions to dashboards and automations, 
              every detail drives adoption and accountability.
            </p>
          </div>
          <div>
            <Workflow className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              Automation and Quality Systems
            </h3>
            <p className="text-sm text-neutral-600">
              We eliminate repetitive tasks, reduce human error, 
              and give your team visibility into every step. 
              Our automations keep work flowing and decisions informed.
            </p>
          </div>
          <div>
            <Users className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              Training and Adoption
            </h3>
            <p className="text-sm text-neutral-600">
              A great system only works if your team uses it. 
              We create training, guides, and role-based playbooks 
              so everyone knows what to do and where to go from day one.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Why We Do It ---------- */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">Why We Exist</h2>
          <p className="text-lg text-iteratum-slate leading-relaxed">
            Too many teams waste time fighting their tools instead of moving work forward. 
            We started Iteratum to fix that by giving small and mid-sized businesses the 
            same clarity and execution frameworks that large enterprises rely on, 
            but without the complexity or inflated cost.
          </p>
          <p className="mt-4 text-iteratum-slate leading-relaxed">
            Our approach is rooted in empathy and efficiency. 
            We listen, simplify, and implement systems that actually make work easier. 
            Every deliverable we create is designed to save time, reduce stress, 
            and help your team perform at its best.
          </p>
        </div>
      </section>

      {/* ---------- Why Choose Iteratum ---------- */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">Why Choose Iteratum</h2>
          <p className="text-lg text-iteratum-slate max-w-3xl mx-auto mb-12 leading-relaxed">
            Our clients choose Iteratum because we make transformation simple, fast, and predictable. 
            We don’t just implement software; we build operational systems that teams actually adopt. 
            Every engagement is hands-on, outcome-driven, and backed by a clear roadmap to success.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <ShieldCheck className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">
                Proven Structure, Zero Guesswork
              </h3>
              <p className="text-sm text-neutral-700 mt-2">
                We’ve refined our implementation framework through hundreds of projects. 
                You’ll get a clear, step-by-step rollout plan that keeps your team informed and confident.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <Clock className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">
                Fast Delivery with Depth
              </h3>
              <p className="text-sm text-neutral-700 mt-2">
                We deliver full ClickUp or Zoho builds in as little as ten days without cutting corners. 
                Our sprints balance speed with quality so adoption starts immediately, not months later.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <BarChart className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">
                Results That Scale
              </h3>
              <p className="text-sm text-neutral-700 mt-2">
                From startups to global nonprofits, our systems help clients grow efficiently. 
                You’ll gain visibility, predictability, and accountability across every team and project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How We Work ---------- */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-iteratum-dark">How We Work</h2>
            <p className="text-lg text-iteratum-slate mt-3">
              We’re not just another consulting firm. We act as your implementation partner, 
              building systems with you instead of for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <Target className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">
                Aligned From Day One
              </h3>
              <p className="text-sm text-neutral-700 mt-2">
                Every project starts with discovery and mapping. 
                We identify what’s working, what’s not, and how to design a system that fits your team’s reality.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <Bot className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">
                Fast and Iterative Delivery
              </h3>
              <p className="text-sm text-neutral-700 mt-2">
                We build in short, focused sprints that show progress early and often. 
                You’ll never wait weeks to see results. Each milestone is clear, reviewable, and measurable.
              </p>
            </div>
            <div className="p-6 bg-neutral-50 rounded-2xl shadow-sm border">
              <CheckCircle2 className="w-8 h-8 text-iteratum-cyan mb-3" />
              <h3 className="font-semibold text-lg text-iteratum-dark">
                Success That Sticks
              </h3>
              <p className="text-sm text-neutral-700 mt-2">
                We stay through go-live and beyond. 
                Training, documentation, and support ensure adoption holds long after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Transparency & Trust ---------- */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 to-iteratum-cyan/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">
            Transparent Pricing and Predictable Delivery
          </h2>
          <p className="text-lg text-iteratum-slate mb-8 leading-relaxed">
            We believe in clarity from the start. 
            Every client knows exactly what they’re getting, how long it will take, and what it will cost. 
            No surprise fees, no hidden hours, and no vague timelines. 
            Our pricing reflects outcomes, not guesswork.
          </p>
          <a href="/pricing" className="btn-iteratum-primary">
            View Pricing
          </a>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="py-24 text-center bg-white border-t border-neutral-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-iteratum-dark">
            Let’s Build Something Your Team Loves Using
          </h2>
          <p className="mt-4 text-lg text-iteratum-slate leading-relaxed">
            We bring structure, automation, and accountability to your operations 
            so your team can do their best work with confidence every day.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://cal.com/jonwoods" className="btn-iteratum-primary">
              Book A Discovery Call
            </a>
            <a href="/resources" className="btn-iteratum-secondary">
              Explore Our Resources
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
