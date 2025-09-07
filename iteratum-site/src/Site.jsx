import React, { useEffect, useRef, useState } from "react";
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

// ---------- Assets ----------
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

// ---------- Zoho Form URLs (script + iframe fallback) ----------
const ZOHO_SCRIPT_URL =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=6783f923bf2d4ca031e1400cd34ce72fff73af244ff57a0a910563aa038ea0e2c2d5e2ae59c111ccbf8c6ff8c0743b42gid386a4b38bcba3913b450131125819d1cfc796d784ea5d51daf8f6c15bc6286ed&script=$sYG";

const ZOHO_IFRAME_URL =
  "https://crm.zoho.com/crm/WebFormServeServlet?rid=6783f923bf2d4ca031e1400cd34ce72fff73af244ff57a0a910563aa038ea0e2c2d5e2ae59c111ccbf8c6ff8c0743b42gid386a4b38bcba3913b450131125819d1cfc796d784ea5d51daf8f6c15bc6286ed";

// ---------- SEO / Head ----------
const KEYWORDS = [
  "Zoho Projects implementation",
  "Zoho Sprints setup",
  "ClickUp consulting",
  "Zoho partner",
  "ClickUp consultant",
  "workflow automation",
  "intelligent automation",
  "LLM automation",
  "software implementation services",
  "tool migration",
  "SOP training",
  "adoption playbook",
  "Iteratum IA",
  "Iteratum consulting",
];

function Seo() {
  useEffect(() => {
    const title =
      "Iteratum - Zoho Projects and ClickUp implementation that launches in 10 days";
    const description =
      "We implement Zoho Projects, Zoho Sprints, and ClickUp with training and automation so your team actually uses it. Fast launch, high adoption, and efficiency with Iteratum IA.";
    const ensure = (selector, tag, attrs) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement(tag);
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };
    document.title = title;
    ensure('meta[name="description"]', "meta", {
      name: "description",
      content: description,
    });
    ensure('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: window.location.origin + "/",
    });
    ensure('meta[name="robots"]', "meta", { name: "robots", content: "index,follow" });
    ensure('meta[name="keywords"]', "meta", {
      name: "keywords",
      content: KEYWORDS.join(", "),
    });
    ensure('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: title,
    });
    ensure('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: description,
    });
    ensure('meta[property="og:type"]', "meta", { property: "og:type", content: "website" });
    ensure('meta[name="twitter:card"]', "meta", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    // Public favicon (swap to your own when ready)
    ensure('link[rel="icon"]', "link", {
      rel: "icon",
      href: "https://github.githubassets.com/favicons/favicon.ico",
    });

    // JSON-LD
    const faqs = window.__ITERATUM_FAQ__ || [];
    const steps = window.__ITERATUM_STEPS__ || [];
    const ld = [];
    ld.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Iteratum",
      url: window.location.origin + "/",
      logo: window.location.origin + ASSETS.iteratumLogo,
    });
    ld.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Iteratum",
      url: window.location.origin + "/",
    });
    ld.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Zoho Projects and Zoho Sprints implementation",
      provider: { "@type": "Organization", name: "Iteratum" },
      serviceType: "Implementation",
      description:
        "Certified implementation of Zoho Projects and Zoho Sprints with training and automation.",
    });
    ld.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "ClickUp consulting and implementation",
      provider: { "@type": "Organization", name: "Iteratum" },
      serviceType: "Implementation",
      description:
        "ClickUp architecture, templates, dashboards, automations, and training.",
    });
    if (faqs.length) {
      ld.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }
    if (steps.length) {
      ld.push({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "How we implement Zoho Projects, Zoho Sprints, and ClickUp",
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.t,
          text: s.d,
        })),
      });
    }
    let script = document.getElementById("ld-json");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
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
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-black text-white hover:bg-neutral-800 focus:ring-black",
    ghost:
      "border bg-white text-black hover:bg-neutral-50 focus:ring-neutral-300",
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

// ---------- Integrations ----------
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
            className="rounded-lg border px-2 py-1 text-xs"
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

// ---------- Zoho: script embed with iframe fallback ----------
function ZohoWebToLead({
  scriptId = "formScript6755018000000852175",
  src,
  iframeFallback,
  fallbackDelayMs = 4000, // try script first, then fallback
}) {
  const hostRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState("");
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    if (!src) {
      setError("Missing Zoho form URL");
      setFallback(true);
      return;
    }

    // Clean any previous
    const existingScript = document.getElementById(scriptId);
    if (existingScript) existingScript.remove();

    // Observe injected form
    const observer = new MutationObserver(() => {
      const forms = Array.from(document.querySelectorAll(".crmWebToEntityForm"));
      if (forms.length && hostRef.current) {
        const form = forms[forms.length - 1];
        if (form && !hostRef.current.contains(form)) {
          hostRef.current.innerHTML = "";
          hostRef.current.appendChild(form);
          setLoaded(true);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Load script
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const forms = Array.from(document.querySelectorAll(".crmWebToEntityForm"));
      if (forms.length && hostRef.current) {
        const form = forms[forms.length - 1];
        hostRef.current.innerHTML = "";
        hostRef.current.appendChild(form);
        setLoaded(true);
      }
    };
    script.onerror = () => {
      setError("Form failed to load. Showing fallback.");
      setFallback(true);
    };
    document.body.appendChild(script);

    // Fallback timer (ad blockers/CSP may silently block)
    const timer = window.setTimeout(() => {
      if (!loaded) {
        setError("Form load timed out. Showing fallback.");
        setFallback(true);
      }
    }, fallbackDelayMs);

    return () => {
      try {
        observer.disconnect();
        script.remove();
        window.clearTimeout(timer);
      } catch {}
    };
  }, [scriptId, src, fallbackDelayMs, loaded]);

  if (fallback && iframeFallback) {
    return (
      <div className="iteratum-zoho">
        <iframe
          title="Zoho Web Form"
          src={iframeFallback}
          width="100%"
          height="360"
          frameBorder="0"
          style={{ borderRadius: "0.75rem", border: "1px solid #e5e7eb" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <p className="mt-2 text-xs text-neutral-500">
          Having trouble? Email{" "}
          <a className="underline" href="mailto:hello@iteratum.com">
            hello@iteratum.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="iteratum-zoho">
      <div ref={hostRef} className="min-h-[260px]" />
      {!loaded && !error && (
        <div className="text-xs text-neutral-500">Loading form...</div>
      )}
      {error && !fallback && (
        <div className="text-xs text-red-700">{error}</div>
      )}
      <noscript>
        <div className="text-xs">
          JavaScript is required to load this form. If you prefer, email{" "}
          <a className="underline" href="mailto:hello@iteratum.com">
            hello@iteratum.com
          </a>
          .
        </div>
      </noscript>
    </div>
  );
}

// ---------- Content ----------
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

// expose for Seo JSON-LD
if (typeof window !== "undefined") {
  window.__ITERATUM_FAQ__ = faqs;
  window.__ITERATUM_STEPS__ = processSteps;
}

// ---------- Page ----------
export default function Site() {
  const [openCal, setOpenCal] = useState(false);
  // simple console tests for structure
  try {
    const assert = (c, m) => {
      if (!c && typeof console !== "undefined") console.error("TEST FAIL:", m);
    };
    assert(Array.isArray(valueTrio) && valueTrio.length === 3, "valueTrio length");
    assert(Array.isArray(services) && services.length >= 5, "services length");
    assert(
      services.every((s) => s.icon && s.title && s.desc && Array.isArray(s.bullets)),
      "services shape"
    );
    assert(Array.isArray(processSteps) && processSteps.length === 5, "process steps");
    assert(Array.isArray(faqs) && faqs.length >= 4, "faq items");
  } catch {}

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />

      {/* global style for Zoho form */}
      <style>{`
        .iteratum-zoho .crmWebToEntityForm { all: unset; display: block; width: 100%; }
        .iteratum-zoho .crmWebToEntityForm * { box-sizing: border-box; }
        .iteratum-zoho form, .iteratum-zoho .crmWebToEntityForm form { width: 100% !important; }
        .iteratum-zoho input[type="text"],
        .iteratum-zoho input[type="email"],
        .iteratum-zoho input[type="tel"],
        .iteratum-zoho select,
        .iteratum-zoho textarea {
          width: 100% !important; border: 1px solid rgb(229 231 235); border-radius: 0.75rem; padding: 0.5rem 0.75rem; font-size: 0.875rem; color: rgb(23 23 23); background: white; outline: none;
        }
        .iteratum-zoho input:focus, .iteratum-zoho select:focus, .iteratum-zoho textarea:focus { box-shadow: 0 0 0 2px black inset; }
        .iteratum-zoho label { font-size: 0.75rem; color: rgb(82 82 82); margin-bottom: 0.25rem; display: inline-block; }
        .iteratum-zoho .zcwf_row, .iteratum-zoho .row, .iteratum-zoho .zcrmWebToEntityFormRow { margin-bottom: 0.75rem !important; }
        .iteratum-zoho .submit, .iteratum-zoho input[type="submit"], .iteratum-zoho button[type="submit"] {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; background: black; color: white; border: none; border-radius: 0.75rem; padding: 0.5rem 1rem; font-weight: 600; font-size: 0.875rem; cursor: pointer;
        }
        .iteratum-zoho .submit:hover, .iteratum-zoho input[type="submit"]:hover { background: rgb(38 38 38); }
        .iteratum-zoho .zcwf_tip, .iteratum-zoho .zcwf_privacy, .iteratum-zoho .privacyPolicy, .iteratum-zoho .captcha, .iteratum-zoho .recaptcha { font-size: 0.75rem; color: rgb(115 115 115); }
      `}</style>

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
            <div className="mt-6 flex gap-3">
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
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">
                  Lead magnet
                </div>
                <div className="text-xl font-bold mt-1">Free Quick Setup Checklist</div>
                <div className="text-sm text-neutral-700 mt-1">
                  Enter your details to get the Zoho Projects and ClickUp guide we use with clients.
                </div>
              </div>
              <ArrowRight className="hidden sm:block h-5 w-5 mt-2" />
            </div>
            <div className="mt-4">
              <ZohoWebToLead
                src={ZOHO_SCRIPT_URL}
                iframeFallback={ZOHO_IFRAME_URL}
              />
            </div>
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
                <ShieldCheck className="h-4 w-4 mt-0.5" /> Clear scope, milestones, and blueprint
              </li>
              <li className="flex gap-2 items-start">
                <Users className="h-4 w-4 mt-0.5" /> Adoption-first training and role guides
              </li>
              <li className="flex gap-2 items-start">
                <Zap className="h-4 w-4 mt-0.5" /> Faster delivery with Iteratum IA
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
                <div className="rounded-xl bg-black text-white p-2">
                  {React.createElement(s.icon, { className: "h-5 w-5" })}
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-base font-semibold">{s.title}</div>
                      <div className="text-sm text-neutral-600 mt-1">{s.desc}</div>
                    </div>
                    <a
                      href="#home"
                      className="text-xs inline-flex items-center gap-1 rounded-lg border px-2 py-1"
                    >
                      Get plan <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                  <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="inline-flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
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
              <div className="text-neutral-600">{s.d}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Case-style Proof */}
      <Section id="results" className="py-10">
        <Pill>Results</Pill>
        <h2 className="mt-3 text-3xl font-extrabold">Outcomes teams care about</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
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
          ].map((c, i) => (
            <Card key={i} className="p-6">
              <div className="text-xs uppercase tracking-wide text-neutral-500">
                {c.industry}
              </div>
              <div className="mt-1 text-lg font-semibold">{c.title}</div>
              <div className="mt-1 text-sm text-emerald-700 font-semibold">{c.result}</div>
              <ul className="mt-3 grid gap-2 text-sm text-neutral-700">
                {c.points.map((p, j) => (
                  <li key={j} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#home"
                className="mt-4 inline-flex items-center gap-1 text-xs rounded-lg border px-2 py-1"
              >
                Talk to us <ChevronRight className="h-4 w-4" />
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
              <summary className="flex justify-between cursor-pointer">
                <span className="font-medium">{f.q}</span>
                <HelpCircle className="h-4 w-4 text-neutral-500" />
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
                  <ShieldCheck className="h-4 w-4 mt-0.5" /> Clear scope and milestones
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 mt-0.5" /> Training and adoption plan
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="h-4 w-4 mt-0.5" /> Fast delivery with Iteratum IA
                </li>
              </ul>
              <div className="mt-4 flex gap-3">
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
                  <ZohoWebToLead
                    src={ZOHO_SCRIPT_URL}
                    iframeFallback={ZOHO_IFRAME_URL}
                  />
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
              <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />{" "}
              Iteratum
            </div>
            <p className="mt-3 text-sm text-neutral-700">
              ClickUp consulting, Zoho Projects and Zoho Sprints implementation, and workflow automation services powered by Iteratum IA.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2">
              <li>
                <a href="#why">Why Iteratum</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#results">Results</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-2 text-sm text-neutral-700 space-y-2">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
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
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a href="mailto:hello@iteratum.com">hello@iteratum.com</a>
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
