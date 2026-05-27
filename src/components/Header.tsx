"use client";

import { useEffect, useState } from "react";
import { useT } from "@/i18n/LangProvider";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

const DAPP_URL = "#"; // placeholder until real dapp URL available

export function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/80 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group" aria-label="BMBY home">
            <Logo size={36} priority className="transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[15px] font-semibold tracking-wide text-white">
                {t.nav.brand}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                {t.nav.brandEn}
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a href="#mechanism" className="hover:text-white transition-colors">
              {t.nav.menuMechanism}
            </a>
            <a href="#tokens" className="hover:text-white transition-colors">
              {t.nav.menuTokens}
            </a>
            <a href="#referral" className="hover:text-white transition-colors">
              {t.nav.menuReferral}
            </a>
            <a href="#nodes" className="hover:text-white transition-colors">
              {t.nav.menuNodes}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LangSwitcher />
            <a
              href={DAPP_URL}
              className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-bright px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white animate-pulse-glow shimmer-overlay"
            >
              <span>{t.nav.dapp}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative"
              >
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
