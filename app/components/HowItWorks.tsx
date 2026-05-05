import { Building2, Wallet, LayoutDashboard } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Add your properties.",
    description:
      "Add units, assign tenants, upload leases. Set up your portfolio in minutes, not days.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Collect rent your way.",
    description:
      "Stripe-powered payouts to your account. Tenants pay by card or ACH. Cash payments tracked manually.",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Run every door.",
    description:
      "Balances, vacancies, maintenance tickets, tenant communication. One place for everything.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-section">
      {/* Divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-brand-deep/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-brand-azure mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient mb-4">
            Three steps. No training manual.
          </h2>
          <p className="text-muted-foreground text-lg">
            Set up in minutes. Run everything from one dashboard.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <div className="relative flex flex-col gap-5 p-6 rounded-xl glass card-hover h-full group">
                <div className="flex items-center gap-3">
                  <span className="text-gradient-brand text-2xl font-bold">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-deep/20 to-transparent animate-line-grow" style={{ animationDelay: `${0.5 + i * 0.2}s` }} />
                </div>
                <step.icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-brand-azure" />
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
