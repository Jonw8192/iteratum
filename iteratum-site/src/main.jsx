// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Site from "./Site";
import About from "./About";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

import Resources from "./Resources";
import Insights from "./Insights";
import InsightTemplate from "./InsightTemplate";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Marketing Site */}
      <Route path="/" element={<Site />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />

      {/* Resources Hub + Insights */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/insights" element={<Insights />} />
      <Route path="/resources/insights/:slug" element={<InsightTemplate />} />

      {/* Fallback to Home (optional, Netlify handles SPA via _redirects) */}
      {/* <Route path="*" element={<Site />} /> */}
    </Routes>
  </BrowserRouter>
);
