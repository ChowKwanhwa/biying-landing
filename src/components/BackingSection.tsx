"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";

export function BackingSection() {
  const t = useT();
  const insts = [
    { name: t.backing.inst1, en: t.backing.inst1En },
    { name: t.backing.inst2, en: t.backing.inst2En },
    { name: t.backing.inst3, en: t.backing.inst3En },
  ];

  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 size-[460px] rounded-full blur-3xl bg-brand-primary/30"
          />
          <div className="relative text-center">
            <div className="text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-glow">
              {t.backing.eyebrow}
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-chrome">
              {t.backing.title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-text-muted leading-relaxed">
              {t.backing.body}
            </p>
          </div>

          <div className="relative mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {insts.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/5 hover:border-brand-glow/40 hover:bg-white/8 transition-all p-4 sm:p-6 text-center group"
              >
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-brand-glow transition-colors">
                  {it.name}
                </div>
                {it.en && it.en !== "—" && (
                  <div className="mt-1 text-[11px] sm:text-xs tracking-wider text-text-dim">
                    {it.en}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
