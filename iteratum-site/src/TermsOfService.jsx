// src/TermsOfService.jsx
import React, { useEffect } from "react";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms Of Service | Iteratum";
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-800 page-enter">
      <section className="section-iteratum py-28">
        <h1 className="text-iteratum-hero mb-6">Terms Of Service</h1>
        <p className="text-iteratum-subtitle max-w-3xl mb-10">
          These terms outline the rules and expectations for using Iteratum’s services and website.
        </p>

        <div className="space-y-10 max-w-3xl leading-relaxed">
          <section>
            <h2 className="text-iteratum-heading mb-2">Use Of Services</h2>
            <p>
              By engaging with Iteratum, you agree to use our services for lawful purposes and in accordance with agreed project scopes.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Payments & Billing</h2>
            <p>
              Payments, pricing, and billing schedules will be defined in your project agreement or proposal. Late payments may delay delivery.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Project Responsibilities</h2>
            <p>
              We commit to delivering work to high standards, and clients commit to providing timely information, access, and feedback required to complete the work.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Liability</h2>
            <p>
              Iteratum is not liable for indirect or consequential damages. Our total liability is capped at the amount paid for services rendered.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Termination</h2>
            <p>
              Either party may terminate an agreement with written notice. Completed work up to the termination point will be invoiced.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Contact</h2>
            <p>
              For questions about these terms, contact{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
