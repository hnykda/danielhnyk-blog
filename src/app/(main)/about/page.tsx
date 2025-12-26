export default function AboutPage() {
  return (
    <div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "2rem" }}>
        About
      </h1>
      <div style={{ lineHeight: 1.8 }}>
        <p style={{ marginBottom: "1.5rem" }}>
          I'm Daniel, a Prague-based engineer who can't seem to pick just one
          thing.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          Professionally, I'm VP of Engineering at{" "}
          <a href="https://futuresearch.ai" target="_blank" rel="noopener">
            Futuresearch
          </a>
          . I've worn most hats over the years—IC, project manager, product
          manager, engineering manager, even COO of a nonprofit—and genuinely
          enjoy switching between them. But I'm an engineer at heart, not a
          manager who ended up in tech. I take pride in my work and I'm
          occasionally available for interesting gigs. More details on{" "}
          <a
            href="https://www.linkedin.com/in/hnykdaniel/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
          .
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          Outside work, I tinker with home automation and IoT hardware, think
          about AI safety, and have a few failed startups behind me (but the
          10th time's the charm, right?). I co-founded the Prague Effective
          Altruism group in 2017 and started the local LessWrong meetup back in
          2015—philosophy, rationality, and figuring out how to do good are
          still important parts of my life, even if I'm not as active as in my
          prime years.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          I live here with my family. Some posts are about raising my daughter,
          because parenting is its own kind of engineering problem.
        </p>
        <p>
          I don't post much these days—not because life got boring, but because
          it got full.
        </p>
      </div>
    </div>
  );
}
