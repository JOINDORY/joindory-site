"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Building2, Wrench, DollarSign, Users, BarChart3, Settings, ChevronRight } from "lucide-react";

const properties = [
  {
    address: "4521 Rue Saint-Denis",
    area: "Le Plateau",
    units: 6,
    status: "Collected",
    statusColor: "#22c55e",
    collected: "$8,400",
    initials: "SD",
  },
  {
    address: "1845 Boul. Saint-Laurent",
    area: "Mile End",
    units: 4,
    status: "2 pending",
    statusColor: "#f59e0b",
    collected: "$4,200",
    initials: "SL",
  },
  {
    address: "312 Avenue du Parc",
    area: "Outremont",
    units: 3,
    status: "Collected",
    statusColor: "#22c55e",
    collected: "$5,100",
    initials: "AP",
  },
  {
    address: "7890 Rue Sherbrooke E.",
    area: "Hochelaga",
    units: 8,
    status: "Maintenance",
    statusColor: "#2C91FF",
    collected: "$10,800",
    initials: "SE",
  },
];

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Building2, label: "Properties", active: false },
  { icon: Users, label: "Tenants", active: false },
  { icon: DollarSign, label: "Payments", active: false },
  { icon: Wrench, label: "Maintenance", active: false },
  { icon: Settings, label: "Settings", active: false },
];

function useCountUp(end: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let raf: number;
    function tick(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);
  return value;
}

export function HeroDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [rowsVisible, setRowsVisible] = useState(0);

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

  useEffect(() => {
    if (!revealed) return;
    const timer = setTimeout(() => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setRowsVisible(count);
        if (count >= properties.length) clearInterval(interval);
      }, 200);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timer);
  }, [revealed]);

  const doors = useCountUp(21, 1200, revealed);
  const collected = useCountUp(28500, 1400, revealed);
  const occupancy = useCountUp(95, 1000, revealed);
  const tickets = useCountUp(3, 600, revealed);

  const formatMoney = useCallback((n: number) => {
    return "$" + n.toLocaleString("en-CA");
  }, []);

  return (
    <div ref={ref} className="relative mt-16 lg:mt-20">
      {/* Glow behind dashboard */}
      <div className="absolute -inset-16 bg-brand-deep/8 blur-[120px] rounded-full animate-glow-pulse" />
      <div className="absolute -inset-8 bg-brand-sky/5 blur-[80px] rounded-full animate-glow-drift" />

      <div
        className="relative rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-xl shadow-brand-deep/[0.06]"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed
            ? "perspective(1200px) rotateX(0deg) translateY(0px) scale(1)"
            : "perspective(1200px) rotateX(6deg) translateY(40px) scale(0.97)",
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center h-10 bg-[#f8fafc] border-b border-black/[0.06] px-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0]" />
          </div>
          <span className="flex-1 text-center text-[11px] text-[#94a3b8] select-none">Dashboard</span>
        </div>

        <div className="flex min-h-[420px] sm:min-h-[460px]">
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col w-[180px] bg-[#f8fafc] border-r border-black/[0.06] py-4 px-3 shrink-0">
            <div className="flex items-center gap-2 px-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: "linear-gradient(135deg, #014CFF, #2C91FF)" }}>
                D
              </div>
              <span className="text-sm font-semibold text-[#0a0a0a]">Dory</span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {sidebarItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] transition-colors ${
                    item.active
                      ? "bg-brand-deep/[0.08] text-brand-deep font-medium"
                      : "text-[#64748b] hover:text-[#0a0a0a]"
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 sm:p-6 overflow-hidden">
            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Total Doors", value: doors.toString(), color: "text-[#0a0a0a]" },
                { label: "Collected", value: formatMoney(collected), color: "text-[#0a0a0a]" },
                { label: "Occupancy", value: occupancy + "%", color: "text-[#22c55e]" },
                { label: "Open Tickets", value: tickets.toString(), color: "text-brand-deep" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-black/[0.06] bg-white p-3.5 transition-all duration-500"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: `${300 + i * 100}ms`,
                  }}
                >
                  <p className="text-[11px] text-[#94a3b8] mb-1.5">{stat.label}</p>
                  <p className={`text-xl sm:text-2xl font-semibold ${stat.color} tabular-nums`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Properties header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <h3 className="text-[13px] font-medium text-[#0a0a0a]">Properties</h3>
              <span className="text-[11px] text-[#94a3b8]">4 properties</span>
            </div>

            {/* Property rows */}
            <div className="space-y-2">
              {properties.map((prop, i) => (
                <div
                  key={prop.address}
                  className="flex items-center gap-3 sm:gap-4 rounded-xl border border-black/[0.06] bg-white p-3 sm:p-3.5 hover:border-black/[0.1] hover:shadow-sm transition-all duration-500 group cursor-default"
                  style={{
                    opacity: i < rowsVisible ? 1 : 0,
                    transform: i < rowsVisible ? "translateX(0)" : "translateX(-16px)",
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-lg bg-[#f0f7ff] flex items-center justify-center text-[11px] font-semibold text-brand-deep shrink-0">
                    {prop.initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-[#0a0a0a] truncate">{prop.address}</p>
                    <p className="text-[11px] text-[#94a3b8]">{prop.area} · {prop.units} units</p>
                  </div>

                  {/* Amount */}
                  <div className="hidden sm:block text-right mr-2">
                    <p className="text-[13px] font-medium text-[#0a0a0a] tabular-nums">{prop.collected}</p>
                    <p className="text-[11px] text-[#94a3b8]">this month</p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="relative flex h-2 w-2">
                      {prop.status === "Collected" && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40" style={{ backgroundColor: prop.statusColor }} />
                      )}
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: prop.statusColor }} />
                    </div>
                    <span className="text-[11px] text-[#94a3b8] hidden sm:inline">{prop.status}</span>
                  </div>

                  <ChevronRight className="w-3.5 h-3.5 text-[#cbd5e1] group-hover:text-[#94a3b8] transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
