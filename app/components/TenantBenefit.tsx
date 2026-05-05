import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

const loopSteps = [
  { label: "Tenant pays rent", detail: "On-time payment through Dory" },
  { label: "Payment recorded", detail: "Verified, receipt-backed record" },
  { label: "Credit history builds", detail: "Reported to Canadian credit bureaus" },
  { label: "Tenant builds toward homeownership", detail: "Better credit, better mortgage options" },
  { label: "Landlord gets invested tenants", detail: "Longer tenancies, fewer issues" },
];

export function TenantBenefit() {
  return (
    <section id="tenant-benefit" className="relative py-section-lg overflow-hidden">
      {/* Foreground section glows */}
      <div
        className="pointer-events-none absolute inset-0 animate-glow-drift"
        style={{ background: "var(--glow-center)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 animate-glow-drift"
        style={{ background: "var(--glow-left)", animationDelay: "-4s" }}
      />

      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px" style={{ background: "var(--gradient-brand)", opacity: 0.3 }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            The Dory difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">The only platform where rent builds toward </span>
            <span className="text-gradient-brand">homeownership.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Your tenants&apos; on-time rent payments help build their credit history. Tenants building toward something treat your property like an investment in their future.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Loop visualization */}
          <FadeIn>
            <div className="flex flex-col">
              {loopSteps.map((step, i) => (
                <FadeIn key={step.label} delay={0.1 + i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold shrink-0 text-white glow-sm"
                        style={{ background: "var(--gradient-brand)" }}
                      >
                        {i + 1}
                      </div>
                      {i < loopSteps.length - 1 && (
                        <div className="w-px h-14 bg-gradient-to-b from-brand-deep/30 to-transparent" />
                      )}
                    </div>
                    <div className="pb-6 pt-1.5">
                      <p className="font-medium text-sm text-foreground">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Verified rental history card */}
          <FadeIn delay={0.3}>
            <div className="glass-strong rounded-2xl p-6 space-y-5 card-hover">
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
                When a tenant applies to your Dory property, you see their track record — with their consent. Payment history, lease compliance, maintenance requests, tenancy length.
              </p>

              <div className="rounded-xl bg-glass p-5 space-y-3 text-sm border border-glass-border">
                {[
                  { label: "On-time payments", value: "12 of 12" },
                  { label: "Lease violations", value: "0" },
                  { label: "Tenancy length", value: "14 months" },
                  { label: "Properties", value: "2" },
                ].map((row, i) => (
                  <div key={row.label}>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-medium text-foreground">{row.value}</span>
                    </div>
                    {i < 3 && <div className="h-px bg-glass-border mt-3" />}
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground flex items-center gap-1 pt-2">
                <span>Are you a tenant?</span>
                <a href="#waitlist" className="text-brand-azure font-medium inline-flex items-center gap-1 hover:text-brand-sky transition-colors">
                  Learn more <ArrowRight className="h-3 w-3" />
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
