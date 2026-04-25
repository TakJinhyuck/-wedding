"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="min-h-screen bg-white flex flex-col">

      {/* ── 사진: px-8 pt-16으로 넓은 액자 여백 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="px-8 pt-16"
      >
        <div className="aspect-[3/4] overflow-hidden bg-[#F0EDE8]">
          {/* /public/images/photo-main.jpeg 로 교체 */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-sans text-[9px] tracking-[0.4em] text-[#CCCCCC] uppercase">
              Photo
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── 이름 & 날짜 ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center text-center pt-8 pb-4 px-8"
      >
        {/* 영문: Cormorant Garamond italic */}
        <p className="font-serif italic text-[22px] tracking-wider text-[#333333] leading-none">
          Jinhyeok &amp; Sumin
        </p>
        {/* 한글: 고딕, 자간 넓게 */}
        <p className="font-sans text-[11px] tracking-[0.38em] text-[#999999] mt-2.5">
          탁진혁 · 조수민
        </p>

        <div className="my-6 w-5 h-px bg-[#E0E0E0]" />

        <p className="font-sans text-[11px] tracking-[0.28em] text-[#BBBBBB] leading-relaxed">
          2026 . 09 . 13 . SUN
        </p>
        <p className="font-sans text-[10px] tracking-[0.2em] text-[#CCCCCC] mt-1.5">
          더 컨벤션 잠실
        </p>
      </motion.div>

      {/* ── 스크롤 유도 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="flex-1 flex flex-col items-center justify-end pb-10"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
        >
          <ChevronDown size={13} className="text-[#CCCCCC]" />
        </motion.div>
      </motion.div>

    </section>
  );
}
