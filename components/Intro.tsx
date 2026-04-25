"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      {/* 배경 그라디언트 (실제 사진으로 교체 가능) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-beige-200 via-beige-100 to-beige-50"
        aria-hidden
      />

      {/* 장식 원 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-beige-300/60 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-beige-200/40 opacity-40" />

      {/* 사진 플레이스홀더 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-48 h-64 rounded-2xl bg-beige-200 border border-beige-300 shadow-lg overflow-hidden mb-8 flex items-center justify-center"
      >
        <span className="text-beige-400 text-sm font-sans tracking-wider">PHOTO</span>
      </motion.div>

      {/* 이름 & 날짜 */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        <p className="font-sans text-xs tracking-[0.3em] text-warm-brown/60 mb-3 uppercase">
          We Are Getting Married
        </p>

        <h1 className="font-serif text-5xl font-light text-warm-dark leading-tight">
          탁진혁
          <span className="mx-3 text-beige-400 text-3xl">♥</span>
          조수민
        </h1>

        <div className="mt-5 divider">
          <span className="font-sans text-xs tracking-[0.2em] text-warm-brown/70">
            2026 . 09 . 13 SUN
          </span>
        </div>

        <p className="mt-3 font-sans text-xs text-warm-brown/60 tracking-wider">
          더 컨벤션 잠실
        </p>
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] text-warm-brown/40 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-beige-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
