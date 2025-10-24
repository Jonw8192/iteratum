import React, { useEffect, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Link2,
  Bot,
  FolderCog,
  ChevronRight,
  ShieldCheck,
  Users,
  Zap,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

// ==========================
// Assets (update paths as needed)
// ==========================
const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
  zohoProjectsBadge: "/projects.svg",
  zohoSprintsBadge: "/sprints.svg",
  clickupVerified: "/clickup-verified.png",
  founderPhoto: "/founder.jpg", // OPTIONAL – add an image or swap path
};

// Booking link
const CAL_LINK = "https://cal.com/jonwoods";

// Zoho Form (fallback iframe)
const ZOHO_IFRAME_URL =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=6783f923bf2d4ca031e1400cd34ce72fff73af244ff57a0a910563aa038ea0e2c2d5e2ae59c111ccbf8c6ff8c0743b42gid386a4b38bcba3913b450131125819d1cfc796d784ea5d51daf8f6c15bc6286ed";

// ==========================
// SEO (benefits + keywords)
// ==========================
function Seo() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const title =
      "ClickUp & Zoho Projects Setup for Small Teams & Nonprofits | Launch in 10 Days | Iteratum";
    const description =
      "From overwhelmed to organized in 10 days. Iteratum implements ClickUp or Zoho Projects with training, automation, and adoption plans for small businesses, nonprofits, and franchise teams.";

    const updateMeta = (selector, attrs) => {
      try {
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement("meta");
          Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
          document.head.appendChild(el);
          return;
        }
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      } catch (_) {}
    };

    document.title = title;
    updateMeta('meta[name="description"]', { name: "description", content: description });
    updateMeta('meta[name="robots"]', { name: "robots", content: "index,follow" });
  }, []);
  return null;
}

// ==========================
// UI Primitives
// ==========================
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

const Button = ({ children, variant = "primary", href = "#", className = "", onClick }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "btn-iteratum-primary",
    ghost: "btn-iteratum-secondary",
    accent: "btn-iteratum-accent",
  };
  const Comp = href ? "a" : "button";
  return (
    <Comp href={href} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Comp>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`card-iteratum ${className}`}>{children}</div>
);

// ==========================
// Header (sticky + clear CTA)
// ==========================
function Header({ onOpenCal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <Section className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#who" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Who We Help</a>
            <a href="#services" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Services</a>
            <a href="#process" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Process</a>
            <a href="#results" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Results</a>
            <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">FAQ</a>
          </nav>

          <div className="hidden md:block">
            <button onClick={onOpenCal} className="btn-iteratum-accent">
              Get My Implementation Plan
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-iteratum">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#who" className="text-sm font-medium text-iteratum-charcoal">Who We Help</a>
              <a href="#services" className="text-sm font-medium text-iteratum-charcoal">Services</a>
              <a href="#process" className="text-sm font-medium text-iteratum-charcoal">Process</a>
              <a href="#results" className="text-sm font-medium text-iteratum-charcoal">Results</a>
              <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-iteratum-charcoal">FAQ</a>
              <button onClick={onOpenCal} className="btn-iteratum-accent mt-2 w-full">Get My Plan</button>
            </nav>
          </div>
        )}
      </Section>
    </header>
  );
}

// ==========================
// Modal (Cal)
// ==========================
function CalModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-iteratum">
      <div className="modal-content-iteratum">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="text-sm font-semibold">Book a free 30‑minute discovery call</div>
          <button onClick={onClose} className="btn-iteratum-secondary text-xs px-2 py-1">Close</button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe title="Cal.com scheduling" src={`${CAL_LINK}?embed=true`} className="h-full w-full" frameBorder="0" />
        </div>
      </div>
    </div>
  );
}

// ==========================
// Lead Form (simple + iframe fallback)
// ==========================
function ZohoWebToLead({ iframeFallback }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3500);
  };
  if (formSubmitted) {
    return (
      <div className="status-success p-4 rounded-lg">
        <p className="text-sm font-medium">Thanks! Check your email for the checklist.</p>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="firstName" placeholder="First Name" className="input-iteratum" required />
        <input type="email" name="email" placeholder="Email Address" className="input-iteratum" required />
        <button type="submit" className="btn-iteratum-primary w-full">Get Free Checklist</button>
      </form>
      {iframeFallback && (
        <details className="mt-4">
          <summary className="text-xs text-gray-500 cursor-pointer">Having trouble? Try alternative form</summary>
          <iframe title="Zoho Web Form" src={iframeFallback} width="100%" height="360" frameBorder="0" className="mt-2 rounded-lg border" loading="lazy" />
        </details>
      )}
      <p className="mt-2 text-xs text-gray-500">
        Questions? Email <a className="underline hover:no-underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>
      </p>
    </div>
  );
}

// ==========================
// Hero (benefits & outcomes)
// ==========================
function Hero({ onOpenCal }) {
  return (
    <Section id="home" className="pt-28 pb-12 hero-iteratum">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Pill>ClickUp & Zoho Projects Implementations</Pill>
          <h1 className="text-iteratum-hero mt-3">
            From overwhelmed to organized — launch in 10 days
          </h1>
          <p className="mt-4 text-iteratum-subtitle max-w-xl">
            Stop spreadsheet chaos and unclear priorities. We set up ClickUp or Zoho Projects with automation and training so your whole team knows exactly what to do when they log in.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={CAL_LINK}
              onClick={(e) => {
                e.preventDefault();
                onOpenCal?.();
              }}
              variant="accent"
            >
              Get My Implementation Plan
            </Button>
            <Button variant="ghost" href="#process">See the 10‑day plan</Button>
          </div>
          <div className="mt-4 text-xs text-neutral-600 flex flex-wrap gap-4">
            <span>✓ Minimal disruption to your team</span>
            <span>✓ You retain full control</span>
            <span>✓ No hidden costs</span>
          </div>
        </div>

        {/* Lead Magnet */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Lead magnet</div>
              <div className="text-xl font-bold mt-1">Free Quick Setup Checklist</div>
              <div className="text-sm text-neutral-700 mt-1">Use the 50‑point checklist we use with clients to align teams fast.</div>
            </div>
            <ArrowRight className="hidden sm:block h-5 w-5 mt-2 flex-shrink-0" />
          </div>
          <ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} />
        </Card>
      </div>
    </Section>
  );
}

// ==========================
// Who We Help (audience-specific)
// ==========================
function WhoWeHelp() {
  const items = [
    {
      title: "Small Businesses",
      copy:
        "Tired of messy task lists and spreadsheet chaos? We’ll structure your project hub for daily clarity and growth.",
    },
    {
      title: "Nonprofits",
      copy:
        "Coordinating staff and volunteers across programs? We make priorities clear and reporting simple.",
    },
    {
      title: "Franchise Teams",
      copy:
        "Rolling out new locations? We standardize processes and timelines so every unit launches the right way.",
    },
  ];
  return (
    <Section id="who" className="py-16">
      <div className="text-center mb-10">
        <Pill>Who We Help</Pill>
        <h2 className="mt-3 text-iteratum-heading">Built for small ops & mission‑driven teams</h2>
        <p className="mt-3 text-iteratum-subtitle max-w-3xl mx-auto">
          This is for you if you’re juggling multiple projects, repeating the same steps, or spending too much time asking for updates.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Card key={i} className="p-6">
            <h3 className="font-semibold text-iteratum-dark">{it.title}</h3>
            <p className="text-sm text-neutral-700 mt-2">{it.copy}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ==========================
// Trust (badges + quick stats)
// ==========================
function Trust() {
  return (
    <Section id="trust" className="py-12 border-t border-iteratum">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-iteratum-dark mb-3">Trusted by growing teams</h3>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
          <img src={ASSETS.clickupVerified} alt="ClickUp Verified" className="h-10" />
          <img src={ASSETS.zohoProjectsBadge} alt="Zoho Projects" className="h-10" />
          <img src={ASSETS.zohoSprintsBadge} alt="Zoho Sprints" className="h-10" />
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">SOC 2 Ready</div>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">95% Adoption</div>
        </div>
        <div className="flex flex-col items-center">
          <Zap className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">10‑Day Launch</div>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircle2 className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">Clear Milestones</div>
        </div>
      </div>
    </Section>
  );
}

// ==========================
// Founder (trust & human)
// ==========================
function Founder() {
  return (
    <Section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Pill>About Iteratum</Pill>
          <h2 className="mt-4 text-iteratum-heading">We integrate into your team — not just install software</h2>
          <div className="mt-6 space-y-4 text-iteratum-slate">
            <p>
              We’ve implemented ClickUp and Zoho Projects for small companies and nonprofits that needed clarity fast. Our focus: a setup your team actually uses every day.
            </p>
            <p>
              We specialize in architecture, automations, and role‑based training. With our Iteratum IA checks, your build gets validated and goes live quicker with fewer mistakes.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="status-success"><CheckCircle2 className="h-4 w-4" /> ClickUp Verified Partner</div>
            <div className="status-success"><CheckCircle2 className="h-4 w-4" /> Zoho Projects & Sprints</div>
          </div>
        </div>
        <div className="relative">
          <Card className="p-6 bg-iteratum-gradient-subtle">
            <div className="flex items-center gap-4">
              <img src={ASSETS.founderPhoto} alt="Founder" className="h-16 w-16 rounded-xl object-cover bg-neutral-200" />
              <div>
                <div className="font-semibold">Your Consultant</div>
                <div className="text-sm text-neutral-600">Implementation Lead & Advisor</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">95%</div>
                <div className="text-xs text-iteratum-steel">Team adoption rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">10 days</div>
                <div className="text-xs text-iteratum-steel">Average launch time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">50+</div>
                <div className="text-xs text-iteratum-steel">Implementations</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

// ==========================
// Services (kept from your original with minor copy tweaks)
// ==========================
const services = [
  {
    icon: Workflow,
    title: "Zoho Projects implementation",
    desc: "Space design, roles, fields, views, reports, and training.",
    bullets: ["Blueprint & milestones", "Permissions & governance", "Dashboards & reporting"],
  },
  {
    icon: Link2,
    title: "Zoho Sprints setup",
    desc: "Backlog, iterations, planning, and leadership reporting.",
    bullets: ["Story mapping & DOR/DoD", "SLA & velocity views", "Release dashboards"],
  },
  {
    icon: Workflow,
    title: "ClickUp consulting",
    desc: "Workspace architecture, templates, automations, and adoption.",
    bullets: ["Workspace & permissions", "Templates & dashboards", "Automations & QA"],
  },
  {
    icon: Bot,
    title: "Iteratum IA automation",
    desc: "AI‑assisted configuration and QA to reduce errors and speed up delivery.",
    bullets: ["Automated config validation", "Reusable playbooks", "Agentic checks"],
  },
  {
    icon: FolderCog,
    title: "Ongoing optimization",
    desc: "Monthly audits and support so your tools keep pace with the business.",
    bullets: ["KPI reviews", "SOPs and onboarding", "Roadmap & scaling"],
  },
];

function Services() {
  return (
    <Section id="services" className="py-14">
      <Pill>Implementation Services</Pill>
      <h2 className="mt-3 text-iteratum-heading">ClickUp & Zoho implementation that ships — and sticks</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-iteratum-dark text-white p-2 flex-shrink-0">
                {React.createElement(s.icon, { className: "h-5 w-5" })}
              </div>
              <div className="w-full">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-base font-semibold">{s.title}</div>
                    <div className="text-sm text-neutral-600 mt-1">{s.desc}</div>
                  </div>
                  <a href="#pricing" className="text-xs inline-flex items-center gap-1 rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors flex-shrink-0 ml-2">
                    See pricing <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ==========================
// Process (3‑step diagram + 5‑step cards)
// ==========================
function Process() {
  const quick = [
    { t: "Assess & Plan", d: "Goals, risks, success metrics, stakeholders." },
    { t: "Design & Build", d: "Spaces, roles, fields, views, automation." },
    { t: "Train & Launch", d: "Role guides, SOPs, go‑live, hypercare." },
  ];
  const detail = [
    { t: "Assess and plan", d: "Stakeholders, goals, risks, and success criteria." },
    { t: "Design and configure", d: "Spaces, roles, fields, views, and reports." },
    { t: "Automate and integrate", d: "Triggers, SLAs, and tool connections." },
    { t: "Train and adopt", d: "Role guides, SOPs, and enablement sessions." },
    { t: "Go live and support", d: "Hypercare and iteration with a clear roadmap." },
  ];
  return (
    <>
      <Section id="process" className="py-12 bg-iteratum-gradient-subtle">
        <div className="text-center mb-8">
          <Pill>The 10‑Day Plan</Pill>
          <h2 className="mt-3 text-iteratum-heading">How implementation works (3 steps)</h2>
          <p className="mt-3 text-iteratum-subtitle max-w-3xl mx-auto">Clear, low‑lift, outcome‑driven. We do the heavy lifting so your team adopts with confidence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {quick.map((q, i) => (
            <Card key={i} className="p-5 text-sm">
              <div className="font-semibold">{i + 1}. {q.t}</div>
              <div className="text-neutral-600 mt-1">{q.d}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section className="py-8">
        <div className="grid sm:grid-cols-5 gap-4">
          {detail.map((s, i) => (
            <Card key={i} className="p-5 text-sm">
              <div className="font-semibold">{i + 1}. {s.t}</div>
              <div className="text-neutral-600 mt-1">{s.d}</div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

// ==========================
// Testimonials (proof)
// ==========================
function Testimonials() {
  const testimonials = [
    {
      quote:
        "Iteratum transformed our chaotic project management into a streamlined system our whole team actually enjoys using.",
      author: "Sarah Chen",
      title: "Operations Director",
      company: "TechFlow Solutions",
    },
    {
      quote:
        "We went from constantly missing deadlines to delivering projects 20% faster. The ROI was immediate.",
      author: "Michael Rodriguez",
      title: "Founder",
      company: "Digital Marketing Co",
    },
    {
      quote:
        "Finally, a consultant who understands that adoption is just as important as configuration.",
      author: "Emma Thompson",
      title: "Project Manager",
      company: "Construction Plus",
    },
  ];
  return (
    <Section id="testimonials" className="py-16 bg-iteratum-gradient-subtle">
      <div className="text-center mb-10">
        <Pill>Client Success Stories</Pill>
        <h2 className="mt-3 text-iteratum-heading">Outcomes our clients care about</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-1 mb-4">
              {[...Array(5)].map((_, star) => (
                <div key={star} className="w-4 h-4 text-yellow-400">★</div>
              ))}
            </div>
            <blockquote className="text-iteratum-slate mb-4">“{t.quote}”</blockquote>
            <div className="border-t pt-4">
              <div className="font-semibold text-iteratum-dark">{t.author}</div>
              <div className="text-sm text-iteratum-steel">{t.title}, {t.company}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ==========================
// Pricing (unchanged structure; CTA copy tuned)
// ==========================
function Pricing() {
  const packages = [
    {
      name: "Foundational Setup",
      price: "$2,500",
      duration: "5–7 days",
      description: "Perfect for small teams getting started",
      features: [
        "Zoho Projects OR ClickUp setup",
        "Basic workflow configuration",
        "Team training (up to 10 users)",
        "2 weeks of support",
        "Templates and documentation",
      ],
      popular: false,
    },
    {
      name: "Professional Implementation",
      price: "$4,500",
      duration: "8–10 days",
      description: "Complete system for growing teams",
      features: [
        "Zoho Projects + Sprints OR ClickUp Pro",
        "Advanced automations",
        "Custom dashboards and reports",
        "Team training (up to 25 users)",
        "30 days of support",
        "Integration setup (3 tools)",
        "Iteratum IA optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise + Retainer",
      price: "Custom",
      duration: "10–15 days",
      description: "Full-scale solution for larger orgs",
      features: [
        "Multi-workspace architecture",
        "Advanced security configuration",
        "Unlimited user training",
        "60 days of support",
        "Unlimited integrations",
        "Custom reporting suite",
        "Dedicated success manager",
        "Optional on‑site training",
      ],
      popular: false,
    },
  ];
  return (
    <Section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <Pill>Implementation Packages</Pill>
        <h2 className="mt-4 text-iteratum-heading">Transparent pricing for every team size</h2>
        <p className="mt-4 text-iteratum-subtitle max-w-2xl mx-auto">
          No hidden fees. No long‑term contracts. Just clear, upfront pricing and a 30‑day satisfaction guarantee.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <Card key={i} className={`p-8 relative ${pkg.popular ? "card-iteratum-featured" : ""}`}>
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="pill-iteratum-accent">Most Popular</span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-iteratum-dark">{pkg.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-iteratum-dark">{pkg.price}</span>
                <div className="text-sm text-iteratum-steel">{pkg.duration} delivery</div>
              </div>
              <p className="mt-2 text-sm text-iteratum-slate">{pkg.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-iteratum-success mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href={CAL_LINK} variant={pkg.popular ? "accent" : "ghost"} className="w-full">
              {pkg.price === "Custom" ? "Get Custom Quote" : "Get My Implementation Plan"}
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ==========================
// FAQ (objections)
// ==========================
function FAQ() {
  const faqs = [
    { q: "What happens in the 10‑day implementation?", a: "Day 1–2 assess & plan, 3–7 design/build/automate, 8–9 train & adopt, 10 go‑live & hypercare." },
    { q: "Will this take too much of our time?", a: "We run short, focused sessions with leads. Most of the build is handled by us; your team gets simple guides and dashboards." },
    { q: "Do we lose control of our setup?", a: "No. You retain full admin control with clear documentation, permission models, and rollback plans." },
    { q: "Which platform is right for us?", a: "We advise based on process complexity, integrations, and reporting needs — then show the trade‑offs before you decide." },
    { q: "Can you migrate our current tool?", a: "Yes. We map structures, migrate what matters, and connect key integrations so you don’t start from scratch." },
  ];
  return (
    <Section id="faq" className="py-10">
      <Pill>FAQ</Pill>
      <h2 className="mt-3 text-iteratum-heading">Your questions, answered</h2>
      <div className="mt-6 divide-y rounded-2xl border bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group p-5">
            <summary className="flex justify-between cursor-pointer hover:bg-gray-50 -m-5 p-5 rounded-lg transition-colors">
              <span className="font-medium">{f.q}</span>
              <HelpCircle className="h-4 w-4 text-neutral-500 flex-shrink-0" />
            </summary>
            <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

// ==========================
// Footer (kept concise)
// ==========================
function Footer() {
  return (
    <footer className="footer-iteratum">
      <Section className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
              <span className="text-xl font-bold text-white">Iteratum</span>
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              ClickUp & Zoho Projects implementation that launches in 10 days with guaranteed team adoption.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>hello@iteratum.com</span></div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4" /><span>Mon–Fri, 9am–5pm ET</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#who" className="hover:text-white transition-colors">Who We Help</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">Checklist</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Iteratum. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span>SOC 2 Ready</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /><span>30‑Day Guarantee</span></div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

// ==========================
// App
// ==========================
export default function Site() {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      <Header onOpenCal={() => setOpenCal(true)} />

      <Hero onOpenCal={() => setOpenCal(true)} />
      <Trust />
      <WhoWeHelp />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <Section id="contact" className="py-14">
        <Card className="p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <Pill>Get started</Pill>
              <h3 className="mt-3 text-iteratum-heading">Ready to launch in 10 days</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0" /> Clear scope & milestones</li>
                <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-0.5 flex-shrink-0" /> Training & adoption plan</li>
                <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5 flex-shrink-0" /> Fast delivery with Iteratum IA</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={CAL_LINK} onClick={(e) => { e.preventDefault(); setOpenCal(true); }} variant="accent">Get My Implementation Plan</Button>
                <Button variant="ghost" href="#process">See the 10‑day plan</Button>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Lead magnet</div>
                <div className="text-xl font-bold mt-1">Free Quick Setup Checklist</div>
                <div className="text-sm text-neutral-700 mt-1">Use the same guide we use with clients to align teams fast.</div>
                <div className="mt-4"><ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} /></div>
              </Card>
            </div>
          </div>
        </Card>
      </Section>

      <Footer />
      <CalModal open={openCal} onClose={() => setOpenCal(false)} />
    </div>
  );
}
