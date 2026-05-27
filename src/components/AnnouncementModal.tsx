"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/LangProvider";
import { Logo } from "./Logo";

const STORAGE_KEY = "bmby.announcement.v1.seen";
const TELEGRAM_URL = "https://t.me/BetwinBlueMount";

export function AnnouncementModal() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const seen = window.localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        const id = window.setTimeout(() => setOpen(true), 420);
        return () => window.clearTimeout(id);
      }
    } catch {
      // localStorage blocked → still show once per session
      const id = window.setTimeout(() => setOpen(true), 420);
      return () => window.clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(t.announcement.windowAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          aria-modal="true"
          role="dialog"
        >
          <div
            onClick={close}
            aria-hidden
            className="absolute inset-0 bg-bg-deep/85 backdrop-blur-xl"
          />
          <motion.article
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 28, scale: 0.94 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl glass-strong shadow-[0_30px_80px_rgba(123,44,191,0.5)] overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-32 -right-24 size-72 rounded-full blur-3xl bg-brand-primary/40"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-24 size-72 rounded-full blur-3xl bg-brand-cyan/25"
            />

            <button
              type="button"
              onClick={close}
              aria-label={t.announcement.close}
              className="absolute top-4 right-4 z-10 size-9 rounded-full grid place-items-center bg-white/5 hover:bg-white/15 border border-white/10 text-white/75 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="relative overflow-y-auto overscroll-contain px-5 sm:px-9 py-7 sm:py-9">
              <div className="flex items-center gap-3">
                <Logo size={36} />
                <div className="text-[10px] font-semibold tracking-[0.32em] text-brand-glow uppercase">
                  {t.announcement.eyebrow}
                </div>
              </div>

              <h2 className="mt-4 text-xl sm:text-2xl md:text-[28px] font-bold text-chrome leading-tight">
                {t.announcement.title}
              </h2>

              <div className="mt-5 space-y-3.5 text-[13.5px] sm:text-sm text-text-muted leading-relaxed">
                <p className="text-white/85">{t.announcement.greeting}</p>
                {t.announcement.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-baseline gap-2 rounded-2xl bg-gradient-to-r from-brand-primary/30 to-brand-bright/30 border border-brand-glow/30 px-4 py-2.5">
                  <span className="text-2xl sm:text-[28px] font-extrabold text-chrome leading-none">
                    {t.announcement.fundingAmount}
                  </span>
                  <span className="text-xs text-text-muted">
                    {t.announcement.fundingNote}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {t.announcement.consortium.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-brand-glow/30 bg-brand-primary/15 px-2.5 py-1 text-[11px] font-semibold text-white"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-bg-deep/70 border border-brand-glow/30 p-5 sm:p-6">
                <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-glow">
                  {t.announcement.windowTitle}
                </div>

                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[0.18em]">
                      {t.announcement.windowOpenLabel}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {t.announcement.windowOpen}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-text-dim uppercase tracking-[0.18em]">
                      {t.announcement.windowCloseLabel}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      {t.announcement.windowClose}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-[10px] text-text-dim uppercase tracking-[0.18em]">
                    {t.announcement.windowAddressLabel}
                  </div>
                  <div className="mt-1.5 flex items-center gap-2 rounded-lg bg-bg-mid/60 border border-white/10 px-3 py-2.5 font-mono text-[12px] sm:text-sm text-brand-glow break-all">
                    <span className="flex-1 select-all">
                      {t.announcement.windowAddress}
                    </span>
                    <button
                      type="button"
                      onClick={copyAddress}
                      className="shrink-0 rounded-md bg-white/8 hover:bg-white/15 px-2 py-0.5 text-[11px] font-semibold text-white/80 hover:text-white transition-colors"
                    >
                      {copied ? t.announcement.copied : t.announcement.copy}
                    </button>
                  </div>
                  <div className="mt-2 text-[11px] text-text-dim leading-relaxed">
                    {t.announcement.windowAddressNote}
                  </div>
                </div>

                <p className="mt-4 text-[12.5px] sm:text-sm text-white/85 leading-relaxed">
                  {t.announcement.windowFooter}
                </p>
              </div>

              <div className="mt-5 text-[11px] text-text-dim text-right">
                {t.announcement.signature}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-primary to-brand-bright px-6 sm:px-7 py-3 text-sm font-semibold text-white animate-pulse-glow shimmer-overlay"
                >
                  {t.announcement.ctaPrimary}
                </button>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-brand-glow/40 px-5 sm:px-6 py-3 text-sm font-medium text-white transition-all"
                >
                  {t.announcement.ctaSecondary}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
