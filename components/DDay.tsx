"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";

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
          <p className="font-sans text-[9px] tracking-[0.6em] uppercase mb-10" style={{ color: "#BBBBBB" }}>
            D · DAY
          </p>

          {/* 큰 숫자 */}
          <div className="relative inline-flex items-end gap-1 mb-6">
            <motion.span
              key={days}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif italic"
              style={{ fontSize: 80, lineHeight: 1, color: "#9A7040", letterSpacing: "-0.02em" }}
            >
              {days ?? "—"}
            </motion.span>
            <span
              className="font-nanum pb-3"
              style={{ fontSize: 18, color: "#9A7040" }}
            >
              일
            </span>
          </div>

          <div className="mx-auto mb-7" style={{ width: 24, height: 1, backgroundColor: "#E0E0E0" }} />

          <p
            className="font-nanum text-[15px] leading-[2.0] tracking-[0.06em]"
            style={{ color: "#555555" }}
          >
            탁진혁 ❤️ 조수민<br />
            <span className="font-sans text-[12px] tracking-[0.1em]" style={{ color: "#AAAAAA" }}>
              예식일이 {days ?? "—"}일 남았습니다
            </span>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
