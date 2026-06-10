import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import { getAllSlugs } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function loadFont(file: string): Buffer | undefined {
  try {
    return fs.readFileSync(
      path.join(
        process.cwd(),
        "node_modules/@fontsource/crimson-pro/files",
        file
      )
    );
  } catch {
    return undefined;
  }
}

interface ImageProps {
  params: Promise<{ slug: string }>;
}

export default async function OpenGraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const post = await import(`../../../../content/${slug}.mdx`);
  const { title, date, tags } = post.metadata;

  const regular = loadFont("crimson-pro-latin-400-normal.woff");
  const semibold = loadFont("crimson-pro-latin-600-normal.woff");
  const fonts = [
    regular && {
      name: "Crimson Pro",
      data: regular,
      weight: 400 as const,
      style: "normal" as const,
    },
    semibold && {
      name: "Crimson Pro",
      data: semibold,
      weight: 600 as const,
      style: "normal" as const,
    },
  ].filter((f) => f !== undefined);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fafafa",
          padding: "72px 80px",
          fontFamily: "Crimson Pro, serif",
          borderTop: "12px solid #2563eb",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#6b7280" }}>
          danielhnyk.cz
        </div>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 56 : 68,
            fontWeight: 600,
            color: "#1a1a1a",
            lineHeight: 1.15,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 30,
            color: "#6b7280",
          }}
        >
          <div style={{ display: "flex" }}>{formatDate(date)}</div>
          <div style={{ display: "flex" }}>
            {(tags ?? []).slice(0, 3).join(" · ")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
