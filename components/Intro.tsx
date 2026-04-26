"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="bg-white">

      {/* 액자형 사진: p-10 으로 두꺼운 화이트 여백 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="p-10 pb-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photo-1.jpeg"
          alt="탁진혁 & 조수민"
          className="w-full aspect-[3/4] object-cover rounded-sm"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
        />
      </motion.div>

      {/* 이름 · 날짜 · 장소 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
        className="px-10 pt-8 pb-12 text-center"
      >
        {/* 한글 이름 */}
        <p className="font-nanum text-xl tracking-[0.2em]" style={{ color: "#333333" }}>
          탁진혁 · 조수민
        </p>

        {/* 영문 이름 */}
        <p className="font-serif italic text-sm tracking-widest mt-2" style={{ color: "#BBBBBB" }}>
          Jinhyeok &amp; Sumin
        </p>

        <div style={{ width: 18, height: 1, backgroundColor: "#E8E8E8", margin: "20px auto" }} />

        {/* 날짜 */}
        <p className="text-sm text-gray-500 tracking-widest mt-4">
          2026. 09. 13 (일) 오전 11:00
        </p>

        {/* 장소 */}
        <p className="text-xs tracking-wide mt-2" style={{ color: "#AAAAAA" }}>
          더 컨벤션 잠실 · 3층 그랜드볼룸
        </p>

        {/* 스크롤 유도 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          >
            <ChevronDown size={14} className="text-gray-300" />
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
}
