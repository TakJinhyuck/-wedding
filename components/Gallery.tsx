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
    <section className="py-16 bg-white border-t border-[#F2F2F2]">
      <FadeIn className="px-8">
        <SectionHeader title="GALLERY" />
      </FadeIn>

      <FadeIn delay={0.1} className="px-5 max-w-sm mx-auto">
        {/* 첫 사진: 전체 너비, 세로형 */}
        <button
          onClick={() => setSelected(1)}
          className="w-full block aspect-[3/4] overflow-hidden bg-[#F5F3F0] rounded-sm mb-1.5"
          aria-label="웨딩 사진 1 크게 보기"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTOS[0].src}
            alt={PHOTOS[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </button>

        {/* 나머지 4장: 2열 */}
        <div className="grid grid-cols-2 gap-1.5">
          {PHOTOS.slice(1).map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelected(photo.id)}
              className="aspect-square overflow-hidden bg-[#F5F3F0] rounded-sm"
              aria-label={`웨딩 사진 ${photo.id} 크게 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors"
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-xs aspect-[3/4] overflow-hidden bg-[#F0EDE8] rounded-sm"
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
