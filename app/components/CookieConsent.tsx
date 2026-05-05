"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("dory-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("dory-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("dory-cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 rounded-xl border border-black/[0.08] bg-white shadow-xl shadow-black/[0.08] p-5 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <p className="text-sm text-foreground font-medium mb-1">This site uses cookies</p>
      <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">
        We use cookies to measure site traffic and improve your experience. By accepting, you consent to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 text-sm font-medium text-white py-2 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: "var(--gradient-brand)" }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="flex-1 text-sm font-medium text-muted-foreground py-2 rounded-lg border border-black/[0.08] bg-[#f8fafc] hover:text-foreground hover:border-black/[0.15] transition-all duration-200"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
