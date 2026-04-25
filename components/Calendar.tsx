"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

// 2026년 9월: 1일=화요일, 30일, 결혼일=13일(일요일)
const WEEKS: (number | null)[][] = [
  [null, null, 1,  2,  3,  4,  5 ],
  [6,   7,    8,  9,  10, 11, 12 ],
  [13,  14,   15, 16, 17, 18, 19 ],
  [20,  21,   22, 23, 24, 25, 26 ],
  [27,  28,   29, 30, null, null, null],
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
          <div className="rounded-2xl border border-[#E8E0D8] bg-white overflow-hidden shadow-sm">
            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 border-b border-[#F0EBE3] bg-[#FDFBF8]">
              {DAY_LABELS.map((d, i) => (
                <div
                  key={d}
                  className={`h-10 flex items-center justify-center font-sans text-[11px] font-medium tracking-wide ${
                    i === 0 ? "text-[#E07070]" : i === 6 ? "text-[#6080D0]" : "text-[#AAAAAA]"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* 날짜 그리드 */}
            <div className="px-2 py-2">
              {WEEKS.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7">
                  {week.map((day, di) => {
                    const isWedding = day === WEDDING_DAY;
                    const isSun = di === 0;
                    const isSat = di === 6;

                    return (
                      <div
                        key={`${wi}-${di}`}
                        className="h-10 flex items-center justify-center"
                      >
                        {day !== null && (
                          isWedding ? (
                            // 부모에 고정 크기를 줘야 absolute 원이 제대로 렌더링됨
                            <div className="relative w-9 h-9 flex items-center justify-center">
                              <div className="absolute inset-0 rounded-full bg-[#C9A96E]/12" />
                              <div className="absolute inset-0 rounded-full border-[1.5px] border-[#C9A96E]/70" />
                              <span className="relative font-serif text-[15px] font-semibold text-[#C9A96E] leading-none">
                                {day}
                              </span>
                              <span className="absolute -top-1 right-0 text-[9px] text-[#C9A96E] leading-none">♥</span>
                            </div>
                          ) : (
                            <span
                              className={`font-sans text-[13px] ${
                                isSun ? "text-[#E07070]" : isSat ? "text-[#6080D0]" : "text-[#555555]"
                              }`}
                            >
                              {day}
                            </span>
                          )
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* 하단 배너 */}
            <div className="border-t border-[#F0EBE3] py-3 px-5 flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-[#EDE5D8]" />
              <p className="font-sans text-[11px] tracking-[0.22em] text-[#C9A96E] whitespace-nowrap">
                2026 · 09 · 13 · Sunday
              </p>
              <div className="h-px flex-1 bg-[#EDE5D8]" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
