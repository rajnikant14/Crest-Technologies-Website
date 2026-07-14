import Image from "next/image";

/** The C/T emblem alone (square). */
export function CrestMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={512}
      height={512}
      className={className}
      aria-hidden="true"
    />
  );
}

/**
 * Brand lockup. The source artwork sits on white, so the light variant uses
 * the full lockup directly; the dark variant pairs the mark (on a small white
 * chip) with a white wordmark.
 */
export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  if (dark) {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-white p-1">
          <CrestMark className="h-8 w-8" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
            Crest Technologies
          </span>
          <span className="spec-label mt-1 text-steel-400">
            Engineering · Compliance
          </span>
        </span>
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo-full.png"
        alt="Crest Technologies"
        width={880}
        height={309}
        priority
        className="h-11 w-auto"
      />
    </span>
  );
}
