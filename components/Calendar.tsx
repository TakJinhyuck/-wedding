"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// 2026년 9월: 1일=화요일(인덱스2), 13일=일요일
const DATE_CELLS: (number | null)[] = [
  null, null, 1,  2,  3,  4,  5,
  6,   7,    8,  9,  10, 11, 12,
  13,  14,   15, 16, 17, 18, 19,
  20,  21,   22, 23, 24, 25, 26,
  27,  28,   29, 30, null, null, null,
];

export default function Calendar() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F4F4F4" }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.04 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader sub="CALENDAR" title="예식 일정" />

        {/* 7열 그리드 — Tailwind + inline 이중 보장 */}
        <div
          className="grid grid-cols-7"
          style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
        >
          {/* 요일 헤더 */}
          {DAY_LABELS.map((d, i) => (
            <div
              key={d}
              className="text-center font-sans text-[8px] tracking-widest pb-3"
              style={{ color: i === 0 ? "#CC7070" : i === 6 ? "#7090BB" : "#CCCCCC" }}
            >
              {d}
            </div>
          ))}

          {/* 날짜 */}
          {DATE_CELLS.map((day, idx) => {
            const col = idx % 7;
            const isWedding = day === 13;
            const isSun = col === 0;
            const isSat = col === 6;

            return (
              <div
                key={idx}
                className="flex items-center justify-center"
                style={{ height: 44 }}
              >
                {day !== null && (
                  isWedding ? (
                    // 13일: bg-[#E2D4C5] text-white rounded-full
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#E2D4C5]">
                      <span className="font-nanum text-sm font-bold text-white">
                        {day}
                      </span>
                    </div>
                  ) : (
                    <span
                      className="font-nanum text-sm"
                      style={{ color: isSun ? "#CC7070" : isSat ? "#7090BB" : "#444444" }}
                    >
                      {day}
                    </span>
                  )
                )}
              </div>
            );
          })}
        </div>

        {/* 예식 정보 */}
        <div className="text-center mt-10">
          <div style={{ width: 18, height: 1, backgroundColor: "#E0E0E0", margin: "0 auto 24px" }} />
          <p className="font-nanum text-[15px] tracking-[0.1em]" style={{ color: "#444444" }}>
            2026년 9월 13일 일요일
          </p>
          <p className="font-sans text-[12px] tracking-[0.08em] mt-2" style={{ color: "#888888" }}>
            오전 11시 00분
          </p>
          <p className="font-sans text-[12px] tracking-[0.06em] mt-1" style={{ color: "#888888" }}>
            더 컨벤션 잠실 · 3층 그랜드볼룸
          </p>
        </div>

      </motion.div>
    </section>
  );
}
