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

    // Ensure meta tags exist or create them
    const ensureMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    ensureMeta("description", description);
    ensureMeta("robots", "index,follow");

    // Add JSON-LD structured data
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
      document.head.removeChild(script);
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
            <a href="#how-it-works" className="nav-link">
              How It Works
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#results" className="nav-link">
              Results
            </a>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <a href="/about" className="nav-link">
              About
            </a>
            <a href="/resources" className="nav-link">
              Resources
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
              <a href="#how-it-works" className="mobile-link">
                How It Works
              </a>
              <a href="#products" className="mobile-link">
                Products
              </a>
              <a href="#results" className="mobile-link">
                Results
              </a>
              <a href="#pricing" className="mobile-link">
                Pricing
              </a>
              <a href="#faq" className="mobile-link">
                FAQ
              </a>
              <a href="/about" className="mobile-link">
                About
              </a>
              <a href="/resources" className="mobile-link">
                Resources
              </a>
              <button
                onClick={onOpenCal}
                className="btn-iteratum-primary mt-4 w-full"
              >
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

      {/* ---------- Hero Section ---------- */}
      <Section id="hero" className="pt-32 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Implementations Your Team Actually Adopts
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Clarity, accountability, and predictable delivery — in about 10 days.
        </p>
        <Button variant="primary" onClick={() => setOpenCal(true)}>
          Book a Discovery Call <ArrowRight className="w-4 h-4" />
        </Button>
      </Section>

      {/* ---------- Example Content Section ---------- */}
      <Section id="how-it-works" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">How It Works</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          We specialize in ClickUp and Zoho setups designed for rapid adoption and long-term clarity.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <Workflow className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-lg mb-2">Clean Setup</h3>
            <p className="text-gray-600">We configure tools so your team understands and uses them daily.</p>
          </Card>
          <Card>
            <FolderCog className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-lg mb-2">Automation</h3>
            <p className="text-gray-600">We automate repetitive tasks to save time and reduce human error.</p>
          </Card>
          <Card>
            <Users className="w-10 h-10 mx-auto text-iteratum-cyan mb-4" />
            <h3 className="font-semibold text-lg mb-2">Training</h3>
            <p className="text-gray-600">We make sure your team knows how to use what we’ve built — confidently.</p>
          </Card>
        </div>
      </Section>

      {/* ---------- Booking Modal ---------- */}
      {openCal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-[90%] md:w-[600px] h-[80vh] overflow-hidden relative">
            <button
              onClick={() => setOpenCal(false)}
              className="absolute top-2 right-2 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={CAL_LINK}
              className="w-full h-full border-0"
              title="Book a Discovery Call"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
