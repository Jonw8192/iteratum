// src/Site.jsx
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

// ---------- Assets ----------
const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
  clickupVerified: "/clickup-verified.png",
  zohoPartner: "/zoho-partner.png", // ensure file exists; name per your assets
  zohoProjectsBadge: "/projects.svg",
  zohoSprintsBadge: "/sprints.svg",
};

// ---------- Booking link ----------
const CAL_LINK = "https://cal.com/jonwoods";

// ---------- Zoho Web Form (fallback) ----------
const ZOHO_IFRAME_URL =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=6783f923bf2d4ca031e1400cd34ce72fff73af244ff57a0a910563aa038ea0e2c2d5e2ae59c111ccbf8c6ff8c0743b42gid386a4b38bcba3913b450131125819d1cfc796d784ea5d51daf8f6c15bc6286ed";

// ---------- SEO ----------
function Seo() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const title =
      "Iteratum | ClickUp and Zoho Implementations Your Team Actually Adopts";
    const description =
      "Clarity, accountability, and predictable delivery in about 10 days. Premium ClickUp and Zoho implementations your team will actually use.";

    const setMeta = (selector, attrs) => {
      const el = document.querySelector(selector);
      if (el) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };

    document.title = title;
    setMeta('meta[name="description"]', { content: description });
    setMeta('meta[name="robots"]', { content: "index,follow" });

    // JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Iteratum",
      description,
      url: typeof window !== "undefined" ? window.location.origin : "",
      areaServed: "Global",
      serviceType: [
        "ClickUp implementation",
        "Zoho Projects implementation",
        "Zoho Sprints implementation",
      ],
      sameAs: ["https://cal.com/jonwoods"],
    });
    document.head.appendChild(script);

    return () => {
      try {
        document.head.removeChild(script);
      } catch {}
    };
  }, []);

  return null;
}

// ---------- UI helpers ----------
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

// ---------- Header ----------
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
            <a
              href="#how-it-works"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
            >
              How It Works
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
            >
              Products
            </a>
            <a
              href="#results"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
            >
              Results
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
            >
              FAQ
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
            >
              About
            </a>
          </nav>

          <div className="hidden md:block">
            <button onClick={onOpenCal} className="btn-iteratum-primary">
              Book A Discovery Call
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-iteratum">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#how-it-works" className="text-sm font-medium text-iteratum-charcoal">
                How It Works
              </a>
              <a href="#products" className="text-sm font-medium text-iteratum-charcoal">
                Products
              </a>
              <a href="#results" className="text-sm font-medium text-iteratum-charcoal">
                Results
              </a>
              <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal">
                Pricing
              </a>
              <a href="#faq" className="text-sm font-medium text-iteratum-charcoal">
                FAQ
              </a>
              <a href="#about" className="text-sm font-medium text-iteratum-charcoal">
                About
              </a>
              <button onClick={onOpenCal} className="btn-iteratum-primary mt-4 w-full">
                Book A Discovery Call
              </button>
            </nav>
          </div>
        )}
      </Section>
    </header>
  );
}

// ---------- Modal ----------
function CalModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-iteratum">
      <div className="modal-content-iteratum">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="text-sm font-semibold">Book A Call</div>
          <button onClick={onClose} className="btn-iteratum-secondary text-xs px-2 py-1">
            Close
          </button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe
            title="Cal.com Scheduling"
            src={`${CAL_LINK}?embed=true`}
            className="h-full w-full"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

// ---------- Hero ----------
function Hero({ setOpenCal }) {
  return (
    <Section id="home" className="pt-28 pb-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-iteratum-hero">
            A Workspace Your Team Actually Adopts
          </h1>
          <p className="mt-4 text-iteratum-subtitle max-w-xl">
            Clarity, accountability, and predictable delivery in about 10 days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={CAL_LINK}
              onClick={(e) => {
                e.preventDefault();
                setOpenCal(true);
              }}
            >
              Book A Discovery Call
            </Button>
            <Button variant="ghost" href="#how-it-works">
              See The 10-Day Plan
            </Button>
          </div>
        </div>

        {/* Lead magnet */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">
                Free Guide
              </div>
              <div className="text-xl font-bold mt-1">Quick Setup Checklist</div>
              <div className="text-sm text-neutral-700 mt-1">
                Use the same checklist we use with clients to align fast.
              </div>
            </div>
            <ArrowRight className="hidden sm:block h-5 w-5 mt-2 flex-shrink-0" />
          </div>
          <ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} />
        </Card>
      </div>
    </Section>
  );
}

// ---------- Trust / Badges (TB-A: Large Side-By-Side) ----------
function TrustSection() {
  return (
    <Section id="trust" className="pt-4 pb-6">
      <div
        className="mx-auto max-w-5xl rounded-2xl px-6 py-8"
        style={{ background: "#f7f7f5", border: "1px solid #e5e5e5" }}
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <img
            src={ASSETS.clickupVerified}
            alt="ClickUp Verified Consultant"
            className="h-16 md:h-20 object-contain"
          />
          <img
            src={ASSETS.zohoPartner}
            alt="Zoho Authorized Partner"
            className="h-16 md:h-20 object-contain"
          />
        </div>
        <div className="text-center text-xs md:text-sm text-neutral-600 mt-4">
          Certified experts in ClickUp and Zoho.
        </div>
      </div>
    </Section>
  );
}

// ---------- 3 Pillars / What We Do ----------
function PillarsSection() {
  const pillars = [
    {
      t: "Clarity",
      d: "One source of truth for work, owners, and status.",
    },
    {
      t: "Accountability",
      d: "Role-based views and simple checks keep work moving.",
    },
    {
      t: "Adoption",
      d: "Training and templates make the system stick.",
    },
  ];
  return (
    <Section id="value-trio" className="py-16">
      <div className="text-center max-w-3xl mx-auto">
        <Pill>Why Teams Succeed</Pill>
        <h2 className="mt-3 text-iteratum-heading">It’s Not The Tool — It’s Adoption</h2>
        <p className="mt-2 text-iteratum-subtitle">
          We design the structure and the behaviors so your team actually uses it.
        </p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <Card key={i} className="p-6 text-center">
            <h3 className="text-lg font-semibold text-iteratum-dark">{p.t}</h3>
            <p className="text-sm text-neutral-700 mt-2">{p.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------- Product Tabs (ClickUp vs Zoho) ----------
function ProductTabsSection() {
  const [tab, setTab] = useState("clickup");

  const baseTab =
    "px-4 py-2.5 text-sm font-semibold rounded-xl border transition";
  const active = "bg-white border-gray-200 shadow";
  const inactive = "bg-transparent border-transparent hover:bg-white/70";

  return (
    <Section id="products" className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <Pill>Choose Your Platform</Pill>
        <h2 className="mt-3 text-iteratum-heading">
          ClickUp and Zoho Implemented The Right Way
        </h2>
        <p className="mt-2 text-iteratum-subtitle">
          Two paths. Same promise: clarity, accountability, adoption.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            className={`${baseTab} ${tab === "clickup" ? active : inactive}`}
            onClick={() => setTab("clickup")}
          >
            ClickUp Implementations
          </button>
          <button
            className={`${baseTab} ${tab === "zoho" ? active : inactive}`}
            onClick={() => setTab("zoho")}
          >
            Zoho Implementations
          </button>
        </div>

        {tab === "clickup" ? <ClickUpCard /> : <ZohoCard />}
      </div>
    </Section>
  );
}

function ClickUpCard() {
  const bullets = [
    "Workspace Architecture and Permissions",
    "Templates, Dashboards, and Automation",
    "Role-Based Views and Adoption Training",
  ];
  return (
    <Card className="p-8 bg-white border border-gray-200">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold text-iteratum-dark">ClickUp Implementations</h3>
          <p className="text-sm text-neutral-700 mt-2">
            A clean, intuitive workspace for visibility, flow, and momentum.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-800">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-iteratum-success" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Button href={CAL_LINK}>Talk About ClickUp</Button>
            <Button href="#pricing" variant="ghost">
              See Pricing
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={ASSETS.clickupVerified}
            alt="ClickUp Verified Consultant"
            className="h-20 md:h-24 object-contain"
          />
        </div>
      </div>
    </Card>
  );
}

function ZohoCard() {
  const bullets = [
    "Projects and Sprints Configured To Your Workflow",
    "Blueprints, Roles, Fields, Views, Reports",
    "Automation, Dashboards, and Governance",
  ];
  return (
    <Card className="p-8 bg-white border border-gray-200">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-bold text-iteratum-dark">Zoho Implementations</h3>
          <p className="text-sm text-neutral-700 mt-2">
            A structured workspace with reporting, automation, and scale.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-800">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-iteratum-success" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Button href={CAL_LINK}>Talk About Zoho</Button>
            <Button href="#pricing" variant="ghost">
              See Pricing
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src={ASSETS.zohoPartner}
            alt="Zoho Authorized Partner"
            className="h-20 md:h-24 object-contain"
          />
          <div className="flex items-center gap-4 opacity-90">
            <img src={ASSETS.zohoProjectsBadge} alt="Zoho Projects Partner" className="h-8" />
            <img src={ASSETS.zohoSprintsBadge} alt="Zoho Sprints Partner" className="h-8" />
          </div>
        </div>
      </div>
    </Card>
  );
}

// ---------- Process (3 steps) ----------
const processSteps = [
  {
    t: "Assess and Align",
    d: "We understand your workflows, goals, and constraints, then align on success.",
  },
  {
    t: "Design and Build",
    d: "Spaces, statuses, roles, fields, automation, dashboards, and permissions.",
  },
  {
    t: "Train and Launch",
    d: "Role-based training, go-live support, and hypercare for confident adoption.",
  },
];

function ProcessSection() {
  return (
    <Section id="how-it-works" className="py-20 bg-iteratum-gradient-subtle">
      <div className="text-center mb-10">
        <Pill>The 10-Day Plan</Pill>
        <h2 className="mt-4 text-iteratum-heading">Simple Steps To Real Adoption</h2>
        <p className="mt-3 text-iteratum-subtitle max-w-2xl mx-auto">
          Clear milestones, visible progress, and a system your team will actually use.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {processSteps.map((s, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-iteratum-cyan text-white rounded-full flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold text-iteratum-dark">{s.t}</h3>
            </div>
            <p className="text-sm text-neutral-700">{s.d}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------- Outcomes (SaaS Bold with colored header band) ----------
const outcomes = [
  {
    tag: "PROFESSIONAL SERVICES",
    title: "Improved Team Visibility and Workload Clarity",
    subtitle: "Decreased project delays across departments",
    color: "cyan",
    points: [
      "Unified Task Intake",
      "Role-Owned Views and Permissions",
      "Clear Status Reporting For Leadership",
    ],
  },
  {
    tag: "MARKETING TEAM",
    title: "Faster Delivery and Fewer Bottlenecks",
    subtitle: "Reduced turnaround times and missed deadlines",
    color: "violet",
    points: [
      "Automated Handoffs and Reminders",
      "Prioritized Sprint Planning",
      "Dashboards For Accountability",
    ],
  },
  {
    tag: "OPERATIONS TEAM",
    title: "Streamlined Workflows and SOP Alignment",
    subtitle: "Improved adoption and process consistency",
    color: "emerald",
    points: [
      "Template Standardization",
      "Automation For Repeatable Work",
      "Weekly Reporting Views",
    ],
  },
];

const colorMap = {
  cyan: {
    band: "bg-cyan-50",
    text: "text-cyan-900",
    border: "border-cyan-200",
    accent: "text-cyan-700",
  },
  violet: {
    band: "bg-violet-50",
    text: "text-violet-900",
    border: "border-violet-200",
    accent: "text-violet-700",
  },
  emerald: {
    band: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    accent: "text-emerald-700",
  },
};

function ResultsSection() {
  return (
    <Section id="results" className="py-16">
      <div className="text-center">
        <Pill>Results</Pill>
        <h2 className="mt-3 text-iteratum-heading">Outcomes Teams Care About</h2>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {outcomes.map((o, i) => {
          const c = colorMap[o.color];
          return (
            <Card key={i} className={`p-0 border ${c.border} bg-white`}>
              {/* Colored Header Band with equal height */}
              <div className={`${c.band} ${c.text} rounded-t-2xl px-5 py-4 min-h-[98px] flex flex-col justify-center`}>
                <div className="text-[11px] tracking-widest font-semibold opacity-70">
                  {o.tag}
                </div>
                <div className="mt-1 text-lg font-semibold leading-snug">
                  {o.title}
                </div>
                <div className={`mt-1 text-sm font-medium ${c.accent}`}>
                  {o.subtitle}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <ul className="space-y-2 text-sm text-neutral-800">
                  {o.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-iteratum-success" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

// ---------- Testimonials ----------
function TestimonialsSection() {
  const quotes = [
    {
      quote:
        "Our team finally has a system we use every day. The structure and role-based views created immediate clarity.",
      author: "Director Of Operations",
      company: "Professional Services Client",
    },
    {
      quote:
        "Projects used to slip through the cracks. Now we have automated handoffs and clear ownership. Delivery speed improved quickly.",
      author: "Marketing Lead",
      company: "Mid-Size Team",
    },
    {
      quote:
        "The rollout was fast, training was simple, and adoption exceeded expectations. Leadership gets the reporting they wanted.",
      author: "VP, Project Delivery",
      company: "Operations Client",
    },
  ];
  return (
    <Section id="testimonials" className="py-20 bg-iteratum-gradient-subtle">
      <div className="text-center mb-12">
        <Pill>Client Feedback</Pill>
        <h2 className="mt-4 text-iteratum-heading">What Teams Say After Go-Live</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {quotes.map((t, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-1 mb-4" aria-hidden="true">
              {[...Array(5)].map((_, star) => (
                <div key={star} className="w-4 h-4 text-yellow-400">★</div>
              ))}
            </div>
            <blockquote className="text-iteratum-slate mb-4">“{t.quote}”</blockquote>
            <div className="border-top pt-4">
              <div className="font-semibold text-iteratum-dark">{t.author}</div>
              <div className="text-sm text-iteratum-steel">{t.company}</div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------- Pricing ----------
function PricingSection() {
  const packages = [
    {
      name: "Starter",
      price: "$2,500",
      duration: "5 To 7 Days",
      description: "For a single team or a simple workspace",
      features: [
        "ClickUp or Zoho Setup",
        "Core Workflows and Saved Views",
        "Team Training For Up To 10 Users",
        "Two Weeks Of Support",
        "Templates and Quick Guides",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$4,500",
      duration: "8 To 10 Days",
      description: "For growing teams that need automation and reporting",
      features: [
        "ClickUp Pro or Zoho Projects With Sprints",
        "Automations and Approvals",
        "Dashboards and Executive Reports",
        "Training For Up To 25 Users",
        "Thirty Days Of Support",
        "Integrations For Up To Three Tools",
      ],
      popular: true,
      note: "Recommended For Most Teams",
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "10 To 15 Days",
      description: "For complex organizations that need scale and governance",
      features: [
        "Multi-Workspace Architecture",
        "Advanced Security and Governance",
        "Unlimited User Training",
        "Sixty Days Of Support",
        "Unlimited Integrations",
        "Custom Reporting Suite",
        "Dedicated Success Manager",
        "On-Site Training Available",
      ],
      popular: false,
    },
  ];

  return (
    <Section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <Pill>Implementation Packages</Pill>
        <h2 className="mt-4 text-iteratum-heading">Clear Pricing That Launches Your Team Fast</h2>
        <p className="mt-4 text-iteratum-subtitle max-w-2xl mx-auto">
          No long contracts. No surprise fees. Every package includes adoption-focused training and hands-on go-live support.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, i) => {
          const featured = pkg.popular;
          return (
            <Card
              key={i}
              className={[
                "relative p-8 flex flex-col transition-all",
                "border border-gray-200 bg-white",
                featured
                  ? "ring-2 ring-iteratum-cyan/60 ring-offset-2 ring-offset-white shadow-[0_12px_50px_rgba(2,132,199,0.12)] hover:shadow-[0_16px_60px_rgba(2,132,199,0.16)] hover:-translate-y-0.5"
                  : "hover:-translate-y-0.5 hover:shadow-md",
              ].join(" ")}
            >
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="pill-iteratum-accent">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-iteratum-dark">{pkg.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-iteratum-dark">{pkg.price}</span>
                  <div className="text-sm text-iteratum-steel">{pkg.duration}</div>
                </div>
                <p className="mt-2 text-sm text-iteratum-slate">{pkg.description}</p>
                {featured && (
                  <div className="mt-2 text-xs font-medium text-iteratum-cyan/90">
                    {pkg.note}
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-iteratum-success mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={CAL_LINK}
                variant="primary"
                className="w-full mt-auto"
                ariaLabel={`${pkg.name}: ${pkg.price === "Custom" ? "Get A Custom Quote" : "Get Started"}`}
              >
                {pkg.price === "Custom" ? "Get A Custom Quote" : "Get Started"}
              </Button>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-iteratum-slate mb-4">Includes a 30-day satisfaction guarantee</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-iteratum-steel">
          <span>✓ Fast Delivery</span>
          <span>✓ Adoption-First Training</span>
          <span>✓ Clear Milestones</span>
          <span>✓ Hands-On Go-Live Support</span>
        </div>
      </div>
    </Section>
  );
}

// ---------- FAQ ----------
const faqs = [
  { q: "How Fast Can We Go Live?", a: "Most teams launch in about ten business days after the assessment." },
  { q: "Do You Support Zoho Projects and Zoho Sprints?", a: "Yes. We implement both and tailor the setup to your workflows." },
  { q: "Can You Migrate From Our Current Tool?", a: "Yes. We map structures, migrate what matters, and connect integrations." },
  { q: "How Do You Drive Adoption?", a: "Role-based views, clear templates, and simple training per role. We also provide quick guides." },
  { q: "What Happens After Go-Live?", a: "We stay with you through hypercare and offer ongoing reviews so the system keeps improving." },
];

function FAQSection() {
  return (
    <Section id="faq" className="py-10">
      <div className="text-center">
        <Pill>FAQ</Pill>
        <h2 className="mt-3 text-iteratum-heading">Questions We Hear Often</h2>
      </div>
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

// ---------- Final CTA ----------
function FinalCTA({ setOpenCal }) {
  return (
    <Section id="contact" className="py-16">
      <Card className="p-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>Get Started</Pill>
            <h3 className="mt-3 text-iteratum-heading">
              Give Your Team A System They Can Rely On
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 mt-0.5" /> Role-Based Training and Guides
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5" /> Clear Milestones and Reporting
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 mt-0.5" /> Automation That Saves Time
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                href={CAL_LINK}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenCal(true);
                }}
              >
                Book A Discovery Call
              </Button>
              <Button variant="ghost" href="mailto:hello@iteratum.com">
                Email Us
              </Button>
            </div>
          </div>
          <div>
            <Card className="p-6">
              <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">
                Free Guide
              </div>
              <div className="text-xl font-bold mt-1">Quick Setup Checklist</div>
              <div className="text-sm text-neutral-700 mt-1">
                Use the same guide we use to align teams fast.
              </div>
              <div className="mt-4">
                <ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} />
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </Section>
  );
}

// ---------- About Preview (AP-1) ----------
function AboutPreview() {
  return (
    <Section id="about" className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        <Pill>About Iteratum</Pill>
        <h2 className="mt-3 text-iteratum-heading">We Make Adoption Succeed</h2>
        <p className="mt-3 text-iteratum-subtitle">
          Our mission is to give everyday teams the same clarity, tools, and execution that
          Fortune 500 companies rely on, without the complexity or ego.
        </p>
        <div className="mt-6">
          <Button href="/about" variant="ghost">
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}

// ---------- Footer ----------
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
                <a
                  href="mailto:hello@iteratum.com?subject=Inquiry%20from%20Iteratum%20Website"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  hello@iteratum.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bot className="w-4 h-4" />
                <span>Available Monday To Friday, 9am To 5pm Eastern</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  ClickUp Implementations
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Zoho Implementations
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Automation & QA
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Team Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Iteratum
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors">
                  Client Success
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-white transition-colors">
                  Terms Of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Iteratum. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Strong Security Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>30 Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

// ---------- Lead form ----------
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
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          className="input-iteratum"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Work email"
          className="input-iteratum"
          required
        />
        <button type="submit" className="btn-iteratum-primary w-full">
          Get The Checklist
        </button>
      </form>

      {iframeFallback && (
        <details className="mt-4">
          <summary className="text-xs text-gray-500 cursor-pointer">
            Having trouble? Try the alternate form
          </summary>
          <iframe
            title="Zoho Web Form"
            src={iframeFallback}
            width="100%"
            height="360"
            frameBorder="0"
            className="mt-2 rounded-lg border"
            loading="lazy"
          />
        </details>
      )}

      <p className="mt-2 text-xs text-gray-500">
        Questions? Email{" "}
        <a className="underline hover:no-underline" href="mailto:hello@iteratum.com">
          hello@iteratum.com
        </a>
      </p>
    </div>
  );
}

// ---------- Main ----------
export default function Site() {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      <Header onOpenCal={() => setOpenCal(true)} />

      <Hero setOpenCal={setOpenCal} />
      <TrustSection />
      <PillarsSection />
      <ProductTabsSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA setOpenCal={setOpenCal} />
      <AboutPreview />
      <Footer />

      <CalModal open={openCal} onClose={() => setOpenCal(false)} />
    </div>
  );
}
