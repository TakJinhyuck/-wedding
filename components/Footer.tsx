"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <footer ref={ref} className="py-14 px-6 bg-beige-100 border-t border-beige-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="font-serif text-2xl font-light text-warm-dark mb-2">
          탁진혁 <span className="text-beige-400">♥</span> 조수민
        </p>
        <p className="font-sans text-xs text-warm-brown/50 tracking-widest mb-6">
          2026 . 09 . 13 SUN
        </p>
        <div className="divider mb-6">
          <span className="text-beige-400 text-xs">✦</span>
        </div>
        <p className="font-sans text-[11px] text-warm-brown/40 leading-5">
          두 사람이 함께 걷는 모든 날이<br />
          빛나는 날이 되기를 바랍니다.
        </p>
      </motion.div>
    </footer>
  );
}
