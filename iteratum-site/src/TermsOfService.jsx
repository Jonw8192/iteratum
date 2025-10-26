// src/TermsOfService.jsx
import React, { useEffect, useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Users,
  Bot,
  ShieldCheck,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

/* ---------- Assets ---------- */
const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

/* ---------- SEO ---------- */
function Seo() {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const title = "Terms Of Service | Iteratum";
    const description =
      "The terms that govern your use of Iteratum’s website and services, written in plain English.";

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
      "@type": "TermsOfService",
      name: "Terms Of Service",
      url: typeof window !== "undefined" ? window.location.href : "",
      description,
      publisher: {
        "@type": "Organization",
        name: "Iteratum, LLC",
      },
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

/* ---------- UI Helpers ---------- */
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
const Card = ({ children, className = "" }) => (
  <div className={`card-iteratum ${className}`}>{children}</div>
);

/* ---------- Header (local) ---------- */
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
            <a href="/#how-it-works" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">How It Works</a>
            <a href="/#products" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Products</a>
            <a href="/#results" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Results</a>
            <a href="/#pricing" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">Pricing</a>
            <a href="/#faq" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">FAQ</a>
            <a href="/about" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan">About</a>
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

/* ---------- Footer (local) ---------- */
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

/* ---------- Terms Content ---------- */
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      <Header />

      {/* Hero */}
      <Section className="pt-28 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <Pill>Terms</Pill>
          <h1 className="text-iteratum-hero mt-3">Terms Of Service</h1>
          <p className="text-iteratum-subtitle mt-3">
            The rules for using our website and services, stated in plain English.
          </p>
        </div>
      </Section>

      {/* TOC */}
      <Section className="py-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-5">
            <div className="text-sm font-semibold tracking-wide uppercase text-neutral-500">Jump To</div>
            <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm">
              <li><a href="#acceptance" className="underline">Acceptance of Terms</a></li>
              <li><a href="#use" className="underline">Use of Website and Services</a></li>
              <li><a href="#accounts" className="underline">Accounts and Security</a></li>
              <li><a href="#fees" className="underline">Fees and Payments</a></li>
              <li><a href="#ip" className="underline">Intellectual Property</a></li>
              <li><a href="#confidentiality" className="underline">Confidentiality</a></li>
              <li><a href="#warranties" className="underline">Disclaimers and Warranties</a></li>
              <li><a href="#liability" className="underline">Limitation of Liability</a></li>
              <li><a href="#termination" className="underline">Termination</a></li>
              <li><a href="#law" className="underline">Governing Law</a></li>
              <li><a href="#changes" className="underline">Changes</a></li>
              <li><a href="#contact" className="underline">Contact</a></li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Content */}
      <Section className="py-10">
        <div className="max-w-4xl mx-auto space-y-10 text-sm text-neutral-800">
          <div id="acceptance">
            <h2 className="text-lg font-semibold">Acceptance of Terms</h2>
            <p className="mt-2">
              By using our website or working with us, you agree to these Terms Of Service. If you do not agree,
              please do not use the site or services.
            </p>
          </div>

          <div id="use">
            <h2 className="text-lg font-semibold">Use of Website and Services</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Use the site and services in a lawful and reasonable way</li>
              <li>Do not disrupt or attempt to gain unauthorized access to any systems</li>
              <li>Do not misuse forms, emails, or contact information provided on the site</li>
            </ul>
          </div>

          <div id="accounts">
            <h2 className="text-lg font-semibold">Accounts and Security</h2>
            <p className="mt-2">
              If an account is created for you as part of a project, you are responsible for keeping login details
              secure and for activity that occurs under your account.
            </p>
          </div>

          <div id="fees">
            <h2 className="text-lg font-semibold">Fees and Payments</h2>
            <p className="mt-2">
              Where a project includes fees, the scope, price, invoicing schedule, and payment terms are defined
              in the specific proposal or statement of work. Late payments may pause delivery until the account is current.
            </p>
          </div>

          <div id="ip">
            <h2 className="text-lg font-semibold">Intellectual Property</h2>
            <p className="mt-2">
              The site, content, templates, and materials we provide remain our intellectual property unless otherwise stated.
              You may not copy, modify, or redistribute them without written permission, except where templates are delivered to
              you as part of a paid engagement for your internal use.
            </p>
          </div>

          <div id="confidentiality">
            <h2 className="text-lg font-semibold">Confidentiality</h2>
            <p className="mt-2">
              We treat non-public information you share with us as confidential and use it only to deliver the services.
              We expect the same care for any non-public information we share with you.
            </p>
          </div>

          <div id="warranties">
            <h2 className="text-lg font-semibold">Disclaimers and Warranties</h2>
            <p className="mt-2">
              The site is provided “as is.” We do not make promises about uninterrupted or error-free operation.
              For services, we will deliver work in a professional manner consistent with industry practice.
            </p>
          </div>

          <div id="liability">
            <h2 className="text-lg font-semibold">Limitation of Liability</h2>
            <p className="mt-2">
              To the fullest extent permitted by law, neither party is liable for indirect, incidental, special, or
              consequential damages. Our total liability for any claim is limited to the amounts you paid to us for
              the services that gave rise to the claim.
            </p>
          </div>

          <div id="termination">
            <h2 className="text-lg font-semibold">Termination</h2>
            <p className="mt-2">
              Either party may end a project or engagement if the other party materially breaches these terms and does not
              fix the breach within a reasonable time after written notice.
            </p>
          </div>

          <div id="law">
            <h2 className="text-lg font-semibold">Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of the State of North Carolina, without regard to conflict of law rules.
              Any disputes will be handled in state or federal courts located in North Carolina.
            </p>
          </div>

          <div id="changes">
            <h2 className="text-lg font-semibold">Changes</h2>
            <p className="mt-2">
              We may update these terms from time to time. If we make changes, we’ll revise the “Last updated” date and,
              when appropriate, provide additional notice.
            </p>
            <p className="mt-2 text-neutral-600 italic">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div id="contact">
            <h2 className="text-lg font-semibold">Contact</h2>
            <p className="mt-2">
              Iteratum, LLC · Wilmington, NC ·{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-10">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center gap-2 text-sm text-neutral-700">
              <HelpCircle className="h-4 w-4" />
              Questions about these terms? We’re here to help.
            </div>
            <a href="mailto:hello@iteratum.com" className="btn-iteratum-primary mt-4 inline-block">Email Us</a>
          </Card>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
