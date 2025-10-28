// src/TermsOfService.jsx
import React from "react";
import Layout from "./components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-iteratum-dark mb-6">
          Terms Of Service
        </h1>
        <p className="text-neutral-700 mb-8">
          Last updated: October 27, 2025
        </p>

        <div className="space-y-8 text-neutral-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              1. Agreement To Terms
            </h2>
            <p>
              By accessing or using the Iteratum website or services, you agree
              to these Terms of Service and our Privacy Policy. If you do not
              agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              2. Services
            </h2>
            <p>
              Iteratum provides consulting, implementation, and training
              services for project management platforms such as ClickUp and
              Zoho. The scope, timeline, and deliverables for each engagement
              will be defined in a separate written agreement or proposal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide accurate and up-to-date information.</li>
              <li>
                Ensure your team has proper access to the necessary tools or
                platforms.
              </li>
              <li>
                Avoid misuse of Iteratum’s website, materials, or content for
                unlawful purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              4. Payment And Billing
            </h2>
            <p>
              Payment terms, fees, and schedules are outlined in your project
              agreement or invoice. Payments must be made according to the
              agreed terms. Late payments may result in delayed services or
              additional charges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              5. Confidentiality
            </h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary
              information shared during a project. Iteratum will not disclose
              client data or internal materials without consent, except as
              required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              6. Intellectual Property
            </h2>
            <p>
              All materials, templates, and systems developed by Iteratum remain
              our intellectual property unless otherwise stated in writing.
              Clients may use deliverables for internal business purposes only.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              7. Limitation Of Liability
            </h2>
            <p>
              Iteratum will not be liable for indirect, incidental, or
              consequential damages arising from the use or inability to use our
              services. Our total liability shall not exceed the amount paid for
              the specific project engagement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              8. Termination
            </h2>
            <p>
              Either party may terminate the engagement with written notice.
              Fees for completed or in-progress work up to the date of
              termination remain payable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              9. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State of North
              Carolina. Any disputes will be resolved in courts located within
              New Hanover County, NC.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-iteratum-dark mb-2">
              10. Contact Information
            </h2>
            <p>
              For any questions about these Terms, contact us at{" "}
              <a
                href="mailto:hello@iteratum.com"
                className="underline hover:no-underline text-iteratum-cyan"
              >
                hello@iteratum.com
              </a>
              .
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
