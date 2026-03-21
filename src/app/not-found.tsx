import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "1rem",
        fontFamily: "'Crimson Pro', Georgia, serif",
        color: "var(--text-color)",
      }}
    >
      <div style={{ fontSize: "6rem", fontWeight: 600, lineHeight: 1 }}>
        404
      </div>
      <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
        och, nothing here, sorry
      </p>
      <Link href="/" style={{ color: "var(--link-color)", fontSize: "1rem" }}>
        go home
      </Link>
    </div>
  );
}
