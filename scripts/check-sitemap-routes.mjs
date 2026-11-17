import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { getProjectRoutes, loadProjects, root } from "./static-project-data.mjs";

const distDir = path.join(root, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

const sitemap = await readFile(sitemapPath, "utf8");
const routes = getProjectRoutes(sitemap);
const projects = await loadProjects();
const projectsBySlug = new Map(projects.map((project) => [project.slug, project]));

if (routes.length === 0) {
  throw new Error("No project routes found in dist/sitemap.xml.");
}

const missingRoutes = [];
const canonicalMismatches = [];
const seoErrors = [];
const titles = new Set();

await Promise.all(
  routes.map(async (route) => {
    const routeIndexPath = path.join(distDir, route.pathname, "index.html");

    try {
      await access(routeIndexPath);
      const routeHtml = await readFile(routeIndexPath, "utf8");
      const canonical = routeHtml.match(
        /<link rel="canonical" href="([^"]*)" \/>/,
      )?.[1];
      const ogUrl = routeHtml.match(
        /<meta property="og:url" content="([^"]*)" \/>/,
      )?.[1];

      if (canonical !== route.href || ogUrl !== route.href) {
        canonicalMismatches.push(route.pathname);
      }
      const slug = route.pathname.split("/").filter(Boolean).at(-1);
      const project = projectsBySlug.get(slug);
      const title = routeHtml.match(/<title>([^<]+)<\/title>/)?.[1];
      const description = routeHtml.match(/<meta name="description" content="([^"]+)" \/>/)?.[1];
      const ogTitle = routeHtml.match(/<meta property="og:title" content="([^"]+)" \/>/)?.[1];
      const ogDescription = routeHtml.match(/<meta property="og:description" content="([^"]+)" \/>/)?.[1];
      const ogImage = routeHtml.match(/<meta property="og:image" content="([^"]+)" \/>/)?.[1];
      const staticContent = routeHtml.includes(`data-static-project="${slug}"`) && routeHtml.includes(`<h1>${project?.title}</h1>`);
      const schemaText = routeHtml.match(/<script id="project-structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];

      if (!project || !title || !description || !ogTitle || !ogDescription || !ogImage || !staticContent) {
        seoErrors.push(`${route.pathname}: missing project-specific static SEO or content`);
      } else {
        if (titles.has(title)) seoErrors.push(`${route.pathname}: duplicate title`);
        titles.add(title);
        if (!title.includes(project.title) || !description.includes(project.seoDescription ?? project.summary)) {
          seoErrors.push(`${route.pathname}: title or description does not match project data`);
        }
        if (ogTitle !== title || ogDescription !== description) {
          seoErrors.push(`${route.pathname}: Open Graph metadata does not match document metadata`);
        }
      }

      try {
        const schema = JSON.parse(schemaText ?? "");
        if (schema["@type"] !== "CreativeWork" || schema.url !== route.href || schema.name !== project?.title) {
          seoErrors.push(`${route.pathname}: invalid project structured data`);
        }
      } catch {
        seoErrors.push(`${route.pathname}: invalid project structured data`);
      }
    } catch {
      missingRoutes.push(route.pathname);
    }
  }),
);

if (missingRoutes.length > 0) {
  throw new Error(
    `Missing generated index.html files for sitemap route(s): ${missingRoutes.join(
      ", ",
    )}`,
  );
}

if (canonicalMismatches.length > 0) {
  throw new Error(
    `Generated sitemap route(s) have mismatched canonical or og:url values: ${canonicalMismatches.join(
      ", ",
    )}`,
  );
}

if (seoErrors.length > 0) {
  throw new Error(`Generated project SEO validation failed: ${seoErrors.join(", ")}`);
}

console.log(
  `Verified ${routes.length} sitemap project route(s) have static HTML, metadata, and structured data.`,
);
