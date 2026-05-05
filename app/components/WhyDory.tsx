import { Check, X, Minus } from "lucide-react";
import { FadeIn } from "./FadeIn";

type CellValue = "yes" | "no" | "partial" | string;

const rows: { label: string; spreadsheet: CellValue; enterprise: CellValue; dory: CellValue }[] = [
  { label: "Setup time", spreadsheet: "Minutes", enterprise: "Days to weeks", dory: "Minutes" },
  { label: "Monthly cost", spreadsheet: "Free + fees", enterprise: "$200–$1,000+", dory: "Free to start" },
  { label: "Tenant credit reporting", spreadsheet: "no", enterprise: "no", dory: "yes" },
  { label: "Quebec + Ontario forms", spreadsheet: "no", enterprise: "partial", dory: "yes" },
  { label: "Built for 2–50 doors", spreadsheet: "partial", enterprise: "no", dory: "yes" },
  { label: "Modern UI", spreadsheet: "no", enterprise: "no", dory: "yes" },
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
    <section id="why-dory" className="relative py-section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-brand-deep/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-brand-azure mb-3">
            Comparison
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient mb-4">
            Why Dory.
          </h2>
          <p className="text-muted-foreground text-lg">
            Not a spreadsheet. Not enterprise software. Built for landlords with 2 to 50 doors.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="overflow-x-auto glass rounded-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-glass-border">
                  <th className="py-4 px-5 text-sm font-medium text-muted-foreground w-1/4" />
                  <th className="py-4 px-5 text-sm font-medium text-muted-foreground">
                    Spreadsheets + Stripe
                  </th>
                  <th className="py-4 px-5 text-sm font-medium text-muted-foreground">
                    Enterprise PM
                  </th>
                  <th className="py-4 px-5 text-sm font-semibold text-brand-azure">
                    Dory
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <FadeIn key={row.label} delay={i * 0.06} as="span">
                    <tr className="border-b border-glass-border last:border-0 transition-colors hover:bg-glass-hover">
                      <td className="py-4 px-5 text-sm font-medium text-foreground">{row.label}</td>
                      <td className="py-4 px-5">
                        <CellContent value={row.spreadsheet} />
                      </td>
                      <td className="py-4 px-5">
                        <CellContent value={row.enterprise} />
                      </td>
                      <td className="py-4 px-5">
                        <CellContent value={row.dory} highlight />
                      </td>
                    </tr>
                  </FadeIn>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
