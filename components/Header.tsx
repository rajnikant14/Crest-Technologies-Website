"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { navigation } from "@/lib/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-steel-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Crest Technologies — home">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-steel-700 hover:text-ink-900"
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    className="h-3 w-3 text-steel-400 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full pt-1 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="w-80 border border-steel-200 bg-white py-2 shadow-lg">
                    {item.children.map((child) =>
                      child.heading ? (
                        <li
                          key={child.label}
                          className="spec-label mt-2 border-t border-steel-100 px-4 pb-1 pt-3 text-steel-400 first:mt-0 first:border-t-0 first:pt-2"
                        >
                          {child.label}
                        </li>
                      ) : (
                        <li key={child.label}>
                          <Link
                            href={child.href!}
                            {...(child.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="block px-4 py-2.5 text-sm text-steel-700 hover:bg-steel-50 hover:text-ink-900"
                          >
                            {child.label}
                            {child.external && (
                              <span aria-hidden="true" className="ml-1 text-brass-500">
                                ↗
                              </span>
                            )}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-steel-700 hover:text-ink-900"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-3 bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-700"
          >
            Start a conversation
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink-900 xl:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-steel-200 bg-white xl:hidden"
        >
          <ul className="px-4 py-3">
            {navigation.map((item) => (
              <li key={item.label} className="border-b border-steel-100 last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3.5 text-left text-base font-medium text-ink-900"
                      aria-expanded={openSection === item.label}
                      onClick={() =>
                        setOpenSection(openSection === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-steel-400">
                        {openSection === item.label ? "−" : "+"}
                      </span>
                    </button>
                    {openSection === item.label && (
                      <ul className="pb-3">
                        <li>
                          <Link
                            href={item.href}
                            className="block py-2 pl-4 text-sm font-semibold text-brass-600"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label} overview →
                          </Link>
                        </li>
                        {item.children.map((child) =>
                          child.heading ? (
                            <li
                              key={child.label}
                              className="spec-label px-4 pb-1 pt-3 text-steel-400"
                            >
                              {child.label}
                            </li>
                          ) : (
                            <li key={child.label}>
                              <Link
                                href={child.href!}
                                {...(child.external
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                                className="block py-2 pl-4 text-sm text-steel-700"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                                {child.external && (
                                  <span aria-hidden="true" className="ml-1 text-brass-500">
                                    ↗
                                  </span>
                                )}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3.5 text-base font-medium text-ink-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
