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
  zohoProjectsBadge: "/projects.svg",
  zohoSprintsBadge: "/sprints.svg",
  clickupVerified: "/clickup-verified.png",
  zohoPartner: "/zoho-partner.png",
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
      "Iteratum | ClickUp & Zoho implementation that teams actually adopt";
    const description =
      "We implement ClickUp and Zoho with clean structure, automation, and role-based training—so your team actually uses it.";
    const updateMeta = (selector, attrs) => {
      try {
        const el = document.querySelector(selector);
        if (el) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      } catch {
        /* no-op */
      }
    };
    document.title = title;
    updateMeta('meta[name="description"]', { content: description });
    updateMeta('meta[property="og:title"]', { content: title });
    updateMeta('meta[property="og:description"]', { content: description });
  }, []);
  return null;
}

// ---------- Top badges (edited) ----------
function TrustSectionTop() {
  return (
    <section
      aria-label="Badges"
      className="w-full"
    >
      <div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4"
      >
        <div
          className="w-full rounded-md"
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <div className="flex items-center justify-center gap-6 py-4 px-6">
            <img
              src={ASSETS.clickupVerified}
              alt="ClickUp Verified"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
            <img
              src={ASSETS.zohoPartner}
              alt="Zoho Partner"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- About / Zoho related (relocated badges) ----------
function ZohoSection() {
  return (
    <section id="zoho" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Zoho solutions we support</h2>
        <p className="text-gray-600">
          We implement and optimize Zoho apps to fit your processes.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <img
            src={ASSETS.zohoSprintsBadge}
            alt="Zoho Sprints"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
          <img
            src={ASSETS.zohoProjectsBadge}
            alt="Zoho Projects"
            className="h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// ---------- Page ----------
export default function Site() {
  return (
    <>
      <Seo />
      <Header />
      <Hero />
      {/* Edited top badges */}
      <TrustSectionTop />

      {/* Content sections... */}
      <Offerings />
      <Testimonials />

      {/* Insert Zoho-related section further down */}
      <ZohoSection />

      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

// ---------- Placeholder components (keep existing page structure if present) ----------
function Header() { return null; }
function Hero() { return null; }
function Offerings() { return null; }
function Testimonials() { return null; }
function Pricing() { return null; }
function FAQ() { return null; }
function Footer() { return null; }
