import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms Of Service | Iteratum";
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen page-enter pt-20">
        {/* Page Hero (H1 Centered + LS1 subtitle) */}
        <section className="section-iteratum text-center py-24 border-b border-iteratum-gray-200 bg-iteratum-gradient-subtle">
          <h1 className="text-iteratum-hero mb-3">Terms Of Service</h1>
          <p className="text-iteratum-subtitle max-w-2xl mx-auto">
            Our policies that keep your data protected and your experience reliable.
          </p>
        </section>

        {/* Content */}
        <section className="section-iteratum py-16 max-w-3xl mx-auto space-y-10 leading-relaxed">
          <div>
            <h2 className="text-iteratum-heading mb-2">Use Of Services</h2>
            <p>
              By using our website or services, you agree to engage in lawful use and honor project scopes as agreed upon
              during delivery.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Billing & Payments</h2>
            <p>
              Payments and billing schedules will be outlined in your proposal or agreement. Delayed payments may
              pause work or delivery timelines.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Responsibilities</h2>
            <p>
              Iteratum will deliver services to a professional standard, and clients agree to provide timely access,
              communication, and feedback needed to complete the work.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Liability</h2>
            <p>
              Iteratum is not liable for indirect or consequential damages. Liability is limited to the amount paid
              for the services rendered.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Termination</h2>
            <p>
              Either party may end a project with written notice. Work completed up to that point will be invoiced.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Contact</h2>
            <p>
              For questions regarding these terms, please contact{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
