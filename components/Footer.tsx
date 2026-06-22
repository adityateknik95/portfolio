import { site, mailtoHref, isPlaceholder } from "@/lib/site";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from "./icons";

type ContactRow = {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  external?: boolean;
};

export function Footer() {
  const emailReady = !isPlaceholder(site.email);
  const githubReady = !isPlaceholder(site.github);
  const linkedinReady = !isPlaceholder(site.linkedin);

  const rows: ContactRow[] = [
    {
      label: "Email",
      value: site.email,
      href: emailReady ? mailtoHref(site.email) : undefined,
      icon: <MailIcon className="h-4 w-4" />,
    },
    {
      label: "LinkedIn",
      value: site.linkedin,
      href: linkedinReady ? site.linkedin : undefined,
      icon: <LinkedinIcon className="h-4 w-4" />,
      external: true,
    },
    {
      label: "GitHub",
      value: site.github,
      href: githubReady ? site.github : undefined,
      icon: <GithubIcon className="h-4 w-4" />,
      external: true,
    },
    {
      label: "Location",
      value: site.location,
      icon: <PinIcon className="h-4 w-4" />,
    },
  ];

  return (
    <Section id="contact" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="04 / Contact"
        title="Let's talk"
        description="Open to SDE and AI/ML opportunities. The fastest way to reach me is email."
      />

      <Reveal>
        <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {rows.map((row) => {
            const content = (
              <>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface-2 text-accent">
                  {row.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-subtle">
                    {row.label}
                  </span>
                  <span className="block truncate text-sm text-foreground">
                    {row.value}
                  </span>
                </span>
                {row.href ? (
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-subtle transition-colors group-hover:text-accent" />
                ) : null}
              </>
            );

            return (
              <li key={row.label} className="bg-surface">
                {row.href ? (
                  <a
                    href={row.href}
                    {...(row.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 p-5 transition-colors hover:bg-surface-2"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    className="flex items-center gap-4 p-5"
                    title={
                      isPlaceholder(row.value)
                        ? "Add this in lib/site.ts"
                        : undefined
                    }
                  >
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-subtle sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js,
            Tailwind &amp; Framer Motion.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
