// Syntax highlighting is handled by rehype-prism-plus at build time
// Token styles are in globals.css

export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return <pre>{children}</pre>;
}
