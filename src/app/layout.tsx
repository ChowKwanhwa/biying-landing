import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/i18n/LangProvider";
import { dict } from "@/i18n/dict";

export const metadata: Metadata = {
  metadataBase: new URL("https://biying.ink"),
  title: dict.zh.meta.title,
  description: dict.zh.meta.description,
  openGraph: {
    title: dict.zh.meta.title,
    description: dict.zh.meta.description,
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dict.zh.meta.title,
    description: dict.zh.meta.description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="h-full antialiased dark">
      <body className="min-h-full">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
