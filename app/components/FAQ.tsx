"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    question: "Does Dory work in Quebec and Ontario?",
    answer:
      "Yes. Dory is built for both jurisdictions from day one. We support Quebec-specific requirements (TAL processes, avis de modification du bail, Section G disclosure) and Ontario-specific requirements (LTB processes, N1 rent increase notices, N4 non-payment notices).",
  },
  {
    question: "How does the credit reporting work for tenants?",
    answer:
      "When tenants pay rent on time through Dory, those payments are reported to Canadian credit bureaus. This helps tenants build their credit history over time, contributing to their ability to qualify for a mortgage. We report verified, receipt-backed payment data.",
  },
  {
    question: "Do tenants have to opt in to credit reporting?",
    answer:
      "Yes. Tenants provide explicit consent during onboarding. Credit reporting is a benefit for tenants — most opt in because it helps them build their financial future.",
  },
  {
    question: "What payment methods can tenants use?",
    answer:
      "Tenants can pay by credit card or ACH (direct bank transfer) through our Stripe-powered payment system. If a tenant pays cash or by cheque, you can log that payment manually in Dory.",
  },
  {
    question: "How is rent paid out to me?",
    answer:
      "Rent payments are processed through Stripe and deposited directly into your bank account. You can track every payment, payout, and balance in your Dory dashboard.",
  },
  {
    question: "What forms does Dory generate?",
    answer:
      "Dory helps you generate jurisdiction-specific documents including Quebec avis de modification du bail (rent increase notices) and Ontario N1 forms. We calculate notice timing based on your lease term and jurisdiction.",
  },
  {
    question: "Can I import existing tenants and leases?",
    answer:
      "Yes. You can add your existing properties, units, and tenants when you set up Dory. Upload lease documents and enter current balances so your records are complete from day one.",
  },
  {
    question: "Is my tenant data secure?",
    answer:
      "All data is encrypted in transit and at rest, stored on servers in Canada. We comply with PIPEDA and Quebec Law 25 privacy requirements. Tenant rental history is only shared with other landlords when the tenant gives explicit consent.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Dory is free for landlords with 1 to 3 doors. Paid tiers unlock more doors and advanced features. Founding members who join the waitlist lock in early pricing.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-section">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-brand-deep/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-brand-azure mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
            Questions.
          </h2>
        </FadeIn>

        <FadeIn className="max-w-3xl">
          <Accordion type="multiple" className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-lg px-5 border border-glass-border data-[state=open]:bg-glass-hover transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
