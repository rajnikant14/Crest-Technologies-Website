import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SpecLabel } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Crest Technologies — offices in Reading (UK), Hamburg (Germany) and Bengaluru (India). Enquiries answered by the relevant engineering practice.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Contact</SpecLabel>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Tell us what you&apos;re building — or buying
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            Enquiries route to the relevant practice lead, not a sales queue.
            Expect a substantive reply, typically within two working days —
            faster for deal-timeline requests.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink-900">Send an enquiry</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside>
          <h2 className="spec-label text-steel-500">Direct</h2>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block text-lg font-semibold text-ink-900 underline decoration-brass-400 underline-offset-4 hover:text-brass-600"
          >
            {site.email}
          </a>

          <h2 className="spec-label mt-10 text-steel-500">Offices</h2>
          <div className="mt-4 space-y-8">
            {site.offices.map((office) => (
              <div key={office.country} className="border-l-2 border-brass-500 pl-4">
                <p className="font-display text-base font-bold text-ink-900">
                  {office.country}
                </p>
                <p className="mt-1 text-sm font-semibold text-steel-700">{office.entity}</p>
                <p className="mt-1 text-sm leading-relaxed text-steel-500">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
