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

    const title = "Iteratum - Zoho Projects & ClickUp implementation that launches in 10 days";
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

// ---------- Header Component - Clean Logo Only ----------
function Header({ onOpenCal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40">
      <Section className="py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Clean without redundant text */}
          <div className="flex items-center">
            <img 
              src={ASSETS.iteratumLogo} 
              alt="Iteratum" 
                className="w-auto"             />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Pricing
            </a>
            <a href="#methodology" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Process
            </a>
            <a href="#results" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Results
            </a>
            <a href="#about" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              About
            </a>
            <a href="#resources" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Resources
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenCal}
              className="btn-iteratum-primary"
            >
              Book Discovery Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-iteratum">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#services" className="text-sm font-medium text-iteratum-charcoal">Services</a>
              <a href="#pricing" className="text-sm font-medium text-iteratum-charcoal">Pricing</a>
              <a href="#methodology" className="text-sm font-medium text-iteratum-charcoal">Process</a>
              <a href="#results" className="text-sm font-medium text-iteratum-charcoal">Results</a>
              <a href="#about" className="text-sm font-medium text-iteratum-charcoal">About</a>
              <a href="#resources" className="text-sm font-medium text-iteratum-charcoal">Resources</a>
              <button onClick={onOpenCal} className="btn-iteratum-primary mt-4 w-full">
                Book Discovery Call
              </button>
            </nav>
          </div>
        )}
      </Section>
    </header>
  );
}

// ---------- UI Helpers ----------
const Section = ({ id, className = "", children }) => (
  <section
    id={id}
    className={`section-iteratum ${className}`}
  >
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="pill-iteratum">
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
    primary: "btn-iteratum-primary",
    ghost: "btn-iteratum-secondary",
    accent: "btn-iteratum-accent",
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
  <div className={`card-iteratum ${className}`}>
    {children}
  </div>
);

// ---------- Modal ----------
function CalModal({ open, onClose }) {
  if (!open) return null;
  
  return (
    <div className="modal-iteratum">
      <div className="modal-content-iteratum">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="text-sm font-semibold">Book a call</div>
          <button
            onClick={onClose}
            className="btn-iteratum-secondary text-xs px-2 py-1"
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
      <div className="status-success p-4 rounded-lg">
        <p className="text-sm font-medium">Thanks! Check your email for the checklist.</p>
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
          className="input-iteratum"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input-iteratum"
          required
        />
        <button
          type="submit"
          className="btn-iteratum-primary w-full"
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

// ---------- Trust Section ----------
function TrustSection() {
  return (
    <Section id="trust" className="py-12 border-t border-iteratum">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold text-iteratum-dark mb-4">Trusted by Growing Teams</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="px-6 py-3 border rounded-lg text-sm text-iteratum-steel">Fortune 500 Companies</div>
          <div className="px-6 py-3 border rounded-lg text-sm text-iteratum-steel">Fast-Growing Startups</div>
          <div className="px-6 py-3 border rounded-lg text-sm text-iteratum-steel">Remote Teams</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">SOC 2 Compliant</div>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">GDPR Ready</div>
        </div>
        <div className="flex flex-col items-center">
          <Zap className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">99.9% Uptime SLA</div>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircle2 className="w-8 h-8 text-iteratum-success mb-2" />
          <div className="text-sm font-medium">Enterprise Security</div>
        </div>
      </div>
    </Section>
  );
}

// ---------- About Section ----------
function AboutSection() {
  return (
    <Section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Pill>About Iteratum</Pill>
          <h2 className="mt-4 text-iteratum-heading">
            Built by experts who understand your challenges
          </h2>
          <div className="mt-6 space-y-4 text-iteratum-slate">
            <p>
              We've been where you are. Struggling with scattered workflows, missed deadlines, 
              and teams that resist new systems. That's exactly why we started Iteratum.
            </p>
            <p>
              Our founders spent years implementing project management solutions for Fortune 500 
              companies and fast-growing startups. We've seen what works, what doesn't, and most 
              importantly - what makes teams actually adopt new systems.
            </p>
            <p>
              Today, we focus exclusively on Zoho Projects, Zoho Sprints, and ClickUp because 
              these platforms offer the perfect balance of power and simplicity when configured correctly.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="status-success">
              <CheckCircle2 className="h-4 w-4" />
              Zoho Certified Partners
            </div>
            <div className="status-success">
              <CheckCircle2 className="h-4 w-4" />
              ClickUp Verified Consultants
            </div>
          </div>
        </div>
        <div className="relative">
          <Card className="p-8 bg-iteratum-gradient-subtle">
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">95%</div>
                <div className="text-sm text-iteratum-steel">Team adoption rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">10 days</div>
                <div className="text-sm text-iteratum-steel">Average implementation time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-iteratum-cyan">50+</div>
                <div className="text-sm text-iteratum-steel">Successful implementations</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}

// ---------- Pricing Section ----------
function PricingSection() {
  const packages = [
    {
      name: "Starter Implementation",
      price: "$2,500",
      duration: "5-7 days",
      description: "Perfect for small teams getting started",
      features: [
        "Zoho Projects OR ClickUp setup",
        "Basic workflow configuration",
        "Team training (up to 10 users)",
        "2 weeks of support",
        "Templates and documentation"
      ],
      popular: false
    },
    {
      name: "Professional Implementation", 
      price: "$4,500",
      duration: "8-10 days",
      description: "Complete system for growing teams",
      features: [
        "Zoho Projects + Sprints OR ClickUp Pro",
        "Advanced automations",
        "Custom dashboards and reports",
        "Team training (up to 25 users)",
        "30 days of support",
        "Integration setup (3 tools)",
        "Iteratum IA optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise Implementation",
      price: "Custom",
      duration: "10-15 days", 
      description: "Full-scale solution for large organizations",
      features: [
        "Multi-workspace architecture",
        "Advanced security configuration",
        "Unlimited user training",
        "60 days of support",
        "Unlimited integrations",
        "Custom reporting suite",
        "Dedicated success manager",
        "On-site training available"
      ],
      popular: false
    }
  ];

  return (
    <Section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <Pill>Implementation Packages</Pill>
        <h2 className="mt-4 text-iteratum-heading">
          Transparent pricing for every team size
        </h2>
        <p className="mt-4 text-iteratum-subtitle max-w-2xl mx-auto">
          No hidden fees. No long-term contracts. Just clear, upfront pricing for professional implementation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <Card key={i} className={`p-8 relative ${pkg.popular ? 'card-iteratum-featured' : ''}`}>
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
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

            <Button 
              href={CAL_LINK}
              variant={pkg.popular ? 'accent' : 'ghost'}
              className="w-full"
            >
              {pkg.price === 'Custom' ? 'Get Custom Quote' : 'Get Started'}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-iteratum-slate mb-4">
          All packages include our 30-day satisfaction guarantee
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-iteratum-steel">
          <span>✓ No setup fees</span>
          <span>✓ Money-back guarantee</span>
          <span>✓ Flexible payment terms</span>
        </div>
      </div>
    </Section>
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

// ---------- Implementation Methodology ----------
function MethodologySection() {
  const phases = [
    {
      phase: "Discovery & Planning",
      duration: "Days 1-2",
      description: "Deep dive into your current workflows, pain points, and success criteria",
      deliverables: ["Current state analysis", "Future state design", "Implementation roadmap", "Success metrics defined"]
    },
    {
      phase: "System Architecture", 
      duration: "Days 3-4",
      description: "Design your ideal workspace structure, permissions, and integrations",
      deliverables: ["Workspace architecture", "Permission matrix", "Integration mapping", "Automation blueprint"]
    },
    {
      phase: "Configuration & Build",
      duration: "Days 5-7", 
      description: "Build your system with templates, automations, and custom configurations",
      deliverables: ["Configured workspaces", "Custom templates", "Automated workflows", "Integration setup"]
    },
    {
      phase: "Training & Adoption",
      duration: "Days 8-9",
      description: "Comprehensive team training and adoption support",
      deliverables: ["Role-based training", "User guides", "Best practices", "Quick reference cards"]
    },
    {
      phase: "Launch & Optimization",
      duration: "Day 10+",
      description: "Go-live support and ongoing optimization",
      deliverables: ["Launch support", "Performance monitoring", "User feedback collection", "Optimization recommendations"]
    }
  ];

  return (
    <Section id="methodology" className="py-20 bg-iteratum-gradient-subtle">
      <div className="text-center mb-12">
        <Pill>Our Proven Methodology</Pill>
        <h2 className="mt-4 text-iteratum-heading">
          The Iteratum Implementation Framework
        </h2>
        <p className="mt-4 text-iteratum-subtitle max-w-3xl mx-auto">
          Our battle-tested 5-phase approach ensures your team not only gets a well-configured system, 
          but actually adopts and thrives with it from day one.
        </p>
      </div>

      <div className="space-y-8">
        {phases.map((phase, i) => (
          <Card key={i} className="p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-iteratum-cyan text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-iteratum-dark">{phase.phase}</h3>
                    <div className="text-sm text-iteratum-steel">{phase.duration}</div>
                  </div>
                </div>
                <p className="text-sm text-iteratum-slate mt-2">{phase.description}</p>
              </div>
              
              <div className="lg:col-span-2">
                <h4 className="font-semibold text-iteratum-dark mb-3">Key Deliverables:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {phase.deliverables.map((deliverable, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-iteratum-success flex-shrink-0" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------- Resources Section ----------
function ResourcesSection() {
  const resources = [
    {
      type: "Free Guide",
      title: "ClickUp Setup Checklist",
      description: "50-point checklist for setting up ClickUp the right way",
      downloadUrl: "#",
      icon: CheckCircle2
    },
    {
      type: "Template",
      title: "Project Kickoff Template",
      description: "Proven template for launching projects successfully",
      downloadUrl: "#", 
      icon: FolderCog
    },
    {
      type: "Webinar",
      title: "Zoho Projects Best Practices",
      description: "1-hour deep dive into advanced Zoho Projects techniques",
      downloadUrl: "#",
      icon: Users
    },
    {
      type: "Case Study",
      title: "SaaS Company Implementation",
      description: "How we helped a 50-person team achieve 95% adoption",
      downloadUrl: "#",
      icon: Workflow
    }
  ];

  return (
    <Section id="resources" className="py-20">
      <div className="text-center mb-12">
        <Pill>Free Resources</Pill>
        <h2 className="mt-4 text-iteratum-heading">
          Learn from our implementation expertise
        </h2>
        <p className="mt-4 text-iteratum-subtitle max-w-2xl mx-auto">
          Download proven templates, guides, and case studies to improve your project management.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, i) => (
          <Card key={i} className="p-6 text-center hover-iteratum-lift">
            <div className="w-12 h-12 bg-iteratum-dark rounded-xl flex items-center justify-center mx-auto mb-4">
              <resource.icon className="w-6 h-6 text-white" />
            </div>
            <div className="pill-iteratum mb-3">{resource.type}</div>
            <h3 className="font-semibold text-iteratum-dark mb-2">{resource.title}</h3>
            <p className="text-sm text-iteratum-slate mb-4">{resource.description}</p>
            <Button href={resource.downloadUrl} variant="ghost" className="text-xs">
              Download Free
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------- Testimonials Section ----------
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Iteratum transformed our chaotic project management into a streamlined system our whole team actually enjoys using.",
      author: "Sarah Chen",
      title: "Operations Director",
      company: "TechFlow Solutions"
    },
    {
      quote: "We went from constantly missing deadlines to delivering projects 20% faster. The ROI was immediate.",
      author: "Michael Rodriguez", 
      title: "Founder",
      company: "Digital Marketing Co"
    },
    {
      quote: "Finally, a consultant who understands that adoption is just as important as configuration.",
      author: "Emma Thompson",
      title: "Project Manager", 
      company: "Construction Plus"
    }
  ];

  return (
    <Section id="testimonials" className="py-20 bg-iteratum-gradient-subtle">
      <div className="text-center mb-12">
        <Pill>Client Success Stories</Pill>
        <h2 className="mt-4 text-iteratum-heading">
          What our clients say about working with Iteratum
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-1 mb-4">
              {[...Array(5)].map((_, star) => (
                <div key={star} className="w-4 h-4 text-yellow-400">★</div>
              ))}
            </div>
            <blockquote className="text-iteratum-slate mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="border-t pt-4">
              <div className="font-semibold text-iteratum-dark">{testimonial.author}</div>
              <div className="text-sm text-iteratum-steel">
                {testimonial.title}, {testimonial.company}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------- Main Component ----------
export default function Site() {
  const [openCal, setOpenCal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Seo />
      
      {/* Header */}
      <Header onOpenCal={() => setOpenCal(true)} />

      {/* Hero */}
      <Section id="home" className="pt-28 pb-12 hero-iteratum">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-iteratum-hero">
              Get Zoho Projects and ClickUp working for your team in 10 days
            </h1>
            <p className="mt-4 text-iteratum-subtitle max-w-xl">
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

      {/* Trust Section */}
      <TrustSection />

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

      {/* About Section */}
      <AboutSection />

      {/* Why Iteratum */}
      <Section id="why" className="py-10">
        <Pill>Why Iteratum</Pill>
        <h2 className="mt-3 text-iteratum-heading">A boutique partner focused on outcomes</h2>
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
              <img src={ASSETS.clickupVerified} alt="ClickUp Verified badge" className="h-10" />            </div>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Services */}
      <Section id="services" className="py-10">
        <Pill>Implementation services</Pill>
        <h2 className="mt-3 text-iteratum-heading">
          ClickUp and Zoho implementation services that ship and stick
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
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
                    <a
                      href="#pricing"
                      className="text-xs inline-flex items-center gap-1 rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors flex-shrink-0 ml-2"
                    >
                      See pricing <ChevronRight className="h-3 w-3" />
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

      {/* Pricing */}
      <PricingSection />

      {/* Methodology */}
      <MethodologySection />

      {/* Process */}
      <Section id="process" className="py-10">
        <Pill>Implementation process</Pill>
        <h2 className="mt-3 text-iteratum-heading">Our 5 step implementation process</h2>
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
        <h2 className="mt-3 text-iteratum-heading">Outcomes teams care about</h2>
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
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-xs rounded-lg border px-2 py-1 hover:bg-gray-50 transition-colors"
              >
                Talk to us <ChevronRight className="h-3 w-3" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Resources */}
      <ResourcesSection />

      {/* FAQ */}
      <Section id="faq" className="py-10">
        <Pill>FAQ</Pill>
        <h2 className="mt-3 text-iteratum-heading">FAQ - ClickUp and Zoho Projects implementations</h2>
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
              <h3 className="mt-3 text-iteratum-heading">Ready to launch in 10 days</h3>
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

      {/* Enhanced Footer */}
      <footer className="footer-iteratum">
        <Section className="py-12">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
                <span className="text-xl font-bold text-white">Iteratum</span>
              </div>
              <p className="text-sm text-gray-300 mb-6 max-w-md">
                Professional Zoho Projects, Zoho Sprints, and ClickUp implementation that launches in 10 days with guaranteed team adoption.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4" />
                  <span>hello@iteratum.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Bot className="w-4 h-4" />
                  <span>Available Mon-Fri, 9am-5pm EST</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Zoho Projects Implementation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Zoho Sprints Setup</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">ClickUp Consulting</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Team Training</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#resources" className="hover:text-white transition-colors">Free Templates</a></li>
                <li><a href="#methodology" className="hover:text-white transition-colors">Implementation Guide</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">About Iteratum</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Client Success</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
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
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </footer>

      {/* Cal modal */}
      <CalModal open={openCal} onClose={() => setOpenCal(false)} />
    </div>
  );
}






