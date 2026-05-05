"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <Button
        asChild
        size="lg"
        className="text-white border-0 glow-sm hover:glow-md transition-shadow duration-300 px-8"
        style={{ background: "var(--gradient-brand)" }}
      >
        <a href="#waitlist">
          Join the waitlist
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="lg"
        className="text-muted-foreground hover:text-foreground hover:bg-glass"
      >
        <a href="#how-it-works">See how it works</a>
      </Button>
    </div>
  );
}
