// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, Users, Bot } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-10">
        {/* ---------- Brand & About ---------- */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4 relative">
            <div className="absolute inset-0 blur-2xl bg-iteratum-cyan/20 -z-10"></div>
            <img
              src={ASSETS.iteratumLogo}
              alt="Iteratum Logo"
              className="h-12 w-12 md:h-14 md:w-14 rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-200"
            />
            <span className="text-lg font-semibold text-white">Iteratum</span>
          </div>

          <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
            We build clarity into your operations. Iteratum delivers ClickUp and Zoho systems
            that teams actually use — fast, clean, and ready for scale. From automation design
            to training and QA, we help you run projects that stay on track and on time.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-iteratum-cyan" />
              <a
                href="mailto:hello@iteratum.com"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                hello@iteratum.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-iteratum-cyan" />
              <a
                href="https://cal.com/jonwoods"
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                Book a Call
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-iteratum-cyan" />
              <span>Wilmington, North Carolina</span>
            </div>
          </div>
        </div>

        {/* ---------- Navigation ---------- */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/resources" className="hover:text-white">Resources</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/terms-of-service" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* ---------- Services ---------- */}
        <div>
          <h4 className="font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">ClickUp Implementations</a></li>
            <li><a href="/about" className="hover:text-white">Zoho Implementations</a></li>
            <li><a href="/about" className="hover:text-white">Automation & QA Systems</a></li>
            <li><a href="/about" className="hover:text-white">Training & Adoption</a></li>
          </ul>
        </div>

        {/* ---------- Why Iteratum ---------- */}
        <div>
          <h4 className="font-semibold text-white mb-4">Why Iteratum</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/resources" className="hover:text-white">
                Expert-led Implementations
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-white">
                10-Day Quick Launch Framework
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-white">
                Predictable Delivery
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-white">
                Transparent Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- Footer Bottom ---------- */}
      <div className="border-t border-gray-800 text-sm text-gray-400">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} Iteratum. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-iteratum-cyan" />
              <span>Strong Security Practices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-iteratum-cyan" />
              <span>30-Day Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
