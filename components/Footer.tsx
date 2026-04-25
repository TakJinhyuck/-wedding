"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-[#E8E0D8]" style={{ backgroundColor: "#FDFDFD" }}>
      <FadeIn className="max-w-sm mx-auto text-center">
        <p className="font-serif text-[22px] font-light tracking-[0.2em] text-[#333333] mb-2">
          탁진혁 <span className="text-[#C9A96E]">♥</span> 조수민
        </p>
        <p className="font-sans text-[11px] tracking-[0.3em] text-[#AAAAAA] mb-8">
          2026 · 09 · 13 · SUNDAY
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#E8D5B8]" />
          <div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] opacity-50" />
          <div className="h-px w-12 bg-[#E8D5B8]" />
        </div>

        <p className="font-sans text-[12px] text-[#BBBBBB] leading-[2.0]">
          두 사람이 함께 걷는 모든 날이<br />
          빛나는 날이 되기를 바랍니다.
        </p>
      </FadeIn>
    </footer>
  );
}
