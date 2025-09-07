import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Site from "./Site.jsx";

// Get the root element
const container = document.getElementById("root");

// Create root and render the app
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
