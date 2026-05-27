"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const GrowthIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="m7 14 4-4 4 4 6-6" />
    <path d="M17 8h4v4" />
  </svg>
);

export function PainSolutionSection() {
  const t = useT();
  const cards = [
    {
      tag: t.pain.card1Tag,
      title: t.pain.card1Title,
      pain: t.pain.card1Pain,
      solution: t.pain.card1Solution,
      Icon: ShieldIcon,
      tint: "from-brand-primary/30 to-brand-bright/10",
    },
    {
      tag: t.pain.card2Tag,
      title: t.pain.card2Title,
      pain: t.pain.card2Pain,
      solution: t.pain.card2Solution,
      Icon: GrowthIcon,
      tint: "from-brand-cyan/25 to-brand-glow/15",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.pain.eyebrow}
          title={t.pain.title}
          subtitle={t.pain.subtitle}
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="relative group rounded-3xl glass-strong overflow-hidden"
            >
              <div
                aria-hidden
                className={`absolute -top-24 -right-24 size-64 rounded-full blur-3xl opacity-60 bg-gradient-to-br ${c.tint}`}
              />
              <div className="relative p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-glow ring-1 ring-brand-glow/30">
                    <c.Icon />
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-brand-primary to-brand-bright px-3 py-1 text-[11px] font-semibold tracking-wider text-white uppercase">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl sm:text-[26px] font-semibold text-white">
                  {c.title}
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-400" />
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                      {c.pain}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-glow shadow-[0_0_8px_rgba(199,125,255,0.7)]" />
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
