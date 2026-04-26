"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  return (
    <section className="bg-white">

      <div style={{ height: 124 }} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="px-[18px]"
      >
        <div className="w-full overflow-hidden bg-[#EDEAE6]" style={{ aspectRatio: "734/769" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo-1.jpeg"
            alt="탁진혁 & 조수민"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center px-8"
        style={{ marginTop: 32 }}
      >
        <div style={{ flex: 1, textAlign: "right", paddingRight: 14 }}>
          <span className="font-nanum font-bold" style={{ fontSize: 22, letterSpacing: "0.25em", color: "#333333" }}>
            탁진혁
          </span>
        </div>
        <div style={{ width: 1, height: 22, backgroundColor: "#DDDDDD", flexShrink: 0 }} />
        <div style={{ flex: 1, textAlign: "left", paddingLeft: 14 }}>
          <span className="font-nanum font-bold" style={{ fontSize: 22, letterSpacing: "0.25em", color: "#333333" }}>
            조수민
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.1, ease: "easeOut" }}
        className="text-center"
        style={{ marginTop: 18 }}
      >
        <p className="font-nanum" style={{ fontSize: 14, letterSpacing: "0.12em", color: "#555555" }}>
          2026. 09. 13 (일) 오전 11:00
        </p>
        <p className="font-sans" style={{ fontSize: 11, letterSpacing: "0.08em", color: "#888888", marginTop: 5 }}>
          더 컨벤션 잠실 · 3층 그랜드볼룸
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="flex justify-center"
        style={{ marginTop: 32, paddingBottom: 40 }}
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
