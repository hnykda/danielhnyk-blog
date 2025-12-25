import Database from "better-sqlite3";
import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as http from "http";

const DB_PATH = "/tmp/ghost.db";
const CONTENT_DIR = path.join(__dirname, "..", "content");
const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const GHOST_IMAGES_DIR = path.join(IMAGES_DIR, "ghost");
const EXTERNAL_IMAGES_DIR = path.join(IMAGES_DIR, "external");

interface Post {
  id: number;
  title: string;
  slug: string;
  markdown: string | null;
  published_at: string;
}

interface Tag {
  name: string;
}

// Ensure directories exist
function ensureDirs() {
  [CONTENT_DIR, GHOST_IMAGES_DIR, EXTERNAL_IMAGES_DIR].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Download a file from URL
function downloadFile(url: string, destPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          if (redirectUrl) {
            file.close();
            fs.unlinkSync(destPath);
            downloadFile(redirectUrl, destPath).then(resolve).catch(reject);
            return;
          }
        }

        if (response.statusCode !== 200) {
          file.close();
          fs.unlinkSync(destPath);
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }

        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        reject(err);
      });
  });
}

// Process image URLs in markdown
async function processImages(
  markdown: string
): Promise<{ content: string; downloadedImages: string[] }> {
  const downloadedImages: string[] = [];

  // Pattern for markdown images: ![alt](url)
  const imagePattern = /!\[([^\]]*)\]\(([^)]+)\)/g;

  let processedMarkdown = markdown;
  const matches = [...markdown.matchAll(imagePattern)];

  for (const match of matches) {
    const [fullMatch, alt, url] = match;

    // Handle Ghost local images
    if (url.startsWith("/content/images/")) {
      const newUrl = url.replace("/content/images/", "/images/ghost/");
      processedMarkdown = processedMarkdown.replace(
        fullMatch,
        `![${alt}](${newUrl})`
      );
      continue;
    }

    // Handle Dropbox images
    if (url.includes("dropbox.com")) {
      try {
        // Extract filename from URL
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split("/");
        let filename = pathParts[pathParts.length - 1];

        // Clean up filename
        filename = filename.replace(/\?.*$/, "");
        if (!filename.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
          filename += ".png";
        }

        // Make filename unique with hash
        const hash = Buffer.from(url).toString("base64").slice(0, 8);
        const ext = path.extname(filename);
        const base = path.basename(filename, ext);
        filename = `${base}-${hash}${ext}`;

        const destPath = path.join(EXTERNAL_IMAGES_DIR, filename);

        // Convert Dropbox URL to direct download
        let downloadUrl = url;
        if (url.includes("dropbox.com")) {
          downloadUrl = url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
          downloadUrl = downloadUrl.replace("?dl=0", "").replace("?raw=1", "");
        }

        if (!fs.existsSync(destPath)) {
          console.log(`  Downloading: ${filename}`);
          await downloadFile(downloadUrl, destPath);
          downloadedImages.push(filename);
        }

        const newUrl = `/images/external/${filename}`;
        processedMarkdown = processedMarkdown.replace(
          fullMatch,
          `![${alt}](${newUrl})`
        );
      } catch (err) {
        console.error(`  Failed to download ${url}:`, err);
      }
    }
  }

  return { content: processedMarkdown, downloadedImages };
}

// Escape special characters for JavaScript string
function escapeForJS(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n");
}

// Escape MDX-specific characters that would be interpreted as JSX
function escapeForMDX(markdown: string): string {
  // Split by code blocks to only escape outside of them
  const codeBlockPattern = /(```[\s\S]*?```|`[^`\n]+`)/g;
  const parts = markdown.split(codeBlockPattern);

  return parts
    .map((part, index) => {
      // Odd indices are code blocks, don't escape them
      if (index % 2 === 1) {
        return part;
      }

      // Escape angle bracket URLs: <http://...> -> http://...
      // Just remove the angle brackets entirely
      let escaped = part.replace(/<(https?:\/\/[^>]+)>/g, "$1");

      // Escape < followed by numbers (like <2.1) -> &lt;2.1
      escaped = escaped.replace(/<(\d)/g, "&lt;$1");

      // Escape <word> patterns that look like placeholders (not valid HTML)
      // Skip common HTML tags
      const htmlTags = new Set([
        "a", "abbr", "address", "area", "article", "aside", "audio",
        "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
        "canvas", "caption", "cite", "code", "col", "colgroup",
        "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
        "em", "embed", "fieldset", "figcaption", "figure", "footer", "form",
        "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html",
        "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link",
        "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript",
        "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress",
        "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small",
        "source", "span", "strong", "style", "sub", "summary", "sup", "svg",
        "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track",
        "u", "ul", "var", "video", "wbr",
      ]);
      escaped = escaped.replace(/<([a-z_][a-z0-9_]*(?:\/[a-z0-9_.]+)*)>/gi, (match, tag) => {
        const tagLower = tag.toLowerCase();
        if (htmlTags.has(tagLower)) {
          return match; // Keep HTML tags as-is
        }
        return `\`<${tag}>\``; // Escape placeholders
      });

      // Remove style attributes from HTML tags (React doesn't accept style as string)
      escaped = escaped.replace(/\s+style="[^"]*"/gi, "");

      // Remove class attributes too (often cause issues)
      escaped = escaped.replace(/\s+class="[^"]*"/gi, "");

      // Escape curly braces with backslash
      escaped = escaped.replace(/\{/g, "\\{");
      escaped = escaped.replace(/\}/g, "\\}");

      return escaped;
    })
    .join("");
}

// Generate MDX content
function generateMDX(
  title: string,
  slug: string,
  date: string,
  tags: string[],
  content: string
): string {
  const tagsArray = JSON.stringify(tags);

  return `export const metadata = {
  title: "${escapeForJS(title)}",
  slug: "${slug}",
  date: "${date}",
  tags: ${tagsArray},
};

${content}
`;
}

async function main() {
  console.log("Starting Ghost export...\n");

  ensureDirs();

  // Open database
  const db = new Database(DB_PATH, { readonly: true });

  // Get all published posts
  const posts = db
    .prepare(
      `
    SELECT id, title, slug, markdown, published_at
    FROM posts
    WHERE status = 'published' AND markdown IS NOT NULL
    ORDER BY published_at DESC
  `
    )
    .all() as Post[];

  console.log(`Found ${posts.length} published posts\n`);

  // Get tags for each post
  const getTagsStmt = db.prepare(`
    SELECT t.name
    FROM tags t
    JOIN posts_tags pt ON t.id = pt.tag_id
    WHERE pt.post_id = ?
  `);

  let processed = 0;
  let failed = 0;

  for (const post of posts) {
    try {
      console.log(`Processing: ${post.title}`);

      // Get tags
      const tags = (getTagsStmt.all(post.id) as Tag[]).map((t) => t.name);

      // Process images in markdown
      const { content: imageProcessed } = await processImages(post.markdown || "");

      // Escape MDX-specific characters
      const content = escapeForMDX(imageProcessed);

      // Format date
      const date = post.published_at.split(" ")[0];

      // Generate MDX
      const mdx = generateMDX(post.title, post.slug, date, tags, content);

      // Write file
      const filePath = path.join(CONTENT_DIR, `${post.slug}.mdx`);
      fs.writeFileSync(filePath, mdx);

      processed++;
    } catch (err) {
      console.error(`  Failed: ${err}`);
      failed++;
    }
  }

  db.close();

  console.log(`\nExport complete!`);
  console.log(`  Processed: ${processed}`);
  console.log(`  Failed: ${failed}`);
  console.log(`\nMDX files written to: ${CONTENT_DIR}`);
  console.log(
    `\nRemember to copy Ghost images from server to: ${GHOST_IMAGES_DIR}`
  );
}

main().catch(console.error);
