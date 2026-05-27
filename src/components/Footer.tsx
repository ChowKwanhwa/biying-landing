"use client";

import { useT } from "@/i18n/LangProvider";
import { Logo } from "./Logo";

const SOCIAL = {
  twitter: "https://x.com/BetwinLabs",
  telegram: "https://t.me/BetwinBlueMount",
};

export function Footer() {
  const t = useT();
  return (
    <footer className="relative mt-20 border-t border-white/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">{t.nav.brand}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-text-dim">
                {t.nav.brandEn}
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-text-muted leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-glow">
            {t.footer.navTitle}
          </div>
          <ul className="mt-4 space-y-2.5 text-sm text-text-muted">
            <li>
              <a href="#mechanism" className="hover:text-white transition-colors">
                {t.nav.menuMechanism}
              </a>
            </li>
            <li>
              <a href="#tokens" className="hover:text-white transition-colors">
                {t.nav.menuTokens}
              </a>
            </li>
            <li>
              <a href="#referral" className="hover:text-white transition-colors">
                {t.nav.menuReferral}
              </a>
            </li>
            <li>
              <a href="#nodes" className="hover:text-white transition-colors">
                {t.nav.menuNodes}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-glow">
            {t.footer.socialTitle}
          </div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={SOCIAL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {t.footer.twitterLabel}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.11-3.03-1.97 1.91c-.23.23-.42.42-.86.42z" />
                </svg>
                {t.footer.telegramLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-text-dim">
          <div>{t.footer.copyright}</div>
          <div className="max-w-2xl md:text-right">{t.footer.disclaimer}</div>
        </div>
      </div>
    </footer>
  );
}
