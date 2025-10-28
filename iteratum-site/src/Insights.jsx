// src/Insights.jsx
import React from "react";
import Layout from "./components/Layout";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "The Adoption Playbook",
      excerpt:
        "How to turn new tools into lasting habits that drive performance. Practical steps for real-world adoption.",
      slug: "adoption-playbook",
      date: "October 15, 2025",
      category: "Change Management",
    },
    {
      title: "Automation That Saves Time (Not Adds Noise)",
      excerpt:
        "Automation should simplify work — not add complexity. Learn how to design automations that actually stick.",
      slug: "smart-automation",
      date: "October 5, 2025",
      category: "Workflow Design",
    },
    {
      title: "How To Structure ClickUp For Clarity",
      excerpt:
        "A clear workspace means fewer meetings and faster delivery. Here’s how to architect your ClickUp setup right.",
      slug: "clickup-clarity",
      date: "September 27, 2025",
      category: "ClickUp Systems",
    },
  ];

  return (
    <Layout>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-iteratum-dark mb-4">
          Insights & Articles
        </h1>
        <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
          Short, practical reads on clarity, adoption, and automation.  
          Every article comes from real-world implementation experience — not theory.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <a
              key={i}
              href={`/resources/insights/${a.slug}`}
              className="block border rounded-2xl bg-white p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-3 text-xs text-neutral-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {a.date}
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-3.5 w-3.5" />
                  {a.category}
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-iteratum-dark">
                {a.title}
              </h2>
              <p className="text-sm text-neutral-700 mb-4">{a.excerpt}</p>
              <span className="inline-flex items-center text-iteratum-cyan font-semibold text-sm">
                Read More <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-iteratum-dark mb-3">
            Want help putting these ideas into practice?
          </h3>
          <p className="text-neutral-700 mb-6 max-w-xl mx-auto">
            We help teams implement real systems that deliver clarity, speed,  
            and adoption — in about 10 business days.
          </p>
          <a
            href="https://cal.com/jonwoods"
            className="btn-iteratum-primary inline-flex items-center gap-2"
          >
            Book A Discovery Call
          </a>
        </div>
      </section>
    </Layout>
  );
}
