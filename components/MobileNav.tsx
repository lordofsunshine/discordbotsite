"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#map", label: "The bot" },
  { href: "#commands", label: "Commands" },
  { href: "#tradition", label: "The tradition" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const lastY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setCompact(y > 72 && y > lastY.current);
        lastY.current = y;
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("resize", onResize);
      window.requestAnimationFrame(() => firstLinkRef.current?.focus());
    }

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`site-header${compact && !open ? " is-compact" : ""}${dismissed ? " is-dismissed" : ""}`}
    >
      {!dismissed && (
        <div className="announcement">
          <a href="#tradition">The yearly rebuild is here. Welcome to the 2026 edition.</a>
          <button type="button" onClick={() => setDismissed(true)} aria-label="Dismiss announcement">
            <span aria-hidden="true">×</span>
          </button>
        </div>
      )}
      <div className="nav-bar">
        <div className="nav-inner">
          <a className="wordmark" href="#top" aria-label="Advertisting home">
            <span className="wordmark-mark" aria-hidden="true">
              <span />
              <span />
            </span>
            Advertisting
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="nav-repo" href="https://github.com/lordofsunshine/discordbotsite">
            GitHub
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu${open ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <button className="menu-backdrop" type="button" aria-label="Close menu" onClick={close} />
        <div className="menu-panel">
          <div className="menu-heading">
            <p>Pick a stop</p>
            <button className="menu-close" type="button" onClick={close} aria-label="Close menu">×</button>
          </div>
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={close}
              >
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="menu-github" href="https://github.com/lordofsunshine/discordbotsite">
            Open the repo
          </a>
        </div>
      </div>
    </header>
  );
}
