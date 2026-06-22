import type { ReactNode } from "react";
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

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_40px_-12px_rgba(122,162,247,0.25)] ${
        featured ? "p-7 sm:p-9" : "p-6"
      }`}
    >
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

      {/* Links row — pinned to the bottom for equal-height cards */}
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
    </article>
  );
}
