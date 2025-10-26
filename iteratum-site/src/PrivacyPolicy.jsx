// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-neutral-700 mb-6">
          Effective Date: January 1, 2025
        </p>

        <p className="mb-4">
          At Iteratum, LLC we respect your privacy. This policy explains how we collect, use, and protect your information when you use our website or services. If you have any questions, email us at{" "}
          <a href="mailto:jon@iteratum.com" className="underline">jon@iteratum.com</a>.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Information we collect</h2>
          <p className="mb-2">We may collect the following information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal details you provide such as your name, email address, or company information</li>
            <li>Usage data such as pages you visit and interactions with our site</li>
            <li>Form submissions such as contact requests or scheduling information</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">How we use your information</h2>
          <p className="mb-2">We use this information to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Respond to messages or service requests</li>
            <li>Deliver and improve our services</li>
            <li>Schedule calls or manage communication</li>
            <li>Analyze website usage to improve user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Sharing your information</h2>
          <p>
            We do not sell or share your information with third parties, except for trusted tools we use to run our business such as scheduling software, CRM systems, or website analytics. These partners must keep your information confidential and secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Cookies and analytics</h2>
          <p>
            We may use cookies and analytics tools to understand website traffic and improve performance. You can disable cookies in your browser settings if you prefer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Data security</h2>
          <p>
            We take reasonable steps to protect your information from loss, misuse, or unauthorized access. However, no method of transmission over the internet is completely secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Your rights</h2>
          <p className="mb-2">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Request access to the data we store about you</li>
            <li>Update or correct your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing or tracking</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Children's privacy</h2>
          <p>
            We do not knowingly collect information from children under the age of 13. If you believe we have collected such information, please contact us and we will remove it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact us</h2>
          <p>
            If you have questions, email us at{" "}
            <a href="mailto:jon@iteratum.com" className="underline">jon@iteratum.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
