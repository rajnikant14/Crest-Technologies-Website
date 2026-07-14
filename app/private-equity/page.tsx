import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PadListItem, SectionHeading, SpecLabel } from "@/components/ui";
import { dealLifecycle, peIntro, peOffers } from "@/content/private-equity";

export const metadata: Metadata = {
  title: "Private Equity — Technical & Cybersecurity Due Diligence, Value Creation, GCC/BOT",
  description:
    "Technical and cybersecurity due diligence on embedded and OT-heavy targets, post-acquisition value creation, and GCC/BOT engineering capability build for portfolio companies.",
};

export default function PrivateEquityPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Private Equity</SpecLabel>
          <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            {peIntro.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            {peIntro.summary}
          </p>
        </div>

        {/* Deal lifecycle — the numbering maps to real engagement stages */}
        <div className="border-t border-ink-700">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="spec-label text-brass-300">Where Crest plugs into the deal</h2>
            <ol className="mt-6 grid gap-px overflow-hidden border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-5">
              {dealLifecycle.map((stage, i) => (
                <li key={stage.stage} className="bg-ink-900 p-5">
                  <span className="spec-label text-steel-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display mt-2 text-base font-bold text-white">
                    {stage.stage}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-steel-400">{stage.what}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* The three offers */}
      {peOffers.map((offer, i) => (
        <section
          key={offer.id}
          id={offer.id}
          className={i % 2 === 1 ? "bg-steel-50" : "bg-white"}
        >
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              spec={`Offer ${String(i + 1).padStart(2, "0")}`}
              title={offer.name}
              intro={offer.tagline}
            />
            <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                {offer.body.map((para) => (
                  <p key={para.slice(0, 40)} className="leading-relaxed text-steel-700">
                    {para}
                  </p>
                ))}
                <div className="border-l-4 border-brass-500 bg-brass-100/60 p-5">
                  <p className="spec-label text-brass-600">Why Crest</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-900">
                    {offer.differentiator}
                  </p>
                </div>
              </div>
              <aside className="border border-steel-200 bg-white p-7">
                <h3 className="spec-label text-steel-500">What you get</h3>
                <ul className="mt-4 space-y-3">
                  {offer.deliverables.map((d) => (
                    <PadListItem key={d}>{d}</PadListItem>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        spec="Deal timelines respected"
        title="Under exclusivity with a technical target?"
        body="Red-flag screens run in days; full confirmatory DD fits standard deal windows. Send a short note on the target's technology profile and we'll confirm scope, team and timeline within one working day."
        ctaLabel="Contact the DD team"
      />
    </>
  );
}
