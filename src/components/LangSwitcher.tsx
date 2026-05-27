"use client";

import { useLang } from "@/i18n/LangProvider";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language"
      className="relative inline-flex items-center rounded-full border border-white/15 bg-white/5 backdrop-blur p-0.5 text-xs font-medium"
    >
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-300 ${
          lang === "zh" ? "text-white" : "text-white/60 hover:text-white"
        }`}
        aria-pressed={lang === "zh"}
      >
        中
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`relative z-10 px-3 py-1.5 rounded-full transition-colors duration-300 ${
          lang === "en" ? "text-white" : "text-white/60 hover:text-white"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-gradient-to-r from-brand-primary to-brand-bright shadow-[0_0_18px_rgba(157,78,221,0.55)] transition-all duration-300"
        style={{ left: lang === "zh" ? "2px" : "calc(50% + 0px)" }}
      />
    </div>
  );
}
