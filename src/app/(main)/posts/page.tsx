import { getAllPosts } from "@/lib/posts";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "2rem" }}>
        Posts
      </h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug} className="post-item">
            <div className="post-item-text">
              <div className="post-date">{formatDate(post.metadata.date)}</div>
              <h2 className="post-title">
                <a href={`/${post.slug}/`}>{post.metadata.title}</a>
              </h2>
              {post.metadata.tags.length > 0 && (
                <div className="post-tags">
                  {post.metadata.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {post.metadata.image && (
              <a href={`/${post.slug}/`} className="post-thumb-link">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.metadata.image}
                  alt=""
                  className="post-thumb"
                  loading="lazy"
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
