// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* ---------- Brand & About ---------- */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={ASSETS.iteratumLogo}
              alt="Iteratum"
              className="h-8 w-8 rounded-md"
            />
            <span className="font-semibold text-white text-lg">Iteratum</span>
          </div>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            ClickUp & Zoho implementations that actually work — fast.
            Clean setup, automation, and adoption frameworks built for teams
            that want clarity, not complexity.
          </p>
        </div>

        {/* ---------- Navigation Links ---------- */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">
            Company
          </h4>
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
          <h4 className="text-sm font-semibold text-white mb-3">Contact</h4>
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
      <div className="border-t border-neutral-800 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} Iteratum. All rights reserved.
          </span>
          <span className="text-gray-500">
            Strategy that works. Execution that delivers.
          </span>
        </div>
      </div>
    </footer>
  );
}
