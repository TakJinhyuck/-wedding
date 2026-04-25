"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer className="py-24 px-8 bg-white border-t border-[#F0F0F0]">
      <FadeIn className="text-center">

        <p className="font-serif italic text-[21px] tracking-wider text-[#444444] leading-none">
          Jinhyeok &amp; Sumin
        </p>
        <p className="font-sans text-[10px] tracking-[0.4em] text-[#CCCCCC] mt-3">
          2026 · 09 · 13
        </p>

        <div className="my-8 w-5 h-px bg-[#EEEEEE] mx-auto" />

        <p className="font-sans text-[11px] tracking-wide text-[#CCCCCC] leading-[2.2]">
          두 사람이 함께 걷는 모든 날이<br />
          빛나는 날이 되기를 바랍니다.
        </p>

      </FadeIn>
    </footer>
  );
}
