import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getProjectRoutes, loadProjects, root, siteOrigin } from "./static-project-data.mjs";

const distDir = path.join(root, "dist");
const indexPath = path.join(distDir, "index.html");
const sitemapPath = path.join(distDir, "sitemap.xml");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function absoluteAsset(pathname) {
  return `${siteOrigin}/${pathname.replace(/^\/+/, "")}`;
}

function projectTitle(project) {
  return project.seoTitle ?? `${project.title} | Case Study | Tantyastorm`;
}

function projectDescription(project) {
  return project.seoDescription ?? project.summary;
}

function staticProjectContent(project) {
  const features = project.features?.length
    ? `<section><h2>Key features</h2><ul>${project.features
      .map((feature) => `<li><strong>${escapeHtml(feature.title)}</strong>: ${escapeHtml(feature.description)}</li>`)
      .join("")}</ul></section>`
    : "";
  const goals = project.goals?.length
    ? `<section><h2>Goals</h2><ul>${project.goals.map((goal) => `<li>${escapeHtml(goal)}</li>`).join("")}</ul></section>`
    : "";

  return `<main id="main" data-static-project="${escapeHtml(project.slug)}"><article><header><p>${escapeHtml(project.category)}</p><h1>${escapeHtml(project.title)}</h1><p>${escapeHtml(project.summary)}</p></header><section><h2>Overview</h2><p>${escapeHtml(project.detailedDescription)}</p></section>${goals}${features}</article></main>`;
}

function projectSchema(project, route) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: projectDescription(project),
    url: route.href,
    image: project.image ? absoluteAsset(project.image) : undefined,
    keywords: project.technologies?.join(", "),
    ...(project.repositoryUrl ? { codeRepository: project.repositoryUrl } : {}),
  }).replace(/</g, "\\u003c");
}

const indexHtml = await readFile(indexPath, "utf8");
const sitemap = await readFile(sitemapPath, "utf8");
const routes = getProjectRoutes(sitemap);
const projects = await loadProjects();
const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

if (routes.length === 0) {
  throw new Error("No project routes found in dist/sitemap.xml.");
}

await Promise.all(
  routes.map(async (route) => {
    const slug = route.pathname.split("/").filter(Boolean).at(-1);
    const project = projectsBySlug.get(slug);
    if (!project) throw new Error(`No project data found for ${route.pathname}.`);
    const title = projectTitle(project);
    const description = projectDescription(project);
    const image = project.image ? absoluteAsset(project.image) : absoluteAsset("assets/brand/og-image-1200x630.png");
    const routeDir = path.join(distDir, route.pathname);
    const routeHtml = indexHtml
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
      .replace(/<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${route.href}" />`,
      )
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${route.href}" />`,
      )
      .replace(/<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="article" />`)
      .replace(/<meta\s+property="og:title"[\s\S]*?\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
      .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
      .replace(/<meta\s+property="og:image"[\s\S]*?\/>/, `<meta property="og:image" content="${image}" />`)
      .replace(/<meta\s+name="twitter:title"[\s\S]*?\/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
      .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`)
      .replace(/<meta\s+name="twitter:image"[\s\S]*?\/>/, `<meta name="twitter:image" content="${image}" />`)
      .replace("</head>", `<script id="project-structured-data" type="application/ld+json">${projectSchema(project, route)}</script></head>`)
      .replace('<div id="root"></div>', `<div id="root">${staticProjectContent(project)}</div>`);

    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, "index.html"), routeHtml);
  }),
);

console.log(
  `Generated ${routes.length} static project route(s): ${routes
    .map((route) => route.pathname)
    .join(", ")}`,
);
