"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Users, Wallet, LayoutDashboard } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Add your properties.",
    description:
      "Create properties, add units, upload leases. Set up your entire portfolio in minutes.",
    details: ["Properties and units", "Lease uploads", "Tenant assignment"],
  },
  {
    number: "02",
    icon: Users,
    title: "Assign your tenants.",
    description:
      "Link tenants to units, set lease terms, and track move-in dates. Their verified rental history follows them.",
    details: ["Tenant profiles", "Lease terms", "Verified rental history"],
  },
  {
    number: "03",
    icon: Wallet,
    title: "Collect rent.",
    description:
      "Tenants pay online, you get paid directly to your bank account. Log cash and cheque payments manually.",
    details: ["Online payments", "Direct deposits", "Manual tracking"],
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Run every door.",
    description:
      "Balances, vacancies, maintenance tickets, tenant communication, compliance notices. One dashboard.",
    details: ["Maintenance tickets", "Vacancy tracking", "TAL / LTB notices"],
  },
];

export function HowItWorks() {
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
    <section
      id="how-it-works"
      className="relative py-section"
      style={{ background: "linear-gradient(180deg, white 0%, #f6f8fb 12%, #f6f8fb 88%, white 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">Four steps. </span>
            <span className="text-gradient-brand">No training manual.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Add your properties, assign tenants, collect rent, and manage everything from one dashboard. Set up in minutes, not days.
          </p>
        </FadeIn>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-black/[0.08] bg-white p-7 overflow-hidden group transition-all duration-300 hover:border-black/[0.12] hover:shadow-lg hover:shadow-brand-deep/[0.04]"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                {/* Watermark number */}
                <span className="absolute top-4 right-5 text-[64px] font-black leading-none select-none text-brand-azure/[0.05] transition-colors duration-300 group-hover:text-brand-azure/[0.1]">
                  {step.number}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-brand-core/20"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f1f5f9] text-[11px] font-medium text-[#64748b]"
                      >
                        <div className="w-1 h-1 rounded-full bg-brand-core" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
