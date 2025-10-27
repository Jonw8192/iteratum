// src/InsightTemplate.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { insights } from "./resourcesData";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function InsightTemplate() {
  const { slug } = useParams();
  const post = insights.find((i) => i.slug === slug);

  useEffect(() => {
    document.title = post ? `${post.title} | Iteratum Resources` : "Resource Not Found | Iteratum";
  }, [post]);

  if (!post) {
    return (
      <>
        <Header />
        <div className="section-iteratum py-24 text-center">
          <h1 className="text-iteratum-hero mb-3">Resource Not Found</h1>
          <p className="text-iteratum-subtitle mb-6">The article you are looking for does not exist.</p>
          <Link to="/resources" className="btn-iteratum-primary inline-flex items-center gap-2">
            Back To Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {/* Page Hero */}
      <section className="section-iteratum text-center py-24 border-b border-iteratum-gray-200 bg-iteratum-gradient-subtle">
        <h1 className="text-iteratum-hero mb-2">{post.title}</h1>
        <p className="text-sm text-iteratum-steel">
          {new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
          {" · "} {post.readTime}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-xs text-iteratum-steel flex-wrap">
          {post.tags?.map((t) => (
            <span key={t} className="pill-iteratum">{t}</span>
          ))}
        </div>
      </section>

      {/* Content */}
      <article className="section-iteratum py-16 max-w-3xl mx-auto leading-relaxed">
        <p className="text-iteratum-subtitle mb-10">{post.excerpt}</p>

        {post.sections.map((s, idx) => (
          <section key={idx} className="mb-10">
            {s.h2 && <h2 className="text-iteratum-heading mb-3">{s.h2}</h2>}
            {s.p?.map((para, i) => (
              <p key={i} className="mb-3 text-neutral-800">{para}</p>
            ))}
            {s.bullets && (
              <ul className="space-y-2 text-neutral-800">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-iteratum-success flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.cta && (
              <div className="mt-5 flex flex-wrap gap-3">
                {s.cta.primary && (
                  <a href={s.cta.primary.href} className="btn-iteratum-primary">{s.cta.primary.label}</a>
                )}
                {s.cta.secondary && (
                  <a href={s.cta.secondary.href} className="btn-iteratum-secondary">{s.cta.secondary.label}</a>
                )}
              </div>
            )}
          </section>
        ))}
      </article>

      {/* Footer CTA */}
      <section className="section-iteratum pb-24 pt-0 text-center">
        <div className="card-iteratum p-8 max-w-3xl mx-auto">
          <h3 className="text-iteratum-heading mb-2">Ready To Improve Adoption?</h3>
          <p className="text-sm text-iteratum-slate mb-4">See the 10 day plan or grab the quick setup checklist.</p>
          <div className="flex items-center justify-center gap-3">
            <a href="https://cal.com/jonwoods" className="btn-iteratum-primary">Book A Discovery Call</a>
            <a href="/#contact" className="btn-iteratum-secondary">Get The Checklist</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
