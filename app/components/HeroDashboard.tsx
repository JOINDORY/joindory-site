"use client";

import { useEffect, useRef, useState } from "react";

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mt-16 lg:mt-20">
      {/* Glow behind dashboard */}
      <div className="absolute -inset-16 bg-brand-deep/12 blur-[120px] rounded-full animate-glow-pulse" />
      <div className="absolute -inset-8 bg-brand-sky/5 blur-[80px] rounded-full animate-glow-drift" />

      <div
        className={`relative glass-strong rounded-2xl overflow-hidden glow-sm transition-all duration-[1200ms] ${
          revealed
            ? "opacity-100"
            : "opacity-0"
        }`}
        style={{
          transform: revealed
            ? "perspective(1200px) rotateX(0deg) translateY(0px) scale(1)"
            : "perspective(1200px) rotateX(6deg) translateY(40px) scale(0.97)",
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          viewBox="0 0 960 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Title bar */}
          <rect width="960" height="520" rx="12" fill="rgba(255,255,255,0.02)" />
          <rect width="960" height="40" rx="12" fill="rgba(255,255,255,0.04)" />
          <rect y="28" width="960" height="12" fill="rgba(255,255,255,0.04)" />
          <circle cx="24" cy="20" r="4" fill="rgba(255,255,255,0.1)" />
          <circle cx="38" cy="20" r="4" fill="rgba(255,255,255,0.1)" />
          <circle cx="52" cy="20" r="4" fill="rgba(255,255,255,0.1)" />
          <text x="480" y="24" textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.3)" fontFamily="var(--font-geist-sans)">Dashboard</text>

          {/* Sidebar */}
          <rect y="40" width="180" height="480" fill="rgba(255,255,255,0.02)" />
          <line x1="180" y1="40" x2="180" y2="520" stroke="rgba(255,255,255,0.05)" />
          <rect x="20" y="60" width="140" height="10" rx="5" fill="rgba(255,255,255,0.07)" />
          <rect x="20" y="84" width="100" height="10" rx="5" fill="rgba(1,76,255,0.25)" />
          <rect x="20" y="108" width="120" height="10" rx="5" fill="rgba(255,255,255,0.05)" />
          <rect x="20" y="132" width="80" height="10" rx="5" fill="rgba(255,255,255,0.05)" />
          <rect x="20" y="156" width="110" height="10" rx="5" fill="rgba(255,255,255,0.05)" />

          {/* Stats row */}
          <rect x="204" y="60" width="170" height="80" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <text x="228" y="88" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-geist-sans)">Total Doors</text>
          <text x="228" y="118" fontSize="26" fontWeight="600" fill="rgba(255,255,255,0.95)" fontFamily="var(--font-geist-sans)">12</text>

          <rect x="394" y="60" width="170" height="80" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <text x="418" y="88" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-geist-sans)">Collected</text>
          <text x="418" y="118" fontSize="26" fontWeight="600" fill="rgba(255,255,255,0.95)" fontFamily="var(--font-geist-sans)">$14,200</text>

          <rect x="584" y="60" width="170" height="80" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <text x="608" y="88" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-geist-sans)">Occupancy</text>
          <text x="608" y="118" fontSize="26" fontWeight="600" fill="#22c55e" fontFamily="var(--font-geist-sans)">92%</text>

          <rect x="774" y="60" width="162" height="80" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" />
          <text x="798" y="88" fontSize="11" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-geist-sans)">Open Tickets</text>
          <text x="798" y="118" fontSize="26" fontWeight="600" fill="#4DB2FE" fontFamily="var(--font-geist-sans)">3</text>

          {/* Property rows */}
          <rect x="204" y="164" width="732" height="72" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="228" y="182" width="36" height="36" rx="8" fill="rgba(1,76,255,0.15)" />
          <text x="246" y="206" textAnchor="middle" fontSize="15" fontWeight="500" fill="#4DB2FE" fontFamily="var(--font-geist-sans)">A</text>
          <text x="280" y="198" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.9)" fontFamily="var(--font-geist-sans)">123 Rue Maple, Montreal</text>
          <text x="280" y="218" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">4 units</text>
          <circle cx="860" cy="196" r="4" fill="#22c55e" />
          <text x="872" y="200" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">Collected</text>

          <rect x="204" y="248" width="732" height="72" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="228" y="266" width="36" height="36" rx="8" fill="rgba(1,76,255,0.15)" />
          <text x="246" y="290" textAnchor="middle" fontSize="15" fontWeight="500" fill="#4DB2FE" fontFamily="var(--font-geist-sans)">B</text>
          <text x="280" y="282" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.9)" fontFamily="var(--font-geist-sans)">45 Oak Ave, Toronto</text>
          <text x="280" y="302" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">2 units</text>
          <circle cx="860" cy="280" r="4" fill="#f59e0b" />
          <text x="872" y="284" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">Lease ending</text>

          <rect x="204" y="332" width="732" height="72" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="228" y="350" width="36" height="36" rx="8" fill="rgba(1,76,255,0.15)" />
          <text x="246" y="374" textAnchor="middle" fontSize="15" fontWeight="500" fill="#4DB2FE" fontFamily="var(--font-geist-sans)">C</text>
          <text x="280" y="366" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.9)" fontFamily="var(--font-geist-sans)">789 Pine Rd, Ottawa</text>
          <text x="280" y="386" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">6 units</text>
          <circle cx="860" cy="364" r="4" fill="#2C91FF" />
          <text x="872" y="368" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">Maintenance</text>

          <rect x="204" y="416" width="732" height="72" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
          <rect x="228" y="434" width="36" height="36" rx="8" fill="rgba(1,76,255,0.15)" />
          <text x="246" y="458" textAnchor="middle" fontSize="15" fontWeight="500" fill="#4DB2FE" fontFamily="var(--font-geist-sans)">D</text>
          <text x="280" y="450" fontSize="13" fontWeight="500" fill="rgba(255,255,255,0.9)" fontFamily="var(--font-geist-sans)">12 Boulevard Saint-Laurent</text>
          <text x="280" y="470" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">3 units</text>
          <circle cx="860" cy="448" r="4" fill="#22c55e" />
          <text x="872" y="452" fontSize="11" fill="rgba(255,255,255,0.35)" fontFamily="var(--font-geist-sans)">Collected</text>
        </svg>
      </div>
    </div>
  );
}
