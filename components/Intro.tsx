"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="min-h-screen bg-white flex flex-col">

      {/* 상단 여백 — 1169 기준 top:230/800 비율 */}
      <div style={{ height: 100 }} />

      {/* 커버 사진 — 1169 기준 734×769 비율 (거의 정사각형) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="px-[18px]"
      >
        <div
          className="w-full overflow-hidden bg-[#EDEAE6]"
          style={{ aspectRatio: "734/769" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo-1.jpeg"
            alt="탁진혁 & 조수민"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* 이름 — 신랑 우측정렬 | 세로선 | 신부 좌측정렬 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center mt-7 px-8"
        style={{ gap: 0 }}
      >
        <div style={{ flex: 1, textAlign: "right", paddingRight: 16 }}>
          <span
            className="font-nanum font-bold"
            style={{ fontSize: 22, letterSpacing: "0.25em", color: "#333333" }}
          >
            탁진혁
          </span>
        </div>
        <div style={{ width: 1, height: 22, backgroundColor: "#DDDDDD", flexShrink: 0 }} />
        <div style={{ flex: 1, textAlign: "left", paddingLeft: 16 }}>
          <span
            className="font-nanum font-bold"
            style={{ fontSize: 22, letterSpacing: "0.25em", color: "#333333" }}
          >
            조수민
          </span>
        </div>
      </motion.div>

      {/* 날짜 · 장소 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.1, ease: "easeOut" }}
        className="text-center mt-4"
      >
        <p
          className="font-nanum"
          style={{ fontSize: 14, letterSpacing: "0.12em", color: "#555555" }}
        >
          2026. 09. 13 SUN PM 02:30
        </p>
        <p
          className="font-sans mt-1.5"
          style={{ fontSize: 11, letterSpacing: "0.08em", color: "#888888" }}
        >
          더 컨벤션 잠실 · 3층 그랜드볼룸
        </p>
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="flex-1 flex flex-col items-center justify-end pb-8"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          <ChevronDown size={13} style={{ color: "#CCCCCC" }} />
        </motion.div>
      </motion.div>

    </section>
  );
}
