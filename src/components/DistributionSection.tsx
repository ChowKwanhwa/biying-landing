"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";

function DonutChart() {
  // Stroke-dasharray ring: circumference = 2πr. r = 90 → circumference ≈ 565.49
  const C = 2 * Math.PI * 90;
  // Two halves: 47.5% each
  // Inside the static half, the inner 5% slice is the burn
  // Visualize as 3 segments: 47.5 (dynamic), 42.5 (static cash), 5 (burn)
  const dyn = (47.5 / 100) * C;
  const stat = (42.5 / 100) * C;
  const burn = (5 / 100) * C;
  const gap = 2;
  return (
    <div className="relative size-[260px] sm:size-[300px] mx-auto">
      <svg viewBox="0 0 220 220" className="w-full h-full -rotate-90">
        <defs>
          <linearGradient id="g-dyn" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C77DFF" />
            <stop offset="100%" stopColor="#7B2CBF" />
          </linearGradient>
          <linearGradient id="g-stat" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4CC9F0" />
            <stop offset="100%" stopColor="#9D4EDD" />
          </linearGradient>
          <linearGradient id="g-burn" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E94BE8" />
            <stop offset="100%" stopColor="#FF7AD9" />
          </linearGradient>
        </defs>
        {/* track */}
        <circle cx="110" cy="110" r="90" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="22" />
        {/* dynamic 47.5% */}
        <motion.circle
          cx="110"
          cy="110"
          r="90"
          fill="none"
          stroke="url(#g-dyn)"
          strokeWidth="22"
          strokeLinecap="butt"
          strokeDasharray={`${dyn - gap} ${C - dyn + gap}`}
          strokeDashoffset={0}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        />
        {/* static cash 42.5% */}
        <motion.circle
          cx="110"
          cy="110"
          r="90"
          fill="none"
          stroke="url(#g-stat)"
          strokeWidth="22"
          strokeLinecap="butt"
          strokeDasharray={`${stat - gap} ${C - stat + gap}`}
          strokeDashoffset={-dyn}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        />
        {/* burn 5% */}
        <motion.circle
          cx="110"
          cy="110"
          r="90"
          fill="none"
          stroke="url(#g-burn)"
          strokeWidth="22"
          strokeLinecap="butt"
          strokeDasharray={`${burn - gap} ${C - burn + gap}`}
          strokeDashoffset={-(dyn + stat)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-[11px] tracking-[0.2em] text-brand-glow uppercase">
          100%
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-chrome mt-1">
          47.5 / 47.5
        </div>
        <div className="text-[10px] tracking-wider text-text-muted mt-1">
          incl. 5% burn
        </div>
      </div>
    </div>
  );
}

export function DistributionSection() {
  const t = useT();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.income.eyebrow}
          title={t.income.title}
          subtitle={t.income.subtitle}
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              {
                title: t.income.staticTitle,
                body: t.income.staticBody,
                badge: "1.2%",
                color: "from-brand-cyan to-brand-bright",
              },
              {
                title: t.income.dynamicTitle,
                body: t.income.dynamicBody,
                badge: "21x",
                color: "from-brand-glow to-brand-primary",
              },
              {
                title: t.income.smoothTitle,
                body: t.income.smoothBody,
                badge: "0.6%",
                color: "from-brand-magenta to-brand-bright",
              },
            ].map((row, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="glass rounded-2xl p-5 sm:p-6 flex gap-4 sm:gap-5 items-start"
              >
                <span
                  className={`shrink-0 inline-flex items-center justify-center rounded-xl w-14 h-14 sm:w-16 sm:h-16 text-sm font-bold text-white bg-gradient-to-br ${row.color} shadow-[0_0_20px_rgba(157,78,221,0.45)]`}
                >
                  {row.badge}
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    {row.title}
                  </h4>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                    {row.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-6 sm:p-8 flex flex-col"
          >
            <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-glow">
              {t.income.pieTitle}
            </div>
            <div className="mt-4 flex-1 flex items-center justify-center">
              <DonutChart />
            </div>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <span className="size-3 rounded-sm bg-gradient-to-br from-brand-glow to-brand-primary" />
                  <span className="text-white/85">{t.income.pieDynamicLabel}</span>
                </span>
                <span className="font-semibold text-white">{t.income.pieDynamicValue}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <span className="size-3 rounded-sm bg-gradient-to-br from-brand-cyan to-brand-bright" />
                  <span className="text-white/85">{t.income.pieStaticLabel}</span>
                </span>
                <span className="font-semibold text-white">{t.income.pieStaticValue}</span>
              </div>
              <div className="flex items-center justify-between gap-3 pl-4 border-l border-brand-magenta/40">
                <span className="flex items-center gap-2">
                  <span className="size-3 rounded-sm bg-gradient-to-br from-brand-magenta to-pink-400" />
                  <span className="text-white/65">{t.income.pieBurnLabel}</span>
                </span>
                <span className="font-semibold text-brand-glow">{t.income.pieBurnValue}</span>
              </div>
            </div>
            <p className="mt-6 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-white/8 pt-4">
              {t.income.pieCaption}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
