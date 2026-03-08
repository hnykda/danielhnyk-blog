import React from "react";
import { Track } from "./tracks";

function renderText(text: string): React.ReactNode[] {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      part
    )
  );
}

export function TrackEntry({ track }: { track: Track }) {
  return (
    <div className="exhibit-track">
      <h3>
        {track.title} <em>— {track.artist}</em>{" "}
        <a
          href={track.spotify}
          target="_blank"
          rel="noopener"
          className="exhibit-track-link"
          title="Listen on Spotify"
        >
          ♪
        </a>
      </h3>
      {track.description.map((para, i) => (
        <p key={i}>{renderText(para)}</p>
      ))}
      <details className="exhibit-why">
        <summary>why it&rsquo;s important for me</summary>
        <div className="exhibit-why-body">
          {track.why.map((para, i) => (
            <p key={i}>{renderText(para)}</p>
          ))}
        </div>
      </details>
    </div>
  );
}
