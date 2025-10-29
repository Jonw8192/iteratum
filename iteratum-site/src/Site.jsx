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
  zohoPartner: "/zoho-partner.png",
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
    const title =
      "Iteratum | ClickUp and Zoho Implementations Your Team Actually Adopts";
    const description =
      "Clarity, accountability, and predictable delivery in about 10 days. Premium ClickUp and Zoho implementations your team will actually use.";

    document.title = title;
    const setMeta = (selector, attrs) => {
      const el = document.querySelector(selector);
      if (el) Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    };
    setMeta('meta[name="description"]', { content: description });
    setMeta('meta[name="robots"]', { content: "index,follow" });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
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
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200">
      <Section className="py-5 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={ASSETS.iteratumLogo}
              alt="Iteratum"
              className="h-14 w-auto md:h-16 drop-shadow-md hover:scale-[1.05] transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#results" className="nav-link">Results</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/resources" className="nav-link">Resources</a>
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
              <a href="#how-it-works" className="mobile-link">How It Works</a>
              <a href="#products" className="mobile-link">Products</a>
              <a href="#results" className="mobile-link">Results</a>
              <a href="#pricing" className="mobile-link">Pricing</a>
              <a href="#faq" className="mobile-link">FAQ</a>
              <a href="/about" className="mobile-link">About</a>
              <a href="/resources" className="mobile-link">Resources</a>
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

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer-iteratum bg-neutral-900 text-gray-300 border-t border-neutral-800">
      <Section className="py-14 md:py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand + Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 relative">
              <div className="absolute inset-0 blur-2xl bg-iteratum-cyan/20 -z-10"></div>
              <img
                src={ASSETS.iteratumLogo}
                alt="Iteratum"
                className="h-12 w-12 md:h-14 md:w-14 rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-200"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
              ClickUp and Zoho implementations that launch fast and drive real adoption. 
              Clean setup, automation, and training for teams that want clarity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4" />
                <a
                  href="mailto:hello@iteratum.com"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  hello@iteratum.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bot className="w-4 h-4" />
                <span>Available Mon–Fri, 9am–5pm EST</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#products" className="hover:text-white">ClickUp Implementations</a></li>
              <li><a href="#products" className="hover:text-white">Zoho Implementations</a></li>
              <li><a href="#pricing" className="hover:text-white">Automation & QA</a></li>
              <li><a href="#pricing" className="hover:text-white">Team Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-white">About Iteratum</a></li>
              <li><a href="#results" className="hover:text-white">Client Success</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white">Terms Of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Iteratum. All rights reserved.</span>
          <div className="flex items-center gap-6">
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
      </Section>
    </footer>
  );
}

// ---------- Main ----------
export default function Site() {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      <Header onOpenCal={() => setOpenCal(true)} />

      {/* Your existing sections here */}
      {/* ... */}
      <Footer />
    </div>
  );
}
