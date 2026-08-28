"use client";

import { useMemo, useState } from "react";

const commands = [
  { name: "/play", description: "Play music from a link or a search.", group: "Music" },
  { name: "/skip", description: "Move the room to the next track.", group: "Music" },
  { name: "/pause", description: "Pause playback without losing the queue.", group: "Music" },
  { name: "/resume", description: "Pick up exactly where the track stopped.", group: "Music" },
  { name: "/queue", description: "See what is playing and what comes next.", group: "Music" },
  { name: "/clear", description: "Empty the current music queue.", group: "Music" },
  { name: "/ban", description: "Remove a member and block their return.", group: "Moderation" },
  { name: "/kick", description: "Remove a member from the server.", group: "Moderation" },
  { name: "/mute", description: "Quiet a member for a while.", group: "Moderation" },
  { name: "/unmute", description: "Let a muted member speak again.", group: "Moderation" },
];

export function CommandDeck() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase("en");

  const filtered = useMemo(() => {
    if (!normalizedQuery) return commands;
    return commands.filter((command) =>
      `${command.name} ${command.description} ${command.group}`
        .toLocaleLowerCase("en")
        .includes(normalizedQuery),
    );
  }, [normalizedQuery]);

  return (
    <section className="command-section" id="commands" aria-labelledby="commands-title">
      <div className="section-intro">
        <h2 id="commands-title">Say less.<br />Type one command.</h2>
        <p>
          Search the set that ships with this version. Everything is named plainly, so the useful command is easy to find.
        </p>
      </div>
      <div className="command-search">
        <label htmlFor="command-query">Find a command</label>
        <div className="search-field">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.75" cy="10.75" r="6.25" />
            <path d="m15.5 15.5 4 4" />
          </svg>
          <input
            id="command-query"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try music, mute, or /play"
            autoComplete="off"
            aria-controls="command-results"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear command search">
              Clear
            </button>
          )}
        </div>
        <p className="result-count" aria-live="polite">
          {filtered.length === 0
            ? "No match yet. Try “music” or “moderation”."
            : `${filtered.length} command${filtered.length === 1 ? "" : "s"} ready.`}
        </p>
      </div>
      <div className="command-list" id="command-results">
        {filtered.map((command, index) => (
          <article className="command-row" key={command.name}>
            <span className="command-index">{String(index + 1).padStart(2, "0")}</span>
            <code>{command.name}</code>
            <p>{command.description}</p>
            <span className="command-group">{command.group}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
