// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---------- Page Imports ----------
import Site from "./Site";
import About from "./About";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import Resources from "./Resources";
import Insights from "./Insights";
import InsightTemplate from "./InsightTemplate";

// ---------- Styles ----------
import "./index.css";

// ---------- Render ----------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ---------- Marketing Site ---------- */}
        <Route path="/" element={<Site />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* ---------- Resources Hub + Insights ---------- */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/insights" element={<Insights />} />
        <Route path="/resources/insights/:slug" element={<InsightTemplate />} />

        {/* ---------- Optional Catch-All ---------- */}
        {/* Netlify handles SPA routing automatically, but this can be used locally */}
        {/* <Route path="*" element={<Site />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
