import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Site from "Site.jsx";


createRoot(document.getElementById("root")).render(
<React.StrictMode>
<Site />
</React.StrictMode>
);