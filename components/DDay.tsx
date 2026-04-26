"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const WEDDING = new Date(2026, 8, 13); // 2026년 9월 13일

function getDaysLeft(): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = WEDDING.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function DDay() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(getDaysLeft());
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="text-center">

        <FadeIn>
          <SectionHeader sub="D · DAY" title="웨딩 카운트다운" />

          {/* 날짜 */}
          <p className="font-nanum text-[13px] tracking-[0.15em] text-gray-400 mb-6">
            2026. 09. 13
          </p>

          {/* 큰 숫자 */}
          <motion.div
            key={days}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-end justify-center gap-2 mb-6"
          >
            <span
              className="font-serif italic leading-none"
              style={{ fontSize: 88, color: "#C4A98E", letterSpacing: "-0.02em" }}
            >
              {days ?? "—"}
            </span>
            <span className="font-nanum text-xl pb-4" style={{ color: "#C4A98E" }}>
              일
            </span>
          </motion.div>

          {/* 감성 문구 — text-gray-400 text-xs */}
          <p className="text-gray-400 text-xs tracking-[0.12em] leading-[2.0]">
            탁진혁 ❤️ 조수민<br />
            기적 같은 만남, 결혼식이 {days ?? "—"}일 남았습니다
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
