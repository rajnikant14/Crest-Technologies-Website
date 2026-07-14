import { ButtonLink, SpecLabel } from "./ui";

export function CTASection({
  spec = "Next step",
  title = "Talk to an engineer, not an account manager.",
  body = "First conversations at Crest are with someone who has built and certified the kind of system you're dealing with. Tell us what you're working on — we'll tell you honestly whether and how we can help.",
  ctaLabel = "Start a conversation",
  ctaHref = "/contact",
}: {
  spec?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SpecLabel tone="light">{spec}</SpecLabel>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-300">{body}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={ctaHref} variant="brass">
              {ctaLabel}
            </ButtonLink>
            <ButtonLink href="/delivery-model" variant="outline-light">
              How we deliver
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
