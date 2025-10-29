// src/InsightTemplate.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./components/Layout";
import insightsData from "./insights.json";

export default function InsightTemplate() {
  const { slug } = useParams();
  const post = Array.isArray(insightsData)
    ? insightsData.find((p) => p.slug === slug)
    : null;

  const [html, setHtml] = useState("");

  useEffect(() => {
    let active = true;
    async function load() {
      if (!post?.contentPath) return;
      try {
        const res = await fetch(post.contentPath, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to load content");
        const text = await res.text();
        if (active) setHtml(text);
      } catch {
        if (active) setHtml("<p>Unable to load content.</p>");
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <section className="max-w-3xl mx-auto px-6 py-20">
          <h1 className="text-2xl font-bold text-iteratum-dark">Post not found</h1>
          <p className="mt-2 text-neutral-700">The insight you are looking for does not exist.</p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-8">
          <p className="text-xs text-neutral-500">
            {post.date} • {post.category}
          </p>
          <h1 className="mt-1 text-4xl font-bold text-iteratum-dark">{post.title}</h1>
          {post.author && (
            <p className="mt-2 text-sm text-neutral-700">By {post.author}</p>
          )}
          {post.excerpt && (
            <p className="mt-4 text-neutral-700">{post.excerpt}</p>
          )}
        </header>

        <div
          className="prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <hr className="my-10" />
        <div className="text-center">
          <a href="https://cal.com/jonwoods" className="btn-iteratum-primary">
            Book a discovery call
          </a>
        </div>
      </article>
    </Layout>
  );
}
