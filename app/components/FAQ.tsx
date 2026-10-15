"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    question: "Where does Dory work?",
    answer:
      "Dory launches in Quebec and Ontario, with more provinces coming as we grow. We support jurisdiction-specific requirements for both provinces, including TAL and LTB processes, rent increase notices, and lease compliance.",
  },
  {
    question: "How does rent reporting work for tenants?",
    answer:
      "When tenants pay rent on time through Dory, those on-time payments can be reported to help build their credit history. Tenants choose to opt in and provide explicit consent before any data is shared.",
  },
  {
    question: "Do tenants have to opt in?",
    answer:
      "Yes. Rent reporting is entirely opt-in. Tenants provide explicit consent during onboarding and can withdraw at any time. No data is shared without their permission.",
  },
  {
    question: "What payment methods can tenants use?",
    answer:
      "Tenants can pay by credit card, debit, cheque, or direct bank transfer. Dory supports every major payment method so you and your tenants can use whatever works.",
  },
  {
    question: "How is rent paid out to me?",
    answer:
      "Rent payments are deposited directly into your bank account. You can track every payment, payout, and balance in your Dory dashboard.",
  },
  {
    question: "What forms does Dory generate?",
    answer:
      "Dory generates the rental forms required in your jurisdiction, from rent increase notices to lease modifications and tenant board filings. Notice timing is calculated based on your lease term and province.",
  },
  {
    question: "Can I import existing tenants and leases?",
    answer:
      "Yes. Add your properties and invite your tenants. They fill in their own details when they join, so setup takes minutes, not hours.",
  },
  {
    question: "Is my tenant data secure?",
    answer:
      "Yes. Your data is encrypted and stored on servers in North America. We comply with Canadian privacy requirements and nothing is shared without explicit consent.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Dory's core features, including properties, tenants, payments, maintenance, chat, and tenant credit reporting, are free no matter how many doors you manage. Dory Pro, coming soon, adds advanced automation and reporting for landlords who want more. Founding members who join the waitlist lock in early access to Pro pricing.",
  },
];

function useTypewriter(text: string, active: boolean, speed = 12) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [prevInput, setPrevInput] = useState({ text, active });

  // Reset state during render when inputs change (React-recommended pattern)
  if (prevInput.text !== text || prevInput.active !== active) {
    setPrevInput({ text, active });
    setDisplayed("");
    setDone(false);
  }

  useEffect(() => {
    if (!active) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, active, speed]);

  return { displayed, done };
}

function FAQTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(-1);

  // IntersectionObserver — auto-select first question on scroll into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSelected(0);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reveal animation (same as other panels)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeAnswer = selected >= 0 ? faqs[selected].answer : "";
  const activeQuestion = selected >= 0 ? faqs[selected].question : "";
  const { displayed, done } = useTypewriter(activeAnswer, selected >= 0);

  const handleSelect = useCallback((i: number) => {
    setSelected(-1);
    // Force re-mount of typewriter by toggling off then on
    requestAnimationFrame(() => setSelected(i));
  }, []);

  return (
    <div ref={ref} className="max-w-4xl mx-auto">
      <div
        className="rounded-2xl border border-black/[0.08] bg-white shadow-xl shadow-brand-deep/[0.04] overflow-hidden"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center h-10 bg-[#f8fafc] border-b border-black/[0.06] px-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
          </div>
          <span className="flex-1 text-center text-[11px] text-[#94a3b8] select-none">
            Dory Assistant
          </span>
          <div className="w-14" />
        </div>

        <div className="flex flex-col md:flex-row min-h-[340px]">
          {/* Left sidebar — question list */}
          <div className="md:w-[280px] border-b md:border-b-0 md:border-r border-black/[0.06] overflow-y-auto">
            <p className="text-[10px] font-medium text-[#94a3b8] uppercase tracking-wider px-4 pt-4 pb-2">
              Topics
            </p>
            <div className="pb-2">
              {faqs.map((faq, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-4 py-2.5 flex items-center gap-2.5 transition-colors ${
                    selected === i
                      ? "bg-[#f1f5f9] text-[#0a0a0a]"
                      : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0a0a0a]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      selected === i ? "bg-brand-azure" : "bg-[#d1d5db]"
                    }`}
                  />
                  <span className="text-[13px] leading-snug">{faq.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel — answer area */}
          <div className="flex-1 p-5 text-[13px] leading-relaxed">
            {selected >= 0 ? (
              <div className="space-y-4">
                {/* User question bubble */}
                <div className="flex justify-end">
                  <div className="bg-[#f1f5f9] rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[85%]">
                    <p className="text-[13px] text-[#0a0a0a]">{activeQuestion}</p>
                  </div>
                </div>

                {/* Dory answer */}
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-azure to-brand-core flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-bold text-white">D</span>
                  </div>
                  <div className="text-[#0a0a0a] text-[13px] leading-relaxed pt-0.5">
                    {displayed}
                    <span
                      className={`inline-block w-[7px] h-[15px] bg-brand-azure ml-0.5 align-middle ${
                        done ? "animate-blink" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-[#94a3b8] text-[13px]">
                Pick a question to get started.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-section"
      style={{
        background:
          "linear-gradient(180deg, #f6f8fb 0%, #f6f8fb 75%, #4DB2FE 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--glow-center)" }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="max-w-3xl mb-16">
          <p className="text-sm font-medium text-brand-azure mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.1] mb-6">
            <span className="text-gradient">Got </span>
            <span className="text-gradient-brand">questions?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Everything you need to know about how Dory works, who it&apos;s for, and what happens after you join.
          </p>
        </FadeIn>

        <FadeIn>
          <FAQTerminal />
        </FadeIn>
      </div>
    </section>
  );
}
