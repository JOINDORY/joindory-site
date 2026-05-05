"use client";

import { useEffect, useRef, useState } from "react";
import { CreditCard, FileText, MessageSquare, Search } from "lucide-react";
import { FadeIn } from "./FadeIn";

const pains = [
  {
    icon: CreditCard,
    title: "Rent collection is all over the place.",
    description:
      "You manually track who paid, who didn't, and chase late payments across email and text.",
    tag: "Payments",
  },
  {
    icon: FileText,
    title: "Leases live in filing cabinets.",
    description:
      "Rent increase notices, Section G disclosures, N1 forms. Scattered across paper copies, folders, and inboxes.",
    tag: "Documents",
  },
  {
    icon: MessageSquare,
    title: "Maintenance lives in text messages.",
    description:
      "Tenant requests come through every channel. Nothing tracked. Nothing documented.",
    tag: "Maintenance",
  },
  {
    icon: Search,
    title: "No way to vet a new tenant.",
    description:
      "No verified history. No track record. Just a gut feeling and a reference call.",
    tag: "Screening",
  },
];

function PainCard({
  pain,
  index,
  revealed,
}: {
  pain: (typeof pains)[0];
  index: number;
  revealed: boolean;
}) {
  return (
    <div
      className="relative rounded-xl bg-white border border-black/[0.06] p-6 overflow-hidden group transition-all duration-700 hover:border-black/[0.1] hover:shadow-lg hover:shadow-black/[0.03]"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Top bar accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-[#fff7ed] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#ffedd5]">
          <pain.icon className="h-4 w-4 text-[#f97316] transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-[10px] font-medium text-[#94a3b8] uppercase tracking-wider">
          {pain.tag}
        </span>
      </div>

      <h3 className="font-semibold text-foreground mb-2">{pain.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {pain.description}
      </p>
    </div>
  );
}

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problem" className="relative py-section">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">You already know </span>
            <span className="text-gradient-brand">this workflow.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Rent collection in one app, leases in another, maintenance in your text messages. Managing your doors means stitching together tools that were never built to work together.
          </p>
        </FadeIn>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <PainCard key={pain.title} pain={pain} index={i} revealed={revealed} />
          ))}
        </div>
      </div>
    </section>
  );
}
