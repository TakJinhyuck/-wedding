"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Footer() {
  return (
    <footer className="py-16 px-8 bg-white border-t border-[#F2F2F2]">
      <FadeIn className="text-center">
        <p className="font-serif italic text-[20px] tracking-wider text-[#444444]">
          Jinhyeok &amp; Sumin
        </p>
        <p className="font-sans text-[10px] tracking-[0.35em] text-[#BBBBBB] mt-2">
          2026 . 09 . 13
        </p>

        <div className="mt-8 space-y-1">
          <p className="font-sans text-[11px] text-[#CCCCCC] leading-[2]">
            두 사람이 함께 걷는 모든 날이<br />
            빛나는 날이 되기를 바랍니다.
          </p>
        </div>
      </FadeIn>
    </footer>
  );
}
