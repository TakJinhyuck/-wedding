"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const PHOTOS = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/images/photo-${i + 1}.jpeg`,
  alt: `웨딩 사진 ${i + 1}`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ backgroundColor: "#FDFDFD" }}>
      <FadeIn className="px-6">
        <SectionHeader en="Gallery" ko="우리의 이야기" />
      </FadeIn>

      {/* 그리드: 첫 번째 사진 전체 너비(세로), 나머지 4장 2열 */}
      <FadeIn delay={0.1} className="px-4 max-w-sm mx-auto">
        {/* 첫 번째 사진: 세로형 전체 너비 */}
        <button
          onClick={() => setSelected(1)}
          className="w-full block aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E0D8] mb-2 active:opacity-90"
          aria-label="웨딩 사진 1 크게 보기"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTOS[0].src}
            alt={PHOTOS[0].alt}
            className="w-full h-full object-cover"
          />
        </button>

        {/* 나머지 4장: 2열 정사각형 그리드 */}
        <div className="grid grid-cols-2 gap-2">
          {PHOTOS.slice(1).map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelected(photo.id)}
              className="aspect-square rounded-xl overflow-hidden bg-[#E8E0D8] active:opacity-90"
              aria-label={`웨딩 사진 ${photo.id} 크게 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </FadeIn>

      {/* 라이트박스 */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white"
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E0D8]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/photo-${selected}.jpeg`}
                alt={`웨딩 사진 ${selected}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
