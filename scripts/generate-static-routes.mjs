import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const indexPath = path.join(distDir, "index.html");
const sitemapPath = path.join(distDir, "sitemap.xml");
const siteOrigin = "https://tantyastorm.dev";

function getProjectRoutes(sitemap) {
  const locs = [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(
    (match) => match[1],
  );

  return locs
    .map((loc) => new URL(loc))
    .filter((url) => url.origin === siteOrigin)
    .filter((url) => /^\/projects\/[^/]+\/$/.test(url.pathname))
    .map((url) => ({
      href: url.href,
      pathname: url.pathname,
    }));
}

const indexHtml = await readFile(indexPath, "utf8");
const sitemap = await readFile(sitemapPath, "utf8");
const routes = getProjectRoutes(sitemap);

if (routes.length === 0) {
  throw new Error("No project routes found in dist/sitemap.xml.");
}

await Promise.all(
  routes.map(async (route) => {
    const routeDir = path.join(distDir, route.pathname);
    const routeHtml = indexHtml
      .replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="${route.href}" />`,
      )
      .replace(
        /<meta property="og:url" content="[^"]*" \/>/,
        `<meta property="og:url" content="${route.href}" />`,
      );

    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, "index.html"), routeHtml);
  }),
);

console.log(
  `Generated ${routes.length} static project route(s): ${routes
    .map((route) => route.pathname)
    .join(", ")}`,
);
