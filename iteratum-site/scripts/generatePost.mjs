// scripts/generatePost.mjs
// Usage:
// node scripts/generatePost.mjs --title "Reduce Scope Creep in ClickUp" --category "ClickUp" --author "Iteratum Team" --keywords "clickup, scope creep, adoption" --summary "Practical ways to stop scope creep with roles, views, and approvals." --cta "Book a discovery call"

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ---------- helpers ----------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const arg = (name, def = "") => {
  const idx = process.argv.findIndex((a) => a === `--${name}`);
  if (idx !== -1 && process.argv[idx + 1]) return process.argv[idx + 1];
  return def;
};

const today = () => {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);

// ---------- inputs ----------
const title = arg("title");
if (!title) {
  console.error("Missing --title");
  process.exit(1);
}
const category = arg("category", "Operations");
const author = arg("author", "Iteratum Team");
const keywords = arg("keywords", "clickup, zoho, adoption, automation");
const summary = arg(
  "summary",
  "A practical, field tested approach that helps teams move faster with fewer mistakes."
);
const ctaText = arg("cta", "Book a discovery call");

// ---------- derived ----------
const slug = slugify(title);
const date = today();

// ---------- paths ----------
const contentDir = path.join(root, "content", "insights");
const jsonPath = path.join(root, "src", "insights.json");

// ensure dirs
fs.mkdirSync(contentDir, { recursive: true });

// ---------- HTML content scaffold (simple, dependency free) ----------
const html = `
<h1>${title}</h1>
<p><em>By ${author} • ${date}</em></p>

<p>${summary}</p>

<h2>What You Will Learn</h2>
<ul>
  <li>How to design your workspace so work is clear and owned</li>
  <li>How to prevent rework with roles, views, and approvals</li>
  <li>How to drive adoption with simple training and templates</li>
</ul>

<h2>1. Align on goals and boundaries</h2>
<p>Start by writing the outcome you want and what is out of scope. Keep it short. Put it where everyone can see it. Use one intake path for new work so there is no confusion.</p>

<h2>2. Build the structure that enforces clarity</h2>
<p>Create lists and statuses that match how your team really works. Add required fields for owner, due date, and priority. Set permissions so the right people can move work forward.</p>

<h2>3. Add automation for consistency</h2>
<p>Automate handoffs. Trigger reminders on status changes. Post updates to a single place so leaders can see progress without asking for it.</p>

<h2>4. Train the team with role based views</h2>
<p>Give each role a saved view that shows only what they need to do today. Record a two minute Loom. Add a short checklist. Keep it simple so people use it.</p>

<h2>Key takeaways</h2>
<ul>
  <li>Make it easy to do the right thing</li>
  <li>Keep the system clean and standard</li>
  <li>Review weekly and remove friction fast</li>
</ul>

<hr />
<p><strong>Need help?</strong> We build ClickUp and Zoho systems that teams actually use. <a href="https://cal.com/jonwoods" target="_blank" rel="noopener">` + ctaText + `</a>.</p>
`.trim();

// write content file
const fileName = `${slug}.html`;
const filePath = path.join(contentDir, fileName);
fs.writeFileSync(filePath, html, "utf8");

// ---------- update insights.json ----------
let data = [];
if (fs.existsSync(jsonPath)) {
  try {
    data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    if (!Array.isArray(data)) data = [];
  } catch {
    data = [];
  }
}

const exists = data.some((p) => p.slug === slug);
if (exists) {
  console.error(`A post with slug "${slug}" already exists in insights.json`);
  process.exit(1);
}

const excerpt = summary.length > 180 ? summary.slice(0, 177) + "..." : summary;

// Store a small, render friendly entry that your Resources and InsightTemplate can consume
const newEntry = {
  title,
  slug,
  date,
  category,
  author,
  keywords,
  excerpt,
  // contentPath tells the template where to load full HTML
  contentPath: `/content/insights/${fileName}`,
};

// prepend newest first
data.unshift(newEntry);

// persist
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + "\n", "utf8");

console.log("✅ Post created:");
console.log(`Title: ${title}`);
console.log(`Slug:  ${slug}`);
console.log(`File:  content/insights/${fileName}`);
console.log(`JSON:  src/insights.json updated`);
