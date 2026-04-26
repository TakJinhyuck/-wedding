"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const PHOTOS = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/images/photo-${i + 1}.jpeg`,
  alt: `웨딩 사진 ${i + 1}`,
}));

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const goNext = () => setSelected((p) => (p !== null && p < PHOTOS.length ? p + 1 : p));
  const goPrev = () => setSelected((p) => (p !== null && p > 1 ? p - 1 : p));

  return (
    <section className="py-20 bg-white">

      <FadeIn className="px-6">
        <SectionHeader sub="GALLERY" title="갤러리" />
      </FadeIn>

      {/* 3열 그리드: gap-1 px-10 */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-3 gap-1 px-10">
          {PHOTOS.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelected(photo.id)}
              className="aspect-square overflow-hidden"
              style={{ backgroundColor: "#EDEAE6" }}
              aria-label={`웨딩 사진 ${photo.id} 크게 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.05]"
              />
            </button>
          ))}
        </div>
      </FadeIn>

      {/* 라이트박스 — AnimatePresence + 스와이프 */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            onClick={() => setSelected(null)}
          >
            {/* 닫기 */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white/80 transition-colors"
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              <X size={22} />
            </button>

            {/* 이전 */}
            {selected > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white/90 transition-colors"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="이전 사진"
              >
                <ChevronLeft size={30} />
              </button>
            )}

            {/* 다음 */}
            {selected < PHOTOS.length && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white/90 transition-colors"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="다음 사진"
              >
                <ChevronRight size={30} />
              </button>
            )}

            {/* 사진 — drag 스와이프 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -60) goNext();
                  else if (offset.x > 60) goPrev();
                }}
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                style={{ maxWidth: 320, width: "85vw", aspectRatio: "3/4" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/photo-${selected}.jpeg`}
                  alt={`웨딩 사진 ${selected}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* 인디케이터 */}
            <div className="absolute bottom-8 flex gap-2">
              {PHOTOS.map((p) => (
                <button
                  key={p.id}
                  onClick={(e) => { e.stopPropagation(); setSelected(p.id); }}
                  style={{
                    width: p.id === selected ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: p.id === selected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
