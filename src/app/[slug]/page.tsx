import { getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

// Generate static paths for all posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Format date for display
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  try {
    // Dynamic import of the MDX file
    const post = await import(`../../../content/${slug}.mdx`);
    const { default: Content, metadata } = post;

    return (
      <article>
        <header className="post-header">
          <h1>{metadata.title}</h1>
          <div className="post-meta">
            <time>{formatDate(metadata.date)}</time>
            {metadata.tags.length > 0 && (
              <>
                {" · "}
                <span className="post-tags" style={{ display: "inline-flex" }}>
                  {metadata.tags.map((tag: string, i: number) => (
                    <span key={tag}>
                      {tag}
                      {i < metadata.tags.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </>
            )}
          </div>
        </header>
        <div className="post-content">
          <Content />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}

// Generate metadata for each post
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  try {
    const post = await import(`../../../content/${slug}.mdx`);
    return {
      title: `${post.metadata.title} | Daniel Hnyk`,
      description: post.metadata.title,
    };
  } catch {
    return {
      title: "Post Not Found | Daniel Hnyk",
    };
  }
}
