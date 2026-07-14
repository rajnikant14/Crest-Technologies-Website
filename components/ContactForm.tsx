"use client";

import { useState } from "react";
import { services } from "@/content/services";

/**
 * Contact form. Posts to Formspree — replace FORM_ENDPOINT with your real
 * Formspree form ID (create one at formspree.io, no backend needed).
 * Until then, submissions fall back to a pre-filled mailto: link.
 */
const FORM_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

const interestOptions = [
  ...services.map((s) => s.name),
  "Private Equity — Due Diligence",
  "Private Equity — Value Creation",
  "General enquiry",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Form service responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-steel-200 bg-steel-50 p-8">
        <p className="spec-label text-brass-600">Message received</p>
        <h2 className="font-display mt-2 text-2xl font-bold text-ink-900">
          Thank you — we&apos;ll be in touch.
        </h2>
        <p className="mt-3 text-steel-700">
          Your enquiry has been sent. Someone from the relevant practice — not a
          sales queue — will reply, typically within two working days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-steel-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-steel-400 focus:border-ink-900";

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="spec-label mb-2 block text-steel-500">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="spec-label mb-2 block text-steel-500">
            Company
          </label>
          <input id="company" name="company" type="text" required autoComplete="organization" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="spec-label mb-2 block text-steel-500">
            Work email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="spec-label mb-2 block text-steel-500">
            Service interest
          </label>
          <select id="interest" name="interest" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select an area…
            </option>
            {interestOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="spec-label mb-2 block text-steel-500">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className={inputClass}
            placeholder="What are you working on, and what does success look like?"
          />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 border border-brass-400 bg-brass-100 px-4 py-3 text-sm text-ink-900">
          The form couldn&apos;t be sent (the form service may not be configured
          yet). Please email us directly at{" "}
          <a href="mailto:info@crest-technologies.com" className="font-semibold underline">
            info@crest-technologies.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center gap-2 bg-ink-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-ink-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
