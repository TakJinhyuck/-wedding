import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto",
  display: "swap",
});

// 바른손 1169 핵심 서체 — 한국 전통 명조
const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nanum",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding.vercel.app"),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  title: "탁진혁 ♥ 조수민 결혼합니다",
  description: "2026년 9월 13일 일요일 · 더 컨벤션 잠실",
  openGraph: {
    title: "탁진혁 ♥ 조수민 결혼합니다",
    description: "2026년 9월 13일 일요일 · 더 컨벤션 잠실",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className={`${cormorant.variable} ${notoSansKR.variable} ${nanumMyeongjo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
