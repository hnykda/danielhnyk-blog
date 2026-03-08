import { tracks } from "./tracks";
import { TrackEntry } from "./TrackEntry";

export function MusicSection() {
  return (
    <section className="exhibit-section" id="music">
      <h2>Music</h2>
      <p>
        Music does something to me that nothing else quite does. I want to call
        it spiritual, and I&rsquo;m uncomfortable with that word, and I&rsquo;ll
        use it anyway because it&rsquo;s accurate. Something in certain sounds
        reaches past the thinking mind and touches something else entirely.
      </p>
      <p>
        I&rsquo;m most moved, somewhat against my own preferences, by music that
        is deep, slow, simple, and a little sad. Melancholic, with an arc.
        Dramatic in the way that life is dramatic when you&rsquo;re paying
        attention. I would choose differently if I could. I can&rsquo;t.
      </p>
      <p>
        Some of these are here just because. Some speak to something I&rsquo;ve
        been trying to understand about existence. Some are attached to specific
        people or events I carry. The categories bleed into each other.
      </p>
      {tracks.map((track) => (
        <TrackEntry key={track.spotify} track={track} />
      ))}
    </section>
  );
}
