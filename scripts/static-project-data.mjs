import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const siteOrigin = "https://tantyastorm.dev";

export function getProjectRoutes(sitemap) {
  return [...sitemap.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)]
    .map((match) => new URL(match[1]))
    .filter((url) => url.origin === siteOrigin)
    .filter((url) => /^\/projects\/[^/]+\/$/.test(url.pathname))
    .map((url) => ({ href: url.href, pathname: url.pathname }));
}

export async function loadProjects() {
  const source = await readFile(path.join(root, "src", "data", "projects.ts"), "utf8");
  const literal = source.match(/export const projects: Project\[\] = ([\s\S]*);\s*$/)?.[1];
  if (!literal) throw new Error("Could not read canonical project data.");

  const projectUrls = new Proxy({}, { get: () => ({}) });
  return Function("projectUrls", `return (${literal});`)(projectUrls);
}
