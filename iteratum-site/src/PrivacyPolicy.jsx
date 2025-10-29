// src/PrivacyPolicy.jsx
import React from "react";
import Layout from "./components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-iteratum-dark mb-6">
          Privacy Policy
        </h1>
        <p className="text-neutral-700 mb-8">
          Last updated: October 27, 2025
        </p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              1. Overview
            </h2>
            <p>
              Iteratum (“we,” “our,” or “us”) values your privacy. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our website, services, and communications.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Personal Information:</strong> When you contact us,
                schedule a discovery call, or submit a form, we may collect your
                name, email address, and company details.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect analytics data such as
                page views, device type, and interactions to improve our
                website.
              </li>
              <li>
                <strong>Cookies:</strong> Cookies help us enhance your browsing
                experience and track performance metrics.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to inquiries and provide requested services</li>
              <li>To improve our offerings and customer experience</li>
              <li>To send important updates, resources, and promotional emails</li>
              <li>To comply with legal or regulatory obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              4. How We Protect Your Information
            </h2>
            <p>
              We use secure servers, encryption, and access controls to protect
              your information. While no system is completely secure, we are
              committed to maintaining strong security practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              5. Sharing of Information
            </h2>
            <p>
              We do not sell or rent personal information. We may share
              information with trusted service providers who assist in operating
              our business (e.g., analytics, scheduling, or CRM systems) under
              confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              6. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              information by emailing{" "}
              <a
                href="mailto:hello@iteratum.com"
                className="underline hover:no-underline text-iteratum-cyan"
              >
                hello@iteratum.com
              </a>
              . You may also unsubscribe from communications at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. We are not
              responsible for the content or privacy practices of third-party
              sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. The most current
              version will always be available on this page, with the date of
              the latest revision indicated above.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:hello@iteratum.com"
            className="btn-iteratum-primary inline-flex items-center"
          >
            Contact Us
          </a>
        </div>
      </section>
    </Layout>
  );
}
