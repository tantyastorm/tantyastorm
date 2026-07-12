import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
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

const sitemap = await readFile(sitemapPath, "utf8");
const routes = getProjectRoutes(sitemap);

if (routes.length === 0) {
  throw new Error("No project routes found in dist/sitemap.xml.");
}

const missingRoutes = [];
const canonicalMismatches = [];

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

console.log(
  `Verified ${routes.length} sitemap project route(s) have static index.html files.`,
);
