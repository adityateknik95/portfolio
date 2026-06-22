import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Accessible label when the section has no visible <h2>. */
  ariaLabel?: string;
};

export function Section({ id, children, className = "", ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  /** Small overline label, e.g. "02 / Skills". */
  eyebrow: string;
  title: string;
  /** Optional supporting line under the title. */
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
