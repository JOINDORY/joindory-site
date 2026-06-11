"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#how-it-works" },
  { label: "Compare", href: "#why-dory" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [overBlue, setOverBlue] = useState(false);

  useEffect(() => {
    function check() {
      const faq = document.getElementById("faq");
      if (!faq) return;
      const navBottom = 80;
      const rect = faq.getBoundingClientRect();
      // FAQ gradient turns blue in the last 25% — trigger before it reaches the nav
      const triggerPoint = rect.top + rect.height * 0.7;
      setOverBlue(triggerPoint < navBottom);
    }

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Backdrop — frosted glass normally, solid white over blue sections */}
      <div
        className="absolute inset-0 -z-10 backdrop-blur-xl saturate-150"
        style={{ background: overBlue ? "white" : "rgba(255,255,255,0.5)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="relative flex items-center justify-between h-20">
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.08] to-transparent" />
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/brand/dorylogoblack.svg"
              alt="Dory"
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#waitlist"
              className="inline-flex items-center text-white text-sm font-medium px-5 py-2 rounded-lg hover:scale-[1.04] hover:brightness-110 active:scale-[0.97] transition-all duration-200"
              style={{ background: "var(--gradient-brand)" }}
            >
              Join the waitlist
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-b border-black/[0.06] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            style={{ background: "var(--gradient-brand)" }}
          >
            Join the waitlist
          </a>
        </div>
      )}
    </nav>
  );
}
