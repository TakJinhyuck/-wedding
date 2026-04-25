"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* 배경 텍스처 원 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#E8D5B8]/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-[#E8D5B8]/30" />

      {/* 사진 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-44 h-60 rounded-[20px] bg-[#E8E0D8] shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden mb-9 flex items-center justify-center"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] text-[#C9A96E]/60 uppercase">Photo</span>
      </motion.div>

      {/* 이름 */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-8"
      >
        <p className="font-sans text-[10px] tracking-[0.45em] text-[#C9A96E] mb-4 uppercase">
          We Are Getting Married
        </p>

        <h1 className="font-serif font-light text-[#333333] leading-none" style={{ fontSize: "clamp(36px, 9vw, 52px)", letterSpacing: "0.15em" }}>
          탁진혁
          <span className="mx-3 text-[#C9A96E]" style={{ fontSize: "0.55em" }}>♥</span>
          조수민
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-[#E8D5B8]" />
          <p className="font-sans text-[11px] tracking-[0.25em] text-[#888888]">
            2026 · 09 · 13 · SUN
          </p>
          <div className="h-px w-8 bg-[#E8D5B8]" />
        </div>

        <p className="mt-3 font-sans text-[11px] tracking-[0.2em] text-[#AAAAAA]">
          더 컨벤션 잠실
        </p>
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[9px] tracking-[0.35em] text-[#CCCCCC] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-[#C9A96E]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
