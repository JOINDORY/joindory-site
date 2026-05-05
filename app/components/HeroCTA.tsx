"use client";

import { ArrowRight } from "lucide-react";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="#waitlist"
        className="inline-flex items-center gap-2 text-white font-medium text-base px-7 py-3 rounded-xl glow-sm hover:glow-lg hover:scale-[1.03] hover:brightness-110 active:scale-[0.98] transition-all duration-300 ease-out"
        style={{ background: "var(--gradient-brand)" }}
      >
        Join the waitlist
        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
      <a
        href="#how-it-works"
        className="text-muted-foreground hover:text-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-glass transition-colors duration-200"
      >
        See how it works
      </a>
    </div>
  );
}
