"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

// 2026년 9월: 1일 = 화요일(2), 30일, 결혼일 = 13일(일요일)
const WEEKS: (number | null)[][] = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, null, null, null],
];

const DAY_LABELS = ["일", "월", "화", "수", "목", "금", "토"];
const WEDDING_DAY = 13;

export default function Calendar() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader en="Calendar" ko="2026년 9월" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-[#E8E0D8] bg-white overflow-hidden">
            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 border-b border-[#F0EBE3]">
              {DAY_LABELS.map((d, i) => (
                <div
                  key={d}
                  className={`py-3 text-center font-sans text-[11px] tracking-wide ${
                    i === 0 ? "text-[#E07070]" : i === 6 ? "text-[#7090E0]" : "text-[#AAAAAA]"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="p-3 space-y-1">
              {WEEKS.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7">
                  {week.map((day, di) => {
                    const isWedding = day === WEDDING_DAY;
                    const isSun = di === 0;
                    const isSat = di === 6;
                    return (
                      <div
                        key={`${wi}-${di}`}
                        className="flex items-center justify-center py-1.5"
                      >
                        {day !== null ? (
                          isWedding ? (
                            <div className="relative flex items-center justify-center">
                              {/* 감성적 동그라미 */}
                              <div className="absolute w-9 h-9 rounded-full border-[1.5px] border-[#C9A96E] opacity-70" />
                              <div className="absolute w-9 h-9 rounded-full bg-[#C9A96E]/10" />
                              <span className="relative font-serif text-[15px] font-medium text-[#C9A96E] leading-none">
                                {day}
                              </span>
                              {/* 결혼 하트 */}
                              <span className="absolute -top-1.5 -right-1 text-[8px] text-[#C9A96E]">♥</span>
                            </div>
                          ) : (
                            <span
                              className={`font-sans text-[13px] ${
                                isSun ? "text-[#E07070]" : isSat ? "text-[#7090E0]" : "text-[#555555]"
                              }`}
                            >
                              {day}
                            </span>
                          )
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* D-day 배너 */}
            <div className="border-t border-[#F0EBE3] py-3 px-5 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-[#F0EBE3]" />
              <p className="font-sans text-[11px] tracking-[0.25em] text-[#C9A96E]">
                2026 · 09 · 13 · Sunday
              </p>
              <div className="h-px flex-1 bg-[#F0EBE3]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
