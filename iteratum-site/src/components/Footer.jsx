// src/components/Footer.jsx
import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

export default function Footer() {
  return (
    <footer className="footer-iteratum bg-neutral-900 text-gray-300 border-t border-neutral-800">
      <Section className="py-14 md:py-16">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand + Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 relative">
              <div className="absolute inset-0 blur-2xl bg-iteratum-cyan/20 -z-10"></div>
              <img
                src={ASSETS.iteratumLogo}
                alt="Iteratum"
                className="h-12 w-12 md:h-14 md:w-14 rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-200"
              />
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-md leading-relaxed">
              ClickUp and Zoho implementations that launch fast and drive real adoption. 
              Clean setup, automation, and training for teams that want clarity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4" />
                <a
                  href="mailto:hello@iteratum.com"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  hello@iteratum.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bot className="w-4 h-4" />
                <span>Available Mon–Fri, 9am–5pm EST</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#products" className="hover:text-white">ClickUp Implementations</a></li>
              <li><a href="#products" className="hover:text-white">Zoho Implementations</a></li>
              <li><a href="#pricing" className="hover:text-white">Automation & QA</a></li>
              <li><a href="#pricing" className="hover:text-white">Team Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-white">About Iteratum</a></li>
              <li><a href="#results" className="hover:text-white">Client Success</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white">Terms Of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} Iteratum. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Strong Security Practices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>30 Day Guarantee</span>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
