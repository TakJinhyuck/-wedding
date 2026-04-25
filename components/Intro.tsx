"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="min-h-screen bg-white flex flex-col">

      {/* ── 액자형 사진: 상단 + 좌우 여백 ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="px-7 pt-14"
      >
        <div className="aspect-[3/4] overflow-hidden bg-[#EDEAE6] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo-1.jpeg"
            alt="탁진혁 & 조수민"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* ── 이름: 나눔명조 대형 ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
        className="flex flex-col items-center text-center pt-9 px-8"
      >
        {/* 한글 이름 — 나눔명조, 대형 */}
        <div className="flex items-center gap-5">
          <span
            className="font-nanum text-[38px] font-normal tracking-[0.08em]"
            style={{ color: "#333333" }}
          >
            탁진혁
          </span>
          <span
            className="font-sans text-[14px]"
            style={{ color: "#CCCCCC" }}
          >
            ✦
          </span>
          <span
            className="font-nanum text-[38px] font-normal tracking-[0.08em]"
            style={{ color: "#333333" }}
          >
            조수민
          </span>
        </div>

        {/* 영문 이름 — Cormorant italic */}
        <p
          className="font-serif italic text-[14px] tracking-widest mt-2"
          style={{ color: "#AAAAAA" }}
        >
          Jinhyeok &amp; Sumin
        </p>

        {/* 구분선 */}
        <div
          className="my-6"
          style={{ width: 24, height: 1, backgroundColor: "#E0E0E0" }}
        />

        {/* 날짜 & 장소 */}
        <p
          className="font-nanum text-[15px] tracking-[0.12em]"
          style={{ color: "#555555" }}
        >
          2026년 9월 13일 일요일
        </p>
        <p
          className="font-sans text-[11px] tracking-[0.18em] mt-2"
          style={{ color: "#AAAAAA" }}
        >
          오후 2시 30분 · 더 컨벤션 잠실
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
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          <ChevronDown size={13} style={{ color: "#CCCCCC" }} />
        </motion.div>
      </motion.div>

    </section>
  );
}
