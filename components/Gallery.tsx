"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PHOTOS = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `/images/photo-${i + 1}.jpg`,  // null → 경로로 변경
  alt: `웨딩 사진 ${i + 1}`,
}));

const GRID_SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-10 px-6">
          <p className="font-sans text-xs tracking-[0.3em] text-warm-brown/50 mb-2 uppercase">
            Gallery
          </p>
          <h2 className="font-serif text-3xl font-light text-warm-dark">우리의 이야기</h2>
        </div>

        {/* 그리드 */}
        <div className="px-3 grid grid-cols-3 grid-rows-4 gap-1.5 max-w-sm mx-auto auto-rows-[90px]">
          {PHOTOS.map((photo, idx) => (
            <motion.button
              key={photo.id}
              className={`${GRID_SPANS[idx]} rounded-xl overflow-hidden bg-beige-100 border border-beige-200 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity`}
              onClick={() => setSelected(photo.id)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {photo.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              ) : (
                <span className="font-sans text-[10px] text-beige-400 tracking-widest">
                  PHOTO
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* 라이트박스 */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white"
            onClick={() => setSelected(null)}
            aria-label="닫기"
          >
            <X size={28} />
          </button>
          <div
            className="w-full max-w-sm aspect-[3/4] rounded-2xl bg-beige-200 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-beige-500 text-sm tracking-widest font-sans">PHOTO {selected}</span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
