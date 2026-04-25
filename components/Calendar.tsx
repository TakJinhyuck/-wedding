"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

// 2026년 9월: 1일=화요일, 결혼일=13일(일요일)
const WEEKS: (number | null)[][] = [
  [null, null, 1,  2,  3,  4,  5 ],
  [6,   7,    8,  9,  10, 11, 12 ],
  [13,  14,   15, 16, 17, 18, 19 ],
  [20,  21,   22, 23, 24, 25, 26 ],
  [27,  28,   29, 30, null, null, null],
];

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function Calendar() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader title="DATE" />
        </FadeIn>

        <FadeIn delay={0.1}>
          {/* 요일 헤더: 테두리 없이 텍스트만 */}
          <div className="grid grid-cols-7 mb-3">
            {DAY_LABELS.map((d, i) => (
              <div
                key={d}
                className={`text-center font-sans text-[8.5px] tracking-widest pb-3 ${
                  i === 0 ? "text-[#D07070]" : i === 6 ? "text-[#6080C0]" : "text-[#CCCCCC]"
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* 날짜: 선 없이 숫자만 공중에 부유 */}
          {WEEKS.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => {
                const isWedding = day === 13;
                const isSun = di === 0;
                const isSat = di === 6;
                return (
                  <div key={`${wi}-${di}`} className="flex items-center justify-center h-10">
                    {day !== null && (
                      isWedding ? (
                        // 연한 베이지 원형 (#F3EDE8) 강조
                        <div className="w-8 h-8 rounded-full bg-[#F3EDE8] flex items-center justify-center">
                          <span className="font-sans text-[13px] font-medium text-[#A07840]">
                            {day}
                          </span>
                        </div>
                      ) : (
                        <span
                          className={`font-sans text-[13px] font-light ${
                            isSun ? "text-[#D07070]"
                            : isSat ? "text-[#6080C0]"
                            : "text-[#333333]"
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

          {/* 예식 정보: 캘린더 바로 아래 */}
          <div className="mt-10 text-center space-y-2">
            <div className="w-5 h-px bg-[#E8E8E8] mx-auto mb-7" />
            <p className="font-sans text-[13px] tracking-[0.18em] text-[#444444]">
              2026. 09. 13. 일요일
            </p>
            <p className="font-sans text-[12px] tracking-[0.12em] text-[#888888]">
              오후 2시 30분
            </p>
            <p className="font-sans text-[12px] tracking-[0.1em] text-[#888888]">
              더 컨벤션 잠실 · 3층 그랜드볼룸
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
