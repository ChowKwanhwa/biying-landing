"use client";

import { motion } from "framer-motion";
import { useT } from "@/i18n/LangProvider";
import { SectionHeading } from "./SectionHeading";

const Icons = {
  Weighted: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V10l7-5 7 5v11" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  Flat: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M12 12v-1M12 13v-1" />
    </svg>
  ),
  Tax: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Vote: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    </svg>
  ),
};

export function NodesSection() {
  const t = useT();
  const points = [
    { title: t.nodes.point1Title, body: t.nodes.point1Body, Icon: Icons.Weighted },
    { title: t.nodes.point2Title, body: t.nodes.point2Body, Icon: Icons.Flat },
    { title: t.nodes.point3Title, body: t.nodes.point3Body, Icon: Icons.Tax },
    { title: t.nodes.point4Title, body: t.nodes.point4Body, Icon: Icons.Vote },
  ];

  return (
    <section id="nodes" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.nodes.eyebrow}
          title={t.nodes.title}
          subtitle={t.nodes.subtitle}
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start">
          {/* hero number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative glass-strong rounded-3xl p-8 sm:p-10 overflow-hidden text-center lg:text-left"
          >
            <div
              aria-hidden
              className="absolute -top-20 -left-20 size-72 rounded-full blur-3xl bg-brand-primary/40"
            />
            <div className="relative">
              <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-glow">
                Super Nodes
              </div>
              <div className="mt-4 text-7xl sm:text-8xl font-extrabold text-chrome leading-none">
                1,500
              </div>
              <p className="mt-5 text-sm text-text-muted leading-relaxed">
                {t.nodes.subtitle}
              </p>
              <div className="mt-8 rounded-2xl bg-bg-deep/60 border border-brand-glow/25 p-5">
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-glow">
                  {t.nodes.activationTitle}
                </div>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">
                  {t.nodes.activationBody}
                </p>
              </div>
            </div>
          </motion.div>

          {/* benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 sm:p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-glow ring-1 ring-brand-glow/30">
                  <p.Icon />
                </span>
                <h4 className="mt-4 text-base font-semibold text-white">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
