"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";

export function TokensSection() {
  const t = useT();
  const tokens = [
    {
      tag: t.tokens.byTag,
      name: t.tokens.byName,
      sub: t.tokens.bySub,
      points: t.tokens.byPoints,
      gradient: "from-brand-primary via-brand-bright to-brand-glow",
      ring: "ring-brand-primary/40",
      accent: "text-brand-glow",
    },
    {
      tag: t.tokens.bycTag,
      name: t.tokens.bycName,
      sub: t.tokens.bycSub,
      points: t.tokens.bycPoints,
      gradient: "from-brand-magenta via-brand-bright to-brand-primary",
      ring: "ring-brand-magenta/40",
      accent: "text-brand-magenta",
    },
    {
      tag: t.tokens.bybTag,
      name: t.tokens.bybName,
      sub: t.tokens.bybSub,
      points: t.tokens.bybPoints,
      gradient: "from-brand-cyan via-brand-bright to-brand-primary",
      ring: "ring-brand-cyan/40",
      accent: "text-brand-cyan",
    },
  ];

  return (
    <section id="tokens" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.tokens.eyebrow}
          title={t.tokens.title}
          subtitle={t.tokens.subtitle}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5 lg:gap-6">
          {tokens.map((tk, i) => (
            <motion.article
              key={tk.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl glass-strong overflow-hidden p-7 sm:p-8 flex flex-col"
            >
              <div
                aria-hidden
                className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${tk.gradient} opacity-20 group-hover:opacity-35 transition-opacity`}
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: 1,
                }}
              />

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-text-muted">
                  {tk.tag}
                </span>
                <span
                  className={`relative inline-flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br ${tk.gradient} text-white text-lg font-extrabold shadow-[0_0_28px_rgba(157,78,221,0.55)] ring-2 ${tk.ring}`}
                >
                  {tk.name}
                </span>
              </div>

              <h3 className={`mt-6 text-2xl sm:text-3xl font-bold ${tk.accent}`}>
                {tk.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{tk.sub}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {tk.points.map((p, k) => (
                  <li key={k} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                    <span className={`mt-2 size-1.5 shrink-0 rounded-full ${tk.accent.replace("text", "bg")}`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
