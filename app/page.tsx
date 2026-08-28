import { CommandDeck } from "@/components/CommandDeck";
import { SiteHeader } from "@/components/MobileNav";
import { siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Advertisting",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Discord",
  description:
    "Advertisting handles music, moderation, and the small jobs that keep a Discord server moving.",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "lordofsunshine",
    url: "https://github.com/lordofsunshine",
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function BotMap() {
  return (
    <div className="bot-map" id="map">
      <svg className="map-lines" viewBox="0 0 1000 660" preserveAspectRatio="none" aria-hidden="true">
        <path d="M500 330C430 254 324 201 189 173" />
        <path d="M500 330C584 242 702 208 827 179" />
        <path d="M500 330C408 409 319 466 189 493" />
        <path d="M500 330C592 410 708 466 833 492" />
        <path className="map-line-live" d="M189 173C302 107 695 106 827 179" />
      </svg>

      <div className="map-node map-node-moderation">
        <span className="node-symbol" aria-hidden="true">/</span>
        <div>
          <h2>Keep order</h2>
          <p>Ban, kick, mute, unmute.</p>
        </div>
      </div>

      <div className="map-node map-node-music">
        <span className="node-bars" aria-hidden="true"><i /><i /><i /></span>
        <div>
          <h2>Run the room</h2>
          <p>Play, pause, skip, queue.</p>
        </div>
      </div>

      <div className="map-core" aria-label="Advertisting connects music, moderation, and custom server tools">
        <span className="core-status"><i /> Online</span>
        <strong>Advertisting</strong>
        <small>one bot, fewer loose ends</small>
      </div>

      <div className="map-node map-node-custom">
        <span className="node-brackets" aria-hidden="true">{`{ }`}</span>
        <div>
          <h2>Make it yours</h2>
          <p>Custom commands for your server.</p>
        </div>
      </div>

      <div className="map-node map-node-community">
        <span className="node-orbit" aria-hidden="true"><i /></span>
        <div>
          <h2>Keep it moving</h2>
          <p>Small tools for everyday community work.</p>
        </div>
      </div>

      <div className="map-note">
        <span>THE SHORT VERSION</span>
        <p>It handles the repetitive stuff so people can get back to talking.</p>
      </div>
    </div>
  );
}

export default function Home() {
  const inviteUrl = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-orientation">Music in. Noise down. Your server keeps moving.</p>
            <h1 id="hero-title">A busy server needs a bot with range.</h1>
            <p className="hero-lede">
              Advertisting plays the queue, handles moderation, and takes care of the small jobs that pile up in Discord.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={inviteUrl || "#commands"}>
                {inviteUrl ? "Add to Discord" : "Browse commands"}
                <ArrowIcon />
              </a>
              <a className="button button-soft" href="https://github.com/lordofsunshine/discordbotsite">
                Open the repo
              </a>
            </div>
          </div>
          <div className="hero-side-note">
            <span>BUILT FOR</span>
            <p>People running a Discord server without wanting a second full-time job.</p>
          </div>
          <BotMap />
        </section>

        <section className="plain-language" aria-labelledby="plain-title">
          <div className="plain-title-wrap">
            <h2 id="plain-title">Useful where<br />it counts.</h2>
          </div>
          <div className="plain-copy">
            <p>
              Advertisting keeps music controls, moderation commands, and custom server habits within easy reach. Fewer repetitive jobs means more time for the room itself.
            </p>
            <p className="plain-aside">That is plenty for one bot.</p>
          </div>
        </section>

        <CommandDeck />

        <section className="tradition" id="tradition" aria-labelledby="tradition-title">
          <div className="tradition-year" aria-hidden="true">’21</div>
          <div className="tradition-copy">
            <h2 id="tradition-title">A little tradition,<br />still going.</h2>
            <p>
              Since 2021, I’ve kept a small tradition: I come back and rebuild this site. Thanks for sticking around. It means a lot.
            </p>
            <a className="button button-ink" href="https://github.com/lordofsunshine">
              See what I’m making
              <ArrowIcon />
            </a>
          </div>
          <div className="tradition-stamp" aria-hidden="true">
            <span>UPDATED</span>
            <strong>2026</strong>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a className="wordmark" href="#top">
            <span className="wordmark-mark" aria-hidden="true"><span /><span /></span>
            Advertisting
          </a>
          <p>MIT licensed. Built by lordofsunshine.</p>
          <a href="https://github.com/lordofsunshine/discordbotsite">GitHub repo</a>
        </div>
        <div className="footer-marquee" aria-hidden="true">
          <div className="footer-track">
            <span>STILL HERE / UPDATED 2026 / ADVERTISTING /</span>
            <span>STILL HERE / UPDATED 2026 / ADVERTISTING /</span>
            <span>STILL HERE / UPDATED 2026 / ADVERTISTING /</span>
            <span>STILL HERE / UPDATED 2026 / ADVERTISTING /</span>
            <span>STILL HERE / UPDATED 2026 / ADVERTISTING /</span>
            <span>STILL HERE / UPDATED 2026 / ADVERTISTING /</span>
          </div>
        </div>
        <p className="visually-hidden">Advertisting. Still here and updated in 2026.</p>
      </footer>
    </>
  );
}
