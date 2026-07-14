import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { ArrowLink, SectionHeading, SpecLabel } from "@/components/ui";
import { team } from "@/content/company";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "The engineers and consultants behind Crest Technologies — embedded, mechanical, software, cloud and cybersecurity specialists across the UK, Germany and Bengaluru.",
};

function initials(name: string) {
  const parts = name.replace(/[[\]]/g, "").trim().split(/\s+/);
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Meet the team</SpecLabel>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            The engineers behind the evidence
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            Crest is built around practising engineers — embedded, mechanical,
            software, cloud and cybersecurity specialists across Reading,
            Hamburg and Bengaluru. The profiles below introduce the people you
            will actually work with.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          spec="Team"
          title="The leads you'll work with"
          intro="Technology, engineering, cybersecurity, software and quality leadership across Hamburg and the Bengaluru delivery centre."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <article
              key={`${person.name}-${i}`}
              className="flex flex-col border border-steel-200 p-7"
            >
              {person.photo ? (
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="font-display flex h-20 w-20 items-center justify-center bg-steel-100 text-2xl font-bold text-steel-400"
                >
                  {initials(person.name) || "•"}
                </span>
              )}
              <h3 className="font-display mt-5 text-xl font-bold text-ink-900">
                {person.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brass-600">{person.role}</p>
              <p className="spec-label mt-1 text-steel-400">{person.location}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-700">
                {person.bio}
              </p>
              {person.linkedin && (
                <ArrowLink href={person.linkedin} external className="mt-4">
                  LinkedIn
                </ArrowLink>
              )}
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <ArrowLink href="/about#leadership">Leadership profiles</ArrowLink>
          <ArrowLink href="/careers">Join the team — open roles</ArrowLink>
        </div>
      </section>

      <CTASection
        title="Want to be on this page?"
        body="We hire engineers who want their work to survive an audit — in Bengaluru, Reading and Hamburg. See the open roles or send a speculative application."
        ctaLabel="View careers"
        ctaHref="/careers"
      />
    </>
  );
}
