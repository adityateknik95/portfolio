import { skillGroups } from "@/lib/skills";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Section id="skills" className="py-20 sm:py-28">
      <SectionHeading
        eyebrow="02 / Skills"
        title="Tools I build with"
        description="Grouped by where they sit in the stack."
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06} className="h-full">
            <div className="flex h-full flex-col bg-surface p-6 sm:p-7">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
