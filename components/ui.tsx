import Link from "next/link";
import type { ReactNode } from "react";

/** Monospace annotation label — the engineering-drawing voice. */
export function SpecLabel({
  children,
  tone = "brass",
  className = "",
}: {
  children: ReactNode;
  tone?: "brass" | "steel" | "signal" | "light";
  className?: string;
}) {
  const tones = {
    brass: "text-brass-600",
    steel: "text-steel-500",
    signal: "text-signal-700",
    light: "text-brass-300",
  };
  return (
    <span className={`spec-label block ${tones[tone]} ${className}`}>{children}</span>
  );
}

export function SectionHeading({
  spec,
  title,
  intro,
  tone = "brass",
  dark = false,
  className = "",
}: {
  spec: string;
  title: string;
  intro?: string;
  tone?: "brass" | "steel" | "signal" | "light";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <SpecLabel tone={dark ? "light" : tone}>{spec}</SpecLabel>
      <h2
        className={`font-display mt-3 text-3xl font-bold sm:text-4xl ${
          dark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-steel-300" : "text-steel-700"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light" | "brass";
  external?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors";
  const variants = {
    primary: "bg-ink-900 text-white hover:bg-ink-700",
    brass: "bg-brass-500 text-ink-950 hover:bg-brass-400",
    outline:
      "border border-steel-300 text-ink-900 hover:border-ink-900 hover:bg-steel-50",
    "outline-light":
      "border border-steel-500 text-white hover:border-brass-400 hover:text-brass-300",
  };
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      <span aria-hidden="true">{external ? "↗" : "→"}</span>
    </Link>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 hover:text-brass-600 ${className}`}
      {...props}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        {external ? "↗" : "→"}
      </span>
    </Link>
  );
}

/** Checklist row with a square pad marker instead of a generic tick. */
export function PadListItem({
  children,
  tone = "brass",
}: {
  children: ReactNode;
  tone?: "brass" | "signal";
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={`mt-[0.45rem] h-2 w-2 shrink-0 ${
          tone === "signal" ? "bg-signal-500" : "bg-brass-500"
        }`}
      />
      <span className="text-steel-700 leading-relaxed">{children}</span>
    </li>
  );
}
