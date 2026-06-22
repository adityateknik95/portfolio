import { site } from "@/lib/site";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <SectionHeading eyebrow="03 / About" title="About" />

      <Reveal>
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          <p>
            I&apos;m a final-year computer science engineering student who likes
            taking systems all the way from a rough idea to something running in
            production. My work sits where full-stack engineering meets applied
            ML — building the model, the API around it, and the interface people
            actually use.
          </p>
          <p>
            I&apos;m looking for{" "}
            <span className="text-foreground">SDE and AI/ML roles</span> where I
            can ship real products and keep learning from strong engineers.
            Based in {site.location}, and happy to work on-site, hybrid, or
            remote.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
