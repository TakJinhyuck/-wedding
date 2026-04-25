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
    <section className="py-24 bg-[#F9F9F9]">

      <FadeIn className="px-8">
        <SectionHeader title="GALLERY" />
      </FadeIn>

      <FadeIn delay={0.12} className="px-8 max-w-sm mx-auto">
        {/* 첫 사진: 세로형 전체 너비, 여백 없는 직각 */}
        <button
          onClick={() => setSelected(1)}
          className="w-full block aspect-[3/4] overflow-hidden bg-[#E8E4DF]"
          aria-label="웨딩 사진 1 크게 보기"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTOS[0].src}
            alt={PHOTOS[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.025]"
          />
        </button>

        {/* 나머지 4장: 2열 정사각형 */}
        <div className="grid grid-cols-2 gap-1 mt-1">
          {PHOTOS.slice(1).map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelected(photo.id)}
              className="aspect-square overflow-hidden bg-[#E8E4DF]"
              aria-label={`웨딩 사진 ${photo.id} 크게 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.025]"
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/40 hover:text-white/80 transition-colors"
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[320px] aspect-[3/4] overflow-hidden bg-[#E8E4DF]"
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
