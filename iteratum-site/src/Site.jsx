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

// Assets
const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
  zohoProjectsBadge: "/projects.svg",
  zohoSprintsBadge: "/sprints.svg",
  clickupVerified: "/clickup-verified.png",
};

// Booking link
const CAL_LINK = "https://cal.com/jonwoods";

// Zoho Web Form (fallback)
const ZOHO_IFRAME_URL =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=6783f923bf2d4ca031e1400cd34ce72fff73af244ff57a0a910563aa038ea0e2c2d5e2ae59c111ccbf8c6ff8c0743b42gid386a4b38bcba3913b450131125819d1cfc796d784ea5d51daf8f6c15bc6286ed";

// SEO
function Seo() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const title = "Iteratum | ClickUp and Zoho implementation with real team adoption";
    const description =
      "We implement ClickUp and Zoho so your team actually uses it. Clear setup, automation, training, and a fast path to adoption.";

    const updateMeta = (selector, attrs) => {
      try {
        let el = document.querySelector(selector);
        if (el) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      } catch (_) {}
    };

    document.title = title;
    updateMeta('meta[name="description"]', { content: description });
    updateMeta('meta[name="robots"]', { content: "index,follow" });

    // Lightweight JSON-LD for Organization
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Iteratum",
      url: window.location.origin,
      description,
      sameAs: ["https://cal.com/jonwoods"],
      areaServed: "Global",
      serviceType: ["ClickUp implementation", "Zoho Projects implementation"],
    });
    document.head.appendChild(script);

    return () => {
      try { document.head.removeChild(script); } catch (_) {}
    };
  }, []);

  return null;
}

// Layout helpers
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`section-iteratum ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="pill-iteratum"><Sparkles className="h-3.5 w-3.5" /> {children}</span>
);

const Button = ({ children, variant = "primary", href = "#", className = "", onClick }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "btn-iteratum-primary",
    ghost: "btn-iteratum-secondary",
    accent: "btn-iteratum-accent",
  };
  return (
    <a href={href} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </a>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`card-iteratum ${className}`}>{children}</div>
);

// Header
function Header({ onOpenCal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur">
      <Section className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Process</a>
            <a href="#results" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Results</a>
            <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">FAQ</a>
            <a href="#about" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">About</a>
            <a href="#resources" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">Resources</a>
          </nav>

          <div className="hidden md:block">
            <button onClick={onOpenCal} className="btn-iteratum-primary">Book a Discovery Call</button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-iteratum">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#services" className="text-sm font-medium text-iteratum-charcoal">Services</a>
              <a href="#process" className="text-sm font-medium text-iteratum-charcoal">Process</a>
              <a href="#results" className="text-sm font-medium text-iteratum-charcoal">Results</a>
              <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-iteratum-charcoal">FAQ</a>
              <a href="#about" className="text-sm font-medium text-iteratum-charcoal">About</a>
              <a href="#resources" className="text-sm font-medium text-iteratum-charcoal">Resources</a>
              <button onClick={onOpenCal} className="btn-iteratum-primary mt-4 w-full">Book a Discovery Call</button>
            </nav>
          </div>
        )}
      </Section>
    </header>
  );
}

// Modal
function CalModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-iteratum">
      <div className="modal-content-iteratum">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="text-sm font-semibold">Book a call</div>
          <button onClick={onClose} className="btn-iteratum-secondary text-xs px-2 py-1">Close</button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe title="Cal.com scheduling" src={`${CAL_LINK}?embed=true`} className="h-full w-full" frameBorder="0" />
        </div>
      </div>
    </div>
  );
}

// Lead form
function ZohoWebToLead({ iframeFallback }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3200);
  };

  if (formSubmitted) {
    return (
      <div className="status-success p-4 rounded-lg">
        <p className="text-sm font-medium">Thanks. The checklist is on its way to your inbox.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="firstName" placeholder="First name" className="input-iteratum" required />
        <input type="email" name="email" placeholder="Work email" className="input-iteratum" required />
        <button type="submit" className="btn-iteratum-primary w-full">Get the checklist</button>
      </form>

      {iframeFallback && (
        <details className="mt-4">
          <summary className="text-xs text-gray-500 cursor-pointer">Having trouble. Try the alternate form</summary>
          <iframe title="Zoho Web Form" src={iframeFallback} width="100%" height="360" frameBorder="0" className="mt-2 rounded-lg border" loading="lazy" />
        </details>
      )}

      <p className="mt-2 text-xs text-gray-500">
        Questions. Email <a className="underline hover:no-underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>
      </p>
    </div>
  );
}

// Trust band
function TrustSectionTop() {
  return (
    <Section id="trust" className="pt-6 pb-2">
      <div className="flex flex-wrap items-center justify-center gap-6 opacity-90">
        <img src={ASSETS.clickupVerified} alt="ClickUp Verified Consultant" className="h-8" />
        <img src={ASSETS.zohoProjectsBadge} alt="Zoho Projects Partner" className="h-8" />
        <img src={ASSETS.zohoSprintsBadge} alt="Zoho Sprints Partner" className="h-8" />
      </div>
    </Section>
  );
}

// About
function AboutSection() {
  return (
    <Section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Pill>About Iteratum</Pill>
          <h2 className="mt-4 text-iteratum-heading">We build ClickUp and Zoho workspaces that teams adopt</h2>
          <div className="mt-6 space-y-4 text-iteratum-slate">
            <p>
              Tools are easy to install. The hard part is getting a busy team to use them the right way. We design a clean workspace, automate the repeatable work, and train people so the system sticks.
            </p>
            <p>
              Our background covers architecture, automation, and change management. That means fewer surprises and a faster path to visible progress.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="status-success"><CheckCircle2 className="h-4 w-4" /> ClickUp Verified Consultant</div>
            <div className="status-success"><CheckCircle2 className="h-4 w-4" /> Zoho Projects Partner</div>
          </div>
        </div>
        <div className="relative">
          <Card className="p-8 bg-iteratum-gradient-subtle">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">95%</div>
                <div className="text-sm text-iteratum-steel">Adoption on pilot teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">10</div>
                <div className="text-sm text-iteratum-steel">Days to go live on average</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">50+</div>
                <div className="text-sm text-iteratum-steel">Successful rollouts</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

// Pricing
function PricingSection() {
  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      duration: "5 to 7 days",
      description: "For a single team or simple workspace",
      features: [
        "ClickUp or Zoho setup",
        "Core workflow and views",
        "Team training for up to 10 users",
        "Two weeks of support",
        "Templates and quick guides",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$4,500",
      duration: "8 to 10 days",
      description: "For growing teams that need automation and reporting",
      features: [
        "ClickUp Pro or Zoho Projects with Sprints",
        "Automation and approvals",
        "Dashboards and executive reports",
        "Training for up to 25 users",
        "Thirty days of support",
        "Integrations for up to three tools",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "10 to 15 days",
      description: "For complex orgs that need scale and governance",
      features: [
        "Multi workspace architecture",
        "Advanced security and governance",
        "Unlimited user training",
        "Sixty days of support",
        "Unlimited integrations",
        "Custom reporting suite",
        "Dedicated success manager",
        "On site training available",
      ],
      popular: false,
    },
  ];

  return (
    <Section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <Pill>Implementation packages</Pill>
        <h2 className="mt-4 text-iteratum-heading">Clear pricing that fits your stage</h2>
        <p className="mt-4 text-iteratum-subtitle max-w-2xl mx-auto">No hidden fees and no long contracts. You get a working system and support until the team is comfortable.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <Card key={i} className={`p-8 relative ${pkg.popular ? "card-iteratum-featured" : ""}`}>
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="pill-iteratum-accent">Most popular</span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-iteratum-dark">{pkg.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-iteratum-dark">{pkg.price}</span>
                <div className="text-sm text-iteratum-steel">{pkg.duration}</div>
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
              {pkg.price === "Custom" ? "Get a custom quote" : "Get started"}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-iteratum-slate mb-4">All packages include a thirty day satisfaction guarantee</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-iteratum-steel">
          <span>✓ No setup fees</span>
          <span>✓ Money back guarantee</span>
          <span>✓ Flexible payment terms</span>
        </div>
      </div>
    </Section>
  );
}

// Content data
const valueTrio = [
  {
    title: "Fast start",
    desc: "Go live in about ten days with a plan that avoids rework.",
  },
  {
    title: "Real adoption",
    desc: "Role based training so people know what to do when they log in.",
  },
  {
    title: "Automation",
    desc: "Let the system handle routine steps and checks so work moves on time.",
  },
];

const services = [
  {
    icon: Workflow,
    title: "Zoho Projects setup",
    desc: "Spaces, roles, fields, views, reports, and training",
    bullets: ["Blueprint and milestones", "Permissions and governance", "Dashboards and reporting"],
  },
  {
    icon: Link2,
    title: "Zoho Sprints",
    desc: "Backlog, iterations, planning, and leadership reporting",
    bullets: ["Story mapping and DOR and DoD", "SLA and velocity views", "Release dashboards"],
  },
  {
    icon: Workflow,
    title: "ClickUp consulting",
    desc: "Workspace architecture, templates, automation, and adoption",
    bullets: ["Workspace and permissions", "Templates and dashboards", "Automation and quality checks"],
  },
  {
    icon: Bot,
    title: "Automation and QA",
    desc: "Configuration checks and reusable playbooks reduce errors and speed delivery",
    bullets: ["Automated validation", "Reusable playbooks", "Readiness checks"],
  },
  {
    icon: FolderCog,
    title: "Ongoing improvement",
    desc: "Monthly reviews so your tools keep pace with the business",
    bullets: ["KPI reviews", "Onboarding guides", "Roadmap and scaling"],
  },
];

const faqs = [
  { q: "How fast can we go live?", a: "Most teams launch in about ten business days after the assessment." },
  { q: "Do you support Zoho Projects and Zoho Sprints?", a: "Yes. We are certified on both and tailor the setup to your workflows." },
  { q: "Can you migrate from our current tool?", a: "Yes. We map structures, migrate what matters, and connect integrations." },
  { q: "How do you drive adoption?", a: "We build role based views, clear templates, and a simple way to track work. We also provide training and quick guides for each role." },
  { q: "What happens after go live?", a: "We stay with you through hypercare and offer ongoing reviews so the system keeps improving." },
];

const caseStudies = [
   {
    industry: "Professional Services",
    title: "Improved team visibility and workload clarity",
    result: "Decreased project delays across departments",
    points: [
      "Unified task intake",
      "Role-owned views and permissions",
      "Clear status reporting for leadership"
    ]
  },
  {
    industry: "Marketing Team",
    title: "Faster delivery and fewer bottlenecks",
    result: "Reduced turnaround times and missed deadlines",
    points: [
      "Automated handoffs and reminders",
      "Prioritized sprint planning",
      "Dashboards for accountability"
    ]
  },
  {
    industry: "Operations Team",
    title: "Streamlined workflows and SOP alignment",
    result: "Improved adoption and process consistency",
    points: [
      "Template standardization",
      "Automation for repeatable work",
      "Weekly reporting views"
    ]
  }
];

// Process (3 steps only)
function ProcessSection() {
  const steps = [
    {
      t: "Assess and plan",
      d: "Goals, risks, success metrics, and stakeholders",
    },
    {
      t: "Design and build",
      d: "Spaces, roles, fields, views, and automation",
    },
    {
      t: "Train and launch",
      d: "Role guides, SOPs, go live, and hypercare",
    },
  ];

  return (
    <Section id="process" className="py-20 bg-iteratum-gradient-subtle">
      <div className="text-center mb-10">
        <Pill>The 10 day plan</Pill>
        <h2 className="mt-4 text-iteratum-heading">How we make adoption succeed</h2>
        <p className="mt-3 text-iteratum-subtitle max-w-2xl mx-auto">
          Clear and low lift. We do the heavy lifting so your team gets a system that feels simple and helpful.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-iteratum-cyan text-white rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
              <h3 className="font-semibold text-iteratum-dark">{s.t}</h3>
            </div>
            <p className="text-sm text-neutral-700">{s.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Resources
function ResourcesSection() {
  const resources = [
    { type: "Free guide", title: "ClickUp setup checklist", description: "Fifty point checklist for a clean setup", downloadUrl: "#", icon: CheckCircle2 },
    { type: "Template", title: "Project kickoff pack", description: "Everything you need to start right", downloadUrl: "#", icon: FolderCog },
    { type: "Webinar", title: "Zoho Projects best practices", description: "One hour on structure and reporting", downloadUrl: "#", icon: Users },
    { type: "Case study", title: "SaaS team rollout", description: "How a fifty person team reached ninety five percent adoption", downloadUrl: "#", icon: Workflow },
  ];

  return (
    <Section id="resources" className="py-20">
      <div className="text-center mb-12">
        <Pill>Free resources</Pill>
        <h2 className="mt-4 text-iteratum-heading">Learn from recent rollouts</h2>
        <p className="mt-4 text-iteratum-subtitle max-w-2xl mx-auto">Templates, guides, and case studies you can use today.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((r, i) => (
          <Card key={i} className="p-6 text-center hover-iteratum-lift">
            <div className="w-12 h-12 bg-iteratum-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <r.icon className="w-6 h-6 text-white" />
            </div>
            <div className="pill-iteratum mb-3">{r.type}</div>
            <h3 className="font-semibold text-iteratum-dark mb-2">{r.title}</h3>
            <p className="text-sm text-iteratum-slate mb-4">{r.description}</p>
            <Button href={r.downloadUrl} variant="ghost" className="text-xs">Download</Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// Testimonials
function TestimonialsSection() {
  const testimonials = [
  {
    quote: "Our team finally has a system we actually use every day. The clarity and structure made an immediate difference.",
    author: "Director of Operations",
    company: "Professional Services Client"
  },
  {
    quote: "Projects were slipping through the cracks before. Now everyone knows their role and nothing gets lost.",
    author: "Marketing Lead",
    company: "Mid-Size Team"
  },
  {
    quote: "The rollout was fast, the training was simple, and the adoption from our team was better than expected.",
    author: "VP, Project Delivery",
    company: "Operations Client"
  }
];

// Main
export default function Site() {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      <Header onOpenCal={() => setOpenCal(true)} />

      {/* Hero */}
      <Section id="home" className="pt-28 pb-6 hero-iteratum">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-iteratum-hero">Get ClickUp or Zoho working the way your team needs</h1>
            <p className="mt-4 text-iteratum-subtitle max-w-xl">
              Implementations that deliver clarity, accountability, and adoption. Your team gets a simple place to plan work, track progress, and finish on time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={CAL_LINK} onClick={(e) => { e.preventDefault(); setOpenCal(true); }}>Book a discovery call</Button>
              <Button variant="ghost" href="#process">See the implementation plan</Button>
            </div>
          </div>

          {/* Lead magnet */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Free guide</div>
                <div className="text-xl font-bold mt-1">Quick setup checklist</div>
                <div className="text-sm text-neutral-700 mt-1">Use the same checklist we use with clients to align fast.</div>
              </div>
              <ArrowRight className="hidden sm:block h-5 w-5 mt-2 flex-shrink-0" />
            </div>
            <ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} />
          </Card>
        </div>
      </Section>

      {/* Trust band near the top */}
      <TrustSectionTop />

      {/* Value trio */}
      <Section id="value-trio" className="py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {valueTrio.map((v, i) => (
            <Card key={i} className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-neutral-700">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <AboutSection />

      {/* Services */}
      <Section id="services" className="py-10">
        <Pill>Implementation services</Pill>
        <h2 className="mt-3 text-iteratum-heading">ClickUp and Zoho setups that ship and stick</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-iteratum-dark text-white p-2 flex-shrink-0">{React.createElement(s.icon, { className: "h-5 w-5" })}</div>
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

      {/* Process 3 steps only */}
      <ProcessSection />

      {/* Results */}
      <Section id="results" className="py-10">
        <Pill>Results</Pill>
        <h2 className="mt-3 text-iteratum-heading">Outcomes teams care about</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <Card key={i} className="p-6">
              <div className="text-xs uppercase tracking-wide text-neutral-500">{c.industry}</div>
              <div className="mt-1 text-lg font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-emerald-700 font-semibold">{c.result}</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {c.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 flex-shrink-0" />{p}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-xs rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors">Talk to us <ChevronRight className="h-3 w-3" /></a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing */}
      <PricingSection />

      {/* Resources */}
      <ResourcesSection />

      {/* FAQ */}
      <Section id="faq" className="py-10">
        <Pill>FAQ</Pill>
        <h2 className="mt-3 text-iteratum-heading">Questions we hear often</h2>
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

      {/* Final CTA */}
      <Section id="contact" className="py-14">
        <Card className="p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <Pill>Get started</Pill>
              <h3 className="mt-3 text-iteratum-heading">Ready to see your team adopt ClickUp or Zoho</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2"><ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0" /> Clear scope and milestones</li>
                <li className="flex items-start gap-2"><Users className="h-4 w-4 mt-0.5 flex-shrink-0" /> Training and role guides</li>
                <li className="flex items-start gap-2"><Zap className="h-4 w-4 mt-0.5 flex-shrink-0" /> Automation that saves time</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={CAL_LINK} onClick={(e) => { e.preventDefault(); setOpenCal(true); }}>Book a call</Button>
                <Button variant="ghost" href="mailto:hello@iteratum.com">Email us</Button>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Free guide</div>
                <div className="text-xl font-bold mt-1">Quick setup checklist</div>
                <div className="text-sm text-neutral-700 mt-1">Use the same guide we use to align teams fast.</div>
                <div className="mt-4"><ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} /></div>
              </Card>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="footer-iteratum">
        <Section className="py-12">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
                <span className="text-xl font-bold text-white">Iteratum</span>
              </div>
              <p className="text-sm text-gray-300 mb-6 max-w-md">ClickUp and Zoho implementation that launches fast and drives real adoption. Clean setup, automation, and training for teams that want clarity.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300"><Users className="w-4 h-4" /><span>hello@iteratum.com</span></div>
                <div className="flex items-center gap-2 text-gray-300"><Bot className="w-4 h-4" /><span>Available Monday to Friday, 9am to 5pm Eastern</span></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Zoho Projects setup</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Zoho Sprints</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">ClickUp consulting</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Team training</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#resources" className="hover:text-white transition-colors">Free templates</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Implementation plan</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Client stories</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Iteratum</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Client success</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">© {new Date().getFullYear()} Iteratum. All rights reserved.</div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span>Strong security practices</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /><span>Thirty day guarantee</span></div>
              </div>
            </div>
          </div>
        </Section>
      </footer>

      <CalModal open={openCal} onClose={() => setOpenCal(false)} />
    </div>
  );
}

