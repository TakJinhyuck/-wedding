"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Invitation() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6 bg-beige-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-sm mx-auto text-center"
      >
        {/* 상단 장식 */}
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-beige-400">
            <path
              d="M20 5 C20 5, 8 14, 8 22 C8 28 13.5 33 20 33 C26.5 33 32 28 32 22 C32 14 20 5 20 5Z"
              fill="currentColor"
              opacity="0.5"
            />
            <path
              d="M20 10 C20 10, 12 17, 12 22 C12 26.4 15.6 30 20 30 C24.4 30 28 26.4 28 22 C28 17 20 10 20 10Z"
              fill="currentColor"
              opacity="0.3"
            />
          </svg>
        </div>

        <p className="font-sans text-xs tracking-[0.3em] text-warm-brown/50 mb-6 uppercase">
          Invitation
        </p>

        <h2 className="font-serif text-3xl font-light text-warm-dark mb-8 leading-snug">
          결혼합니다
        </h2>

        <div className="divider mb-8">
          <span className="text-beige-400 text-sm">✦</span>
        </div>

        <p className="font-sans text-sm leading-8 text-warm-brown/80 whitespace-pre-line">
          {`서로가 마주 보며 다져온 사랑을\n이제 함께 걸어갈 큰 사랑으로 키우고자 합니다.\n\n저희 두 사람이 사랑의 결실을 맺는 자리에\n오셔서 축복해 주시면 감사하겠습니다.`}
        </p>

        <div className="mt-10 flex flex-col items-center gap-1">
          <p className="font-sans text-xs text-warm-brown/60 tracking-widest">
            탁○○ · 탁○○의 아들 <span className="font-medium text-warm-brown">탁진혁</span>
          </p>
          <p className="font-sans text-xs text-warm-brown/60 tracking-widest">
            조○○ · 조○○의 딸 <span className="font-medium text-warm-brown">조수민</span>
          </p>
        </div>

        <div className="mt-8 divider">
          <span className="text-beige-400 text-sm">✦</span>
        </div>

        <div className="mt-6 bg-beige-100 rounded-2xl px-6 py-5 border border-beige-200">
          <p className="font-serif text-lg text-warm-dark">2026년 9월 13일 일요일</p>
          <p className="font-sans text-xs text-warm-brown/60 mt-1 tracking-wider">오후 2시 30분</p>
          <div className="mt-3 pt-3 border-t border-beige-200">
            <p className="font-sans text-sm text-warm-brown/80">더 컨벤션 잠실</p>
            <p className="font-sans text-xs text-warm-brown/50 mt-0.5">3층 그랜드볼룸</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
