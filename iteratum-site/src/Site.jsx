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
} from "lucide-react";

// ---------- Assets (all your actual files) ----------
const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
  zohoProjectsBadge: "/projects.svg",
  zohoSprintsBadge: "/sprints.svg", 
  clickupVerified: "/clickup-verified.png",
  certGoogle: "/certificate2.webp",
  certIBM: "/certificate3.webp",
};

// Booking link
const CAL_LINK = "https://cal.com/jonwoods";

// ---------- Zoho Form URLs ----------
const ZOHO_IFRAME_URL = "https://crm.zoho.com/crm/WebFormServeServlet?rid=6783f923bf2d4ca031e1400cd34ce72fff73af244ff57a0a910563aa038ea0e2c2d5e2ae59c111ccbf8c6ff8c0743b42gid386a4b38bcba3913b450131125819d1cfc796d784ea5d51daf8f6c15bc6286ed";

// ---------- SEO (simplified and production-safe) ----------
function Seo() {
  useEffect(() => {
    // Only run in browser
    if (typeof document === "undefined") return;

    const title = "Iteratum - Zoho Projects and ClickUp implementation that launches in 10 days";
    const description = "We implement Zoho Projects, Zoho Sprints, and ClickUp with training and automation so your team actually uses it. Fast launch, high adoption, and efficiency with Iteratum IA.";
    
    // Safe meta tag updates
    const updateMeta = (selector, attrs) => {
      try {
        let el = document.querySelector(selector);
        if (el) {
          Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        }
      } catch (error) {
        // Silently fail - meta tags are not critical for functionality
      }
    };

    document.title = title;
    updateMeta('meta[name="description"]', { content: description });
    updateMeta('meta[name="robots"]', { content: "index,follow" });
  }, []);
  
  return null;
}

// ---------- UI Helpers ----------
const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Button = ({
  children,
  variant = "primary",
  href = "#",
  className = "",
  onClick,
}) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-black text-white hover:bg-neutral-800 focus:ring-black",
    ghost: "border bg-white text-black hover:bg-neutral-50 focus:ring-neutral-300",
  };
  
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

// ---------- Modal ----------
function CalModal({ open, onClose }) {
  if (!open) return null;
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-lg overflow-hidden">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="text-sm font-semibold">Book a call</div>
          <button
            onClick={onClose}
            className="rounded-lg border px-2 py-1 text-xs hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe
            title="Cal.com scheduling"
            src={`${CAL_LINK}?embed=true`}
            className="h-full w-full"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

// ---------- Simplified Form ----------
function ZohoWebToLead({ iframeFallback }) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // In a real implementation, you'd handle the form submission here
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  if (formSubmitted) {
    return (
      <div className="p-4 border rounded-lg bg-green-50 border-green-200">
        <p className="text-sm text-green-800 font-medium">Thanks! Check your email for the checklist.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Primary form */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Get Free Checklist
        </button>
      </form>

      {/* Fallback iframe if needed */}
      {iframeFallback && (
        <details className="mt-4">
          <summary className="text-xs text-gray-500 cursor-pointer">Having trouble? Try alternative form</summary>
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

// ---------- Content Data ----------
const valueTrio = [
  {
    title: "Fast launch",
    desc: "Go live in about 10 days with a battle-tested blueprint that avoids costly rework.",
  },
  {
    title: "Adoption that sticks", 
    desc: "Role-based training and enablement so your team actually uses the system.",
  },
  {
    title: "Automation and efficiency",
    desc: "Iteratum IA automates repetitive work and runs intelligent checks.",
  },
];

const services = [
  {
    icon: Workflow,
    title: "Zoho Projects implementation",
    desc: "Space design, roles, fields, views, reports, and training.",
    bullets: ["Blueprint and milestones", "Permissions and governance", "Dashboards and reporting"],
  },
  {
    icon: Link2,
    title: "Zoho Sprints setup",
    desc: "Backlog, iterations, planning, and leadership reporting.",
    bullets: ["Story mapping and DOR/DoD", "SLA and velocity views", "Release dashboards"],
  },
  {
    icon: Workflow,
    title: "ClickUp consulting",
    desc: "Workspace architecture, templates, automations, and adoption.",
    bullets: ["Workspace and permissions", "Templates and dashboards", "Automations and QA"],
  },
  {
    icon: Bot,
    title: "Iteratum IA automation",
    desc: "LLM-assisted configuration and QA to reduce errors and speed up delivery.",
    bullets: ["Automated config validation", "Reusable playbooks", "Agentic checks"],
  },
  {
    icon: FolderCog,
    title: "Ongoing optimization",
    desc: "Monthly audits and support so your tools keep pace with the business.",
    bullets: ["KPI reviews", "SOPs and onboarding", "Roadmap and scaling"],
  },
];

const processSteps = [
  { t: "Assess and plan", d: "Stakeholders, goals, risks, and success criteria." },
  { t: "Design and configure", d: "Spaces, roles, fields, views, and reports." },
  { t: "Automate and integrate", d: "Triggers, SLAs, and tool connections." },
  { t: "Train and adopt", d: "Role guides, SOPs, and enablement sessions." },
  { t: "Go live and support", d: "Hypercare and iteration with a clear roadmap." },
];

const faqs = [
  { q: "How fast can we go live?", a: "Most teams launch in about 10 business days after the assessment." },
  { q: "Do you support Zoho Projects and Zoho Sprints?", a: "Yes. We are certified on both and tailor the setup to your workflows." },
  { q: "Can you migrate from our current tool?", a: "Yes. We map structures, migrate what matters, and connect integrations." },
  { q: "What is Iteratum IA?", a: "An AI-powered copilot that accelerates setup and runs configuration checks." },
];

const caseStudies = [
  {
    industry: "Construction PM",
    title: "Standardized jobs in Zoho Projects",
    result: "22% faster turnarounds",
    points: ["Templates and SLAs", "Role dashboards", "Automated handoffs"],
  },
  {
    industry: "SaaS engineering",
    title: "Predictable releases in Zoho Sprints",
    result: "Release adherence 62% to 95%",
    points: ["Backlog automation", "Blocker dashboards", "Clear DOR/DoD"],
  },
  {
    industry: "Marketing agency",
    title: "Onboarding with Iteratum IA",
    result: "3h to 12min onboarding",
    points: ["Starter automations", "Config validation", "Reusable playbooks"],
  },
];

// ---------- Main Component ----------
export default function Site() {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />

      {/* Hero */}
      <Section id="home" className="pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl">
              Get Zoho Projects and ClickUp working for your team in 10 days
            </h1>
            <p className="mt-4 text-neutral-700 max-w-xl">
              Stop wasting months. We implement, train, and automate - so your team actually uses it. Download the Quick Setup Checklist and see the steps we use in paid engagements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href={CAL_LINK}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenCal(true);
                }}
              >
                Book a Call
              </Button>
              <Button variant="ghost" href="#services">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Lead Magnet Form */}
          <Card className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">
                  Lead magnet
                </div>
                <div className="text-xl font-bold mt-1">Free Quick Setup Checklist</div>
                <div className="text-sm text-neutral-700 mt-1">
                  Enter your details to get the Zoho Projects and ClickUp guide we use with clients.
                </div>
              </div>
              <ArrowRight className="hidden sm:block h-5 w-5 mt-2 flex-shrink-0" />
            </div>
            <ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} />
          </Card>
        </div>
      </Section>

      {/* Value Trio */}
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

      {/* Why Iteratum */}
      <Section id="why" className="py-10">
        <Pill>Why Iteratum</Pill>
        <h2 className="mt-3 text-3xl font-extrabold">A boutique partner focused on outcomes</h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-6 items-start">
          <Card className="p-6">
            <ul className="text-sm text-neutral-700 space-y-2">
              <li className="flex gap-2 items-start">
                <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0" /> Clear scope, milestones, and blueprint
              </li>
              <li className="flex gap-2 items-start">
                <Users className="h-4 w-4 mt-0.5 flex-shrink-0" /> Adoption-first training and role guides
              </li>
              <li className="flex gap-2 items-start">
                <Zap className="h-4 w-4 mt-0.5 flex-shrink-0" /> Faster delivery with Iteratum IA
              </li>
            </ul>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold">Certified and trusted</div>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <img src={ASSETS.zohoProjectsBadge} alt="Zoho Projects badge" className="h-10" />
              <img src={ASSETS.zohoSprintsBadge} alt="Zoho Sprints badge" className="h-10" />
              <img src={ASSETS.clickupVerified} alt="ClickUp Verified badge" className="h-10" />
            </div>
          </Card>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-10">
        <Pill>Implementation services</Pill>
        <h2 className="mt-3 text-3xl font-extrabold">
          ClickUp and Zoho implementation services that ship and stick
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-black text-white p-2 flex-shrink-0">
                  {React.createElement(s.icon, { className: "h-5 w-5" })}
                </div>
                <div className="w-full">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-base font-semibold">{s.title}</div>
                      <div className="text-sm text-neutral-600 mt-1">{s.desc}</div>
                    </div>
                    <a
                      href="#home"
                      className="text-xs inline-flex items-center gap-1 rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors flex-shrink-0 ml-2"
                    >
                      Get plan <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" className="py-10">
        <Pill>Implementation process</Pill>
        <h2 className="mt-3 text-3xl font-extrabold">Our 5 step implementation process</h2>
        <div className="mt-8 grid sm:grid-cols-5 gap-4">
          {processSteps.map((s, i) => (
            <Card key={i} className="p-5 text-sm">
              <div className="font-semibold">
                {i + 1}. {s.t}
              </div>
              <div className="text-neutral-600 mt-1">{s.d}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section id="results" className="py-10">
        <Pill>Results</Pill>
        <h2 className="mt-3 text-3xl font-extrabold">Outcomes teams care about</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <Card key={i} className="p-6">
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                {c.industry}
              </div>
              <div className="mt-1 text-lg font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-emerald-700 font-semibold">{c.result}</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {c.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#home"
                className="mt-4 inline-flex items-center gap-1 text-xs rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors"
              >
                Talk to us <ChevronRight className="h-3 w-3" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-10">
        <Pill>FAQ</Pill>
        <h2 className="mt-3 text-3xl font-extrabold">FAQ - ClickUp and Zoho Projects implementations</h2>
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
              <h3 className="mt-3 text-3xl font-extrabold">Ready to launch in 10 days</h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 mt-0.5 flex-shrink-0" /> Clear scope and milestones
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 mt-0.5 flex-shrink-0" /> Training and adoption plan
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 mt-0.5 flex-shrink-0" /> Fast delivery with Iteratum IA
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  href={CAL_LINK}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenCal(true);
                  }}
                >
                  Book a Call
                </Button>
                <Button variant="ghost" href="mailto:hello@iteratum.com">
                  Email us
                </Button>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">
                  Lead magnet
                </div>
                <div className="text-xl font-bold mt-1">Free Quick Setup Checklist</div>
                <div className="text-sm text-neutral-700 mt-1">
                  Use the same guide we use with clients to align teams fast.
                </div>
                <div className="mt-4">
                  <ZohoWebToLead iframeFallback={ZOHO_IFRAME_URL} />
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white/90">
        <Section className="py-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
              Iteratum
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              ClickUp consulting, Zoho Projects and Zoho Sprints implementation, and workflow automation services powered by Iteratum IA.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2">
              <li><a href="#why" className="hover:underline">Why Iteratum</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#process" className="hover:underline">Process</a></li>
              <li><a href="#results" className="hover:underline">Results</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Get in touch</div>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2">
              <li>
                <a
                  href={CAL_LINK}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenCal(true);
                  }}
                  className="hover:underline"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a href="mailto:hello@iteratum.com" className="hover:underline">
                  hello@iteratum.com
                </a>
              </li>
            </ul>
          </div>
        </Section>
        <div className="border-t">
          <Section className="py-4 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>© {new Date().getFullYear()} Iteratum. All rights reserved.</div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Security focused
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> Client centered
              </span>
              <span className="inline-flex items-center gap-1">
                <Zap className="h-3.5 w-3.5" /> Fast delivery
              </span>
            </div>
          </Section>
        </div>
      </footer>

      {/* Cal modal */}
      <CalModal open={openCal} onClose={() => setOpenCal(false)} />
    </div>
  );
}
