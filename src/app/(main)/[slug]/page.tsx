import { getAllSlugs, getPostExcerpt } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
    const post = await import(`../../../../content/${slug}.mdx`);
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
        {metadata.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={metadata.image} alt="" className="post-hero" />
        )}
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
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await import(`../../../../content/${slug}.mdx`);
    const { title, date, tags } = post.metadata;
    const description =
      post.metadata.description ??
      getPostExcerpt(slug) ??
      `A post by Daniel Hnyk.`;
    const url = `/${slug}/`;
    // Hero image (webp) if the post has one, otherwise the generated card
    const image = post.metadata.image
      ? { url: post.metadata.image }
      : { url: `/og/${slug}`, width: 1200, height: 630, type: "image/png" };

    return {
      title,
      description,
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "article",
        url,
        siteName: "Daniel Hnyk",
        title,
        description,
        publishedTime: date,
        authors: ["Daniel Hnyk"],
        tags,
        images: [image],
      },
      twitter: {
        card: "summary_large_image",
        creator: "@hnykda",
        title,
        description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}
