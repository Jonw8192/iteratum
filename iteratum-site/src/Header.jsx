import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

const CAL_LINK = "https://cal.com/jonwoods";

function Section({ className = "", children }) {
  return <section className={`section-iteratum ${className}`}>{children}</section>;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur">
      <Section className="py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              How It Works
            </a>
            <a href="/#products" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Products
            </a>
            <a href="/#results" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Results
            </a>
            <a href="/#pricing" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Pricing
            </a>
            <a href="/resources" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              Resources
            </a>
            <a href="/about" className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href={CAL_LINK} className="btn-iteratum-primary">
              Book A Discovery Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden mt-4 pb-4 border-t border-iteratum">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="/#how-it-works" className="text-sm font-medium text-iteratum-charcoal">How It Works</a>
              <a href="/#products" className="text-sm font-medium text-iteratum-charcoal">Products</a>
              <a href="/#results" className="text-sm font-medium text-iteratum-charcoal">Results</a>
              <a href="/#pricing" className="text-sm font-medium text-iteratum-charcoal">Pricing</a>
              <a href="/resources" className="text-sm font-medium text-iteratum-charcoal">Resources</a>
              <a href="/about" className="text-sm font-medium text-iteratum-charcoal">About</a>
              <a href={CAL_LINK} className="btn-iteratum-primary mt-4 w-full">Book A Discovery Call</a>
            </nav>
          </div>
        )}
      </Section>
    </header>
  );
}
