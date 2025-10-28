// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Header({ onOpenCal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Smooth scroll for same-page anchors
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    } else {
      // if user clicks anchor while not on home page, go to home then scroll
      window.location.href = `/${targetId}`;
    }
    setIsMenuOpen(false);
  };

  // Navigation link renderer (anchor vs route)
  const NavLink = ({ label, to, type = "anchor" }) => {
    const classes =
      "text-sm font-medium text-iteratum-charcoal hover:text-iteratum-cyan transition-colors";
    if (type === "anchor")
      return (
        <a href={to} onClick={(e) => handleAnchorClick(e, to)} className={classes}>
          {label}
        </a>
      );
    return (
      <Link to={to} onClick={() => setIsMenuOpen(false)} className={classes}>
        {label}
      </Link>
    );
  };

  return (
    <header className="nav-iteratum fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink label="How It Works" to="#how-it-works" />
          <NavLink label="Products" to="#products" />
          <NavLink label="Results" to="#results" />
          <NavLink label="Pricing" to="#pricing" />
          <NavLink label="FAQ" to="#faq" />
          <NavLink label="About" to="/about" type="route" />
          <NavLink label="Resources" to="/resources" type="route" />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button onClick={onOpenCal} className="btn-iteratum-primary">
            Book A Discovery Call
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-6 space-y-3">
          <NavLink label="How It Works" to="#how-it-works" />
          <NavLink label="Products" to="#products" />
          <NavLink label="Results" to="#results" />
          <NavLink label="Pricing" to="#pricing" />
          <NavLink label="FAQ" to="#faq" />
          <NavLink label="About" to="/about" type="route" />
          <NavLink label="Resources" to="/resources" type="route" />
          <button
            onClick={onOpenCal}
            className="btn-iteratum-primary w-full mt-3"
          >
            Book A Discovery Call
          </button>
        </div>
      )}
    </header>
  );
}
