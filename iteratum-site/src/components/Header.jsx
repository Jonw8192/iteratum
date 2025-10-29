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
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-5 md:py-6">
        {/* ---------- Brand ---------- */}
        <a
          href="/"
          className="flex items-center gap-3 group transition-transform duration-200"
        >
          <img
            src={ASSETS.iteratumLogo}
            alt="Iteratum"
            className="h-14 w-auto md:h-16 drop-shadow-md group-hover:scale-[1.05] transition-transform duration-200"
          />
        </a>

        {/* ---------- Desktop Navigation ---------- */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/about"
            className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
          >
            About
          </a>
          <a
            href="/resources"
            className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
          >
            Resources
          </a>
          <button
            onClick={onOpenCal}
            className="btn-iteratum-primary text-sm font-semibold"
          >
            Book A Discovery Call
          </button>
        </nav>

        {/* ---------- Mobile Toggle ---------- */}
        <button
          className="md:hidden p-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-sm">
          <nav className="flex flex-col gap-2 px-6 py-4">
            <a
              href="/about"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/resources"
              className="text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                if (onOpenCal) onOpenCal();
              }}
              className="btn-iteratum-primary mt-3"
            >
              Book A Discovery Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
