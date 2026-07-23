"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "HOME", href: "/" },
  { label: "LLMS AND ALIGNMENT", href: "#llms" },
  { label: "EVENTS", href: "#events", active: true },
  { label: "PROJECTS", href: "#projects" },
  { label: "JOIN US!", href: "#join" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Logo mark */}
        <Link href="/" aria-label="AaltoAI home" className="shrink-0">
          <svg
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 32 L15 2 L28 32 M9.5 20 H20.5"
              stroke="#111111"
              strokeWidth="4"
              strokeLinecap="square"
            />
            <path d="M26 2 L38 32" stroke="#111111" strokeWidth="4" />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-xs font-medium tracking-wide transition-colors",
                link.active
                  ? "text-accent underline underline-offset-4"
                  : "text-ink hover:text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="mx-6 flex flex-col gap-4 rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium tracking-wide",
                link.active ? "text-accent" : "text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
