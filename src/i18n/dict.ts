export type Lang = "zh" | "en";

export const DEFAULT_LANG: Lang = "zh";

export const dict = {
  zh: {
    meta: {
      title: "蓝山·必赢(BMBY) · 全球化 Web3 鏈上金融生態系統",
      description:
        "蓝山·必赢(BMBY)是部署在 BNB 鏈上的多代幣 DeFi 生態,以靜態收益 + 動態獎勵雙軌通證機制,讓長期貢獻者共享協議成長價值。",
    },
    nav: {
      brand: "蓝山·必赢",
      brandEn: "BMBY",
      dapp: "開啟 Dapp",
      whitepaper: "白皮書",
      menuMechanism: "機制",
      menuTokens: "通證",
      menuReferral: "返佣",
      menuNodes: "節點",
    },
    hero: {
      eyebrow: "蓝山·必赢(BMBY) · BNB Chain DeFi",
      h1Part1: "全球化 Web3",
      h1Part2: "鏈上金融生態系統",
      subtitle:
        "基於 BNB 打造的新一代去中心化金融生態平台 —— 讓參與者既是用戶,也是貢獻者,更是生態價值共享者。",
      ctaPrimary: "開啟 Dapp",
      ctaSecondary: "了解機制",
      tags: ["靜態收益", "動態獎勵", "雙軌共生"],
    },
    stats: {
      title: "核心數據",
      item1Value: "0.2",
      item1Suffix: " BNB",
      item1Label: "起步門檻",
      item2Value: "21",
      item2Suffix: " 代",
      item2Label: "返佣深度",
      item3Value: "1500",
      item3Suffix: "",
      item3Label: "超級節點",
      item4Value: "89.7",
      item4Suffix: "%",
      item4Label: "BY 銷毀比",
    },
    pain: {
      eyebrow: "市場痛點 · 必赢方案",
      title: "為什麼是 蓝山·必赢",
      subtitle:
        "我們重新審視 DeFi 的兩大頑疾,把答案寫進合約與經濟模型。",
      card1Tag: "安全保障",
      card1Title: "資金安全風險高",
      card1Pain:
        "智能合約漏洞頻發、項目方惡意跑路、中心化平台存在資產挪用風險。",
      card1Solution:
        "核心規則全上鏈、合約代碼開源審計、用戶自主掌控私鑰與資金,徹底杜絕人為干預。",
      card2Tag: "長期價值",
      card2Title: "收益模型不可持續",
      card2Pain:
        "短期高收益伴隨巨大泡沫,資金盤模式依賴新用戶入場,後期參與者極易被收割。",
      card2Solution:
        "引入動態收益調節與複投機制,結合通縮模型有效擠壓泡沫,保障生態長期穩健發展。",
    },
    mechanism: {
      eyebrow: "PART 01 · 核心經濟模型",
      title: "質押機制 · 穩健的生態基石",
      subtitle:
        "排隊入場、階梯權限、彈性週期 —— 把資金流入節奏交回給協議。",
      card1Title: "低門檻參與",
      card1Body: "最低 0.2 BNB 即可入場,初始上限 2 BNB;普惠大眾,輕鬆入場。",
      card1Stat: "0.2 BNB 起",
      card2Title: "排隊入場機制",
      card2Body: "每 10 分鐘開放 2 BNB 質押額度,有序進場,有效控制資金流入節奏。",
      card2Stat: "10 min / 2 BNB",
      card3Title: "階梯式權限開放",
      card3Body: "每 10 天自動開放更高權限,每次增加 2 BNB 額度,最高可至 20 BNB。",
      card3Stat: "封頂 20 BNB",
      card4Title: "遞增式複投機制",
      card4Body: "追加金額需大於或等於上次,鼓勵長期價值綁定,分享生態持續成長紅利。",
      card4Stat: "≥ 上次質押",
      bottomTitle: "靈活的 30 天質押週期",
      bottomBody:
        "每筆質押週期固定為 30 天。到期後用戶擁有完全自主權:可選擇本金 + 收益自動複投繼續享受複利;或追加金額重新質押以提升額度;或直接贖回,資金使用靈活自由。",
    },
    income: {
      eyebrow: "雙引擎驅動",
      title: "穩定收益 + 通縮分配",
      subtitle:
        "靜態收益提供穩健基礎,動態獎勵放大社區共建價值;每一筆收益都按統一口徑分配。",
      staticTitle: "靜態收益",
      staticBody:
        "日化 1.2% 單利,以 BNB / USDT 智能調節發放,10 天為一個結算週期。",
      dynamicTitle: "動態獎勵",
      dynamicBody:
        "透過 21 代返佣、團隊極差、節點分紅放大收益,成為協議成長的燃料。",
      smoothTitle: "收益平滑機制",
      smoothBody:
        "累計收益達本金 3 倍後,日化自動平滑至 0.6%,擠壓短期泡沫。",
      pieTitle: "利息分配口徑",
      pieDynamicLabel: "動態獎勵",
      pieDynamicValue: "47.5%",
      pieStaticLabel: "靜態收益",
      pieStaticValue: "47.5%",
      pieBurnLabel: "回購銷毀 BYC",
      pieBurnValue: "5%",
      pieCaption:
        "動態 47.5% / 靜態 47.5%,其中靜態的 5% 自動回購銷毀 BYC —— 持續通縮、提升稀缺性。",
    },
    tokens: {
      eyebrow: "PART 02 · 通證經濟模型",
      title: "三大通證 · 共生閉環",
      subtitle:
        "BY 流通、BYC 稀缺、BYB 共建 —— 三幣分工,各司其職。",
      byTag: "主代幣",
      byName: "BY",
      bySub: "生態核心流通",
      byPoints: [
        "發行總量 678 萬枚,銷毀至 70 萬",
        "通縮幅度 −89.7%",
        "賣出即銷毀,持續鎖定稀缺性",
      ],
      bycTag: "配額幣",
      bycName: "BYC",
      bycSub: "白名單限購 · 極限通縮",
      bycPoints: [
        "發行總量 21,000 枚,銷毀至 210",
        "通縮幅度 −99%",
        "按社區貢獻值獲得購買額度,自由市場可賣",
      ],
      bybTag: "獎勵幣",
      bybName: "BYB",
      bybSub: "行為獎勵 · 治理權益",
      bybPoints: [
        "每次領取利息按 1:1 USDT 等值同步空投",
        "與上線共享,加深推薦關係",
        "代表生態治理權與分紅權",
      ],
    },
    referral: {
      eyebrow: "PART 03 · 社區裂變",
      title: "21 代推薦返佣 · 合計 19%",
      subtitle:
        "横向開拓 + 深度經營並重,動態獎勵直接鏈上結算。",
      tier1Label: "第 1 代",
      tier1Value: "4.75%",
      tier1Note: "直推獎勵",
      tier2Label: "第 2 – 11 代",
      tier2Value: "0.95%",
      tier2Note: "× 10 代",
      tier3Label: "第 12 – 21 代",
      tier3Value: "0.475%",
      tier3Note: "× 10 代",
      totalLabel: "合計返佣",
      totalValue: "19%",
      footnote:
        "搭配團隊極差獎;完成有效直推可激活節點資格。",
    },
    nodes: {
      eyebrow: "PART 04 · 共建治理",
      title: "1500 超級節點 · 共建生態核心",
      subtitle:
        "節點是 蓝山·必赢 生態的長期建設者,共享協議成長的權益。",
      point1Title: "節點加權分紅",
      point1Body: "按貢獻加權,共享動態獎勵池中的 7%。",
      point2Title: "節點平均分紅",
      point2Body: "所有活躍節點普惠分享 3% 動態獎勵。",
      point3Title: "稅費分紅",
      point3Body: "二級市場賣出稅中的固定份額,流回節點群體。",
      point4Title: "基金會治理權",
      point4Body: "對協議升級、國庫使用、生態方向提案投票。",
      activationTitle: "節點激活條件",
      activationBody:
        "完成 10 個有效直推,方可激活節點資格,使所有節點權益生效。",
    },
    backing: {
      eyebrow: "BACKED BY",
      title: "三家戰略機構聯合領投孵化",
      body:
        "蓝山·必赢(BMBY)由 蓝山资本(BlueMount Capital)、UZ Capital、无限联盟(Infinite Alliance) 聯合領投孵化運營,為協議提供長期戰略資源與合規護航。",
      inst1: "蓝山资本",
      inst1En: "BlueMount Capital",
      inst2: "UZ Capital",
      inst2En: "—",
      inst3: "无限联盟",
      inst3En: "Infinite Alliance",
    },
    announcement: {
      badge: "重要公告 · 點擊查看",
      eyebrow: "OFFICIAL ANNOUNCEMENT",
      title: "BY 戰略收購 · 升級為 蓝山·必赢(BMBY)",
      greeting:
        "致 蓝山·必赢(BMBY)社區、合作夥伴及所有關注本生態的支持者:",
      paragraphs: [
        "BY 已由海外戰略機構正式完成收購,並在此基礎上獲得 200 萬美元戰略融資,共同啟動全新一代鏈上金融生態 —— 蓝山·必赢(BMBY)。",
        "本輪由 蓝山资本(BlueMount Capital)、UZ Capital、无限联盟(Infinite Alliance) 三家機構聯合領投參投。",
        "收購完成後,原 BY 主代幣繼續沿用,品牌全面升級為「蓝山·必赢(BMBY)」,正式進入全新運營階段。基金會將以鏈上規則主導治理,持續孵化旗下子生態,構建以 BNB 鏈為底座的全球化 Web3 金融生態系統。",
        "「靜態收益 + 動態獎勵」雙軌通證機制、21 代推薦返佣、1500 超級節點權益保持不變;合約規則全部上鏈,長期共建者共享協議成長價值。",
      ],
      consortiumTitle: "聯合領投",
      consortium: ["蓝山资本", "UZ Capital", "无限联盟"],
      fundingAmount: "USD 2M",
      fundingNote: "戰略融資",
      windowTitle: "節點優先購買權 · 打款窗口",
      windowOpenLabel: "打款開始",
      windowOpen: "2026 年 5 月 28 日 12:00(北京時間)",
      windowCloseLabel: "打款結束",
      windowClose: "2026 年 5 月 31 日 23:59(北京時間)",
      windowAddressLabel: "打款地址",
      windowAddress: "0x0832cf1f0639843F5a94a51BB7441cB1d8D48B1E",
      qrNote: "僅向該地址轉入 BSC / BEP20(BNB Chain)資產",
      windowAddressNote:
        "僅支援 BNB Chain(BSC)網絡;打款前請務必核對地址,並以官方 X(@BetwinLabs) / Telegram(BetwinBlueMount) 公告為準。",
      windowFooter:
        "於窗口內完成打款的用戶,將獲得超級節點優先購買權,優先級高於後續公開發售。",
      signature: "—— 蓝山·必赢(BMBY)基金會 · 2026 年 5 月",
      ctaPrimary: "我已了解",
      ctaSecondary: "前往 Telegram",
      copy: "複製",
      copied: "已複製",
      close: "關閉",
    },
    footer: {
      tagline:
        "讓參與者既是用戶,也是貢獻者,更是生態價值共享者。",
      navTitle: "快速導航",
      socialTitle: "社區",
      twitterLabel: "X / Twitter",
      telegramLabel: "Telegram",
      copyright: "© 2026 蓝山·必赢(BMBY). All rights reserved.",
      disclaimer:
        "本網站僅供資訊展示,不構成任何投資建議。加密資產存在波動與監管風險,請自行評估並遵守當地法律法規。",
    },
  },
  en: {
    meta: {
      title: "BMBY (蓝山·必赢) · Global Web3 On-Chain Financial Ecosystem",
      description:
        "BMBY is a multi-token DeFi protocol on BNB Chain, built around a dual-track tokenomic engine of static yield + dynamic rewards anchored to BNB staking.",
    },
    nav: {
      brand: "BMBY",
      brandEn: "蓝山·必赢",
      dapp: "Launch Dapp",
      whitepaper: "Whitepaper",
      menuMechanism: "Mechanism",
      menuTokens: "Tokens",
      menuReferral: "Referral",
      menuNodes: "Nodes",
    },
    hero: {
      eyebrow: "BMBY · BNB Chain DeFi Protocol",
      h1Part1: "Global Web3",
      h1Part2: "On-Chain Financial Ecosystem",
      subtitle:
        "A next-generation DeFi ecosystem on BNB Chain — where every participant is a user, a contributor, and a value-sharer of the protocol.",
      ctaPrimary: "Launch Dapp",
      ctaSecondary: "How it Works",
      tags: ["Static Yield", "Dynamic Rewards", "Dual-Track Economy"],
    },
    stats: {
      title: "Key Metrics",
      item1Value: "0.2",
      item1Suffix: " BNB",
      item1Label: "Min Stake",
      item2Value: "21",
      item2Suffix: " Tiers",
      item2Label: "Referral Depth",
      item3Value: "1500",
      item3Suffix: "",
      item3Label: "Super Nodes",
      item4Value: "89.7",
      item4Suffix: "%",
      item4Label: "BY Burn",
    },
    pain: {
      eyebrow: "Why BMBY",
      title: "Solving DeFi's Two Hardest Problems",
      subtitle:
        "We rewrite the answers to capital safety and yield sustainability into the protocol itself.",
      card1Tag: "Capital Safety",
      card1Title: "Custody & Contract Risk",
      card1Pain:
        "Smart-contract exploits, project rug-pulls, and centralized custody all put user funds at risk.",
      card1Solution:
        "All core rules on-chain, contract source open-audited, users hold their own keys — no human intervention layer.",
      card2Tag: "Sustainability",
      card2Title: "Yield Models That Collapse",
      card2Pain:
        "Headline APRs depend on new entrants; long-term participants get squeezed out as the cycle ages.",
      card2Solution:
        "Dynamic yield smoothing and re-stake mechanics, combined with aggressive deflation, structurally squeeze the bubble.",
    },
    mechanism: {
      eyebrow: "PART 01 · Economic Core",
      title: "Staking · A Steady Cornerstone",
      subtitle:
        "Queued entry, tiered access, flexible cycles — the protocol controls capital cadence.",
      card1Title: "Low Entry Barrier",
      card1Body:
        "Minimum stake 0.2 BNB, initial cap 2 BNB — open to everyone.",
      card1Stat: "From 0.2 BNB",
      card2Title: "Queued Entry",
      card2Body:
        "Every 10 minutes the protocol releases 2 BNB of staking quota — orderly capital inflow.",
      card2Stat: "10 min / 2 BNB",
      card3Title: "Tiered Access",
      card3Body:
        "Every 10 days unlocks a higher cap (+2 BNB), up to a 20 BNB ceiling.",
      card3Stat: "Cap 20 BNB",
      card4Title: "Increasing Re-stake",
      card4Body:
        "Each re-stake must be ≥ the previous one — anchoring long-term value alignment.",
      card4Stat: "≥ last stake",
      bottomTitle: "Flexible 30-Day Cycle",
      bottomBody:
        "Each stake cycle is fixed at 30 days. On maturity users have full autonomy: auto-compound principal + yield; top-up and re-stake to lift the cap; or redeem directly for full liquidity.",
    },
    income: {
      eyebrow: "Dual-Engine Yield",
      title: "Stable Returns + Deflationary Distribution",
      subtitle:
        "Static yield delivers a steady base; dynamic rewards amplify community contribution. Every interest tick is split by the same on-chain formula.",
      staticTitle: "Static Yield",
      staticBody:
        "Daily 1.2% simple return, settled in BNB / USDT with market-aware switching — every 10 days per cycle.",
      dynamicTitle: "Dynamic Rewards",
      dynamicBody:
        "Amplified through 21-tier referrals, team rebates, and node dividends — fuel for organic growth.",
      smoothTitle: "Yield Smoothing",
      smoothBody:
        "Once cumulative earnings reach 3× principal, daily yield auto-smooths to 0.6% to compress short-term bubbles.",
      pieTitle: "Interest Distribution",
      pieDynamicLabel: "Dynamic Rewards",
      pieDynamicValue: "47.5%",
      pieStaticLabel: "Static Yield",
      pieStaticValue: "47.5%",
      pieBurnLabel: "BYC Buy & Burn",
      pieBurnValue: "5%",
      pieCaption:
        "Dynamic 47.5% / Static 47.5% — of which 5% auto-buys-and-burns BYC, anchoring structural scarcity.",
    },
    tokens: {
      eyebrow: "PART 02 · Tokenomics",
      title: "Three Tokens · One Loop",
      subtitle:
        "BY for circulation, BYC for scarcity, BYB for participation — each plays a precise role.",
      byTag: "Core Token",
      byName: "BY",
      bySub: "Ecosystem circulation",
      byPoints: [
        "Initial supply 6.78M, burned to 700K",
        "Net deflation −89.7%",
        "Sell-burn auto-trigger keeps supply scarce",
      ],
      bycTag: "Scarcity Token",
      bycName: "BYC",
      bycSub: "Whitelist-gated · Hyper-deflationary",
      bycPoints: [
        "Initial supply 21,000, burned to 210",
        "Net deflation −99%",
        "Tiered quota by community contribution; freely sellable",
      ],
      bybTag: "Reward Token",
      bybName: "BYB",
      bybSub: "Behavior reward · Governance",
      bybPoints: [
        "Auto-airdropped 1:1 by USDT value on every interest claim",
        "Shared upline to deepen referral relationships",
        "Represents governance and revenue-share rights",
      ],
    },
    referral: {
      eyebrow: "PART 03 · Community Growth",
      title: "21-Tier Referral · 19% Total Commission",
      subtitle:
        "Horizontal expansion and depth — both rewarded, paid on-chain in real time.",
      tier1Label: "Tier 1",
      tier1Value: "4.75%",
      tier1Note: "Direct referral",
      tier2Label: "Tiers 2 – 11",
      tier2Value: "0.95%",
      tier2Note: "× 10 tiers",
      tier3Label: "Tiers 12 – 21",
      tier3Value: "0.475%",
      tier3Note: "× 10 tiers",
      totalLabel: "Total Commission",
      totalValue: "19%",
      footnote:
        "Combined with team-rank rebates; valid direct referrals unlock node eligibility.",
    },
    nodes: {
      eyebrow: "PART 04 · Co-Build & Govern",
      title: "1,500 Super Nodes · Co-Building the Core",
      subtitle:
        "Nodes are the long-term builders of BMBY, sharing protocol growth.",
      point1Title: "Weighted Node Dividend",
      point1Body: "Share 7% of the dynamic-reward pool, weighted by contribution.",
      point2Title: "Flat Node Dividend",
      point2Body: "All active nodes evenly share an additional 3%.",
      point3Title: "Tax Share",
      point3Body:
        "A fixed slice of secondary-market sell tax flows back to the node group.",
      point4Title: "Foundation Governance",
      point4Body:
        "Vote on protocol upgrades, treasury usage, and ecosystem direction.",
      activationTitle: "Node Activation",
      activationBody:
        "Complete 10 valid direct referrals to activate node status and unlock all node rights.",
    },
    backing: {
      eyebrow: "BACKED BY",
      title: "Three Strategic Institutions",
      body:
        "BMBY is backed and incubated by BlueMount Capital, UZ Capital, and Infinite Alliance — providing long-term strategic resources and compliance guidance.",
      inst1: "BlueMount Capital",
      inst1En: "蓝山资本",
      inst2: "UZ Capital",
      inst2En: "—",
      inst3: "Infinite Alliance",
      inst3En: "无限联盟",
    },
    announcement: {
      badge: "Important Announcement · Tap to view",
      eyebrow: "OFFICIAL ANNOUNCEMENT",
      title: "BY Acquired · Now Operating as BMBY (蓝山·必赢)",
      greeting:
        "To the BMBY community, partners, and supporters of the ecosystem:",
      paragraphs: [
        "BY has been formally acquired by overseas strategic institutions and has received USD 2 million in strategic financing to launch a new-generation on-chain financial ecosystem — BMBY (蓝山·必赢).",
        "This round is co-led by BlueMount Capital (蓝山资本), UZ Capital, and Infinite Alliance (无限联盟).",
        "Following the acquisition, the BY token continues; the brand is fully upgraded to BMBY (蓝山·必赢) and enters a new operating phase. Under a foundation-led governance model, BMBY will incubate sub-ecosystems and build a global Web3 financial ecosystem anchored on BNB Chain.",
        "The dual-track tokenomic engine (static yield + dynamic rewards), the 21-tier referral program, and the 1,500 super-node framework remain unchanged — protocol rules are enforced fully on-chain so long-term builders share the upside.",
      ],
      consortiumTitle: "Co-Led By",
      consortium: ["BlueMount Capital", "UZ Capital", "Infinite Alliance"],
      fundingAmount: "USD 2M",
      fundingNote: "Strategic Round",
      windowTitle: "Node Priority Purchase · Payment Window",
      windowOpenLabel: "Opens",
      windowOpen: "12:00, May 28 2026 (Beijing Time / UTC+8)",
      windowCloseLabel: "Closes",
      windowClose: "23:59, May 31 2026 (Beijing Time / UTC+8)",
      windowAddressLabel: "Payment Address",
      windowAddress: "0x0832cf1f0639843F5a94a51BB7441cB1d8D48B1E",
      qrNote: "Send only BSC / BEP20 (BNB Chain) assets to this address",
      windowAddressNote:
        "BNB Chain (BSC) network only. Verify the address before sending; always cross-check with official X (@BetwinLabs) / Telegram (BetwinBlueMount).",
      windowFooter:
        "Users who complete payment within this window will receive Super Node priority purchase rights, ranked above the subsequent public sale.",
      signature: "—— BMBY (蓝山·必赢) Foundation · May 2026",
      ctaPrimary: "I Understand",
      ctaSecondary: "Open Telegram",
      copy: "Copy",
      copied: "Copied",
      close: "Close",
    },
    footer: {
      tagline:
        "Participants are users, contributors, and value-sharers of the ecosystem.",
      navTitle: "Navigate",
      socialTitle: "Community",
      twitterLabel: "X / Twitter",
      telegramLabel: "Telegram",
      copyright: "© 2026 BMBY (蓝山·必赢). All rights reserved.",
      disclaimer:
        "This site is for information only and does not constitute investment advice. Crypto assets carry volatility and regulatory risk — please assess for yourself and comply with local laws.",
    },
  },
} as const;

export type Dict = (typeof dict)[Lang];
