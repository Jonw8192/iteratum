import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Iteratum";
  }, []);

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen page-enter pt-20">
        {/* Page Hero (H1 Centered + LS1 subtitle) */}
        <section className="section-iteratum text-center py-24 border-b border-iteratum-gray-200 bg-iteratum-gradient-subtle">
          <h1 className="text-iteratum-hero mb-3">Privacy Policy</h1>
          <p className="text-iteratum-subtitle max-w-2xl mx-auto">
            Our policies that keep your data protected and your experience reliable.
          </p>
        </section>

        {/* Content */}
        <section className="section-iteratum py-16 max-w-3xl mx-auto space-y-10 leading-relaxed">
          <div>
            <h2 className="text-iteratum-heading mb-2">Information We Collect</h2>
            <p>
              We collect basic contact details you provide, such as your name, email address, and project information.
              We only gather what is necessary to communicate and deliver our services effectively.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">How Your Information Is Used</h2>
            <p>
              We use your information to respond to inquiries, schedule consultations, share resources, deliver services,
              and provide relevant updates when requested.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Sharing & Third Parties</h2>
            <p>
              We do not sell your data. We only share information with trusted tools (such as scheduling, CRM,
              or analytics platforms) that help us operate and deliver our services.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Data & Cookies</h2>
            <p>
              We may use cookies or anonymized analytics to understand website performance and improve the experience
              for visitors. You may disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Your Rights</h2>
            <p>
              You may request a copy, correction, or deletion of your personal information by contacting{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-iteratum-heading mb-2">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please reach out at{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
