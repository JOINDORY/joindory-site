import { Nav } from "./Nav";
import { HeroCTA } from "./HeroCTA";
import { HeroDashboard } from "./HeroDashboard";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Nav />

      {/* Ambient glow orbs — drifting slowly */}
      <div
        className="pointer-events-none absolute inset-0 animate-glow-drift"
        style={{ background: "var(--glow-hero)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 animate-glow-drift"
        style={{ background: "var(--glow-left)", animationDelay: "-3s" }}
      />
      <div
        className="pointer-events-none absolute inset-0 animate-glow-drift"
        style={{ background: "var(--glow-right)", animationDelay: "-5s" }}
      />

      <div className="relative pt-32 pb-section-lg">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-glass-border bg-glass px-4 py-1.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-core opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-core" />
              </span>
              <span className="text-xs text-muted-foreground">
                Now accepting early access signups
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-[-0.04em] leading-[1.05] mb-6">
              <span className="text-gradient-brand">
                Run every door.
              </span>
              <br />
              <span className="text-gradient-brand">
                Help your tenants build credit.
              </span>
            </h1>
          </FadeIn>

          {/* Subhead */}
          <FadeIn delay={0.25}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Property management for small landlords in Quebec and Ontario.
              Collect rent, manage units, track maintenance — and give your tenants
              a reason to pay on time.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4}>
            <HeroCTA />
          </FadeIn>

          {/* Dashboard mockup — perspective reveal */}
          <FadeIn delay={0.55}>
            <HeroDashboard />
          </FadeIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
