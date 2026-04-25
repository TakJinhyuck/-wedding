"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* 액자 형태 사진: 상·좌·우에 여백 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mx-6 mt-10"
      >
        <div className="aspect-[3/4] overflow-hidden bg-[#F5F3F0] rounded-sm">
          {/* public/images/photo-main.jpeg 로 교체 */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#CCCCCC] uppercase">
              Photo
            </span>
          </div>
        </div>
      </motion.div>

      {/* 이름 & 날짜 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center text-center pt-7 pb-4 px-6"
      >
        {/* 영문 이름: serif italic */}
        <p className="font-serif italic text-[24px] tracking-wider text-[#444444] leading-none">
          Jinhyeok &amp; Sumin
        </p>
        {/* 한글 이름: 고딕 */}
        <p className="font-sans text-[11px] tracking-[0.35em] text-[#999999] mt-2">
          탁진혁 · 조수민
        </p>

        <div className="my-5 w-6 h-px bg-[#E0E0E0]" />

        <p className="font-sans text-[11px] tracking-[0.22em] text-[#BBBBBB]">
          2026 . 09 . 13 . SUN
        </p>
        <p className="font-sans text-[11px] tracking-[0.15em] text-[#CCCCCC] mt-1">
          더 컨벤션 잠실
        </p>
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="flex-1 flex flex-col items-center justify-end pb-8"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-[#CCCCCC]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
