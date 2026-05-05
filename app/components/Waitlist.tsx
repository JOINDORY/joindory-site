"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const doorOptions = ["1–3", "4–10", "11–25", "26–50", "50+"];
const roleOptions = ["Landlord", "Tenant", "Both", "Other"];

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="waitlist" className="relative py-section-lg">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--glow-center)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{ background: "var(--gradient-brand)" }}>
              <CheckCircle2 className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gradient mb-3">You&apos;re on the list.</h2>
            <p className="text-muted-foreground">
              We&apos;ll be in touch with early access and founding pricing. Tell a landlord or tenant about Dory.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="relative py-section-lg">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px" style={{ background: "var(--gradient-brand)", opacity: 0.3 }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--glow-center)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient mb-3">
              Join the waitlist.
            </h2>
            <p className="text-muted-foreground">
              Get early access, founding pricing, and a direct line to the team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-strong rounded-xl p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg bg-glass border border-glass-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-brand-core/50 focus:border-brand-core/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-glass border border-glass-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-brand-core/50 focus:border-brand-core/50 transition-colors"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                className="w-full rounded-lg bg-glass border border-glass-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-brand-core/50 focus:border-brand-core/50 transition-colors"
                placeholder="Montreal, Toronto, Ottawa..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">I am a</label>
              <div className="flex flex-wrap gap-2">
                {roleOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setRole(option)}
                    className={`rounded-lg border px-3 py-1.5 text-sm transition-all duration-200 ${
                      role === option
                        ? "border-brand-core/50 bg-brand-deep/10 text-foreground"
                        : "border-glass-border bg-glass text-muted-foreground hover:text-foreground hover:border-glass-strong"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <input type="hidden" name="role" value={role} />
            </div>

            {(role === "Landlord" || role === "Both") && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  How many doors?
                </label>
                <div className="flex flex-wrap gap-2">
                  {doorOptions.map((option) => (
                    <label
                      key={option}
                      className="rounded-lg border border-glass-border bg-glass px-3 py-1.5 text-sm text-muted-foreground cursor-pointer hover:text-foreground hover:border-glass-strong has-[:checked]:border-brand-core/50 has-[:checked]:bg-brand-deep/10 has-[:checked]:text-foreground transition-all duration-200"
                    >
                      <input type="radio" name="doors" value={option} className="sr-only" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label htmlFor="pain" className="block text-sm font-medium text-foreground mb-1.5">
                Biggest pain you&apos;d want Dory to solve?{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <textarea
                id="pain"
                name="pain"
                rows={3}
                className="w-full rounded-lg bg-glass border border-glass-border px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-brand-core/50 focus:border-brand-core/50 transition-colors resize-none"
                placeholder="Late payments, maintenance tracking, tenant screening..."
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-white border-0 glow-sm hover:glow-md transition-shadow duration-300"
              style={{ background: "var(--gradient-brand)" }}
            >
              Join the waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
