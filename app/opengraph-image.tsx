import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Crest Technologies — Embedded, Mechanical & Software Engineering with IEC 62443 Compliance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const markData = await readFile(
    join(process.cwd(), "public", "logo-mark.png")
  );
  const markSrc = `data:image/png;base64,${markData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c1524",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              background: "#ffffff",
              padding: 8,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={56} height={56} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#ffffff", fontSize: 34, fontWeight: 700 }}>
              Crest Technologies
            </div>
            <div style={{ color: "#8b96a2", fontSize: 17, letterSpacing: 3 }}>
              ENGINEERING · COMPLIANCE
            </div>
          </div>
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: 58,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Embedded systems, engineered and certified for rail, aerospace and
          industrial OT.
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["IEC 62443-4-1", "ISO 9001:2015", "UK · Germany · Bengaluru"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  border: "1px solid #33507e",
                  color: "#d4b571",
                  padding: "12px 22px",
                  fontSize: 20,
                  letterSpacing: 2,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
