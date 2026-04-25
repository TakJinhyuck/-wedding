"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

// 헤더 + 35개 날짜 셀을 하나의 배열로 — 단일 grid에 모두 넣음
const DAY_LABELS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// 2026년 9월: 1일=화요일(인덱스2), 30일, 결혼일=13일(일요일=인덱스0)
const DATE_CELLS: (number | null)[] = [
  null, null, 1,  2,  3,  4,  5,
  6,   7,    8,  9,  10, 11, 12,
  13,  14,   15, 16, 17, 18, 19,
  20,  21,   22, 23, 24, 25, 26,
  27,  28,   29, 30, null, null, null,
];

export default function Calendar() {
  return (
    <section className="py-24 px-8 bg-white">
      <motion.div
        className="max-w-xs mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.04 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <SectionHeader title="DATE" />

        {/* 단일 7열 grid — Tailwind + inline style 이중 보장 */}
        <div
          className="grid grid-cols-7"
          style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
        >
          {/* 요일 헤더 */}
          {DAY_LABELS.map((d, i) => (
            <div
              key={d}
              className="font-sans text-[8.5px] tracking-widest pb-4"
              style={{
                textAlign: "center",
                color: i === 0 ? "#D07070" : i === 6 ? "#6080C0" : "#CCCCCC",
              }}
            >
              {d}
            </div>
          ))}

          {/* 날짜 셀 */}
          {DATE_CELLS.map((day, idx) => {
            const col = idx % 7; // 0=일, 6=토
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
                  height: "40px",
                }}
              >
                {day !== null && (
                  isWedding ? (
                    /* 연한 베이지 원형 강조 */
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "#F3EDE8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        className="font-sans text-[13px] font-medium"
                        style={{ color: "#A07840" }}
                      >
                        {day}
                      </span>
                    </div>
                  ) : (
                    <span
                      className="font-sans text-[13px] font-light"
                      style={{
                        color: isSun ? "#D07070" : isSat ? "#6080C0" : "#333333",
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
        <div className="mt-10 text-center" style={{ lineHeight: 1 }}>
          <div
            style={{
              width: 20,
              height: 1,
              backgroundColor: "#E8E8E8",
              margin: "0 auto 28px",
            }}
          />
          <p className="font-sans text-[13px] tracking-[0.18em] text-[#444444]">
            2026. 09. 13. 일요일
          </p>
          <p className="font-sans text-[12px] tracking-[0.12em] text-[#888888] mt-2">
            오후 2시 30분
          </p>
          <p className="font-sans text-[12px] tracking-[0.1em] text-[#888888] mt-1.5">
            더 컨벤션 잠실 · 3층 그랜드볼룸
          </p>
        </div>
      </motion.div>
    </section>
  );
}
