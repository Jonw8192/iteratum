// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Header({ onOpenCal }) {
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
