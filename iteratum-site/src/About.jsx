// src/pages/About.jsx
import React from "react";
import { Sparkles, CheckCircle2, ShieldCheck, Users, Zap, ArrowRight } from "lucide-react";

const CAL_LINK = "https://cal.com/jonwoods";

// Local UI helpers (lightweight so this page is self-contained)
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`section-iteratum ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="pill-iteratum inline-flex items-center gap-1">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Card = ({ className = "", children }) => (
  <div className={`card-iteratum ${className}`}>{children}</div>
);

const Button = ({ href = "#", variant = "primary", className = "", children }) => {
  const styles = {
    primary: "btn-iteratum-primary",
    ghost: "btn-iteratum-secondary",
    accent: "btn-iteratum-accent",
  };
  return (
    <a href={href} className={`${styles[variant]} inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold ${className}`}>
      {children}
    </a>
  );
};

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero */}
      <Section id="about-hero" className="pt-28 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <Pill>About Iteratum</Pill>
          <h1 className="text-iteratum-hero mt-4">We help teams work with clarity and confidence</h1>
          <p className="text-iteratum-subtitle mt-4">
            Our mission is to give everyday teams the same clarity, tools, and execution that
            Fortune 500 companies rely on, without the complexity or ego.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button href={CAL_LINK}>Book a discovery call</Button>
            <Button href="/#how-it-works" variant="ghost">See the 10-day plan</Button>
          </div>
        </div>
      </Section>

      {/* What we believe */}
      <Section id="beliefs" className="py-14">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Pill>What we believe</Pill>
            <h2 className="text-iteratum-heading mt-3">Good tools matter. A shared way of working matters more</h2>
            <p className="text-iteratum-subtitle mt-3">
              We combine clean structure, automation, and training so your team actually uses the system every day.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Clarity first</h3>
              <p className="text-sm text-neutral-700 mt-2">
                Everyone sees what matters, who owns it, and when it is due.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Lightweight process</h3>
              <p className="text-sm text-neutral-700 mt-2">
                Structure should speed you up. We keep it simple and repeatable.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Adoption over theory</h3>
              <p className="text-sm text-neutral-700 mt-2">
                Real change happens when people can do the right thing without thinking twice.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why adoption (3 pillars that mirror the homepage) */}
      <Section id="why-adoption" className="py-16 bg-iteratum-gradient-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <Pill>Why adoption matters</Pill>
          <h2 className="text-iteratum-heading mt-3">It is not the tool. It is the habit</h2>
          <p className="text-iteratum-subtitle mt-3">
            When your system becomes the habit, work moves on time and leadership has a clear view.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-iteratum-cyan">Clarity</div>
            <p className="text-sm text-neutral-700 mt-2">One source of truth for work, owners, and status.</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-iteratum-cyan">Accountability</div>
            <p className="text-sm text-neutral-700 mt-2">Role-based views and simple checks keep work moving.</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-iteratum-cyan">Adoption</div>
            <p className="text-sm text-neutral-700 mt-2">Training and templates make the system stick.</p>
          </Card>
        </div>
      </Section>

      {/* How we help */}
      <Section id="how-we-help" className="py-14">
        <div className="max-w-4xl mx-auto text-center">
          <Pill>How we help</Pill>
          <h2 className="text-iteratum-heading mt-3">ClickUp and Zoho, implemented the right way</h2>
          <p className="text-iteratum-subtitle mt-3">
            Architecture, automation, permissions, views, role-based training, and a guided launch.
            Your team goes live in about 10 business days.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-iteratum-success mt-0.5" />
              <div>
                <div className="font-semibold">ClickUp implementations</div>
                <p className="text-sm text-neutral-700 mt-1">
                  Clean structure, dashboards, and automation for visibility and momentum.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-iteratum-success mt-0.5" />
              <div>
                <div className="font-semibold">Zoho implementations</div>
                <p className="text-sm text-neutral-700 mt-1">
                  Projects and Sprints configured to your workflow with reporting and governance.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-iteratum-cyan mt-0.5" />
              <div>
                <div className="font-semibold">Automation and QA</div>
                <p className="text-sm text-neutral-700 mt-1">
                  Guardrails and playbooks reduce errors and keep delivery on track.
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-iteratum-cyan mt-0.5" />
              <div>
                <div className="font-semibold">Ongoing improvement</div>
                <p className="text-sm text-neutral-700 mt-1">
                  Reviews, onboarding guides, and iterative changes as your team grows.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Founder story */}
      <Section id="founder" className="py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <Pill>Founder</Pill>
            <h2 className="text-iteratum-heading mt-3">Why Iteratum exists</h2>
          </div>

          <Card className="p-8 mt-8">
            <p className="text-neutral-800">
              Hi, I am Jon. I have led delivery and operations work for teams that needed more clarity and better execution.
              Along the way I saw the same pattern repeat. People were smart and motivated, but the system around them made work harder than it needed to be.
            </p>
            <p className="text-neutral-800 mt-4">
              I started Iteratum to give small and midsize teams the same kind of structure and momentum that big companies enjoy, without the overhead.
              We bring the parts that actually help. Clear architecture, simple automation, and role-based training.
              The goal is not a fancy setup. The goal is a reliable habit that helps people do their best work.
            </p>
            <p className="text-neutral-800 mt-4">
              If that sounds like what your team needs, I would love to talk.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={CAL_LINK}>
                Book a call <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="https://www.linkedin.com/in/jonthepm" variant="ghost">
                Connect on LinkedIn
              </Button>
              <a href="mailto:jon@iteratum.com" className="text-sm underline hover:no-underline">
                jon@iteratum.com
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* Credibility mini-band */}
      <Section id="credibility" className="py-10 bg-iteratum-gradient-subtle">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <Card className="p-6">
            <div className="text-3xl font-bold text-iteratum-cyan">95%</div>
            <div className="text-sm text-neutral-700">Pilot adoption</div>
          </Card>
          <Card className="p-6">
            <div className="text-3xl font-bold text-iteratum-cyan">10</div>
            <div className="text-sm text-neutral-700">Days to go live</div>
          </Card>
          <Card className="p-6">
            <div className="text-3xl font-bold text-iteratum-cyan">50+</div>
            <div className="text-sm text-neutral-700">Rollouts delivered</div>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="about-cta" className="py-16">
        <Card className="p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Pill>Get started</Pill>
              <h3 className="text-iteratum-heading mt-3">Give your team a system they can rely on</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-0.5" /> Role-based training and guides</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5" /> Clear milestones and reporting</li>
                <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5" /> Automation that saves time</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={CAL_LINK}>Book a discovery call</Button>
                <Button href="mailto:jon@iteratum.com" variant="ghost">Email us</Button>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Free guide</div>
                <div className="text-xl font-bold mt-1">Quick setup checklist</div>
                <div className="text-sm text-neutral-700 mt-1">Use the same guide we use to align teams fast.</div>
                <a href="/#home" className="mt-4 inline-flex items-center gap-2 text-xs rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors">
                  Get the checklist <ArrowRight className="h-3 w-3" />
                </a>
              </Card>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
