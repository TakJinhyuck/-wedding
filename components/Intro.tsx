"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="bg-white px-6 pt-10 pb-16">

      {/* 액자형 커버 사진 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photo-1.jpeg"
          alt="탁진혁 & 조수민"
          className="w-full rounded-lg shadow-md aspect-[3/4] object-cover"
        />
      </motion.div>

      {/* 이름 · 날짜 · 장소 */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
        className="pt-10 text-center"
      >
        {/* 한글 이름 */}
        <p
          className="font-nanum font-bold tracking-widest"
          style={{ fontSize: 24, color: "#333333" }}
        >
          탁진혁 · 조수민
        </p>

        {/* 영문 이름 */}
        <p
          className="font-serif italic tracking-widest mt-2"
          style={{ fontSize: 13, color: "#AAAAAA" }}
        >
          Jinhyeok &amp; Sumin
        </p>

        <div style={{ width: 20, height: 1, backgroundColor: "#E0E0E0", margin: "18px auto" }} />

        {/* 날짜 */}
        <p
          className="font-sans tracking-wider"
          style={{ fontSize: 13, color: "#666666" }}
        >
          2026. 09. 13 (일) 오전 11:00
        </p>

        {/* 장소 */}
        <p
          className="font-sans mt-1.5 tracking-wide"
          style={{ fontSize: 11, color: "#999999" }}
        >
          더 컨벤션 잠실 · 3층 그랜드볼룸
        </p>
      </motion.div>

      {/* 스크롤 유도 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="flex justify-center pt-10"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          <ChevronDown size={14} style={{ color: "#CCCCCC" }} />
        </motion.div>
      </motion.div>

    </section>
  );
}
