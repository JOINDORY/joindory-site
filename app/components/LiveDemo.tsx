"use client";

import { useState, useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";

const events = [
  { type: "payment", label: "Rent collected", detail: "Unit 2A — $1,450", color: "#22c55e" },
  { type: "maintenance", label: "Maintenance ticket", detail: "Unit 3B — Leaking faucet", color: "#2C91FF" },
  { type: "message", label: "Tenant message", detail: "Unit 1A — Lease renewal question", color: "rgba(255,255,255,0.3)" },
  { type: "payment", label: "Rent collected", detail: "Unit 1B — $1,200", color: "#22c55e" },
  { type: "vacancy", label: "Vacancy filled", detail: "Unit 4A — New tenant assigned", color: "#014CFF" },
];

function AnimatedFeed() {
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          // Start revealing events
          let count = 0;
          const interval = setInterval(() => {
            count++;
            setVisibleCount(count);
            if (count >= events.length) clearInterval(interval);
          }, 600);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-strong rounded-xl overflow-hidden max-w-3xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-glass-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-glass-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-glass-strong" />
          <div className="w-2.5 h-2.5 rounded-full bg-glass-strong" />
        </div>
        <span className="text-xs text-muted-foreground ml-3">Activity feed</span>
      </div>

      {/* Feed */}
      <div className="divide-y divide-glass-border">
        {events.map((event, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-5 py-4 transition-all duration-700 ease-out"
            style={{
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? "translateY(0)" : "translateY(12px)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: event.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{event.label}</p>
              <p className="text-xs text-muted-foreground">{event.detail}</p>
            </div>
            <span className="text-xs text-muted-foreground/50 shrink-0">Just now</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LiveDemo() {
  return (
    <section id="live-demo" className="relative py-section">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-brand-deep/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-brand-azure mb-3">
            Product preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient mb-4">
            See it in action.
          </h2>
          <p className="text-muted-foreground text-lg">
            One dashboard. Every door. Payments, maintenance, tenants — updated live.
          </p>
        </FadeIn>

        <FadeIn>
          <AnimatedFeed />
        </FadeIn>
      </div>
    </section>
  );
}
