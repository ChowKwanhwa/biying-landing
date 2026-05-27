# 蓝山·必赢(BMBY)— Landing Page

官網 landing page,Next.js 15 + Tailwind v4 + Framer Motion 構建,靜態導出後部署到 Cloudflare Pages。

## 開發

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## 構建 / 部署

```bash
pnpm build                     # 產出 out/ 靜態目錄
wrangler pages deploy out --project-name biying-landing
```

## 結構

```
src/
├── app/                # Next.js App Router
├── components/         # Section 元件
└── i18n/               # 中英文字典 + Provider
public/
└── logo.png            # 品牌 logo
```

## 約束

對外文案口徑以 `claw/wiki/brand.md` 為權威。詳見專案根 plan 文件。
