import React from "react";
import { Users, Bot, ShieldCheck, CheckCircle2 } from "lucide-react";

const ASSETS = {
  iteratumLogo: "/iteratum-logo.webp",
};

function Section({ className = "", children }) {
  return <section className={`section-iteratum ${className}`}>{children}</section>;
}

export default function Footer() {
  return (
    <footer className="footer-iteratum mt-20">
      <Section className="py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand + blurb */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ASSETS.iteratumLogo} alt="Iteratum" className="h-8 w-8 rounded-md" />
              <span className="text-white font-semibold">Iteratum</span>
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-md">
              ClickUp and Zoho implementation that launches fast and drives real adoption. Clean setup, automation, and training for teams that want clarity.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-4 h-4" />
                <a
                  href="mailto:hello@iteratum.com?subject=Inquiry%20from%20Iteratum%20Website"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  hello@iteratum.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bot className="w-4 h-4" />
                <span>Available Monday To Friday, 9am To 5pm Eastern</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/#products" className="hover:text-white transition-colors">ClickUp Implementations</a></li>
              <li><a href="/#products" className="hover:text-white transition-colors">Zoho Implementations</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Automation & QA</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Team Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Iteratum</a></li>
              <li><a href="/#results" className="hover:text-white transition-colors">Client Success</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms Of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} Iteratum. All rights reserved.</div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /><span>Strong Security Practices</span></div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /><span>30 Day Guarantee</span></div>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}
