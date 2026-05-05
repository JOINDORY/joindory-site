"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

const loopSteps = [
  { label: "Tenant pays rent", detail: "On-time payment through Dory" },
  { label: "Payment recorded", detail: "Verified, receipt-backed record" },
  { label: "Credit history builds", detail: "On-time payments can contribute to their credit profile" },
  { label: "Tenant builds toward their future", detail: "A stronger financial foundation over time" },
  { label: "Landlord gets invested tenants", detail: "Longer tenancies, fewer issues" },
];

const historyRows = [
  { label: "On-time payments", value: "12 of 12" },
  { label: "Lease renewals", value: "1" },
  { label: "Tenancy length", value: "14 months" },
  { label: "Properties", value: "2" },
];

function AnimatedSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealedUpTo, setRevealedUpTo] = useState(-1);
  const [hoveredStep, setHoveredStep] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let step = 0;
          const interval = setInterval(() => {
            setRevealedUpTo(step);
            step++;
            if (step >= loopSteps.length) clearInterval(interval);
          }, 400);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col">
      {loopSteps.map((step, i) => {
        const revealed = revealedUpTo >= i;
        const pulsing = hoveredStep === i;

        return (
          <div
            key={step.label}
            className="flex items-start gap-4 cursor-pointer"
            onMouseEnter={() => setHoveredStep(i)}
            onMouseLeave={() => setHoveredStep(-1)}
            onClick={() => setHoveredStep(pulsing ? -1 : i)}
          >
            <div className="flex flex-col items-center">
              {/* Step circle */}
              <div
                className="relative flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-all duration-700"
                style={{
                  background: revealed ? "var(--gradient-brand)" : "transparent",
                  boxShadow: revealed
                    ? pulsing
                      ? "0 0 24px rgba(1, 76, 255, 0.45), 0 0 8px rgba(44, 145, 255, 0.3)"
                      : "0 0 20px rgba(1, 76, 255, 0.3), 0 0 6px rgba(44, 145, 255, 0.2)"
                    : "none",
                  border: revealed ? "none" : "2px solid rgba(0, 0, 0, 0.08)",
                  transform: pulsing ? "scale(1.15)" : "scale(1)",
                }}
              >
                {/* Ping ring on hover/click */}
                {pulsing && revealed && (
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ background: "var(--gradient-brand)" }}
                  />
                )}
                <span
                  className="relative text-xs font-bold tabular-nums transition-colors duration-500"
                  style={{ color: revealed ? "white" : "#94a3b8" }}
                >
                  {i + 1}
                </span>
              </div>

              {/* Connecting line */}
              {i < loopSteps.length - 1 && (
                <div className="w-px h-14 relative overflow-hidden">
                  <div
                    className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-brand-core/40 to-brand-azure/10 transition-all duration-700 ease-out"
                    style={{
                      height: revealedUpTo > i ? "100%" : "0%",
                      transitionDelay: "200ms",
                    }}
                  />
                  <div className="absolute inset-0 w-full bg-black/[0.06]" />
                </div>
              )}
            </div>

            {/* Step text */}
            <div
              className="pb-6 pt-2 transition-all duration-[600ms] ease-out"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateX(0)" : "translateX(-12px)",
                transitionDelay: "100ms",
              }}
            >
              <p className="font-medium text-sm text-foreground">{step.label}</p>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AnimatedHistoryCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 space-y-5 bg-white border border-black/[0.06] shadow-xl shadow-brand-deep/[0.04] hover:shadow-brand-deep/[0.08] hover:border-black/[0.1] transition-all duration-300"
    >
      <div className="flex items-center gap-2 mb-1">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-core opacity-50" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-core" />
        </div>
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          What landlords see
        </p>
      </div>
      <h3 className="text-xl font-semibold text-foreground">Verified rental history</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        When a tenant applies to your Dory property, you can review their rental history with their permission. On-time payments, tenancy length, and number of properties managed through Dory.
      </p>

      <div className="rounded-xl bg-[#f6f8fb] p-5 space-y-3 text-sm border border-black/[0.04]">
        {historyRows.map((row, i) => (
          <div
            key={row.label}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-12px)",
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${400 + i * 120}ms`,
            }}
          >
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{row.label}</span>
              <span className="font-medium text-foreground">{row.value}</span>
            </div>
            {i < 3 && <div className="h-px bg-black/[0.04] mt-3" />}
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground flex items-center gap-1 pt-2">
        <span>Are you a tenant?</span>
        <a href="#waitlist" className="text-brand-core font-medium inline-flex items-center gap-1 hover:text-brand-deep transition-colors">
          Learn more <ArrowRight className="h-3 w-3" />
        </a>
      </p>
    </div>
  );
}

export function TenantBenefit() {
  return (
    <section
      id="tenant-benefit"
      className="relative py-section"
      style={{ background: "linear-gradient(180deg, white 0%, #f0f5ff 10%, #e8f0fe 50%, #f0f5ff 90%, white 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            The Dory difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">Your tenants pay rent. </span>
            <span className="text-gradient-brand">It builds toward their home.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every on-time rent payment through Dory can help your tenants build credit toward qualifying for a mortgage. Tenants working toward homeownership pay on time, stay longer, and take care of your property.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Loop visualization */}
          <AnimatedSteps />

          {/* Verified rental history card */}
          <FadeIn delay={0.3}>
            <AnimatedHistoryCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
