"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Dory", href: "#why-dory" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16 border-b border-glass-border">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/brand/dorylogowhite.svg"
              alt="Dory"
              width={100}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </a>

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
            <Button
              asChild
              size="sm"
              className="bg-glass-strong text-foreground border border-glass-border hover:bg-glass-hover backdrop-blur-sm"
            >
              <a href="#waitlist">Join the waitlist</a>
            </Button>
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

      {/* Nav backdrop — renders behind content */}
      <div
        className="absolute inset-0 -z-10 bg-background/60 backdrop-blur-xl"
        style={{
          maskImage: "linear-gradient(to bottom, black 60%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent)",
        }}
      />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/90 backdrop-blur-xl border-b border-glass-border px-6 py-4 flex flex-col gap-4">
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
          <Button
            asChild
            size="sm"
            className="w-full text-white"
            style={{ background: "var(--gradient-brand)" }}
          >
            <a href="#waitlist" onClick={() => setOpen(false)}>
              Join the waitlist
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
