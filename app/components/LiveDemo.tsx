"use client";

import { useState, useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";
import { DollarSign, Wrench, UserPlus, MessageSquare, CheckCircle2 } from "lucide-react";

const events = [
  {
    icon: DollarSign,
    label: "Rent collected",
    detail: "4521 Rue Saint-Denis, Unit 3A",
    amount: "$1,400",
    time: "2 min ago",
    iconBg: "#dcfce7",
    iconColor: "#22c55e",
  },
  {
    icon: Wrench,
    label: "Maintenance ticket opened",
    detail: "1845 Boul. Saint-Laurent, Unit 2B",
    amount: "Leaking faucet",
    time: "8 min ago",
    iconBg: "#dbeafe",
    iconColor: "#2C91FF",
  },
  {
    icon: DollarSign,
    label: "Rent collected",
    detail: "312 Avenue du Parc, Unit 1A",
    amount: "$1,700",
    time: "14 min ago",
    iconBg: "#dcfce7",
    iconColor: "#22c55e",
  },
  {
    icon: UserPlus,
    label: "New tenant assigned",
    detail: "7890 Rue Sherbrooke E., Unit 4C",
    amount: "Lease signed",
    time: "32 min ago",
    iconBg: "#ede9fe",
    iconColor: "#8b5cf6",
  },
  {
    icon: MessageSquare,
    label: "Tenant message",
    detail: "4521 Rue Saint-Denis, Unit 6B",
    amount: "Renewal question",
    time: "1 hr ago",
    iconBg: "#f1f5f9",
    iconColor: "#64748b",
  },
  {
    icon: CheckCircle2,
    label: "Maintenance resolved",
    detail: "312 Avenue du Parc, Unit 3A",
    amount: "Heater fixed",
    time: "2 hr ago",
    iconBg: "#dcfce7",
    iconColor: "#22c55e",
  },
];

const stats = [
  { label: "Collected today", value: "$4,500", change: "+$1,400" },
  { label: "Pending", value: "2 units", change: "Due in 3 days" },
  { label: "Tickets open", value: "1", change: "Avg. 1.2 days" },
];

function AnimatedFeed() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setStatsVisible(true);
          setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
              count++;
              setVisibleCount(count);
              if (count >= events.length) clearInterval(interval);
            }, 400);
          }, 300);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-black/[0.08] bg-white shadow-xl shadow-brand-deep/[0.06] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center h-10 bg-[#f8fafc] border-b border-black/[0.06] px-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-4">
            <span className="text-[11px] text-[#94a3b8] select-none">Activity</span>
          </div>
        </div>

        {/* Mini stats bar */}
        <div className="grid grid-cols-3 border-b border-black/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-4 transition-all duration-500 ${i < 2 ? "border-r border-black/[0.06]" : ""}`}
              style={{
                opacity: statsVisible ? 1 : 0,
                transform: statsVisible ? "translateY(0)" : "translateY(8px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <p className="text-[11px] text-[#94a3b8] mb-1">{stat.label}</p>
              <p className="text-lg font-semibold text-[#0a0a0a] tabular-nums">{stat.value}</p>
              <p className="text-[11px] text-[#22c55e] mt-0.5">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Feed */}
        <div>
          {events.map((event, i) => (
            <div
              key={i}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 border-b border-black/[0.04] last:border-0 transition-all duration-[600ms] ease-out hover:bg-[#f8fafc]"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? "translateX(0)" : "translateX(-20px)",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: event.iconBg }}
              >
                <event.icon className="w-3.5 h-3.5" style={{ color: event.iconColor }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[#0a0a0a]">{event.label}</p>
                <p className="text-[11px] text-[#94a3b8] truncate">{event.detail}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[13px] font-medium text-[#0a0a0a]">{event.amount}</p>
                <p className="text-[11px] text-[#94a3b8]">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LiveDemo() {
  return (
    <section id="live-demo" className="relative py-section">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            Product preview
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">See it </span>
            <span className="text-gradient-brand">in action.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            One dashboard for every door. Payments, maintenance tickets, and tenant updates, all in real time.
          </p>
        </FadeIn>

        <FadeIn>
          <AnimatedFeed />
        </FadeIn>
      </div>
    </section>
  );
}
