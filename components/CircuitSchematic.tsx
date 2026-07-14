/**
 * Signature visual: a circuit-trace schematic fanning out from a single
 * source node to six service pillars. Traces draw in on load
 * (disabled under prefers-reduced-motion via globals.css).
 */

const pillars = [
  { code: "EMB", label: "Embedded Systems", y: 50 },
  { code: "MEC", label: "Mechanical Engineering", y: 126 },
  { code: "SW", label: "Software Services", y: 202 },
  { code: "CLD", label: "Cloud & Data", y: 278 },
  { code: "SEC", label: "IEC 62443", y: 354 },
  { code: "DPP", label: "Product Passport", y: 430 },
];

const SOURCE_Y = 240;

function midXFor(y: number): number {
  return 150 + Math.abs(y - SOURCE_Y) / 12;
}

function tracePath(y: number): string {
  // Right-angle routed trace from the source pad to each pillar,
  // staggered verticals so traces don't overlap — like a real fan-out.
  return `M 78 ${SOURCE_Y} H ${midXFor(y)} V ${y} H 300`;
}

export function CircuitSchematic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schematic diagram: one engineering source fanning out to six service pillars — embedded systems, mechanical engineering, software services, cloud and data, IEC 62443 cybersecurity, and digital product passport."
    >
      {/* Background grid dots */}
      <defs>
        <pattern id="grid" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="520" height="480" fill="url(#grid)" />

      {/* Traces */}
      {pillars.map((p, i) => (
        <path
          key={p.code}
          d={tracePath(p.y)}
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.55"
          className="trace-line"
          style={{ animationDelay: `${0.15 + i * 0.1}s` }}
        />
      ))}

      {/* Vias at trace bends */}
      {pillars.map((p, i) => (
        <circle
          key={`via-${p.code}`}
          cx={midXFor(p.y)}
          cy={p.y}
          r="3"
          fill="var(--color-brass-400)"
          className="trace-node"
          style={{ animationDelay: `${i * 0.55}s` }}
        />
      ))}

      {/* Source pad */}
      <rect x="42" y="222" width="36" height="36" fill="var(--color-brass-500)" />
      <rect
        x="34"
        y="214"
        width="52"
        height="52"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <text
        x="60"
        y="292"
        textAnchor="middle"
        className="fill-current"
        opacity="0.7"
        fontSize="10"
        fontFamily="var(--font-mono)"
        letterSpacing="0.12em"
      >
        CREST
      </text>

      {/* Pillar endpoints */}
      {pillars.map((p) => (
        <g key={`end-${p.code}`}>
          <rect
            x="300"
            y={p.y - 20}
            width="196"
            height="40"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
          <rect x="300" y={p.y - 20} width="4" height="40" fill="var(--color-brass-400)" />
          <text
            x="318"
            y={p.y - 2}
            fontSize="12"
            fontWeight="600"
            fontFamily="var(--font-mono)"
            letterSpacing="0.1em"
            className="fill-current"
          >
            {p.code}
          </text>
          <text
            x="318"
            y={p.y + 13}
            fontSize="10.5"
            fontFamily="var(--font-mono)"
            letterSpacing="0.04em"
            className="fill-current"
            opacity="0.65"
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
