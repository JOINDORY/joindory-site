"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "./FadeIn";

const doorOptions = ["1–5", "6–10", "11–25", "26–50", "50+"];
const roleOptions = ["Landlord", "Tenant", "Both", "Other"];

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [role, setRole] = useState("");
  const [offset, setOffset] = useState(0);
  const [loadedAt] = useState(() => Date.now());

  useEffect(() => {
    function handleScroll() {
      const section = document.getElementById("waitlist");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const navHeight = 80;
      if (rect.top < navHeight) {
        setOffset(Math.min(navHeight - rect.top, navHeight));
      } else {
        setOffset(0);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement).value;
    if (honeypot) {
      // Bot filled the hidden field — fake a success
      setSubmitting(false);
      setSubmitted(true);
      return;
    }

    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      role,
      doors: (form.querySelector('input[name="doors"]:checked') as HTMLInputElement | null)?.value || "",
      pain: (form.elements.namedItem("pain") as HTMLTextAreaElement).value,
      _t: loadedAt,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("API error");
    } catch {
      // Log to console as fallback so the lead is visible in server/browser logs
      console.error("[waitlist-fallback]", JSON.stringify(data));
    }

    // Fire conversion events
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const w = window as any;
      if (w.fbq) w.fbq("track", "Lead");
      if (w.gtag) w.gtag("event", "conversion", { send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL });
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section
        id="waitlist"
        className="relative py-section"
        style={{ background: "linear-gradient(180deg, #4DB2FE 0%, #2C91FF 50%, #196EFF 100%)" }}
      >
        <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-medium text-white/90 mb-3">
                Early access
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-white mb-6">
                Join the waitlist.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Get early access, founding pricing, and a direct line to the team.
              </p>
            </div>
            <div className="rounded-2xl border border-black/[0.08] bg-white shadow-xl shadow-brand-deep/[0.04] overflow-hidden">
              <div className="flex items-center h-10 bg-[#f8fafc] border-b border-black/[0.06] px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                </div>
                <span className="flex-1 text-center text-[11px] text-[#94a3b8] select-none">Waitlist</span>
                <div className="w-14" />
              </div>
              <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 bg-[#dcfce7]">
                  <CheckCircle2 className="h-6 w-6 text-[#22c55e]" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">You&apos;re on the list.</h2>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll be in touch with early access and founding pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="waitlist"
      className="relative pt-12 pb-section"
      style={{ background: "linear-gradient(180deg, #4DB2FE 0%, #2C91FF 50%, #196EFF 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0" style={{ background: "var(--glow-center)" }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start transition-transform duration-300 ease-out" style={{ transform: `translateY(${offset}px)` }}>
          {/* Heading */}
          <FadeIn>
            <p className="text-sm font-medium text-white/90 mb-3">
              Early access
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] text-white mb-6">
              Join the waitlist.
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Get early access, founding pricing, and a direct line to the team.
            </p>
          </FadeIn>

          {/* Form panel */}
          <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-black/[0.08] bg-white shadow-xl shadow-brand-deep/[0.04] overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center h-10 bg-[#f8fafc] border-b border-black/[0.06] px-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
              </div>
              <span className="flex-1 text-center text-[11px] text-[#94a3b8] select-none">Waitlist</span>
              <div className="w-14" />
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Honeypot — hidden from humans, bots fill it */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1.5">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full rounded-lg bg-[#f8fafc] border border-black/[0.08] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-brand-core/20 focus:border-brand-core/40 transition-all"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1.5">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full rounded-lg bg-[#f8fafc] border border-black/[0.08] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-brand-core/20 focus:border-brand-core/40 transition-all"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-[#f8fafc] border border-black/[0.08] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-brand-core/20 focus:border-brand-core/40 transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="w-full rounded-lg bg-[#f8fafc] border border-black/[0.08] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-brand-core/20 focus:border-brand-core/40 transition-all"
                    placeholder="Montreal, Toronto..."
                  />
                </div>
              </div>

              <fieldset>
                <legend className="block text-sm font-medium text-foreground mb-2">I am a</legend>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Role">
                  {roleOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setRole(option)}
                      aria-pressed={role === option}
                      className={`rounded-lg border px-3 py-1.5 text-sm transition-all duration-200 ${
                        role === option
                          ? "border-brand-core/30 bg-brand-core/[0.08] text-brand-core font-medium"
                          : "border-black/[0.08] bg-[#f8fafc] text-muted-foreground hover:text-foreground hover:border-black/[0.15]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="role" value={role} />
              </fieldset>

              {(role === "Landlord" || role === "Both") && (
                <fieldset>
                  <legend className="block text-sm font-medium text-foreground mb-2">
                    How many doors?
                  </legend>
                  <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Number of doors">
                    {doorOptions.map((option) => (
                      <label
                        key={option}
                        className="rounded-lg border border-black/[0.08] bg-[#f8fafc] px-3 py-1.5 text-sm text-muted-foreground cursor-pointer hover:text-foreground hover:border-black/[0.15] has-[:checked]:border-brand-core/30 has-[:checked]:bg-brand-core/[0.08] has-[:checked]:text-brand-core has-[:checked]:font-medium transition-all duration-200"
                      >
                        <input type="radio" name="doors" value={option} className="sr-only" />
                        {option}
                      </label>
                    ))}
                  </div>
                </fieldset>
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
                  className="w-full rounded-lg bg-[#f8fafc] border border-black/[0.08] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-2 focus:ring-brand-core/20 focus:border-brand-core/40 transition-all resize-none"
                  placeholder="Late payments, maintenance tracking, tenant screening..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-8 py-3 rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-brand-deep/20 disabled:opacity-70 disabled:pointer-events-none"
                style={{ background: "var(--gradient-brand)" }}
              >
                {submitting ? "Submitting..." : "Join the waitlist"}
                {!submitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
