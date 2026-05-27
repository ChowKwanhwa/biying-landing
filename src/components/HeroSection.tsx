"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useT } from "@/i18n/LangProvider";
import { ParticlesBackground } from "./ParticlesBackground";

const DAPP_URL = "#";

export function HeroSection() {
  const t = useT();

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-20 sm:pb-28"
    >
      <ParticlesBackground count={70} />

      {/* Decorative arcs */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[800px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] animate-spin-slow">
          <svg viewBox="0 0 800 800" className="w-full h-full opacity-40">
            <defs>
              <linearGradient id="arc1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C77DFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#C77DFF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#4CC9F0" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="arc2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7B2CBF" stopOpacity="0" />
                <stop offset="50%" stopColor="#9D4EDD" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E94BE8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="400"
              cy="400"
              r="340"
              fill="none"
              stroke="url(#arc1)"
              strokeWidth="1.2"
              strokeDasharray="6 380"
            />
            <circle
              cx="400"
              cy="400"
              r="280"
              fill="none"
              stroke="url(#arc2)"
              strokeWidth="1"
              strokeDasharray="4 280"
              transform="rotate(45 400 400)"
            />
            <circle
              cx="400"
              cy="400"
              r="220"
              fill="none"
              stroke="url(#arc1)"
              strokeWidth="0.8"
              strokeDasharray="2 180"
              transform="rotate(120 400 400)"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium text-brand-glow tracking-wider"
            >
              <span className="size-1.5 rounded-full bg-brand-glow animate-pulse" />
              {t.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-[clamp(2.4rem,5.2vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="block text-chrome">{t.hero.h1Part1}</span>
              <span className="block text-violet animate-gradient bg-gradient-to-r from-brand-glow via-brand-bright to-brand-cyan">
                {t.hero.h1Part2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base sm:text-lg text-text-muted leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {t.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-glow/30 bg-brand-primary/10 px-3 py-1 text-[12px] font-medium text-brand-glow"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={DAPP_URL}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-bright px-7 py-3.5 text-sm font-semibold text-white animate-pulse-glow shimmer-overlay"
              >
                <span>{t.hero.ctaPrimary}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#mechanism"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-brand-glow/40 transition-all"
              >
                {t.hero.ctaSecondary}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative size-[280px] sm:size-[340px] lg:size-[420px]">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(199,125,255,0.7) 0%, rgba(123,44,191,0.35) 45%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 rounded-full border border-brand-glow/30 animate-spin-slow" />
              <div
                className="absolute inset-6 rounded-full border border-brand-bright/20 animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "30s" }}
              />
              <div className="relative size-full animate-float flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="BMBY"
                  width={360}
                  height={360}
                  priority
                  className="relative rounded-full size-[78%] object-contain drop-shadow-[0_0_40px_rgba(199,125,255,0.55)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
