// src/PrivacyPolicy.jsx
import React, { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Iteratum";
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-800 page-enter">
      <section className="section-iteratum py-28">
        <h1 className="text-iteratum-hero mb-6">Privacy Policy</h1>
        <p className="text-iteratum-subtitle max-w-3xl mb-10">
          We respect your privacy and are committed to protecting your data. This policy outlines what we collect, how we use it, and your rights.
        </p>

        <div className="space-y-10 max-w-3xl leading-relaxed">
          <section>
            <h2 className="text-iteratum-heading mb-2">Information We Collect</h2>
            <p>
              We only collect information that helps us serve you, such as your name, email, and project details submitted through our forms.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">How We Use Your Information</h2>
            <p>
              We use your data to respond to inquiries, deliver services, schedule consultations, and send relevant updates when requested.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Data Sharing</h2>
            <p>
              We do not sell or share your personal information with third parties, except trusted platforms we use to operate (such as scheduling, CRM, and email tools).
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Cookies & Analytics</h2>
            <p>
              We may collect anonymized analytics to understand website performance and improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal data by contacting{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-iteratum-heading mb-2">Contact</h2>
            <p>
              If you have any questions about this policy, please reach out to us at{" "}
              <a className="underline" href="mailto:hello@iteratum.com">hello@iteratum.com</a>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
