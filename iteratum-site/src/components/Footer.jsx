// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* ---------- Brand & About ---------- */}
        <div className="md:col-span-2 relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="absolute inset-0 blur-2xl bg-iteratum-cyan/15 -z-10 rounded-lg"></div>
            <img
              src={ASSETS.iteratumLogo}
              alt="Iteratum"
              className="h-12 w-12 md:h-14 md:w-14 rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-200"
            />
          </div>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            ClickUp and Zoho implementations that launch fast and drive real adoption.  
            Clean setup, automation, and training for teams that want clarity without the chaos.
          </p>
        </div>

        {/* ---------- Navigation Links ---------- */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-white transition-colors">
                Resources
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* ---------- Contact Info ---------- */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-iteratum-cyan" />
              <a
                href="mailto:hello@iteratum.com"
                className="hover:text-white transition-colors"
              >
                hello@iteratum.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-iteratum-cyan" />
              <a
                href="https://cal.com/jonwoods"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Book A Call
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-iteratum-cyan" />
              <span>Wilmington, North Carolina</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------- Footer Bottom ---------- */}
      <div className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} Iteratum. All rights reserved.
          </span>
          <div className="flex items-center gap-6 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-iteratum-cyan" />
              <span>Strong Security Practices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-iteratum-cyan" />
              <span>30 Day Guarantee</span>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pb-6">
          Strategy that works. Execution that delivers.
        </div>
      </div>
    </footer>
  );
}
