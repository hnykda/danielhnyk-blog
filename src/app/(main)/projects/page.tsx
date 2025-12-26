export default function ProjectsPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "2rem" }}>
        Projects
      </h1>
      <p style={{ marginBottom: "2rem", color: "var(--text-muted)" }}>
        Most of my coding projects are on{" "}
        <a href="https://github.com/hnykda" target="_blank" rel="noopener">
          GitHub
        </a>
        . Here are a few:
      </p>
      <ul style={{ listStyle: "none" }}>
        <li style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            <a
              href="https://github.com/hnykda/wifi-heatmapper"
              target="_blank"
              rel="noopener"
            >
              wifi-heatmapper
            </a>
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Tool for creating WiFi signal heatmaps.
          </p>
        </li>
        <li style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Non-profit websites
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Various sites for non-profits, including{" "}
            <a
              href="https://github.com/hnykda/kokorovsky-dvur"
              target="_blank"
              rel="noopener"
            >
              kokorovsky-dvur
            </a>{" "}
            and{" "}
            <a href="https://sovazlutice.eu/" target="_blank" rel="noopener">
              sovazlutice.eu
            </a>{" "}
            (my first site ever—still in use!).
          </p>
        </li>
        <li style={{ marginBottom: "1.5rem" }}>
          <h2
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              marginBottom: "0.25rem",
            }}
          >
            Home server &amp; automation
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Server-related stuff for home server initiatives and home
            automation:{" "}
            <a
              href="https://github.com/hnykda/secureserver"
              target="_blank"
              rel="noopener"
            >
              secureserver
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/hnykda/tutos"
              target="_blank"
              rel="noopener"
            >
              tutos
            </a>{" "}
            (very old school).
          </p>
        </li>
      </ul>
    </div>
  );
}
