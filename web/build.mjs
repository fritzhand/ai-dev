#!/usr/bin/env node
/*
 * Build the AI Dev curriculum into _site/.
 *
 * The builder has no package dependencies. Markdown is the source of truth,
 * every curriculum file is discovered, and a production build fails when a
 * prerequisite, internal link, anchor, figure, or navigation target is wrong.
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const WEB = join(ROOT, "web");
const ASSETS = join(WEB, "assets");
const INFOGRAPHICS = join(WEB, "infographics");
const OUT = join(ROOT, "_site");
const errors = [];
const fail = (message) => errors.push(message);

const readJson = (path, fallback = {}) => {
  if (!existsSync(path)) return fallback;
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    fail(`${relative(ROOT, path)}: invalid JSON — ${error.message}`);
    return fallback;
  }
};

const SITE = readJson(join(ROOT, "site.config.json"));
const COURSE = readJson(join(ROOT, "course.config.json"));
const SITE_NAME = COURSE.title || SITE.siteName || "AI Dev";
const TAGLINE = COURSE.tagline || SITE.tagline || "Build useful things with AI, with a human in the loop.";
const SITE_BASE = String(COURSE.siteUrl || SITE.siteBase || "https://fritzhand.github.io/ai-dev/").replace(/\/?$/, "/");
const REPO_URL = String(COURSE.repoUrl || SITE.repo || "https://github.com/fritzhand/ai-dev").replace(/\/$/, "");
const BLOB_URL = `${REPO_URL}/blob/main/`;
const TREE_URL = `${REPO_URL}/tree/main/`;
const OG_IMAGE = "og.png";
const OG_ALT = SITE.ogAlt || `${SITE_NAME} — ${TAGLINE}`;
const AUTHOR = SITE.author || {};
const FOOTER_NOTE = SITE.footerNote || "";
const ANALYTICS_ID = /^G-[A-Z0-9]+$/.test(SITE.analyticsId || "") ? SITE.analyticsId : "";
if (SITE.analyticsId && !ANALYTICS_ID) {
  fail(`site.config.json: analyticsId "${SITE.analyticsId}" is not a GA4 measurement ID`);
}

let PATH_PREFIX = "/ai-dev/";
try {
  PATH_PREFIX = new URL(SITE_BASE).pathname || "/";
} catch {
  fail(`site.config.json: siteBase is not a valid absolute URL — ${SITE_BASE}`);
}
if (!PATH_PREFIX.endsWith("/")) PATH_PREFIX += "/";
const configuredBasePath = String(COURSE.basePath || PATH_PREFIX).replace(/^([^/])/, "/$1").replace(/\/?$/, "/");
if (configuredBasePath !== PATH_PREFIX) {
  fail(`course.config.json: basePath ${configuredBasePath} does not match siteUrl path ${PATH_PREFIX}`);
}
if (SITE.siteName && SITE.siteName !== SITE_NAME) {
  fail("site.config.json: siteName does not match course.config.json title");
}
if (SITE.tagline && SITE.tagline !== TAGLINE) {
  fail("site.config.json: tagline does not match course.config.json tagline");
}
if (SITE.siteBase && String(SITE.siteBase).replace(/\/?$/, "/") !== SITE_BASE) {
  fail("site.config.json: siteBase does not match course.config.json siteUrl");
}
if (SITE.repo && String(SITE.repo).replace(/\/$/, "") !== REPO_URL) {
  fail("site.config.json: repo does not match course.config.json repoUrl");
}

const CONTENT_ROOTS = Array.isArray(COURSE.contentRoots) && COURSE.contentRoots.length
  ? COURSE.contentRoots
  : ["lessons", "instructor", "reference", "project-templates"];

const posix = (path) => path.split("\\").join("/");
const read = (source) => readFileSync(join(ROOT, source), "utf8");
const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}[char]));
const clean = (value) => String(value ?? "").replace(/\s+/g, " ").trim();
const slugify = (value) => String(value ?? "")
  .toLowerCase()
  .replace(/`/g, "")
  .replace(/&/g, " and ")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
const plain = (value) => clean(String(value ?? "")
  .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
  .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  .replace(/`([^`]*)`/g, "$1")
  .replace(/\*\*([^*]+)\*\*/g, "$1")
  .replace(/\*([^*]+)\*/g, "$1")
  .replace(/^#+\s*/, ""));
const truncate = (value, limit) => value.length <= limit
  ? value
  : `${value.slice(0, limit - 1).replace(/[\s,;.—-]+$/, "")}…`;
const rootFor = (url) => "../".repeat(url.split("/").length - 1);
const titleCase = (value) => clean(String(value)
  .replace(/^\d+[-_]?/, "")
  .replace(/[-_]+/g, " ")
  .replace(/\b\w/g, (char) => char.toUpperCase()));

function parseScalar(raw) {
  const value = String(raw ?? "").trim();
  if (!value) return "";
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1);
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((part) => parseScalar(part)).filter((part) => part !== "");
  }
  if (/^(true|false)$/i.test(value)) return value.toLowerCase() === "true";
  if (/^-?\d+(?:\.\d+)?$/.test(value)) return Number(value);
  return value;
}

function frontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return [{}, source];
  const data = {};
  let listKey = null;
  let scalarKey = null;
  for (const line of match[1].split(/\r?\n/)) {
    const pair = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (pair) {
      const [, key, raw] = pair;
      if (!raw.trim()) {
        data[key] = "";
        listKey = key;
        scalarKey = null;
      } else {
        data[key] = parseScalar(raw);
        listKey = null;
        scalarKey = typeof data[key] === "string" ? key : null;
      }
      continue;
    }
    const item = line.match(/^\s+-\s+(.+)$/);
    if (item && listKey) {
      if (!Array.isArray(data[listKey])) data[listKey] = [];
      data[listKey].push(parseScalar(item[1]));
      continue;
    }
    if (scalarKey && /^\s+\S/.test(line)) {
      data[scalarKey] = clean(`${data[scalarKey]} ${line}`);
    }
  }
  return [data, match[2]];
}

function walkMarkdown(rootName) {
  const root = join(ROOT, rootName);
  if (!existsSync(root)) return [];
  const found = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      if (entry.name.startsWith(".")) continue;
      const path = join(directory, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        found.push(posix(relative(ROOT, path)));
      }
    }
  };
  visit(root);
  return found;
}

const sourceToUrl = (source) => {
  const directory = posix(dirname(source));
  if (/^(index|readme)\.md$/i.test(basename(source))) {
    return directory === "." ? "index.html" : `${directory}/index.html`;
  }
  return source.replace(/\.md$/i, ".html");
};

const kindFor = (source, isIndex = false) => {
  if (isIndex) return "section";
  if (source.startsWith("lessons/")) return "lesson";
  if (source.startsWith("instructor/")) return "instructor";
  if (source.startsWith("reference/")) return "reference";
  if (source.startsWith("project-templates/")) return "template";
  return "page";
};

const firstHeading = (body) => {
  const match = body.match(/^#\s+(.+?)\s*#*\s*$/m);
  return match ? plain(match[1]) : "";
};
const firstParagraph = (body) => {
  const withoutHeading = body.replace(/^#\s+.*$/m, "");
  for (const block of withoutHeading.split(/\n{2,}/)) {
    const value = block.trim();
    if (!value || /^(#|[-*+]\s|>|\||```|~~~)/.test(value)) continue;
    return plain(value);
  }
  return "";
};

const PAGES = [];
const PAGE_BY_SOURCE = new Map();
const PAGE_BY_URL = new Map();
const CURRICULUM_SOURCES = CONTENT_ROOTS.flatMap(walkMarkdown).sort();

for (const source of CURRICULUM_SOURCES) {
  const raw = read(source);
  const [fm, body] = frontmatter(raw);
  const isIndex = /^(index|readme)\.md$/i.test(basename(source));
  const title = clean(fm.title || firstHeading(body));
  const summary = clean(fm.summary || firstParagraph(body));
  const url = sourceToUrl(source);
  if (!title) fail(`${source}: no title in front matter or H1`);
  if (!summary) fail(`${source}: no summary in front matter or opening paragraph`);
  if (PAGE_BY_URL.has(url)) fail(`${source}: generated URL duplicates ${PAGE_BY_URL.get(url).source} — ${url}`);
  const page = {
    source,
    url,
    title: title || titleCase(basename(source, ".md")),
    short: clean(fm.short || fm.nav || title),
    summary,
    fm,
    body,
    isIndex,
    kind: kindFor(source, isIndex),
    synthetic: false,
    order: Number.isFinite(Number(fm.order)) ? Number(fm.order) : Number.MAX_SAFE_INTEGER,
    anchors: new Set(),
  };
  PAGES.push(page);
  PAGE_BY_SOURCE.set(source, page);
  PAGE_BY_URL.set(url, page);
}

if (PAGE_BY_SOURCE.size !== CURRICULUM_SOURCES.length) {
  fail(`curriculum registration mismatch: found ${CURRICULUM_SOURCES.length} Markdown files but registered ${PAGE_BY_SOURCE.size}`);
}

const contentRootRank = (page) => {
  const source = page.source || page.directory || "";
  const index = CONTENT_ROOTS.findIndex((root) => source === root || source.startsWith(`${root}/`));
  return index < 0 ? CONTENT_ROOTS.length : index;
};
const pageSort = (a, b) => Number(Boolean(a.synthetic)) - Number(Boolean(b.synthetic))
  || contentRootRank(a) - contentRootRank(b)
  || a.order - b.order
  || a.source.localeCompare(b.source, undefined, { numeric: true });
PAGES.sort(pageSort);

/* Validate the lesson graph before rendering. A prerequisite may be a
 * repository path, a path relative to the current lesson, a generated URL,
 * a front-matter id, or a unique filename slug. */
const requirementKeys = new Map();
const addRequirementKey = (key, page) => {
  const normalized = String(key || "").replace(/^\.\/+/, "").replace(/\.md$/i, "").replace(/\.html$/i, "");
  if (!normalized) return;
  if (!requirementKeys.has(normalized)) requirementKeys.set(normalized, []);
  requirementKeys.get(normalized).push(page);
};
for (const page of PAGES) {
  addRequirementKey(page.source, page);
  addRequirementKey(page.url, page);
  addRequirementKey(basename(page.source, ".md"), page);
  addRequirementKey(page.fm.id, page);
}

function resolveRequirement(page, requirement) {
  const raw = clean(requirement);
  if (!raw || /^(none|nothing|n\/a)$/i.test(raw)) return null;
  const withoutAnchor = raw.split("#")[0];
  const candidates = new Set();
  const relativeSource = posix(relative(ROOT, resolve(join(ROOT, dirname(page.source)), withoutAnchor)));
  const rootSource = withoutAnchor.replace(/^\/+/, "");
  for (const key of [
    withoutAnchor,
    relativeSource,
    rootSource,
    withoutAnchor.replace(/\.md$/i, ""),
    relativeSource.replace(/\.md$/i, ""),
    rootSource.replace(/\.md$/i, ""),
  ]) {
    for (const match of requirementKeys.get(key) || []) candidates.add(match);
  }
  if (!candidates.size) {
    fail(`${page.source}: prerequisite does not exist — ${raw}`);
    return null;
  }
  if (candidates.size > 1) {
    fail(`${page.source}: prerequisite is ambiguous — ${raw}; use a repository-relative Markdown path`);
    return null;
  }
  return [...candidates][0];
}

const prerequisiteGraph = new Map();
for (const page of PAGES.filter((candidate) => candidate.kind === "lesson")) {
  if (!Object.prototype.hasOwnProperty.call(page.fm, "summary")) {
    fail(`${page.source}: lesson front matter must include summary`);
  }
  if (!Object.prototype.hasOwnProperty.call(page.fm, "requires")) {
    fail(`${page.source}: lesson front matter must include requires`);
  }
  if (!Object.prototype.hasOwnProperty.call(page.fm, "infographics")) {
    fail(`${page.source}: lesson front matter must include infographics`);
  }
  const listed = Array.isArray(page.fm.requires)
    ? page.fm.requires
    : page.fm.requires ? [page.fm.requires] : [];
  const dependencies = listed.map((item) => resolveRequirement(page, item)).filter(Boolean);
  prerequisiteGraph.set(page, dependencies);
}

{
  const state = new Map();
  const stack = [];
  const visit = (page) => {
    if (state.get(page) === "done") return;
    if (state.get(page) === "open") {
      const start = stack.indexOf(page);
      const cycle = [...stack.slice(start), page].map((item) => item.source).join(" → ");
      fail(`lesson prerequisite cycle — ${cycle}`);
      return;
    }
    state.set(page, "open");
    stack.push(page);
    for (const dependency of prerequisiteGraph.get(page) || []) {
      if (dependency.kind !== "lesson") {
        fail(`${page.source}: prerequisite is not a lesson — ${dependency.source}`);
      } else {
        visit(dependency);
      }
    }
    stack.pop();
    state.set(page, "done");
  };
  for (const page of prerequisiteGraph.keys()) visit(page);
}

/* Directories without INDEX.md still get a section landing. This keeps the
 * sidebar and sitemap complete without requiring filler Markdown. */
const sectionDirectories = new Set();
for (const page of PAGES) {
  let directory = dirname(page.source);
  while (directory !== "." && CONTENT_ROOTS.some((root) => directory === root || directory.startsWith(`${root}/`))) {
    sectionDirectories.add(posix(directory));
    const next = dirname(directory);
    if (next === directory) break;
    directory = next;
  }
}
for (const directory of [...sectionDirectories].sort()) {
  const url = `${directory}/index.html`;
  if (PAGE_BY_URL.has(url)) continue;
  const configured = (COURSE.parts || []).find((part) => posix(part.path || "") === directory);
  const page = {
    source: "",
    url,
    title: configured?.title || titleCase(basename(directory)),
    short: configured?.title || titleCase(basename(directory)),
    summary: configured?.description || `Pages and working files in ${titleCase(basename(directory))}.`,
    fm: {},
    body: "",
    isIndex: true,
    kind: "section",
    synthetic: true,
    order: Number.MAX_SAFE_INTEGER,
    directory,
    anchors: new Set(),
  };
  PAGES.push(page);
  PAGE_BY_URL.set(url, page);
}
PAGES.sort(pageSort);

const assetHashes = new Map();
function asset(root, name) {
  if (!assetHashes.has(name)) {
    const path = join(ASSETS, name);
    if (!existsSync(path)) {
      fail(`missing asset web/assets/${name}`);
      assetHashes.set(name, "missing");
    } else {
      assetHashes.set(name, createHash("sha256").update(readFileSync(path)).digest("hex").slice(0, 8));
    }
  }
  return `${root}assets/${name}?v=${assetHashes.get(name)}`;
}

const LINK_REFERENCES = [];
const DRAWN_INFOGRAPHICS = new Set();
const PROMPTS = [];
const CODE_TOKEN = "\u0000C";

function recordAnchorReference(ctx, target, hash, raw) {
  if (!hash || hash === "#") return;
  let anchor = hash.slice(1);
  try {
    anchor = decodeURIComponent(anchor);
  } catch {
    fail(`${ctx.source}: malformed anchor encoding — ${raw}`);
  }
  LINK_REFERENCES.push({ source: ctx.source, target, anchor, raw });
}

function internalOutputLink(path, hash, ctx, raw) {
  const currentDirectory = posix(dirname(ctx.page.url));
  const targetUrl = posix(resolve("/", currentDirectory, path).slice(1));
  const target = PAGE_BY_URL.get(targetUrl);
  if (!target) return null;
  recordAnchorReference(ctx, target, hash, raw);
  return `${ctx.root}${targetUrl}${hash}`;
}

function linkFor(href, ctx, { image = false, alt = "" } = {}) {
  const raw = String(href ?? "").trim();
  if (!raw) return raw;
  if (/^(https?:|mailto:|tel:)/i.test(raw)) return raw;
  if (/^[a-z][\w+.-]*:/i.test(raw)) {
    fail(`${ctx.source}: unsupported URL scheme — ${raw}`);
    return "#";
  }

  const hashAt = raw.indexOf("#");
  const beforeHash = hashAt >= 0 ? raw.slice(0, hashAt) : raw;
  const hash = hashAt >= 0 ? raw.slice(hashAt) : "";
  const queryAt = beforeHash.indexOf("?");
  const pathPart = queryAt >= 0 ? beforeHash.slice(0, queryAt) : beforeHash;
  const query = queryAt >= 0 ? beforeHash.slice(queryAt) : "";

  if (!pathPart) {
    recordAnchorReference(ctx, ctx.page, hash, raw);
    return `${query}${hash}`;
  }

  if (pathPart.startsWith("/infographics/")) {
    const filename = pathPart.slice("/infographics/".length);
    const path = join(INFOGRAPHICS, filename);
    if (!filename || filename.includes("..") || !existsSync(path)) {
      fail(`${ctx.source}: missing infographic — ${raw}`);
      return raw;
    }
    if (image) {
      if (!alt.trim()) fail(`${ctx.source}: infographic ${filename} has empty alt text`);
      DRAWN_INFOGRAPHICS.add(filename);
    }
    return `${ctx.root}infographics/${filename}${query}${hash}`;
  }

  if (pathPart.startsWith(PATH_PREFIX)) {
    const targetUrl = pathPart.slice(PATH_PREFIX.length).replace(/^\/+/, "") || "index.html";
    const normalized = targetUrl.endsWith("/") ? `${targetUrl}index.html` : targetUrl;
    const target = PAGE_BY_URL.get(normalized);
    if (!target && normalized !== "index.html") fail(`${ctx.source}: broken site link — ${raw}`);
    if (target) recordAnchorReference(ctx, target, hash, raw);
    return raw;
  }

  if (/\.html$/i.test(pathPart) || pathPart.endsWith("/")) {
    const normalized = pathPart.endsWith("/") ? `${pathPart}index.html` : pathPart;
    const output = internalOutputLink(normalized, hash, ctx, raw);
    if (output) {
      const withoutHash = hash ? output.slice(0, -hash.length) : output;
      return `${withoutHash}${query}${hash}`;
    }
  }

  let decoded = pathPart;
  try {
    decoded = decodeURIComponent(pathPart);
  } catch {
    fail(`${ctx.source}: malformed path encoding — ${raw}`);
  }
  const sourceDirectory = ctx.source ? dirname(ctx.source) : ".";
  const absolute = resolve(join(ROOT, sourceDirectory), decoded);
  const repositoryPath = posix(relative(ROOT, absolute));
  if (repositoryPath.startsWith("..")) {
    fail(`${ctx.source}: link escapes the repository — ${raw}`);
    return raw;
  }
  if (!existsSync(absolute)) {
    fail(`${ctx.source}: broken link — ${raw}`);
    return raw;
  }

  let target = PAGE_BY_SOURCE.get(repositoryPath);
  if (!target && statSync(absolute).isDirectory()) {
    target = PAGE_BY_SOURCE.get(`${repositoryPath}/INDEX.md`);
  }
  if (target) {
    recordAnchorReference(ctx, target, hash, raw);
    return `${ctx.root}${target.url}${query}${hash}`;
  }

  if (repositoryPath.startsWith("web/infographics/")) {
    const filename = repositoryPath.slice("web/infographics/".length);
    if (image) {
      if (!alt.trim()) fail(`${ctx.source}: infographic ${filename} has empty alt text`);
      DRAWN_INFOGRAPHICS.add(filename);
    }
    return `${ctx.root}infographics/${filename}${query}${hash}`;
  }
  if (repositoryPath.startsWith("web/assets/")) {
    const filename = repositoryPath.slice("web/assets/".length);
    if (image && !alt.trim()) fail(`${ctx.source}: image ${filename} has empty alt text`);
    return `${ctx.root}assets/${filename}${query}${hash}`;
  }

  if (image) {
    fail(`${ctx.source}: local image is outside the published asset directories — ${raw}`);
    return raw;
  }

  const directory = statSync(absolute).isDirectory();
  return `${directory ? TREE_URL : BLOB_URL}${repositoryPath}${directory ? "" : `${query}${hash}`}`;
}

function inline(text, ctx) {
  const codes = [];
  let output = String(text ?? "").replace(/`([^`]+)`/g, (_, code) => {
    codes.push(esc(code));
    return `${CODE_TOKEN}${codes.length - 1}\u0000`;
  });
  output = esc(output);
  const unescapeHref = (href) => String(href)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
  output = output.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_, alt, href) => {
    const url = linkFor(unescapeHref(href), ctx, { image: true, alt });
    if (!alt.trim()) fail(`${ctx.source}: image has empty alt text — ${href}`);
    return `<img src="${esc(url)}" alt="${alt}" loading="lazy" decoding="async">`;
  });
  output = output.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (_, label, href) => {
    const url = linkFor(unescapeHref(href), ctx);
    const external = /^https?:/i.test(url);
    return `<a href="${esc(url)}"${external ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
  });
  output = output.replace(/&lt;(https?:\/\/(?:(?!&gt;)\S)+)&gt;/g,
    '<a href="$1" target="_blank" rel="noopener">$1</a>');
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=$|[\s).,;:!?])/g, "$1<em>$2</em>");
  output = output.replace(/(^|[\s(])_([^_\s][^_]*?)_(?=$|[\s).,;:!?])/g, "$1<em>$2</em>");
  output = output.replace(new RegExp(`${CODE_TOKEN}(\\d+)\\u0000`, "g"),
    (_, index) => `<code>${codes[Number(index)]}</code>`);
  return output;
}

function tableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "")
    .split(/(?<!\\)\|/)
    .map((cell) => cell.replace(/\\\|/g, "|").trim());
}

function renderList(lines, index, ctx, output) {
  const startIndent = lines[index].match(/^(\s*)/)[1].length;
  const ordered = /^\s*\d+[.)]\s/.test(lines[index]);
  output.push(ordered ? "<ol>" : "<ul>");
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      const next = lines[index + 1] || "";
      if (!/^\s*([-*+]|\d+[.)])\s/.test(next)
        || next.match(/^(\s*)/)[1].length < startIndent) break;
      index += 1;
      continue;
    }
    const indent = line.match(/^(\s*)/)[1].length;
    if (indent < startIndent) break;
    const match = line.match(/^\s*([-*+]|\d+[.)])\s+(.*)$/);
    if (!match) break;
    if (indent > startIndent) {
      const nested = [];
      index = renderList(lines, index, ctx, nested);
      output[output.length - 1] = output[output.length - 1]
        .replace(/<\/li>$/, `${nested.join("")}</li>`);
      continue;
    }
    let body = match[2];
    while (index + 1 < lines.length) {
      const next = lines[index + 1];
      if (!next.trim() || /^\s*([-*+]|\d+[.)])\s/.test(next)) break;
      if (next.match(/^(\s*)/)[1].length <= startIndent) break;
      body += ` ${next.trim()}`;
      index += 1;
    }
    const checkbox = body.match(/^\[( |x|X)\]\s+(.*)$/);
    if (checkbox) body = `${checkbox[1] === " " ? "☐" : "✓"} ${checkbox[2]}`;
    output.push(`<li>${inline(body, ctx)}</li>`);
    index += 1;
  }
  output.push(ordered ? "</ol>" : "</ul>");
  return index;
}

const DIAGRAM_DIRECTORY = join(ASSETS, "diagrams");
const diagramTokens = () => {
  const tokenPath = join(ASSETS, "tokens.css");
  if (!existsSync(tokenPath)) return {};
  const css = readFileSync(tokenPath, "utf8");
  const darkAt = css.indexOf(':root[data-theme="dark"]');
  const light = darkAt >= 0 ? css.slice(0, darkAt) : css;
  return Object.fromEntries([...light.matchAll(/--(dg-[a-z-]+):\s*(#[0-9a-fA-F]{3,8})/g)]
    .map(([, key, value]) => [key, value.toLowerCase()]));
};
const DG_LIGHT = diagramTokens();

function diagram(name, ctx) {
  const path = join(DIAGRAM_DIRECTORY, `${name}.svg`);
  if (!existsSync(path)) {
    fail(`${ctx.source}: missing diagram web/assets/diagrams/${name}.svg`);
    return "";
  }
  const svg = readFileSync(path, "utf8").replace(/<\?xml[^>]*\?>\s*/i, "").trim();
  if (/<(?:script|foreignObject)\b/i.test(svg) || /\son\w+\s*=/i.test(svg)) {
    fail(`web/assets/diagrams/${name}.svg: unsafe executable SVG content`);
  }
  if (/<style[\s>]/i.test(svg)) {
    fail(`web/assets/diagrams/${name}.svg: use presentation attributes, not a style block`);
  }
  for (const [, token, literal] of svg.matchAll(/var\(--(dg-[a-z-]+),\s*(#[0-9a-fA-F]{3,8})\)/g)) {
    if (!DG_LIGHT[token]) fail(`web/assets/diagrams/${name}.svg: --${token} is not defined in tokens.css`);
    else if (DG_LIGHT[token] !== literal.toLowerCase()) {
      fail(`web/assets/diagrams/${name}.svg: --${token} fallback ${literal} does not match ${DG_LIGHT[token]}`);
    }
  }
  const caption = clean((svg.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");
  if (!caption) fail(`web/assets/diagrams/${name}.svg: add a non-empty <title>`);
  return `<figure class="figure figure-wide"><a href="${ctx.root}assets/diagrams/${esc(name)}.svg" class="figure-zoom">${svg}</a>`
    + `<figcaption class="figure-cap">${esc(caption)}</figcaption></figure>`;
}

function mdToHtml(source, ctx) {
  const lines = String(source).replace(/\r\n/g, "\n").split("\n");
  const output = [];
  let index = 0;
  let promptNumber = 0;
  let lastHeading = ctx.page.title;
  while (index < lines.length) {
    const line = lines[index];
    const diagramMatch = line.match(/^<!--\s*DIAGRAM:\s*([a-z0-9-]+)\s*-->\s*$/i);
    if (diagramMatch) {
      output.push(diagram(diagramMatch[1], ctx));
      index += 1;
      continue;
    }

    const figure = line.trim().match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/);
    if (figure) {
      const [, alt, href] = figure;
      if (!alt.trim()) fail(`${ctx.source}: figure has empty alt text — ${href}`);
      const url = linkFor(href, ctx, { image: true, alt });
      output.push(`<figure class="figure figure-wide"><a href="${esc(url)}" class="figure-zoom">`
        + `<img src="${esc(url)}" alt="${esc(alt)}" loading="lazy" decoding="async"></a>`
        + `<figcaption class="figure-cap">${inline(alt, ctx)}</figcaption></figure>`);
      index += 1;
      continue;
    }

    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^(\s*)(```+|~~~+)\s*([\w-]*)\s*$/);
    if (fence) {
      const [, indentation, mark, language] = fence;
      const body = [];
      const closer = new RegExp(`^\\s*${mark[0]}{${mark.length},}\\s*$`);
      index += 1;
      while (index < lines.length && !closer.test(lines[index])) {
        const contentLine = lines[index++];
        body.push(contentLine.startsWith(indentation) ? contentLine.slice(indentation.length) : contentLine);
      }
      if (index >= lines.length) fail(`${ctx.source}: unclosed ${mark} fence`);
      else index += 1;
      const isPrompt = language.toLowerCase() === "prompt";
      const id = isPrompt ? `prompt-${++promptNumber}` : "";
      if (isPrompt) {
        ctx.ids.add(id);
        if (ctx.collectPrompts !== false) {
          PROMPTS.push({
            title: lastHeading || ctx.page.title,
            page: ctx.page,
            id,
            text: body.join("\n"),
          });
        }
      }
      const pre = `<pre${isPrompt ? ' data-copy="prompt"' : ""}${language ? ` class="lang-${esc(language)}"` : ""}><code>${esc(body.join("\n"))}</code></pre>`;
      output.push(isPrompt ? `<div class="codeblock prompt-block" id="${id}">${pre}</div>` : pre);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*?)\s*#*$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      const base = slugify(plain(text)) || "section";
      let id = base;
      let suffix = 1;
      while (ctx.ids.has(id)) id = `${base}-${++suffix}`;
      ctx.ids.add(id);
      lastHeading = plain(text);
      if (level >= 2 && level <= 3) ctx.toc.push({ level, id, text: lastHeading });
      output.push(`<h${level} id="${esc(id)}">${inline(text, ctx)}</h${level}>`);
      index += 1;
      continue;
    }

    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      output.push("<hr>");
      index += 1;
      continue;
    }

    if (/^\s*\|/.test(line) && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(lines[index + 1] || "")) {
      const headings = tableRow(line);
      const alignment = tableRow(lines[index + 1]).map((cell) =>
        cell.startsWith(":") && cell.endsWith(":") ? "center"
          : cell.endsWith(":") ? "right"
            : cell.startsWith(":") ? "left" : "");
      index += 2;
      const rows = [];
      while (index < lines.length && /^\s*\|/.test(lines[index])) rows.push(tableRow(lines[index++]));
      const head = headings.map((cell, cellIndex) =>
        `<th${alignment[cellIndex] ? ` style="text-align:${alignment[cellIndex]}"` : ""}>${inline(cell, ctx)}</th>`).join("");
      const body = rows.map((row) => `<tr>${headings.map((_, cellIndex) =>
        `<td${alignment[cellIndex] ? ` style="text-align:${alignment[cellIndex]}"` : ""}>${inline(row[cellIndex] ?? "", ctx)}</td>`).join("")}</tr>`).join("\n");
      output.push(`<div class="table-wrap"><table class="data"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`);
      continue;
    }

    if (/^\s*>/.test(line)) {
      const body = [];
      while (index < lines.length && /^\s*>/.test(lines[index])) {
        body.push(lines[index++].replace(/^\s*>\s?/, ""));
      }
      const inner = mdToHtml(body.join("\n"), { ...ctx, toc: [] });
      output.push(`<blockquote>${inner}</blockquote>`);
      continue;
    }

    if (/^\s*([-*+]|\d+[.)])\s+/.test(line)) {
      index = renderList(lines, index, ctx, output);
      continue;
    }

    const paragraph = [];
    while (index < lines.length && lines[index].trim()
      && !/^\s*(#{1,6}\s|>|\||```|~~~|-{3,}$|\*{3,}$)/.test(lines[index])
      && !/^\s*([-*+]|\d+[.)])\s+/.test(lines[index])
      && !/^<!--\s*DIAGRAM:/i.test(lines[index])) {
      paragraph.push(lines[index++]);
    }
    if (paragraph.length) output.push(`<p>${inline(paragraph.join(" ").trim(), ctx)}</p>`);
  }
  return output.join("\n");
}

const icon = (path) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
const ICONS = {
  search: icon('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
  sun: icon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"/>'),
  moon: icon('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'),
  up: icon('<path d="m18 15-6-6-6 6"/>'),
  arrow: icon('<path d="M5 12h14m-6-6 6 6-6 6"/>'),
  github: icon('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19.8 5a4.9 4.9 0 0 0-.1-3.7S18.5.8 16 2.5a13 13 0 0 0-7 0C6.5.8 5.3 1.3 5.3 1.3A4.9 4.9 0 0 0 5.2 5a5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-1 2.6V22"/>'),
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.4V21H3.3V8.9Zm5.53 0h3.26v1.65h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.08 2.27 4.08 5.22V21h-3.4v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-3.4V8.9Z"/></svg>',
  mark: icon('<path d="M4 5h7v6H4zM13 5h7v6h-7zM4 13h7v6H4z"/><path d="m14 16 2 2 4-5"/>'),
  compass: icon('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>'),
  book: icon('<path d="M12 7v13"/><path d="M3 18V4h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5v14h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z"/>'),
  build: icon('<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"/>'),
  teach: icon('<path d="M3 4h18v12H3z"/><path d="M8 20h8M12 16v4"/><path d="m7 9 2 2 4-4"/>'),
  reference: icon('<path d="M5 3h14v18H5z"/><path d="M9 7h6M9 11h6M9 15h4"/>'),
  prompts: icon('<path d="M4 5h16v12H8l-4 4V5Z"/><path d="M8 9h8M8 13h5"/>'),
  chevron: icon('<path d="m9 18 6-6-6-6"/>'),
};

function sectionPageForDirectory(directory) {
  return PAGE_BY_URL.get(`${directory}/index.html`);
}

const NAV = [];
const startItems = PAGES.filter((page) =>
  page.source && dirname(page.source) === "lessons" && !page.isIndex);
NAV.push({
  group: "Start here",
  icon: "compass",
  landing: "index.html",
  items: [
    { url: "index.html", title: "Choose a route" },
    ...startItems.sort(pageSort).map((page) => ({ url: page.url, title: page.short })),
  ],
});

for (const part of COURSE.parts || []) {
  const directory = posix(part.path || "");
  const landing = sectionPageForDirectory(directory);
  if (!directory || !landing) {
    fail(`course.config.json: part "${part.id || part.title}" has no section at ${directory}`);
    continue;
  }
  const items = PAGES.filter((page) =>
    page.source
    && dirname(page.source) === directory
    && page.url !== landing.url)
    .sort(pageSort)
    .map((page) => ({ url: page.url, title: page.short }));
  NAV.push({
    group: part.title || landing.title,
    icon: part.id === "04" || part.id === "05" ? "build" : "book",
    landing: landing.url,
    items,
  });
}

const extraGroup = (root, group, iconName) => {
  const pages = PAGES.filter((page) => page.source && (page.source === `${root}/INDEX.md`
    || page.source === `${root}/README.md`
    || page.source.startsWith(`${root}/`))).sort(pageSort);
  if (!pages.length) return;
  const landing = PAGE_BY_SOURCE.get(`${root}/INDEX.md`)
    || PAGE_BY_SOURCE.get(`${root}/README.md`)
    || sectionPageForDirectory(root);
  NAV.push({
    group,
    icon: iconName,
    landing: landing?.url || pages[0].url,
    items: pages
      .filter((page) => page.url !== landing?.url)
      .map((page) => ({ url: page.url, title: page.short })),
  });
};
extraGroup("instructor", "For instructors", "teach");
extraGroup("reference", "Reference", "reference");
extraGroup("project-templates", "Project templates", "build");
NAV.push({
  group: "Prompt index",
  icon: "prompts",
  landing: "prompts/index.html",
  items: [{ url: "prompts/index.html", title: "Every reusable prompt" }],
});

function sidebar(root, active) {
  const link = (item) =>
    `<a class="nav-link" href="${root}${item.url}"${active === item.url ? ' aria-current="page"' : ""}>${esc(item.title)}</a>`;
  return `<nav class="sidebar" id="sidebar" aria-label="Course navigation">
${NAV.map((group) => {
    const holdsActive = group.landing === active || group.items.some((item) => item.url === active);
    return `<div class="sidebar-group${holdsActive ? "" : " is-collapsed"}" data-group>
  <div class="sidebar-head">
    <a class="sidebar-title" href="${root}${group.landing}"${group.landing === active ? ' aria-current="page"' : ""}>${ICONS[group.icon] || ""}${esc(group.group)}</a>
    <button class="sidebar-caret" type="button" aria-expanded="${holdsActive}" aria-label="${holdsActive ? "Collapse" : "Expand"} ${esc(group.group)}">${ICONS.chevron}</button>
  </div>
  <div class="sidebar-items">${group.items.map(link).join("\n")}</div>
</div>`;
  }).join("\n")}
</nav>`;
}

function shell({ url, title, description, body, toc = [], active, rootOverride = null }) {
  const root = rootOverride ?? rootFor(url);
  const pageTitle = url === "index.html" ? `${SITE_NAME} — ${TAGLINE}` : `${title} · ${SITE_NAME}`;
  const canonical = `${SITE_BASE}${url === "index.html" ? "" : url}`;
  const tocHtml = toc.length >= 3
    ? `<aside class="toc" aria-label="On this page"><div class="toc-title">On this page</div>
${toc.map((item) => `<a href="#${esc(item.id)}" class="l${item.level}">${esc(item.text)}</a>`).join("\n")}</aside>`
    : "";
  const structured = {
    "@context": "https://schema.org",
    "@type": url === "index.html" ? "Course" : "LearningResource",
    name: url === "index.html" ? SITE_NAME : title,
    description,
    url: canonical,
    isPartOf: url === "index.html" ? undefined : { "@type": "Course", name: SITE_NAME, url: SITE_BASE },
  };
  if (!structured.isPartOf) delete structured.isPartOf;
  const structuredJson = JSON.stringify(structured).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="en" data-theme="light" data-root="${root}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(pageTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(SITE_NAME)}">
<meta property="og:title" content="${esc(url === "index.html" ? SITE_NAME : title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(SITE_BASE)}assets/${OG_IMAGE}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(OG_ALT)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(url === "index.html" ? SITE_NAME : title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(SITE_BASE)}assets/${OG_IMAGE}">
<meta name="twitter:image:alt" content="${esc(OG_ALT)}">
<link rel="icon" href="${root}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
${ANALYTICS_ID ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${ANALYTICS_ID}");</script>` : ""}
<link rel="stylesheet" href="${asset(root, "tokens.css")}">
<link rel="stylesheet" href="${asset(root, "site.css")}">
<script>try{var d=document.documentElement,t=localStorage.getItem("ai-dev-theme");if(t)d.setAttribute("data-theme",t);else if(matchMedia("(prefers-color-scheme: dark)").matches)d.setAttribute("data-theme","dark");if(localStorage.getItem("ai-dev-rail-collapsed")==="1")d.classList.add("rail-collapsed")}catch(e){}</script>
<script type="application/ld+json">${structuredJson}</script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="topbar">
  <button class="nav-toggle" id="nav-toggle" aria-label="Open navigation" aria-controls="sidebar" aria-expanded="false"><span class="hb"><span class="hb-t"></span><span class="hb-m"></span><span class="hb-b"></span></span></button>
  <a class="brand" href="${root}index.html"><span class="brand-mark">${ICONS.mark}</span><span class="brand-name">AI <span class="thin">Dev</span></span></a>
  <div class="topbar-spacer"></div>
  <button class="searchbtn" data-search-open aria-label="Search this course">${ICONS.search}<span class="searchbtn-label">Search</span><kbd>⌘K</kbd></button>
  <a class="icon-btn" href="${REPO_URL}" target="_blank" rel="noopener" aria-label="Repository on GitHub">${ICONS.github}</a>
  <button class="icon-btn theme-toggle" id="theme-toggle" aria-label="Switch theme"><span class="sun">${ICONS.sun}</span><span class="moon">${ICONS.moon}</span></button>
</header>
<div class="scrim" id="scrim"></div>
<div class="layout">
${sidebar(root, active || url)}
<main class="content" id="main" tabindex="-1">
${tocHtml ? `<div class="content-with-toc"><div>${body}</div>${tocHtml}</div>` : body}
</main>
</div>
<footer class="footer"><div class="footer-inner">
  <div class="footer-author">
    <img class="author-avatar" src="${asset(root, AUTHOR.avatar || "jeremy.webp")}" alt="" width="48" height="48" loading="lazy">
    <div class="author-meta">
      <div class="author-role">${esc(AUTHOR.role || "Built and maintained by")}</div>
      <div class="author-nameline">
        <span class="author-name">${esc(AUTHOR.name || "Jeremy Fritzhand")}</span>
        <span class="author-links">
          <a href="${esc(AUTHOR.github || "https://github.com/fritzhand")}" target="_blank" rel="noopener" aria-label="${esc(AUTHOR.name || "Jeremy Fritzhand")} on GitHub" title="GitHub">${ICONS.github}</a>
          <a href="${esc(AUTHOR.linkedin || "https://www.linkedin.com/in/fritzhand/")}" target="_blank" rel="noopener" aria-label="${esc(AUTHOR.name || "Jeremy Fritzhand")} on LinkedIn" title="LinkedIn">${ICONS.linkedin}</a>
        </span>
      </div>
    </div>
  </div>
  <p class="footer-note">${esc(FOOTER_NOTE)}</p>
  <div class="f-links">
    <a href="${root}index.html">Home</a>
    <a href="${root}lessons/00-start-here.html">Quickstart</a>
    <a href="${root}lessons/06-doing-it-well/06-02-secrets-and-environment-variables.html">Safety</a>
    <a href="${REPO_URL}" target="_blank" rel="noopener">Repository</a>
    <span>MIT licensed</span>
  </div>
</div></footer>
<button class="to-top" id="to-top" aria-label="Back to top">${ICONS.up}</button>
<div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="Search">
  <div class="backdrop"></div>
  <div class="search-panel">
    <div class="search-head">${ICONS.search}<input id="search-input" type="search" placeholder="Search lessons, prompts, projects, and reference…" autocomplete="off" spellcheck="false" aria-label="Search"></div>
    <div id="search-status" class="sr-only" aria-live="polite"></div>
    <div class="results" id="search-results"></div>
    <div class="search-foot"><span><kbd>↑</kbd><kbd>↓</kbd> to move</span><span><kbd>↵</kbd> to open</span><span><kbd>esc</kbd> to close</span></div>
  </div>
</div>
<script src="${root}assets/search-index.js"></script>
<script src="${asset(root, "site.js")}"></script>
</body>
</html>`;
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, "assets"), { recursive: true });
const WRITTEN = new Set();

function writePage(url, html) {
  const path = join(OUT, url);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, html);
  WRITTEN.add(url);
}

function bodyWithoutFirstH1(body) {
  return String(body).replace(/^#\s+.*?\s*#*\s*$(?:\r?\n)?/m, "");
}

function directChildren(page) {
  const directory = page.synthetic ? page.directory : dirname(page.source);
  const pages = PAGES.filter((candidate) => {
    if (candidate === page) return false;
    if (candidate.synthetic) return dirname(candidate.directory) === directory;
    return dirname(candidate.source) === directory && candidate.url !== page.url;
  });
  if (directory === "lessons") {
    for (const part of COURSE.parts || []) {
      const landing = sectionPageForDirectory(posix(part.path || ""));
      if (landing && !pages.includes(landing)) pages.push(landing);
    }
  }
  return pages.sort(pageSort);
}

function childCards(page) {
  const children = directChildren(page);
  if (!children.length) return "";
  return `<div class="grid grid-2 section-cards">${children.map((child) =>
    `<a class="card" href="${rootFor(page.url)}${child.url}"><span class="badge b-plain">${esc(child.kind)}</span>`
      + `<h3>${esc(child.title)}</h3><p>${esc(truncate(child.summary, 150))}</p></a>`).join("\n")}</div>`;
}

function requirementLinks(page) {
  const dependencies = prerequisiteGraph.get(page) || [];
  if (!dependencies.length) return '<span class="muted">No prior lesson.</span>';
  const root = rootFor(page.url);
  return dependencies.map((dependency) =>
    `<a href="${root}${dependency.url}">${esc(dependency.title)}</a>`).join(", ");
}

for (const page of PAGES) {
  const titleAnchor = slugify(page.title) || "page";
  const context = {
    source: page.source || `[generated ${page.url}]`,
    dir: page.source ? dirname(page.source) : ".",
    root: rootFor(page.url),
    toc: [],
    ids: new Set([titleAnchor]),
    page,
    collectPrompts: true,
  };
  let rendered = page.synthetic ? "" : mdToHtml(bodyWithoutFirstH1(page.body), context);
  page.anchors = context.ids;
  let meta = "";
  if (page.kind === "lesson") {
    meta = `<div class="lesson-meta"><div><strong>Requires</strong><br>${requirementLinks(page)}</div>`
      + `<div><strong>Source</strong><br><a href="${BLOB_URL}${page.source}" target="_blank" rel="noopener">View the Markdown</a></div></div>`;
  }
  const cards = page.isIndex ? childCards(page) : "";
  const body = `<div class="page-head"><span class="eyebrow">${esc(page.kind)}</span>`
    + `<h1 id="${esc(titleAnchor)}">${esc(page.title)}</h1><p class="lede">${esc(page.summary)}</p></div>`
    + meta
    + (rendered ? `<div class="prose">${rendered}</div>` : "")
    + cards;
  writePage(page.url, shell({
    url: page.url,
    title: page.title,
    description: truncate(page.summary, 160),
    body,
    toc: context.toc,
  }));
}

/* The homepage comes from the route manifest. The first two configured routes
 * are the project spines, while instructor and reference routes remain one
 * click away. No curriculum prose is duplicated here. */
const configuredRoutes = [];
for (const route of COURSE.routes || []) {
  const page = PAGE_BY_SOURCE.get(route.start);
  if (!page) {
    fail(`course.config.json: route "${route.id}" starts at missing curriculum file ${route.start}`);
    continue;
  }
  configuredRoutes.push({ ...route, page });
}

const lessonCount = PAGES.filter((page) => page.kind === "lesson").length;
const projectRoutes = configuredRoutes.filter((route) => route.kind === "project");
const supportingRoutes = configuredRoutes.filter((route) => route.kind !== "project");
const routeCard = (route, primary = false) =>
  `<a class="card route-card${primary ? " route-primary" : ""}" href="${route.page.url}">`
    + `<span class="route-kind">${esc(route.kind || "route")}</span>`
    + `<h2>${esc(route.title)}</h2><p>${esc(route.description || route.page.summary)}</p>`
    + `<span class="route-go">Start this route ${ICONS.arrow}</span></a>`;

const homeBody = `<section class="hero course-hero"><div class="hero-copy">
  <span class="eyebrow">A project-first course</span>
  <h1>${esc(TAGLINE)}</h1>
  <p>${esc(COURSE.description || "Choose a project. Open a reference only when the project needs it. Keep a human approval gate before consequential changes.")}</p>
  <div class="hero-actions">
    ${projectRoutes[0] ? `<a class="btn btn-primary" href="${projectRoutes[0].page.url}">${esc(projectRoutes[0].title)} ${ICONS.arrow}</a>` : ""}
    ${projectRoutes[1] ? `<a class="btn btn-secondary" href="${projectRoutes[1].page.url}">${esc(projectRoutes[1].title)}</a>` : ""}
  </div>
</div></section>
<div class="prose section-gap"><h2 id="choose-a-project">Choose a project</h2>
<p>Start with the outcome you want. The course routes you to the smallest explanation needed for each step.</p></div>
<div class="grid grid-2 route-grid">${projectRoutes.map((route) => routeCard(route, true)).join("\n")}</div>
${supportingRoutes.length ? `<div class="prose section-gap"><h2 id="teach-or-look-something-up">Teach it or look something up</h2></div>
<div class="grid grid-2">${supportingRoutes.map((route) => routeCard(route)).join("\n")}</div>` : ""}
<div class="stats section-gap">
  <a class="stat" href="lessons/index.html"><div class="n">${lessonCount}</div><div class="l">lesson pages</div></a>
  <a class="stat" href="prompts/index.html"><div class="n">${PROMPTS.length}</div><div class="l">reusable prompts</div></a>
  <div class="stat"><div class="n">${projectRoutes.length}</div><div class="l">project routes</div></div>
  <div class="stat"><div class="n">1</div><div class="l">human in the loop</div></div>
</div>`;
writePage("index.html", shell({
  url: "index.html",
  title: SITE_NAME,
  description: COURSE.description || TAGLINE,
  body: homeBody,
}));

const promptCards = PROMPTS.map((prompt, index) => {
  const excerpt = truncate(clean(prompt.text), 180);
  const group = prompt.page.kind;
  return `<a class="prompt-card" href="${rootFor("prompts/index.html")}${prompt.page.url}#${prompt.id}" data-kind="${esc(group)}" data-search="${esc(`${prompt.title} ${prompt.page.title} ${prompt.text}`)}">`
    + `<span class="pc-num">${String(index + 1).padStart(2, "0")}</span>`
    + `<h3>${esc(prompt.title)}</h3><p class="pc-desc">${esc(excerpt)}</p>`
    + `<div class="pc-meta"><span class="badge b-plain">${esc(prompt.page.title)}</span></div></a>`;
}).join("\n");
const promptBody = `<div class="page-head"><span class="eyebrow">Prompt library</span>
  <h1 id="every-reusable-prompt">Every reusable prompt</h1>
  <p class="lede">Collected from <code>prompt</code> fences in the curriculum. Edit the context before you run one; review the output before it changes the project.</p>
</div>
<div class="lib-tools"><label class="lib-search">Search prompts <input id="lib-q" type="search" placeholder="Search by task or lesson…"></label>
  <div id="lib-count" class="lib-count"></div></div>
<div id="lib-grid" class="grid grid-2">${promptCards}</div>
<div id="lib-empty" class="empty-state" hidden><p>No prompts match that search.</p><button type="button" data-filter-reset>Clear search</button></div>`;
writePage("prompts/index.html", shell({
  url: "prompts/index.html",
  title: "Prompt index",
  description: "Every reusable prompt in the AI Dev curriculum.",
  body: promptBody,
}));
const promptIndexPage = {
  source: "[generated prompt index]",
  url: "prompts/index.html",
  title: "Prompt index",
  summary: "Every reusable prompt in the curriculum.",
  kind: "section",
  anchors: new Set(["every-reusable-prompt"]),
};
PAGE_BY_URL.set(promptIndexPage.url, promptIndexPage);

writePage("404.html", shell({
  url: "404.html",
  title: "Page not found",
  description: "That course page does not exist.",
  rootOverride: PATH_PREFIX,
  body: `<div class="page-head"><h1 id="page-not-found">Page not found</h1><p class="lede">That page does not exist, or it moved.</p></div>`
    + `<div class="prose"><p>Return to the <a href="${PATH_PREFIX}">course home</a>, open the <a href="${PATH_PREFIX}lessons/">course map</a>, or press <kbd>⌘K</kbd> to search.</p></div>`,
}));

/* Anchors can only be checked after every real page has been rendered. */
for (const reference of LINK_REFERENCES) {
  if (!reference.target.anchors.has(reference.anchor)) {
    fail(`${reference.source}: broken anchor ${reference.raw} — ${reference.target.url} has no #${reference.anchor}`);
  }
}

for (const page of PAGES) {
  if (!WRITTEN.has(page.url)) fail(`${page.source || page.url}: curriculum page was registered but not written`);
}
for (const group of NAV) {
  for (const target of [group.landing, ...group.items.map((item) => item.url)]) {
    if (!WRITTEN.has(target)) fail(`navigation target was not written — ${target}`);
  }
}

const searchIndex = [
  ...PAGES.map((page) => ({
    t: page.title,
    s: page.kind === "lesson" ? "Lesson" : "",
    d: truncate(page.summary, 120),
    k: page.kind,
    u: page.url,
  })),
  ...PROMPTS.map((prompt) => ({
    t: prompt.title,
    s: prompt.page.title,
    d: truncate(clean(prompt.text), 120),
    k: "prompt",
    u: `${prompt.page.url}#${prompt.id}`,
  })),
  {
    t: "Prompt index",
    s: "",
    d: "Every reusable prompt in the curriculum.",
    k: "section",
    u: "prompts/index.html",
  },
];

cpSync(ASSETS, join(OUT, "assets"), { recursive: true });
if (existsSync(INFOGRAPHICS)) {
  cpSync(INFOGRAPHICS, join(OUT, "infographics"), { recursive: true });
}
writeFileSync(join(OUT, "assets", "search-index.js"), `window.SEARCH_INDEX=${JSON.stringify(searchIndex)};`);

const faviconGlyph = ICONS.mark.replace(/^<svg[^>]*>|<\/svg>$/g, "");
writeFileSync(join(OUT, "assets", "favicon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">`
  + `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a3d5c"/>`
  + `<stop offset=".52" stop-color="#0b5a86"/><stop offset="1" stop-color="#0c5f6b"/></linearGradient>`
  + `<rect width="64" height="64" rx="14" fill="url(#g)"/>`
  + `<g transform="translate(11.75 11.75) scale(1.6875)" fill="none" stroke="#eef8fb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${faviconGlyph}</g></svg>`);

/* Every production infographic must be visible in curriculum Markdown and
 * traceable to the public inventory record. */
if (existsSync(INFOGRAPHICS)) {
  const directoryFiles = readdirSync(INFOGRAPHICS).filter((file) => !file.startsWith(".")).sort();
  const infographicFiles = directoryFiles.filter((file) => /\.webp$/i.test(file));
  for (const file of directoryFiles.filter((candidate) => !/\.webp$/i.test(candidate))) {
    fail(`web/infographics/${file}: production infographics must be WebP`);
  }
  const inventoryPath = join(ROOT, "infographics", "INDEX.md");
  const inventory = existsSync(inventoryPath) ? readFileSync(inventoryPath, "utf8") : "";
  if (infographicFiles.length && !inventory) {
    fail("web/infographics contains assets but infographics/INDEX.md is missing");
  }
  for (const file of infographicFiles) {
    const slug = basename(file, extname(file));
    const buffer = readFileSync(join(INFOGRAPHICS, file));
    let width = 0;
    let height = 0;
    if (buffer.subarray(0, 4).toString("ascii") !== "RIFF"
      || buffer.subarray(8, 12).toString("ascii") !== "WEBP") {
      fail(`web/infographics/${file}: invalid WebP container`);
    } else {
      for (let offset = 12; offset + 8 <= buffer.length;) {
        const type = buffer.subarray(offset, offset + 4).toString("ascii");
        const size = buffer.readUInt32LE(offset + 4);
        const data = offset + 8;
        if (type === "VP8 " && size >= 10
          && buffer[data + 3] === 0x9d && buffer[data + 4] === 0x01 && buffer[data + 5] === 0x2a) {
          width = buffer.readUInt16LE(data + 6) & 0x3fff;
          height = buffer.readUInt16LE(data + 8) & 0x3fff;
          break;
        }
        if (type === "VP8L" && size >= 5 && buffer[data] === 0x2f) {
          const bits = buffer.readUInt32LE(data + 1);
          width = (bits & 0x3fff) + 1;
          height = ((bits >>> 14) & 0x3fff) + 1;
          break;
        }
        if (type === "VP8X" && size >= 10) {
          width = buffer.readUIntLE(data + 4, 3) + 1;
          height = buffer.readUIntLE(data + 7, 3) + 1;
          break;
        }
        offset = data + size + (size % 2);
      }
    }
    if (width !== 1200 || height !== 675) {
      fail(`web/infographics/${file}: expected 1200×675, found ${width || "?"}×${height || "?"}`);
    }
    if (!DRAWN_INFOGRAPHICS.has(file)) {
      fail(`web/infographics/${file}: no curriculum page shows this asset`);
    }
    if (inventory && !inventory.includes(file) && !inventory.includes(slug)) {
      fail(`web/infographics/${file}: no record in infographics/INDEX.md`);
    }
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const approvedRow = new RegExp(`\\|\\s*\`${escapedSlug}\`\\s*\\|[^\\n]*\\|\\s*approved\\s*\\|`, "i");
    if (inventory && !approvedRow.test(inventory)) {
      fail(`web/infographics/${file}: inventory status is not approved`);
    }
    const specificationPath = join(ROOT, "infographics", "specs", `${slug}.md`);
    if (!existsSync(specificationPath)) {
      fail(`web/infographics/${file}: missing infographics/specs/${slug}.md`);
    } else {
      const specification = readFileSync(specificationPath, "utf8");
      for (const field of ["**Alt text:**", "**Caption:**", "## Review record"]) {
        if (!specification.includes(field)) {
          fail(`infographics/specs/${slug}.md: missing ${field}`);
        }
      }
    }
  }
}

const listedInfographics = new Set();
for (const page of PAGES.filter((candidate) => candidate.kind === "lesson")) {
  const listed = Array.isArray(page.fm.infographics)
    ? page.fm.infographics
    : page.fm.infographics ? [page.fm.infographics] : [];
  for (const entry of listed) {
    const value = String(entry);
    const filename = extname(value) ? basename(value) : `${basename(value)}.webp`;
    listedInfographics.add(filename);
    if (!existsSync(join(INFOGRAPHICS, filename))) {
      fail(`${page.source}: listed infographic does not exist at web/infographics/${filename}`);
    }
  }
}

function countSourcePrompts() {
  let count = 0;
  for (const page of PAGES.filter((candidate) => candidate.source)) {
    count += [...page.body.matchAll(/^\s*(?:```+|~~~+)\s*prompt\s*$/gim)].length;
  }
  return count;
}
const sourcePromptCount = countSourcePrompts();
if (sourcePromptCount !== PROMPTS.length) {
  fail(`prompt registration mismatch: found ${sourcePromptCount} prompt fences but indexed ${PROMPTS.length}`);
}
const ogCounts = {
  lessons: lessonCount,
  prompts: sourcePromptCount,
  routes: projectRoutes.length,
  visuals: existsSync(INFOGRAPHICS)
    ? readdirSync(INFOGRAPHICS).filter((file) => /\.webp$/i.test(file)).length
    : 0,
};
const ogSignature = createHash("sha256")
  .update(JSON.stringify({ name: SITE_NAME, tagline: TAGLINE, counts: ogCounts }))
  .digest("hex").slice(0, 16);
const ogSvgPath = join(ASSETS, "og.svg");
if (!existsSync(join(ASSETS, OG_IMAGE)) || !existsSync(ogSvgPath)) {
  fail("missing committed Open Graph assets — run: node tools/make-og.mjs");
} else {
  const ogSvg = readFileSync(ogSvgPath, "utf8");
  const signature = (ogSvg.match(/<metadata id="build-signature">([^<]+)<\/metadata>/) || [])[1];
  if (signature !== ogSignature) {
    fail(`Open Graph card is stale (expected signature ${ogSignature}) — run: node tools/make-og.mjs`);
  }
}

writeFileSync(join(OUT, ".nojekyll"), "");
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE_BASE}sitemap.xml\n`);
writeFileSync(join(OUT, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  + [...WRITTEN].filter((url) => url !== "404.html")
    .sort()
    .map((url) => `  <url><loc>${SITE_BASE}${url === "index.html" ? "" : url}</loc></url>`)
    .join("\n")
  + "\n</urlset>\n");

/* Crawl the generated HTML as a second line of defence. Markdown validation
 * covers authored links; this catches mistakes introduced by the shell,
 * navigation, homepage, asset hashes, or GitHub Pages base-path handling. */
for (const url of WRITTEN) {
  const html = readFileSync(join(OUT, url), "utf8");
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const raw = match[1].replace(/&amp;/g, "&");
    if (!raw || /^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(raw)) continue;
    const hashAt = raw.indexOf("#");
    const beforeHash = hashAt >= 0 ? raw.slice(0, hashAt) : raw;
    const hash = hashAt >= 0 ? raw.slice(hashAt + 1) : "";
    const queryAt = beforeHash.indexOf("?");
    let path = queryAt >= 0 ? beforeHash.slice(0, queryAt) : beforeHash;
    if (path.startsWith(PATH_PREFIX)) path = path.slice(PATH_PREFIX.length);
    else if (path.startsWith("/")) {
      fail(`${url}: generated link is outside configured base path — ${raw}`);
      continue;
    }
    const directoryLink = Boolean(path) && path.endsWith("/");
    const targetUrl = path
      ? posix(resolve("/", dirname(url), path).slice(1))
      : url;
    const normalized = directoryLink
      ? `${targetUrl ? `${targetUrl}/` : ""}index.html`
      : targetUrl;
    const targetPath = join(OUT, normalized);
    if (!existsSync(targetPath) || statSync(targetPath).isDirectory()) {
      fail(`${url}: generated link target is missing — ${raw}`);
      continue;
    }
    if (hash && /\.html$/i.test(normalized)) {
      let anchor = hash;
      try {
        anchor = decodeURIComponent(hash);
      } catch {
        fail(`${url}: generated link has malformed anchor — ${raw}`);
      }
      const targetHtml = readFileSync(targetPath, "utf8");
      const escapedAnchor = anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`\\s(?:id|name)="${escapedAnchor}"`).test(targetHtml)) {
        fail(`${url}: generated anchor target is missing — ${raw}`);
      }
    }
  }
}

/* Guard the copied engine itself against accidental legacy coupling. Build
 * the banned identifier in pieces so the validator does not flag itself. */
const forbiddenPhrases = [`startup${"-"}stack`, `ss${"-"}theme`, `ss${"-"}rail`];
const ownedTextFiles = [];
const collectText = (directory) => {
  if (!existsSync(directory)) return;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collectText(path);
    else if (/\.(?:mjs|js|css|json|md|yml|yaml|svg)$/i.test(entry.name)) ownedTextFiles.push(path);
  }
};
collectText(WEB);
collectText(join(ROOT, "tools"));
collectText(join(ROOT, ".github"));
ownedTextFiles.push(join(ROOT, "site.config.json"));
for (const path of ownedTextFiles.filter(existsSync)) {
  const source = readFileSync(path, "utf8").toLowerCase();
  for (const phrase of forbiddenPhrases) {
    if (source.includes(phrase)) fail(`${relative(ROOT, path)}: contains legacy engine identifier "${phrase}"`);
  }
}

if (errors.length) {
  console.error(`\nBuild failed — ${errors.length} problem${errors.length === 1 ? "" : "s"}:\n`);
  for (const error of [...new Set(errors)]) console.error(`  · ${error}`);
  console.error("");
  process.exit(1);
}

console.log(`Built ${WRITTEN.size} pages into _site/`);
console.log(`  ${lessonCount} lessons · ${PROMPTS.length} prompts · ${projectRoutes.length} project routes · ${searchIndex.length} search entries`);
