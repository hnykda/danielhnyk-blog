import React from "react";
import Image from "next/image";

type MDXComponents = {
  [key: string]: React.ComponentType<any>;
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const imageSrc = typeof src === "string" ? src : "";
      return (
        <Image
          src={imageSrc}
          alt={alt || ""}
          width={800}
          height={600}
          style={{
            maxWidth: "100%",
            height: "auto",
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            borderRadius: "0.5rem",
          }}
        />
      );
    },
    h1: ({ children }) => (
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "2rem", marginBottom: "0.75rem" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.5rem" }}>
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>{children}</p>
    ),
    ul: ({ children }) => (
      <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem", lineHeight: 1.7 }}>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol style={{ paddingLeft: "1.5rem", marginBottom: "1rem", lineHeight: 1.7 }}>{children}</ol>
    ),
    li: ({ children }) => <li style={{ marginBottom: "0.25rem" }}>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "4px solid #d1d5db",
          paddingLeft: "1rem",
          fontStyle: "italic",
          color: "#6b7280",
          margin: "1rem 0",
        }}
      >
        {children}
      </blockquote>
    ),
    // Code blocks - rehype-highlight handles syntax highlighting at build time
    pre: ({ children }) => <pre>{children}</pre>,
    a: ({ href, children }) => (
      <a
        href={href}
        style={{ color: "#2563eb" }}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
