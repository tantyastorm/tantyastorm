import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const ignoredKeys = new Set([
  "slug",
  "technologies",
  "image",
  "repositoryUrl",
  "architectureUrl",
  "liveDemoUrl",
  "videoUrl",
  "featured",
]);

async function readObject(relativePath, expression) {
  const source = await readFile(new URL(relativePath, root), "utf8");
  const match = source.match(expression);
  if (!match) throw new Error(`Could not read ${relativePath}.`);
  const projectUrls = new Proxy({}, { get: () => ({}) });
  return Function("projectUrls", `return (${match[1]});`)(projectUrls);
}

const base = await readObject(
  "src/data/projects.ts",
  /export const projects: Project\[\] = ([\s\S]*);\s*$/,
);

const errors = [];

function checkValue(baseValue, translatedValue, path) {
  if (typeof baseValue === "string") {
    if (typeof translatedValue !== "string" || !translatedValue.trim()) {
      errors.push(`${path}: missing translated string`);
      return;
    }

    // Exact matches of multi-word prose are almost always an accidental fallback.
    // Product names, APIs, paths, and short labels remain valid exact matches.
    if (
      baseValue === translatedValue &&
      baseValue.split(/\s+/).length > 3 &&
      /[a-z]{3,}/i.test(baseValue)
    ) {
      errors.push(`${path}: appears to retain English source prose`);
    }
    return;
  }

  if (Array.isArray(baseValue)) {
    if (!Array.isArray(translatedValue) || translatedValue.length !== baseValue.length) {
      errors.push(`${path}: expected ${baseValue.length} translated item(s)`);
      return;
    }
    baseValue.forEach((item, index) => checkValue(item, translatedValue[index], `${path}[${index}]`));
    return;
  }

  if (baseValue && typeof baseValue === "object") {
    if (!translatedValue || typeof translatedValue !== "object") {
      errors.push(`${path}: missing translated object`);
      return;
    }
    for (const [key, value] of Object.entries(baseValue)) {
      if (!ignoredKeys.has(key)) checkValue(value, translatedValue[key], `${path}.${key}`);
    }
  }
}

for (const language of ["ro", "ru"]) {
  const translations = await readObject(
    `src/i18n/translations/projects-${language}.ts`,
    new RegExp(`export const ${language}ProjectTranslations = ([\\s\\S]*?) satisfies`),
  );
  for (const project of base) {
    checkValue(project, translations[project.slug], `${language}.${project.slug}`);
  }
}

if (errors.length) {
  console.error(`Project translation coverage failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Verified complete Romanian and Russian project translation structures for ${base.length} projects.`);
