// src/components/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Header({ onOpenCal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
        {/* ---------- Brand ---------- */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src={ASSETS.iteratumLogo}
            alt="Iteratum"
            className="h-12 w-auto md:h-14 drop-shadow-md group-hover:scale-[1.05] transition-transform duration-200"
          />
          <span className="font-semibold text-iteratum-dark text-lg md:text-xl">
            Iteratum
          </span>
        </a>

        {/* ---------- Desktop Navigation ---------- */}
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

        {/* ---------- Desktop CTA ---------- */}
        <div className="hidden md:block">
          <button
            onClick={onOpenCal}
            className="btn-iteratum-primary whitespace-nowrap"
          >
            Book A Discovery Call
          </button>
        </div>

        {/* ---------- Mobile Menu Toggle ---------- */}
        <button
          className="md:hidden p-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-iteratum-dark" />
          ) : (
            <Menu className="w-6 h-6 text-iteratum-dark" />
          )}
        </button>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-sm">
          <nav className="flex flex-col gap-3 px-6 py-5 text-center">
            <a
              href="#how-it-works"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#products"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#results"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <a
              href="#pricing"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="/about"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/resources"
              className="mobile-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                if (onOpenCal) onOpenCal();
              }}
              className="btn-iteratum-primary mt-4 w-full"
            >
              Book A Discovery Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
