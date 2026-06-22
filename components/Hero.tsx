import { site, mailtoHref, isPlaceholder } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight, DocumentIcon, GithubIcon, MailIcon } from "./icons";

export function Hero() {
  const githubReady = !isPlaceholder(site.github);
  const emailReady = !isPlaceholder(site.email);

  return (
    <section
      id="top"
      className="bg-grid relative flex min-h-[88vh] items-center"
    >
      <div className="mx-auto w-full max-w-content px-5 py-28 sm:px-8 sm:py-32">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.location} · Open to SDE &amp; AI/ML roles
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            {site.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted sm:text-xl">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-3 max-w-2xl text-sm text-subtle">
            Full-stack engineer who ships ML-backed systems end to end.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {/* Primary CTA — Resume */}
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-bg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            >
              <DocumentIcon className="h-4 w-4" />
              Résumé
            </a>

            {/* GitHub */}
            {githubReady ? (
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 text-subtle transition-colors group-hover:text-accent" />
              </a>
            ) : (
              <span
                title="Add your GitHub URL in lib/site.ts"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-border bg-surface px-5 py-3 text-sm font-medium text-subtle"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </span>
            )}

            {/* Email */}
            {emailReady ? (
              <a
                href={mailtoHref(site.email)}
                className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </a>
            ) : (
              <span
                title="Add your email in lib/site.ts"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-border bg-surface px-5 py-3 text-sm font-medium text-subtle"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
