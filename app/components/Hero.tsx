import { Nav } from "./Nav";
import { HeroCTA } from "./HeroCTA";
import { HeroDashboard } from "./HeroDashboard";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Nav />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--glow-hero)" }}
      />

      <div className="relative pt-32 pb-section-lg">
        <div className="mx-auto max-w-6xl px-6 text-center">
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
              <span className="text-gradient">Vetted tenants.</span>
              <br />
              <span className="text-gradient-brand">Rent that builds toward homeownership.</span>
            </h1>
          </FadeIn>

          {/* Subhead */}
          <FadeIn delay={0.25}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Manage your rentals with verified tenant history. Your tenants&apos; on-time
              payments help them build credit toward owning a home. You get tenants
              who treat your property like their future depends on it.
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
