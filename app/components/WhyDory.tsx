import { Check, X, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";

type CellValue = "yes" | "no" | "partial" | string;

const rows: { label: string; dory: CellValue; freeTools: CellValue; enterprise: CellValue }[] = [
  { label: "Setup time", dory: "Minutes", freeTools: "Minutes to hours", enterprise: "Days, often with a call" },
  { label: "Rent collection", dory: "Built-in", freeTools: "Built-in", enterprise: "Built-in" },
  { label: "Tenant portal and chat", dory: "Built-in", freeTools: "Payments only", enterprise: "Built-in" },
  { label: "Tenant screening", dory: "yes", freeTools: "yes", enterprise: "yes" },
  { label: "TAL / LTB notice generation", dory: "yes", freeTools: "no", enterprise: "partial" },
  { label: "Tenant rent reporting", dory: "Built-in, free", freeTools: "Often a paid add-on", enterprise: "no" },
  { label: "Price for 5 doors", dory: "Free", freeTools: "Free", enterprise: "$50 to $150/mo" },
  { label: "Designed for", dory: "1 unit or 50", freeTools: "Any size", enterprise: "200+ doors" },
];

function CellContent({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === "yes")
    return <Check className={`h-4 w-4 ${highlight ? "text-brand-core" : "text-muted-foreground"}`} />;
  if (value === "no")
    return <X className="h-4 w-4 text-muted-foreground/30" />;
  if (value === "partial")
    return <Minus className="h-4 w-4 text-muted-foreground/50" />;
  return <span className={`text-sm ${highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>{value}</span>;
}

export function WhyDory() {
  return (
    <section
      id="why-dory"
      className="relative py-section"
      style={{ background: "linear-gradient(180deg, white 0%, #f6f8fb 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">
            Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">Why </span>
            <span className="text-gradient-brand">Dory.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Not a spreadsheet. Not enterprise software. Built for landlords who manage their own properties and want tenants who pay on time.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="overflow-x-auto glass rounded-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-4 px-5 text-sm font-medium text-muted-foreground w-1/4" />
                  <th className="py-4 px-5 text-sm font-semibold text-brand-azure">
                    Dory
                  </th>
                  <th className="py-4 px-5 text-sm font-medium text-muted-foreground">
                    Free landlord tools
                  </th>
                  <th className="py-4 px-5 text-sm font-medium text-muted-foreground">
                    Enterprise PM
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-glass-border last:border-0 transition-colors hover:bg-glass-hover">
                    <td className="py-4 px-5 text-sm font-medium text-foreground">{row.label}</td>
                    <td className="py-4 px-5">
                      <CellContent value={row.dory} highlight />
                    </td>
                    <td className="py-4 px-5">
                      <CellContent value={row.freeTools} />
                    </td>
                    <td className="py-4 px-5">
                      <CellContent value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
