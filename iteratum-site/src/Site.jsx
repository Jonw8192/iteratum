// src/Site.jsx
import React, { useEffect } from "react";
import Layout from "./components/Layout";
import { Sparkles, ArrowRight, Zap, Workflow, Users, CheckCircle2 } from "lucide-react";

const CAL_LINK = "https://cal.com/jonwoods";

// ---------- SEO ----------
function Seo() {
  useEffect(() => {
    const title = "Iteratum | ClickUp & Zoho Implementations That Teams Actually Use";
    const description =
      "Clarity, accountability, and predictable delivery in about 10 days. Premium ClickUp and Zoho implementations that drive real adoption.";

    document.title = title;

    const metaTags = [
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
    ];

    metaTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Iteratum",
      description,
      url: window.location.origin,
      areaServed: "Global",
      serviceType: [
        "ClickUp implementation",
        "Zoho Projects implementation",
        "Zoho Sprints implementation",
      ],
      sameAs: [CAL_LINK],
    });
    document.head.appendChild(schema);

    return () => {
      document.head.removeChild(schema);
    };
  }, []);

  return null;
}

// ---------- Home ----------
export default function Site() {
  return (
    <Layout>
      <Seo />

      {/* ---------- Hero Section ---------- */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-neutral-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <span className="pill-iteratum inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-iteratum-cyan" />
              ClickUp & Zoho Experts
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-iteratum-dark leading-tight">
            Systems Built for Adoption, Not Complexity
          </h1>
          <p className="mt-6 text-lg text-neutral-700 max-w-2xl mx-auto">
            We help teams implement ClickUp and Zoho systems that scale fast, run smoothly,
            and actually get used every day.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <a href={CAL_LINK} className="btn-iteratum-primary inline-flex items-center gap-2">
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/resources" className="btn-iteratum-secondary inline-flex items-center gap-2">
              Explore Resources
            </a>
          </div>
        </div>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="py-20 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <Zap className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              ClickUp & Zoho Implementations
            </h3>
            <p className="text-sm text-neutral-600">
              Streamlined workspaces that scale—clear structure, automated workflows,
              and dashboards that drive adoption.
            </p>
          </div>

          <div>
            <Workflow className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              Automation & QA Systems
            </h3>
            <p className="text-sm text-neutral-600">
              Save hours a week and prevent rework with smart automation loops and
              standardized quality checks.
            </p>
          </div>

          <div>
            <Users className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-xl text-iteratum-dark mb-2">
              Team Adoption & Training
            </h3>
            <p className="text-sm text-neutral-600">
              We make sure every team member knows what to do, when to do it, and how
              to use your system confidently.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Results Section ---------- */}
      <section className="py-24 bg-iteratum-gradient-subtle border-t border-gray-200 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">
            Predictable Delivery. Real Results.
          </h2>
          <p className="text-lg text-neutral-700 mb-10 max-w-2xl mx-auto">
            On average, Iteratum clients reach full team adoption in 10 days. No
            over-complicated builds—just clarity, automation, and measurable outcomes.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-iteratum-cyan mb-1">10 Days</h3>
              <p className="text-sm text-neutral-600">Average implementation time</p>
            </div>
            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-iteratum-cyan mb-1">+40%</h3>
              <p className="text-sm text-neutral-600">Higher task completion rate</p>
            </div>
            <div className="p-6 border rounded-xl bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-iteratum-cyan mb-1">0 Chaos</h3>
              <p className="text-sm text-neutral-600">Streamlined processes every time</p>
            </div>
          </div>

          <div className="mt-12">
            <a href={CAL_LINK} className="btn-iteratum-primary inline-flex items-center gap-2">
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-20 bg-white border-t border-gray-200 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-iteratum-dark mb-4">
            Let’s Build a System Your Team Loves Using
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            From discovery to training, Iteratum handles your ClickUp or Zoho
            rollout with precision, speed, and transparency.
          </p>
          <a href={CAL_LINK} className="btn-iteratum-primary inline-flex items-center gap-2">
            Book A Discovery Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
