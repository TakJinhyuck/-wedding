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

      {/* 3열 그리드 — Tailwind 클래스로 보장 */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-3 gap-2 px-4">
          {PHOTOS.map((photo) => (
            <button
              key={photo.id}
              onClick={() => setSelected(photo.id)}
              className="overflow-hidden rounded-md aspect-square"
              style={{ backgroundColor: "#EDEAE6" }}
              aria-label={`웨딩 사진 ${photo.id} 크게 보기`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover rounded-md transition-transform duration-500 hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </FadeIn>

      {/* 라이트박스 — 스와이프 + 화살표 */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.93)" }}
            onClick={() => setSelected(null)}
          >
            {/* 닫기 */}
            <button
              className="absolute top-6 right-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              <X size={20} />
            </button>

            {/* 이전 */}
            {selected > 1 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="이전 사진"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* 다음 */}
            {selected < PHOTOS.length && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="다음 사진"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* 사진 — drag 스와이프 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.22 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, { offset }) => {
                  if (offset.x < -60) goNext();
                  else if (offset.x > 60) goPrev();
                }}
                className="overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
                style={{ maxWidth: 300, width: "80vw", aspectRatio: "3/4", backgroundColor: "#1a1a1a" }}
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
            <div className="absolute bottom-8 flex gap-1.5">
              {PHOTOS.map((p) => (
                <button
                  key={p.id}
                  onClick={(e) => { e.stopPropagation(); setSelected(p.id); }}
                  style={{
                    width: p.id === selected ? 18 : 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: p.id === selected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s",
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
