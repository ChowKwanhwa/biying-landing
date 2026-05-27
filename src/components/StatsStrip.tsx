"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { AnimatedNumber } from "./AnimatedNumber";

export function StatsStrip() {
  const t = useT();
  const items = [
    {
      value: parseFloat(t.stats.item1Value),
      suffix: t.stats.item1Suffix,
      label: t.stats.item1Label,
    },
    {
      value: parseFloat(t.stats.item2Value),
      suffix: t.stats.item2Suffix,
      label: t.stats.item2Label,
    },
    {
      value: parseFloat(t.stats.item3Value),
      suffix: t.stats.item3Suffix,
      label: t.stats.item3Label,
    },
    {
      value: parseFloat(t.stats.item4Value),
      suffix: t.stats.item4Suffix,
      label: t.stats.item4Label,
    },
  ];

  return (
    <section aria-label={t.stats.title} className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {items.map((it, idx) => (
            <div
              key={idx}
              className={`text-center ${
                idx > 0
                  ? "lg:border-l lg:border-white/8 lg:pl-6"
                  : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chrome">
                <AnimatedNumber value={it.value} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-text-muted tracking-wide">
                {it.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
