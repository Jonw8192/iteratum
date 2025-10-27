import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  useEffect(() => {
    document.title = "About Iteratum";
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen page-enter pt-20">
        {/* Page Hero (H1 Centered) */}
        <section className="section-iteratum text-center py-24 border-b border-iteratum-gray-200 bg-iteratum-gradient-subtle">
          <h1 className="text-iteratum-hero mb-3">We Help Teams Work With Clarity And Confidence</h1>
          <p className="text-iteratum-subtitle max-w-2xl mx-auto">
            Our mission is to give everyday teams the clarity, systems, and execution usually reserved for Fortune 500 companies, without the complexity or ego.
          </p>
        </section>

        {/* System Diagram (carded, simple) */}
        <section className="section-iteratum py-20">
          <div className="card-iteratum p-10 max-w-5xl mx-auto">
            <h2 className="text-iteratum-heading mb-8 text-center">The System That Creates Momentum</h2>
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div>
                <h3 className="font-semibold text-lg mb-3">Inputs</h3>
                <ul className="space-y-2 text-sm text-iteratum-slate">
                  <li>Project requests</li>
                  <li>Ideas and tasks</li>
                  <li>Work in progress</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-2xl border border-iteratum p-6 w-full max-w-xs text-center">
                  <div className="text-sm font-semibold">System</div>
                  <div className="text-xs text-iteratum-steel">Structure + Automation + Habit</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Outputs</h3>
                <ul className="space-y-2 text-sm text-iteratum-slate">
                  <li>Work that moves on time</li>
                  <li>Clear ownership and status</li>
                  <li>Leadership visibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="section-iteratum py-20">
          <h2 className="text-iteratum-heading mb-6 text-center">What We Believe</h2>
          <p className="text-iteratum-subtitle max-w-3xl mx-auto text-center mb-12">
            Tools matter, but adoption matters more. Structure should accelerate work, not slow it down.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="card-iteratum p-8">
              <h3 className="font-semibold text-lg mb-2">Clarity First</h3>
              <p className="text-sm text-iteratum-slate">Everyone knows what matters, who owns it, and when it is due.</p>
            </div>
            <div className="card-iteratum p-8">
              <h3 className="font-semibold text-lg mb-2">Lightweight Process</h3>
              <p className="text-sm text-iteratum-slate">Structure should speed you up. We keep it simple and repeatable.</p>
            </div>
            <div className="card-iteratum p-8">
              <h3 className="font-semibold text-lg mb-2">Adoption Over Theory</h3>
              <p className="text-sm text-iteratum-slate">Real change happens when people can do the right thing without friction.</p>
            </div>
          </div>
        </section>

        {/* Why Adoption Matters */}
        <section className="section-iteratum py-20 bg-iteratum-gradient-subtle border-y">
          <h2 className="text-iteratum-heading text-center mb-6">Why Adoption Matters</h2>
          <p className="text-iteratum-subtitle text-center max-w-3xl mx-auto mb-12">
            When your system becomes a habit, work flows, accountability sticks, and results improve.
          </p>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Clarity</h3>
              <p className="text-sm text-iteratum-slate">One source of truth for owners and status.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Accountability</h3>
              <p className="text-sm text-iteratum-slate">Role-based views keep work moving and visible.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Adoption</h3>
              <p className="text-sm text-iteratum-slate">Training and templates make the system stick.</p>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="section-iteratum py-20">
          <h2 className="text-iteratum-heading text-center mb-6">How We Help</h2>
          <p className="text-iteratum-subtitle text-center max-w-3xl mx-auto mb-12">
            ClickUp and Zoho implementations done the right way: architecture, automation, and adoption.
          </p>

          <div className="grid md:grid-cols-4 gap-8 text-sm">
            <div className="card-iteratum p-6">
              <h3 className="font-semibold mb-2">ClickUp Implementations</h3>
              <p className="text-iteratum-slate">Clean dashboards, automation, and structure for scale.</p>
            </div>
            <div className="card-iteratum p-6">
              <h3 className="font-semibold mb-2">Zoho Implementations</h3>
              <p className="text-iteratum-slate">Projects and Sprints built for clarity and reporting.</p>
            </div>
            <div className="card-iteratum p-6">
              <h3 className="font-semibold mb-2">Automation & QA</h3>
              <p className="text-iteratum-slate">Guardrails and checks that reduce delivery risk.</p>
            </div>
            <div className="card-iteratum p-6">
              <h3 className="font-semibold mb-2">Ongoing Improvement</h3>
              <p className="text-iteratum-slate">Reviews, onboarding, and iterative enhancements.</p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section-iteratum py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-iteratum-heading mb-6">Why Iteratum Exists</h2>
            <p className="text-iteratum-subtitle mb-8">
              I am Jon. I saw too many teams working harder than necessary because their systems worked against them, not for them. Iteratum is here to fix that with clarity, structure, and systems people actually use.
            </p>
            <a className="underline block text-sm mb-1" href="mailto:hello@iteratum.com">hello@iteratum.com</a>
            <a className="underline block text-sm" href="https://linkedin.com/in/jonthepm" target="_blank" rel="noreferrer">
              Connect On LinkedIn
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="section-iteratum py-20 text-center border-t">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-iteratum-heading mb-4">Give Your Team A System They Can Rely On</h2>
            <p className="text-iteratum-subtitle mb-6">Clear ownership. Better visibility. Fewer delays.</p>
            <a href="/#contact" className="btn-iteratum-primary">Book A Discovery Call</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
