"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// 2026년 9월: 1일=화요일(인덱스2), 결혼일=13일(일요일)
const DATE_CELLS: (number | null)[] = [
  null, null, 1,  2,  3,  4,  5,
  6,   7,    8,  9,  10, 11, 12,
  13,  14,   15, 16, 17, 18, 19,
  20,  21,   22, 23, 24, 25, 26,
  27,  28,   29, 30, null, null, null,
];

export default function Calendar() {
  return (
    <section className="py-14 px-8 bg-white">
      <motion.div
        className="max-w-xs mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.04 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader sub="CALENDAR" title="예식 일정" />

        {/* 단일 7열 grid — inline style로 보장 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
          }}
        >
          {/* 요일 헤더 */}
          {DAY_LABELS.map((d, i) => (
            <div
              key={d}
              className="font-sans text-[8px] tracking-widest pb-4"
              style={{
                textAlign: "center",
                color: i === 0 ? "#CC7070" : i === 6 ? "#7090BB" : "#CCCCCC",
              }}
            >
              {d}
            </div>
          ))}

          {/* 날짜 셀 */}
          {DATE_CELLS.map((day, idx) => {
            const col = idx % 7;
            const isWedding = day === 13;
            const isSun = col === 0;
            const isSat = col === 6;

            return (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 42,
                }}
              >
                {day !== null && (
                  isWedding ? (
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        backgroundColor: "#F3EDE8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className="font-nanum text-[14px] font-normal"
                        style={{ color: "#9A7040" }}
                      >
                        {day}
                      </span>
                    </div>
                  ) : (
                    <span
                      className="font-nanum text-[14px] font-normal"
                      style={{
                        color: isSun ? "#CC7070" : isSat ? "#7090BB" : "#333333",
                      }}
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
          <div style={{ width: 20, height: 1, backgroundColor: "#E0E0E0", margin: "0 auto 28px" }} />
          <p className="font-nanum text-[15px] tracking-[0.12em]" style={{ color: "#444444" }}>
            2026년 9월 13일 일요일
          </p>
          <p className="font-sans text-[12px] tracking-[0.1em] mt-2" style={{ color: "#888888" }}>
            오후 2시 30분
          </p>
          <p className="font-sans text-[12px] tracking-[0.08em] mt-1.5" style={{ color: "#888888" }}>
            더 컨벤션 잠실 · 3층 그랜드볼룸
          </p>
        </div>
      </motion.div>
    </section>
  );
}
