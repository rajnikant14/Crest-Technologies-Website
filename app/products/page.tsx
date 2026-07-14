import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SpecLabel } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products — TMUA.AI & Digital Product Passport",
  description:
    "Crest Technologies' product ventures: TMUA.AI, an EdTech platform for university admissions test preparation, and Digital Product Passport advisory for EU ESPR readiness with GreenX.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SpecLabel tone="light">Products</SpecLabel>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            The same engineering bench, applied to our own products
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-steel-300">
            Crest is expanding from services into products. Two ventures sit
            within our complete product-development offering today — an EdTech
            platform and a sustainability-compliance practice — each run as its
            own brand, built with the same secure development discipline as our
            client work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-20 sm:px-6 lg:px-8">
        {/* TMUA.AI */}
        <article className="grid gap-8 border border-steel-200 p-8 lg:grid-cols-[1fr_1.6fr] lg:p-12">
          <div>
            <SpecLabel tone="brass">EdTech venture</SpecLabel>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink-900">TMUA.AI</h2>
            <p className="spec-label mt-2 text-steel-400">tmua.ai</p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-steel-700">
              An AI-assisted preparation platform for the Test of Mathematics
              for University Admission (TMUA) — adaptive practice, worked
              solutions and performance analytics for students applying to
              mathematics-intensive degrees. TMUA.AI is a separate venture with
              its own site; it demonstrates the product engineering capability
              Crest brings to client work.
            </p>
            <a
              href={site.ventures.tmua.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-700"
            >
              Visit TMUA.AI <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* DPP */}
        <article className="grid gap-8 border-l-4 border-signal-500 border-y border-r border-y-steel-200 border-r-steel-200 bg-signal-100/40 p-8 lg:grid-cols-[1fr_1.6fr] lg:p-12">
          <div>
            <SpecLabel tone="signal">Sustainability venture</SpecLabel>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink-900">
              Digital Product Passport
            </h2>
            <p className="spec-label mt-2 text-steel-400">with GreenX · greenxcorp.com</p>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-steel-700">
              Advisory and implementation for EU Digital Product Passport /
              ESPR readiness — data model design, supply-chain traceability and
              compliance documentation for batteries, electronics and textiles
              ahead of the 2027 phase-in. Delivered by Crest with GreenX, our
              sustainability venture, applying the same CMP/QMS documentation
              discipline we use in certification work.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/products/digital-product-passport"
                className="inline-flex items-center gap-2 bg-signal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-signal-500"
              >
                DPP advisory at Crest <span aria-hidden="true">→</span>
              </Link>
              <a
                href={site.ventures.greenx.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-steel-300 px-6 py-3 text-sm font-semibold text-ink-900 hover:border-ink-900"
              >
                Visit GreenX <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </section>

      <CTASection
        title="Building a product of your own?"
        body="The teams behind these ventures are the same teams available for client product engineering — embedded, IoT, cloud and compliance under one roof."
      />
    </>
  );
}
