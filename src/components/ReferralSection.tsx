"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";

export function ReferralSection() {
  const t = useT();
  const tiers = [
    {
      label: t.referral.tier1Label,
      value: t.referral.tier1Value,
      note: t.referral.tier1Note,
      width: "w-[88%]",
      gradient: "from-brand-primary via-brand-bright to-brand-glow",
    },
    {
      label: t.referral.tier2Label,
      value: t.referral.tier2Value,
      note: t.referral.tier2Note,
      width: "w-[62%]",
      gradient: "from-brand-bright to-brand-glow",
    },
    {
      label: t.referral.tier3Label,
      value: t.referral.tier3Value,
      note: t.referral.tier3Note,
      width: "w-[38%]",
      gradient: "from-brand-cyan to-brand-bright",
    },
  ];

  return (
    <section id="referral" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.referral.eyebrow}
          title={t.referral.title}
          subtitle={t.referral.subtitle}
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
          {/* tiers visualization */}
          <div className="space-y-5">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-baseline justify-between mb-2 px-1">
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-white">
                      {tier.label}
                    </span>
                    <span className="text-xs text-text-muted">{tier.note}</span>
                  </div>
                  <span className="text-xl font-bold text-chrome">{tier.value}</span>
                </div>
                <div className="relative h-12 rounded-xl overflow-hidden glass">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: tier.width.replace(/.*\[(.+)\]/, "$1") }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-xl bg-gradient-to-r ${tier.gradient} shadow-[0_0_24px_rgba(157,78,221,0.5)] relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 shimmer-overlay" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* total card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative glass-strong rounded-3xl p-8 text-center overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-brand-cyan/20"
            />
            <div className="relative">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-glow">
                {t.referral.totalLabel}
              </div>
              <div className="mt-4 text-6xl sm:text-7xl font-extrabold text-chrome leading-none">
                {t.referral.totalValue}
              </div>
              <div className="mt-3 text-sm text-text-muted">
                1 + 10 + 10 = 21 {/* tiers */}
              </div>
              <p className="mt-6 text-xs sm:text-sm text-text-muted leading-relaxed">
                {t.referral.footnote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
