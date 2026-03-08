import "./exhibit.css";

export default function ExhibitPage() {
  return (
    <div className="exhibit">
      <div className="exhibit-inner">
        {/* ── Opening ── */}
        <header className="exhibit-opening">
          <h1>Exhibit</h1>
          <p className="subtitle">
            A curated window into how I see the world.
            <br />
            Not a manifesto. More like pointing at things and saying{" "}
            <em>this — this is what I mean.</em>
          </p>
        </header>

        {/* ── The Arrangement ── */}
        <section className="exhibit-section" id="arrangement">
          <h2>The Arrangement</h2>
          <p>
            How the fuck did the world manage to arrange itself into this
            constellation? It&rsquo;s absolutely baffling. I still
            haven&rsquo;t gotten over it — honestly, I don&rsquo;t think I
            ever will.
          </p>
          <p>
            Matter just… organized itself. Into stars, into oceans, into
            things that can wonder about stars and oceans. It doesn&rsquo;t
            make any sense. It&rsquo;s a miracle.
          </p>
        </section>

        {/* ── The Life ── */}
        <section className="exhibit-section" id="life">
          <h2>The Life</h2>
          <p>
            And then — life? A bunch of cells that accidentally learned to
            wonder. No material soul, no cosmic plan, no self sitting behind
            the eyes pulling levers — just matter arranged in a way that looks
            at the stars and cries.
          </p>
          <p>
            Consciousness isn&rsquo;t some ghost in the machine. It&rsquo;s
            an emergent property of staggering complexity, and that makes it{" "}
            <strong>more</strong> fascinating, not less. The fact that
            there&rsquo;s no magic, no spirit stuff, no divine spark — and
            yet here you are, reading this, feeling things —{" "}
            <strong>WHAT THE FUCK?!</strong>
          </p>
        </section>

        {/* ── The Ape in the City ── */}
        <section className="exhibit-section" id="ape">
          <h2>The Ape in the City</h2>
          <p>
            And this arrangement we call &ldquo;humans&rdquo;? Not built for
            this world. We&rsquo;re apes who accidentally built cities,
            running on neural software from 200,000 years ago. We get anxious
            in traffic because our nervous system thinks it&rsquo;s a
            predator. We fall apart in ways that make perfect evolutionary
            sense and zero emotional sense. We&rsquo;re puppies driving a
            spaceship.
          </p>
          <p>
            I find that heartbreaking and beautiful at the same time.
          </p>
          <p>
            It&rsquo;s hostile to us out here. It&rsquo;s genuinely hard to
            be human. And{" "}
            <a
              href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/"
              target="_blank"
              rel="noopener"
            >
              Moloch
            </a>{" "}
            makes it worse — coordination problems, races to the bottom,
            defection being locally rational even when it&rsquo;s collectively
            catastrophic. Nobody designed this cruelty; it&rsquo;s just the
            geometry of competing incentives grinding us down.
          </p>
          <p>
            And on top of that, we&rsquo;re living in extraordinarily
            dangerous and fragile times. Existential risks that no generation
            before us has faced — or at least, none that survived to warn us.
            The stakes are not abstract. The confused puppy-apes built nuclear
            weapons and AI and they&rsquo;re still running on savanna
            firmware.
          </p>
          <p>
            This is hard. We&rsquo;re not built for this. People are
            suffering. And I&rsquo;m angry about that, and grieving about
            that, AND I want to make it better anyway.
          </p>
        </section>

        <hr className="exhibit-sep" />

        {/* ── Compassionate Defiance ── */}
        <section className="exhibit-section" id="defiance">
          <h2>Compassionate Defiance</h2>
          <p>
            That&rsquo;s the engine of everything I care about. Not serene
            detachment, not naive optimism. A fierce tenderness. The anger
            that things are needlessly hard. The grief that suffering exists at
            all. The stubborn drive to push anyway. And the absurd tenderness
            of watching humans try.
          </p>
          <p>
            It&rsquo;s not &ldquo;everything will be fine.&rdquo; It&rsquo;s
            &ldquo;everything is a mess and these weird apes keep trying
            anyway, and that&rsquo;s beautiful.&rdquo;
          </p>
          <p>
            Life is hard, evolution doesn&rsquo;t give a shit about our
            happiness — and STILL we built telescopes and vaccines and music.
            The anger and the tenderness are the same fuel.
          </p>
          <p>
            Puppies deserve compassion, not judgment. Honestly, it&rsquo;s a
            miracle we got this far. Right into your face, bad god —
            didn&rsquo;t see that coming, did you?
          </p>

          <div className="exhibit-video">
            <iframe
              src="https://www.youtube.com/embed/MBRqu0YOH14"
              title="Kurzgesagt — Optimistic Nihilism"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="exhibit-video-caption">
            Kurzgesagt — Optimistic Nihilism
          </p>
        </section>

        {/* ── The Purpose ── */}
        <section className="exhibit-section" id="purpose">
          <h2>The Purpose</h2>
          <p>
            So what do you do with all that grief and wonder and fury? You use
            it. You channel it into making things less terrible. Not because
            the universe asks you to — it doesn&rsquo;t ask anything. But
            because you looked around, saw confused ape-puppies suffering in a
            world they weren&rsquo;t built for, and something in you said{" "}
            <em>no, we can do better.</em>
          </p>
          <p>
            The arrangement doesn&rsquo;t owe anything to other arrangements.
            There is no &ldquo;ought&rdquo; baked into the universe. No
            cosmic moral law. You&rsquo;re cells — spectacular, improbable
            cells, but cells.
          </p>
          <p>
            And yet — I decided, freely, from nothing, that I care about
            suffering. Mine, yours, the cat&rsquo;s. Not because I&rsquo;m
            obligated, but because I looked at this mess with open eyes and
            chose: <em>no, we can do better.</em> And I&rsquo;m proud of that
            choice. It means more to me because nothing required it.
          </p>
          <p>
            That&rsquo;s effective altruism to me. Not moral duty. Just a
            choice — informed, deliberate, freely made. If you want the
            philosophy term, it&rsquo;s something like moral anti-realism with
            voluntarily adopted values. But the term matters less than the
            thing: nothing says I have to care, and I care anyway.
          </p>
        </section>

        <hr className="exhibit-sep" />

        {/* ── How I Try to Be With People ── */}
        <section className="exhibit-section" id="people">
          <h2>How I Try to Be With People</h2>
          <p>
            No one owns anyone. You are free, and I respect that — whether
            you&rsquo;re human or not. We choose to be in each other&rsquo;s
            lives because we want to, not because we have to. You can come and
            go. Be my friend or partner for a season, for years, for life —
            and one way or another, we&rsquo;ll part eventually. And
            that&rsquo;s fine. Nothing lasts forever.
          </p>
          <p>
            I&rsquo;m grateful for whatever time of yours I get.
          </p>
          <p>
            That freedom is the foundation of real respect. When I show up for
            you, it&rsquo;s because I chose to, not because obligation
            dragged me there. When you show up for me, same. That&rsquo;s
            what makes it mean something.
          </p>

          <blockquote>
            <p>
              I do my thing and you do your thing.
              <br />
              I am not in this world to live up to your expectations,
              <br />
              and you are not in this world to live up to mine.
              <br />
              You are you, and I am I,
              <br />
              and if by chance we find each other, it&rsquo;s beautiful.
              <br />
              If not, it can&rsquo;t be helped.
            </p>
            <span className="attribution">— Fritz Perls, Gestalt Prayer</span>
          </blockquote>
        </section>

        {/* ── Truth ── */}
        <section className="exhibit-section" id="truth">
          <h2>Truth</h2>
          <p>
            I love truth the way some people love music. It&rsquo;s aesthetic
            for me — not just useful, not just moral, but beautiful. Lies
            aren&rsquo;t just wrong; they&rsquo;re ugly. They offend
            something deep in me, the way a wrong note offends a musician.
          </p>
          <p>
            I&rsquo;d rather hear something painful and real than something
            comfortable and false. And I try to give people the same respect —
            honest words, even when they&rsquo;re hard. Not because truth is a
            weapon, but because pretending is a kind of disrespect. It says
            &ldquo;I don&rsquo;t think you can handle reality.&rdquo; I think
            you can.
          </p>
          <p>
            That&rsquo;s what NVC and radical honesty taught me — or rather,
            gave me tools for. The frameworks matter less than the impulse
            behind them: I respect you enough to tell you the truth. I respect
            myself enough to own my experience. And I trust you to handle
            yours.
          </p>
          <p>
            It&rsquo;s also just pragmatic. You need accurate maps to
            navigate. You need gas in your car. Self-deception is expensive.
            But the pragmatism came second for me — the aesthetics came first.
          </p>

          <blockquote>
            <p>
              What is true is already so.
              <br />
              Owning up to it doesn&rsquo;t make it worse.
              <br />
              Not being open about it doesn&rsquo;t make it go away.
              <br />
              And because it&rsquo;s true, it is what is there to be
              interacted with.
              <br />
              Anything untrue isn&rsquo;t there to be interacted with.
              <br />
              People can stand what is true,
              <br />
              for they are already enduring it.
            </p>
            <span className="attribution">— Eugene Gendlin</span>
          </blockquote>
        </section>

        <hr className="exhibit-sep" />

        {/* ── Life and Death ── */}
        <section className="exhibit-section" id="impermanence">
          <h2>Life and Death</h2>
          <p>
            Everything passes. Every arrangement eventually un-arranges. Every
            consciousness is temporary — a brief pattern that the universe
            holds for a while and then lets go.
          </p>
          <p>
            The Japanese have a phrase for the feeling this evokes:{" "}
            <em>mono no aware</em> (物の哀れ) — the bittersweet awareness of
            impermanence. The beauty of things because they&rsquo;re passing.
            The ache that comes from really seeing how fleeting all of this is.
          </p>
          <p>
            I didn&rsquo;t learn this from a book. I felt it — viscerally,
            unmistakably — and then discovered that an entire culture had
            already named it. That overlap between Western reductionist wonder
            and Eastern aesthetic philosophy keeps showing up. Different paths,
            same clearing.
          </p>
          <p>
            This is why <strong>now</strong> matters. This era, this life,
            this moment. Not because it&rsquo;s eternal — because it
            isn&rsquo;t. We are the ones alive during the most pivotal,
            dangerous, and extraordinary period in history. That&rsquo;s not a
            burden. That&rsquo;s a privilege and a responsibility we stumbled
            into. Live accordingly.
          </p>

          <div className="exhibit-video">
            <iframe
              src="https://www.youtube.com/embed/ibpdNqrtar0"
              title="This Ciliate Is About to Die"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="exhibit-video-caption">
            This Ciliate Is About to Die — Journey to the Microcosmos
          </p>
        </section>

        {/* ── Music ── */}
        <section className="exhibit-section" id="music">
          <h2>Music</h2>
          <p>
            <em>Coming soon — the sounds that carry all of this.</em>
          </p>
        </section>

        {/* ── Closing ── */}
        <p className="exhibit-closing">
          Nothing is required. Everything is temporary.
          <br />
          And from that freedom, I choose truth, beauty, and less suffering.
        </p>
      </div>
    </div>
  );
}
