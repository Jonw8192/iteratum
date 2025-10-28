// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Users, Bot, ShieldCheck, CheckCircle2 } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Footer() {
  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    } else {
      window.location.href = `/${targetId}`;
    }
  };

  const AnchorLink = ({ label, to }) => (
    <a
      href={to}
      onClick={(e) => handleAnchorClick(e, to)}
      className="hover:text-white transition-colors"
    >
      {label}
    </a>
  );

  return (
    <footer className="footer-iteratum bg-iteratum-dark text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
              <span className="font-semibold text-white text-lg">Iteratum</span>
            </div>
            <p className="text-sm mb-6 max-w-md text-gray-400">
              ClickUp and Zoho implementation that launches fast and drives real adoption. Clean setup, automation, and training for teams that want clarity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <a
                  href="mailto:hello@iteratum.com?subject=Inquiry%20from%20Iteratum%20Website"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  hello@iteratum.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4" />
                <span>Mon–Fri, 9 AM–5 PM Eastern</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><AnchorLink label="How It Works" to="#how-it-works" /></li>
              <li><AnchorLink label="Products" to="#products" /></li>
              <li><AnchorLink label="Results" to="#results" /></li>
              <li><AnchorLink label="Pricing" to="#pricing" /></li>
              <li><AnchorLink label="FAQ" to="#faq" /></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><AnchorLink label="ClickUp Implementations" to="#products" /></li>
              <li><AnchorLink label="Zoho Implementations" to="#products" /></li>
              <li><AnchorLink label="Automation & QA" to="#pricing" /></li>
              <li><AnchorLink label="Team Training" to="#pricing" /></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Iteratum</Link></li>
              <li><AnchorLink label="Client Success" to="#results" /></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Iteratum. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Strong Security Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
