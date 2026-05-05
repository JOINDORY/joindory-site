import { Home, TrendingUp, Users } from "lucide-react";
import { FadeIn } from "./FadeIn";

const personas = [
  {
    icon: Home,
    title: "Self-managing landlords",
    description: "You manage your own properties and need one place for rent, tenants, and maintenance instead of five different tools.",
  },
  {
    icon: TrendingUp,
    title: "Growing portfolio investors",
    description: "You're scaling your portfolio and need tools that grow with you without enterprise pricing or complexity.",
  },
  {
    icon: Users,
    title: "Family and team operators",
    description: "Multiple people manage your properties. Everyone needs visibility into payments, tickets, and tenants.",
  },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="relative py-section">
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            Who it&apos;s for
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">Built for how you </span>
            <span className="text-gradient-brand">actually operate.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Whether you manage 2 doors or 200, Dory fits your workflow. No enterprise complexity, no spreadsheet chaos.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personas.map((persona, i) => (
            <FadeIn key={persona.title} delay={i * 0.12}>
              <div className="glass rounded-xl p-6 card-hover h-full group">
                <persona.icon className="h-6 w-6 text-brand-azure mb-4 transition-colors group-hover:text-brand-core" />
                <h3 className="font-semibold text-foreground mb-2">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
