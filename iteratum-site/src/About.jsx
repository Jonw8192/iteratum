// src/About.jsx
import React, { useEffect, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  HelpCircle,
  Menu,
  X,
  ShieldCheck,
  Bot,
} from "lucide-react";

/* -------------------- Assets -------------------- */
const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
  clickupVerified: "/clickup-verified.png",
  zohoPartner: "/zoho-partner.png",
};

/* -------------------- SEO -------------------- */
function Seo() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const title = "About Iteratum | We Make Adoption Succeed";
    const description =
      "We give growing teams the clarity, structure, and training they need to actually use ClickUp or Zoho every day.";

    const setMeta = (selector, attrs) => {
      const el = document.querySelector(selector);
      if (el) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };

    document.title = title;
    setMeta('meta[name="description"]', { content: description });
    setMeta('meta[name="robots"]', { content: "index,follow" });

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Iteratum",
      description,
      url: typeof window !== "undefined" ? window.location.href : "",
    });
    document.head.appendChild(ld);

    return () => {
      try {
        document.head.removeChild(ld);
      } catch {}
    };
  }, []);

  return null;
}

/* -------------------- UI Helpers -------------------- */
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`section-iteratum ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="pill-iteratum inline-flex items-center gap-1">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Button = ({
  children,
  variant = "primary",
  href = "#",
  className = "",
  onClick,
  ariaLabel,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "btn-iteratum-primary",
    ghost: "btn-iteratum-secondary",
    accent: "btn-iteratum-accent",
  };
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`card-iteratum ${className}`}>{children}</div>
);

/* -------------------- Header (local copy for this page) -------------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur">
      <Section className="py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">How It Works</a>
            <a href="/#products" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Products</a>
            <a href="/#results" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Results</a>
            <a href="/#pricing" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Pricing</a>
            <a href="/#faq" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">FAQ</a>
            <a href="/about" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">About</a>
          </nav>

          <div className="hidden md:block">
            <a href="https://cal.com/jonwoods" className="btn-iteratum-primary">Book A Discovery Call</a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-4 pb-4 border-t border-iteratum">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="/#how-it-works" className="text-sm font-medium text-iteratum-charcoal">How It Works</a>
              <a href="/#products" className="text-sm font-medium text-iteratum-charcoal">Products</a>
              <a href="/#results" className="text-sm font-medium text-iteratum-charcoal">Results</a>
              <a href="/#pricing" className="text-sm font-medium text-iteratum-charcoal">Pricing</a>
              <a href="/#faq" className="text-sm font-medium text-iteratum-charcoal">FAQ</a>
              <a href="/about" className="text-sm font-medium text-iteratum-charcoal">About</a>
              <a href="https://cal.com/jonwoods" className="btn-iteratum-primary mt-4 w-full">Book A Discovery Call</a>
            </nav>
          </div>
        )}
      </Section>
    </header>
  );
}

/* -------------------- Footer (local copy for this page) -------------------- */
function Footer() {
  return (
    <footer className="footer-iteratum">
      <Section className="py-12">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              ClickUp and Zoho implementation that launches fast and drives real adoption. Clean setup, automation, and training for teams that want clarity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4" />
                <a href="mailto:hello@iteratum.com?subject=Inquiry%20from%20Iteratum%20Website" className="hover:text-white transition-colors underline underline-offset-2">
                  hello@iteratum.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bot className="w-4 h-4" />
                <span>Available Monday to Friday, 9am to 5pm Eastern</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/#products" className="hover:text-white transition-colors">ClickUp Implementations</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Zoho Implementations</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Automation & QA</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Team Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Iteratum</a></li>
              <li><a href="/#results" className="hover:text-white transition-colors">Client Success</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms Of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} Iteratum. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span>Strong Security Practices</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /><span>30 Day Guarantee</span></div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

/* -------------------- System Diagram (inline SVG) -------------------- */
function SystemDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <svg
          role="img"
          aria-label="System diagram: Clarity to Accountability to Adoption to Outcomes"
          viewBox="0 0 960 260"
          className="w-full h-auto"
        >
          <defs>
            <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(2,132,199,0.18)" />
            </filter>
          </defs>

          {/* Boxes */}
          {[
            { x: 30,  t: "Clarity",        d: "Work, owners, and status" },
            { x: 270, t: "Accountability", d: "Role-based views and checks" },
            { x: 540, t: "Adoption",       d: "Training and templates" },
            { x: 780, t: "Outcomes",       d: "On-time delivery and visibility" },
          ].map((b, i) => (
            <g key={i} transform={`translate(${b.x}, 40)`} filter="url(#soft)">
              <rect width="150" height="120" rx="14" fill="#ffffff" stroke="#e5e7eb" />
              <text x="75" y="50" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
                {b.t}
              </text>
              <text x="75" y="78" textAnchor="middle" fontSize="12" fill="#475569">
                {b.d}
              </text>
            </g>
          ))}

          {/* Arrows */}
          {[160, 400, 670].map((ax, i) => (
            <g key={i} transform={`translate(${ax}, 100)`}>
              <path d="M0 30 H70" stroke="#0891b2" strokeWidth="2.5" fill="none" />
              <polygon points="70,30 60,24 60,36" fill="#0891b2" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

/* -------------------- Page Sections -------------------- */
function Hero() {
  return (
    <Section id="hero" className="pt-28 pb-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Pill>About Iteratum</Pill>
          <h1 className="text-iteratum-hero mt-3">We Help Teams Work With Clarity and Confidence</h1>
          <p className="mt-4 text-iteratum-subtitle max-w-xl">
            Our mission is simple: give everyday teams the same clarity, tools, and execution that Fortune 500 companies rely on — without the complexity or ego.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://cal.com/jonwoods">Book A Discovery Call</Button>
            <Button variant="ghost" href="/#how-it-works">See The 10-Day Plan</Button>
          </div>
        </div>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Certified</div>
              <div className="text-xl font-bold mt-1">ClickUp & Zoho Experts</div>
              <div className="text-sm text-neutral-700 mt-1">
                Clean structure, automation, and role-based training that teams actually use.
              </div>
            </div>
            <ArrowRight className="hidden sm:block h-5 w-5 mt-2 flex-shrink-0" />
          </div>
          <div className="flex items-center gap-6 justify-center">
            <img src={ASSETS.clickupVerified} alt="ClickUp Verified Consultant" className="h-14 object-contain" />
            <img src={ASSETS.zohoPartner} alt="Zoho Authorized Partner" className="h-14 object-contain" />
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Beliefs() {
  const items = [
    {
      t: "Clarity First",
      d: "Everyone sees what matters, who owns it, and when it is due.",
    },
    {
      t: "Lightweight Process",
      d: "Structure should speed you up. We keep it simple and repeatable.",
    },
    {
      t: "Adoption Over Theory",
      d: "Real change happens when people can do the right thing without thinking twice.",
    },
  ];
  return (
    <Section id="beliefs" className="py-14">
      <div className="text-center max-w-3xl mx-auto">
        <Pill>What We Believe</Pill>
        <h2 className="mt-3 text-iteratum-heading">Good Tools Matter. A Shared Way of Working Matters More.</h2>
        <p className="mt-2 text-iteratum-subtitle">
          We combine clean structure, automation, and training so your team actually uses the system every day.
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((x, i) => (
          <Card key={i} className="p-6 text-center">
            <h3 className="text-lg font-semibold">{x.t}</h3>
            <p className="text-sm text-neutral-700 mt-2">{x.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function AdoptionMatters() {
  const points = [
    "One source of truth for work, owners, and status.",
    "Role-based views and simple checks keep work moving.",
    "Training and templates make the system stick.",
  ];
  return (
    <Section id="adoption" className="py-14 bg-iteratum-gradient-subtle">
      <div className="text-center max-w-3xl mx-auto">
        <Pill>Why Adoption Matters</Pill>
        <h2 className="mt-3 text-iteratum-heading">It’s Not the Tool. It’s the Habit.</h2>
        <p className="mt-2 text-iteratum-subtitle">
          When your system becomes the habit, work moves on time and leadership has a clear view.
        </p>
      </div>

      <SystemDiagram />

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 text-iteratum-success flex-shrink-0" />
              <p className="text-sm text-neutral-800">{p}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function HowWeHelp() {
  const items = [
    {
      t: "ClickUp Implementations",
      d: "Clean structure, dashboards, and automation for visibility and momentum.",
    },
    {
      t: "Zoho Implementations",
      d: "Projects and Sprints configured to your workflow with reporting and governance.",
    },
    {
      t: "Automation and QA",
      d: "Guardrails and playbooks reduce errors and keep delivery on track.",
    },
    {
      t: "Ongoing Improvement",
      d: "Reviews, onboarding guides, and iterative changes as your team grows.",
    },
  ];
  return (
    <Section id="help" className="py-14">
      <div className="text-center max-w-3xl mx-auto">
        <Pill>How We Help</Pill>
        <h2 className="mt-3 text-iteratum-heading">ClickUp and Zoho, Implemented the Right Way</h2>
        <p className="mt-2 text-iteratum-subtitle">
          Architecture, automation, permissions, views, role-based training, and a guided launch. Your team goes live in about 10 business days.
        </p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {items.map((x, i) => (
          <Card key={i} className="p-6">
            <h3 className="text-base font-semibold">{x.t}</h3>
            <p className="text-sm text-neutral-700 mt-2">{x.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Founder() {
  return (
    <Section id="founder" className="py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        <div>
          <Pill>Founder</Pill>
          <h2 className="mt-3 text-iteratum-heading">Why Iteratum Exists</h2>
          <div className="mt-4 space-y-4 text-iteratum-slate">
            <p>
              Hi, I’m Jon. I’ve led delivery and operations for teams that needed more clarity and better execution.
              The same pattern kept repeating: smart, motivated people working inside systems that made work harder than it needed to be.
            </p>
            <p>
              I started Iteratum to give small and midsize teams the structure and momentum big companies enjoy — without the overhead.
              We bring the parts that actually help: clear architecture, simple automation, and role-based training.
            </p>
            <p>
              The goal isn’t a fancy setup. The goal is a reliable habit that helps people do their best work.
              If that sounds like what your team needs, I’d love to talk.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="https://cal.com/jonwoods">Book A Call</Button>
            <Button variant="ghost" href="https://www.linkedin.com/in/jonthepm">Connect on LinkedIn</Button>
            <Button variant="ghost" href="mailto:jon@iteratum.com">jon@iteratum.com</Button>
          </div>
        </div>

        <Card className="p-8 bg-white border border-gray-200">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-iteratum-cyan">95%</div>
              <div className="text-sm text-iteratum-steel">Pilot Adoption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-iteratum-cyan">10</div>
              <div className="text-sm text-iteratum-steel">Days To Go Live</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-iteratum-cyan">50+</div>
              <div className="text-sm text-iteratum-steel">Rollouts Delivered</div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-gray-200 bg-iteratum-gradient-subtle p-5">
            <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">
              Free Guide
            </div>
            <div className="text-lg font-bold mt-1">Quick Setup Checklist</div>
            <div className="text-sm text-neutral-700 mt-1">
              Use the same guide we use to align teams fast.
            </div>
            <div className="mt-4">
              <a href="/#contact" className="btn-iteratum-primary">Get the Checklist</a>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section id="cta" className="py-16">
      <Card className="p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>Get Started</Pill>
            <h3 className="mt-3 text-iteratum-heading">Give Your Team a System They Can Rely On</h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-0.5" /> Role-based training and guides</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5" /> Clear milestones and reporting</li>
              <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5" /> Automation that saves time</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="https://cal.com/jonwoods">Book A Discovery Call</Button>
              <Button variant="ghost" href="mailto:hello@iteratum.com">Email Us</Button>
            </div>
          </div>

          <div>
            <Card className="p-6">
              <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Free Guide</div>
              <div className="text-xl font-bold mt-1">Quick Setup Checklist</div>
              <div className="text-sm text-neutral-700 mt-1">Use the same guide we use to align teams fast.</div>
              <div className="mt-4">
                <a href="/#contact" className="btn-iteratum-primary">Get the Checklist</a>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </Section>
  );
}

/* -------------------- Page -------------------- */
export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      <Header />
      <Hero />
      <Beliefs />
      <AdoptionMatters />
      <HowWeHelp />
      <Founder />
      <FinalCTA />
      <Footer />
    </div>
  );
}
