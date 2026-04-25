import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_KR } from "next/font/google";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
