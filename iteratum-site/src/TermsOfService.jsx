// src/pages/TermsOfService.jsx
import React from "react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-sm text-neutral-700 mb-6">
          Effective Date: January 1, 2025
        </p>

        <p className="mb-4">
          These Terms of Service explain how you may use the Iteratum website and services. By accessing or using our site you agree to these terms. If you do not agree, please do not use the site or services.
        </p>

        {/* Section: Your responsibilities */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Your responsibilities</h2>
          <p className="mb-2">By using our website or services you agree to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide accurate information when requested</li>
            <li>Use our content and services only for lawful purposes</li>
            <li>Not attempt to disrupt or harm our website or systems</li>
          </ul>
        </section>

        {/* Section: Our services */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Our services</h2>
          <p>
            Iteratum provides consulting, implementation, and support services for tools such as ClickUp and Zoho. Service details, pricing, and scope are defined in separate agreements or statements of work. Website content is for general information only and may change at any time.
          </p>
        </section>

        {/* Section: Payment and refunds */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Payments and refunds</h2>
          <p className="mb-2">
            Payments, timelines, and delivery expectations are defined in a separate written agreement for each engagement. Due to the nature of consulting services, refunds are generally not offered unless stated in writing.
          </p>
        </section>

        {/* Section: Intellectual property */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Intellectual property</h2>
          <p>
            All content on this website including text, graphics, logos, icons, and layouts is owned by Iteratum, LLC and may not be copied, distributed, or reused without written permission. You may share our content for personal or educational purposes with attribution.
          </p>
        </section>

        {/* Section: Third-party tools */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Third party tools and links</h2>
          <p>
            Our website may link to third party tools or services. We are not responsible for their content, policies, or practices. Please review their terms and privacy policies before using them.
          </p>
        </section>

        {/* Section: Limitation of liability */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Limitation of liability</h2>
          <p>
            Iteratum, LLC is not responsible for any indirect or consequential damages that may arise from the use of our website or services. Our total liability is limited to the amount paid for the specific service in question.
          </p>
        </section>

        {/* Section: Governing law */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of North Carolina. Any disputes must be handled in a court located in North Carolina.
          </p>
        </section>

        {/* Section: Changes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the site means you accept the updated terms.
          </p>
        </section>

        {/* Section: Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Contact us</h2>
          <p>
            For questions about these terms, email us at{" "}
            <a href="mailto:jon@iteratum.com" className="underline">
              jon@iteratum.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
