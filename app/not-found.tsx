import Link from "next/link";
import { SpecLabel } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-start px-4 py-32 sm:px-6 lg:px-8">
      <SpecLabel tone="brass">Error 404 · Signal not found</SpecLabel>
      <h1 className="font-display mt-4 text-4xl font-bold text-ink-900 sm:text-5xl">
        This trace leads nowhere.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-steel-700">
        The page you requested doesn&apos;t exist — it may have moved during a
        site update.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-700"
      >
        Back to home <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
