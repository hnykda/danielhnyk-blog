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
              href="https://github.com/hnykda/nooklet"
              target="_blank"
              rel="noopener"
            >
              nooklet
            </a>
          </h2>
          <p style={{ color: "var(--text-muted)" }}>
            Local-first outliner in the spirit of Logseq, with offline sync
            through a self-hosted server and an MCP server so AI agents can edit
            notes one bullet at a time. See
            <a
              href="https://nooklet.danielalder.cz"
              target="_blank"
              rel="noopener"
            >
              nooklet.danielalder.cz
            </a>{" "}
            and the{" "}
            <a href="/nooklet-local-first-outliner-for-agents">blog post</a>.
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
            Various sites for non-profits and local projects around Žlutice:
          </p>
          <ul
            style={{
              color: "var(--text-muted)",
              paddingLeft: "1.25rem",
              marginTop: "0.5rem",
            }}
          >
            <li>
              <a href="https://katovacesta.cz/" target="_blank" rel="noopener">
                katovacesta.cz
              </a>
              : Czech-German site for two tourist trails (Katova cesta and the
              Bergbauweg), with audio guides behind QR codes on the trail signs.
            </li>
            <li>
              <a
                href="https://github.com/hnykda/kokorovsky-dvur"
                target="_blank"
                rel="noopener"
              >
                kokorovsky-dvur
              </a>
              : campaign site to save Kokořovský dvůr, a manor farm from 1680
              in Žlutice.
            </li>
            <li>
              <a href="https://sovazlutice.eu/" target="_blank" rel="noopener">
                sovazlutice.eu
              </a>
              : site of SOVa, a local association that looks after sacral
              monuments and hiking trails around Žlutice. My first site ever,
              it's horrendous AND still in use!
            </li>
          </ul>
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
