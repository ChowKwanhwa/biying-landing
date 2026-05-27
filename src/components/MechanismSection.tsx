"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";

export function MechanismSection() {
  const t = useT();
  const cards = [
    {
      title: t.mechanism.card1Title,
      body: t.mechanism.card1Body,
      stat: t.mechanism.card1Stat,
    },
    {
      title: t.mechanism.card2Title,
      body: t.mechanism.card2Body,
      stat: t.mechanism.card2Stat,
    },
    {
      title: t.mechanism.card3Title,
      body: t.mechanism.card3Body,
      stat: t.mechanism.card3Stat,
    },
    {
      title: t.mechanism.card4Title,
      body: t.mechanism.card4Body,
      stat: t.mechanism.card4Stat,
    },
  ];

  return (
    <section id="mechanism" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.mechanism.eyebrow}
          title={t.mechanism.title}
          subtitle={t.mechanism.subtitle}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative group rounded-2xl glass overflow-hidden p-6"
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-glow/60 to-transparent"
              />
              <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-glow">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {c.title}
              </h3>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {c.body}
              </p>
              <div className="mt-5 inline-flex items-center rounded-full bg-brand-primary/15 border border-brand-primary/30 px-3 py-1 text-[11px] font-semibold text-brand-glow">
                {c.stat}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 relative rounded-2xl overflow-hidden glass-strong"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-brand-primary/30 via-transparent to-brand-cyan/15 opacity-70"
          />
          <div className="relative grid md:grid-cols-[260px_1fr] gap-4 md:gap-8 items-center p-6 sm:p-8">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] text-brand-glow uppercase">
                30D Cycle
              </div>
              <h3 className="mt-2 text-2xl font-bold text-white">
                {t.mechanism.bottomTitle}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              {t.mechanism.bottomBody}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
