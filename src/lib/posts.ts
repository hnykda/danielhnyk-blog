import fs from "fs";
import path from "path";

export interface PostMetadata {
  title: string;
  slug: string;
  date: string;
  tags: string[];
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

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
