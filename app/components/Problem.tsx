import { CreditCard, FileText, MessageSquare, Search } from "lucide-react";
import { FadeIn } from "./FadeIn";

const pains = [
  {
    icon: CreditCard,
    title: "Rent collection lives in Stripe.",
    description:
      "You manually track who paid, who didn't, and chase late payments across email and text.",
  },
  {
    icon: FileText,
    title: "Leases live in Word docs.",
    description:
      "Rent increase notices, Section G disclosures, N1 forms — scattered across folders and inboxes.",
  },
  {
    icon: MessageSquare,
    title: "Maintenance lives in text messages.",
    description:
      "Tenant requests come through every channel. Nothing tracked. Nothing documented.",
  },
  {
    icon: Search,
    title: "No way to vet a new tenant.",
    description:
      "No verified history. No track record. Just a credit check and a gut feeling.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-section">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-brand-azure mb-3">
            The problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient mb-4">
            You already know this workflow.
          </h2>
          <p className="text-muted-foreground text-lg">
            Managing 2 to 50 doors means stitching together tools that were never built to work together.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <FadeIn key={pain.title} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 card-hover h-full group">
                <pain.icon className="h-5 w-5 text-brand-azure mb-4 transition-colors group-hover:text-brand-sky" />
                <h3 className="font-semibold text-foreground mb-2">{pain.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
