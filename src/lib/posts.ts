import fs from "fs";
import path from "path";

export interface PostMetadata {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description?: string;
  image?: string;
}

export interface Post {
  metadata: PostMetadata;
  slug: string;
}

const contentDir = path.join(process.cwd(), "content");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, "utf-8");

    // Extract metadata from the exported const
    const metadataMatch = content.match(
      /export const metadata = ({[\s\S]*?});/
    );

    if (metadataMatch) {
      try {
        // Use Function constructor to safely evaluate the object literal
        const metadataStr = metadataMatch[1];
        const metadata = new Function(`return ${metadataStr}`)() as PostMetadata;
        posts.push({ metadata, slug });
      } catch (e) {
        console.error(`Failed to parse metadata for ${file}:`, e);
      }
    }
  }

  // Sort by date, newest first
  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

// Fallback description for posts without an explicit one: first real
// paragraph of the MDX body, stripped of markdown, truncated at a word.
export function getPostExcerpt(slug: string, maxLen = 160): string | undefined {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  let text = fs.readFileSync(filePath, "utf-8");
  text = text.replace(/export const metadata = {[\s\S]*?};/, "");
  text = text.replace(/^import .*$/gm, "");
  text = text.replace(/```[\s\S]*?```/g, "");

  const paragraph = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find(
      (p) =>
        p.length > 0 &&
        !p.startsWith("#") &&
        !p.startsWith("---") &&
        !p.startsWith(">") &&
        !p.startsWith("|") &&
        !p.startsWith("<") &&
        // skip italic editorial notes like "*Part 1 of a series...*"
        !(p.startsWith("*") && p.endsWith("*"))
    );

  if (!paragraph) {
    return undefined;
  }

  let excerpt = paragraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (excerpt.length > maxLen) {
    excerpt = excerpt.slice(0, maxLen - 1).replace(/\s+\S*$/, "") + "…";
  }

  return excerpt;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
