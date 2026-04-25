"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer className="py-16 px-8 bg-white" style={{ borderTop: "1px solid #F0F0F0" }}>
      <FadeIn className="text-center">

        {/* 한글 이름 — 나눔명조 */}
        <p
          className="font-nanum text-[26px] font-normal tracking-[0.1em]"
          style={{ color: "#333333" }}
        >
          탁진혁 · 조수민
        </p>
        {/* 영문 — Cormorant italic */}
        <p
          className="font-serif italic text-[14px] tracking-widest mt-2"
          style={{ color: "#AAAAAA" }}
        >
          Jinhyeok &amp; Sumin
        </p>

        <div style={{ width: 20, height: 1, backgroundColor: "#E8E8E8", margin: "28px auto" }} />

        <p
          className="font-sans text-[11px] tracking-[0.15em] leading-[2.2]"
          style={{ color: "#CCCCCC" }}
        >
          두 사람이 함께 걷는 모든 날이<br />
          빛나는 날이 되기를 바랍니다.
        </p>

        <p
          className="font-sans text-[10px] tracking-[0.3em] mt-8"
          style={{ color: "#DDDDDD" }}
        >
          2026 · 09 · 13
        </p>

      </FadeIn>
    </footer>
  );
}
