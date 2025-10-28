// src/InsightTemplate.jsx
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "./components/Layout";
import { Calendar, Tag } from "lucide-react";

export default function InsightTemplate() {
  const { slug } = useParams();

  // Example article data — later you can pull from a JSON or CMS
  const articles = {
    "adoption-playbook": {
      title: "The Adoption Playbook",
      date: "October 15, 2025",
      category: "Change Management",
      content: `
        <p>Real adoption isn't about software — it's about behavior.</p>
        <p>When teams fail to adopt new systems, it’s rarely because the tool is bad.
        It’s because the structure doesn’t match how they actually work.</p>
        <h3>The Framework</h3>
        <ul>
          <li><strong>Start with Clarity:</strong> Everyone should know where to look for work.</li>
          <li><strong>Design for Accountability:</strong> Make ownership visible and easy to confirm.</li>
          <li><strong>Focus on Adoption:</strong> A tool is only as valuable as the habits it supports.</li>
        </ul>
        <p>We’ve seen 95% adoption rates when this framework is applied consistently.
        That’s what turns a system into a habit.</p>
      `,
    },
    "smart-automation": {
      title: "Automation That Saves Time (Not Adds Noise)",
      date: "October 5, 2025",
      category: "Workflow Design",
      content: `
        <p>Automation is powerful — but only when used intentionally.</p>
        <p>Too many teams automate notifications, reminders, and updates
        that nobody reads. The result? Alert fatigue.</p>
        <h3>How to Fix It</h3>
        <ul>
          <li>Automate outcomes, not noise — focus on what unblocks work.</li>
          <li>Use triggers sparingly, and always test impact before scaling.</li>
          <li>Measure ROI: every automation should save measurable time.</li>
        </ul>
        <p>When automation is designed well, it feels invisible — because it just works.</p>
      `,
    },
    "clickup-clarity": {
      title: "How To Structure ClickUp For Clarity",
      date: "September 27, 2025",
      category: "ClickUp Systems",
      content: `
        <p>A messy workspace kills momentum.</p>
        <p>ClickUp can be powerful, but only when it’s structured clearly. 
        Start with simple layers: Space → Folder → List → Task.</p>
        <h3>Our Recommendation</h3>
        <ul>
          <li>Limit Spaces — each should represent a department or business unit.</li>
          <li>Standardize statuses across teams to simplify reporting.</li>
          <li>Use dashboards to replace status meetings.</li>
        </ul>
        <p>The goal isn’t to build everything — it’s to build what people actually use.</p>
      `,
    },
  };

  const article = articles[slug];

  // Scroll to top when navigating between insights
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <Layout>
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-iteratum-dark mb-3">
            Article Not Found
          </h1>
          <p className="text-neutral-700 mb-6">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
          <a href="/resources/insights" className="btn-iteratum-primary">
            Back To Insights
          </a>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-iteratum-dark mb-2">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-1">
              <Tag className="h-4 w-4" />
              {article.category}
            </div>
          </div>
        </div>

        <div
          className="prose prose-neutral max-w-none text-neutral-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 text-center">
          <a
            href="https://cal.com/jonwoods"
            className="btn-iteratum-primary inline-flex items-center gap-2"
          >
            Talk With Us
          </a>
        </div>
      </article>
    </Layout>
  );
}
