"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { isPlaceholder } from "@/lib/site";
import { ArrowUpRight, GithubIcon, PlayIcon } from "./icons";

/** Is a link slot filled with a real (non-placeholder, non-empty) URL? */
function isReady(value?: string): value is string {
  return typeof value === "string" && value.length > 0 && !isPlaceholder(value);
}

type PillProps = {
  children: ReactNode;
  href?: string;
  /** "soon" = tasteful coming-soon state; "todo" = unfilled placeholder slot. */
  variant?: "active" | "soon" | "todo";
  title?: string;
};

function LinkPill({ children, href, variant = "active", title }: PillProps) {
  const baseStyle =
    "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors";

  if (variant === "active" && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyle} border border-border bg-surface-2 text-foreground hover:border-accent hover:text-accent`}
      >
        {children}
      </a>
    );
  }

  // Non-interactive states (no dead links).
  const mutedStyle =
    variant === "soon"
      ? "border border-border bg-surface-2 text-subtle"
      : "border border-dashed border-border bg-transparent text-subtle";

  return (
    <span
      className={`${baseStyle} ${mutedStyle} cursor-not-allowed`}
      title={title}
      aria-disabled="true"
    >
      {children}
    </span>
  );
}

type ProjectCardProps = {
  project: Project;
  /** 1-based position, shown as a quiet index. */
  index: number;
  /** First card renders larger/most prominent (same template, scaled up). */
  featured?: boolean;
};

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const { title, hook, detail, tech, links } = project;
  const demoReady = isReady(links.demo);
  const videoReady = isReady(links.video);

  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // Larger cards rotate less so the corners don't travel too far.
  const maxTilt = featured ? 3 : 6.5;

  function handlePointerMove(e: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    el.style.setProperty("--ry", `${(px - 0.5) * 2 * maxTilt}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 2 * maxTilt}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--s", "1.015");
    el.style.setProperty("--active", "1");
  }

  function handlePointerLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--s", "1");
    el.style.setProperty("--active", "0");
  }

  return (
    <article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`group relative h-full overflow-hidden rounded-xl border border-border bg-surface hover:border-accent/60 hover:shadow-[0_18px_50px_-20px_rgba(122,162,247,0.35)] ${
        featured ? "p-7 sm:p-9" : "p-6"
      }`}
      style={{
        transform:
          "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--s, 1))",
        transition:
          "transform 150ms ease-out, border-color 300ms ease, box-shadow 300ms ease",
      }}
    >
      {/* Cursor-tracking highlight (subtle, accent-tinted) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(40rem circle at var(--mx, 50%) var(--my, 50%), rgba(122,162,247,0.10), transparent 45%)",
          opacity: "var(--active, 0)",
          transition: "opacity 300ms ease",
        }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Header: index + featured tag */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-subtle">
            {String(index).padStart(2, "0")}
          </span>
          {featured ? (
            <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-accent">
              Featured
            </span>
          ) : null}
        </div>

        {/* Title */}
        <h3
          className={`font-display font-semibold tracking-tight text-foreground ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        {/* One-line hook */}
        <p
          className={`mt-2 text-pretty font-medium text-foreground/90 ${
            featured ? "text-base sm:text-lg" : "text-sm"
          }`}
        >
          {hook}
        </p>

        {/* Problem → approach → outcome */}
        <p
          className={`mt-3 text-pretty leading-relaxed text-muted ${
            featured ? "max-w-3xl text-base" : "text-sm"
          }`}
        >
          {detail}
        </p>

        {/* Tech pills */}
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        {/* Links row */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
          {demoReady ? (
            <LinkPill href={links.demo} variant="active">
              Live Demo
              <ArrowUpRight className="h-3 w-3" />
            </LinkPill>
          ) : videoReady ? (
            <LinkPill href={links.video} variant="active">
              <PlayIcon className="h-3 w-3" />
              Watch Demo
            </LinkPill>
          ) : (
            <LinkPill variant="soon">
              <span className="mr-0.5 inline-block h-1.5 w-1.5 rounded-full bg-subtle" />
              Demo coming soon
            </LinkPill>
          )}

          {isReady(links.github) ? (
            <LinkPill href={links.github} variant="active">
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </LinkPill>
          ) : links.github ? (
            <LinkPill variant="todo" title="Add the repo URL in lib/projects.ts">
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub
            </LinkPill>
          ) : null}

          {isReady(links.writeup) ? (
            <LinkPill href={links.writeup} variant="active">
              Writeup
              <ArrowUpRight className="h-3 w-3" />
            </LinkPill>
          ) : links.writeup ? (
            <LinkPill variant="todo" title="Optional — add a writeup URL in lib/projects.ts">
              Writeup
            </LinkPill>
          ) : null}
        </div>
      </div>
    </article>
  );
}
