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

// 5장 기준 그리드 스팬
const GRID_SPANS = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20" style={{ backgroundColor: "#FDFDFD" }}>
      <FadeIn className="px-6">
        <SectionHeader en="Gallery" ko="우리의 이야기" />
      </FadeIn>

      <FadeIn delay={0.1} className="px-3">
        <div className="grid grid-cols-3 grid-rows-3 gap-1.5 max-w-sm mx-auto auto-rows-[90px]">
          {PHOTOS.map((photo, idx) => (
            <motion.button
              key={photo.id}
              className={`${GRID_SPANS[idx]} rounded-xl overflow-hidden bg-[#E8E0D8] border border-[#F0EBE3] flex items-center justify-center cursor-pointer`}
              onClick={() => setSelected(photo.id)}
              whileHover={{ opacity: 0.88 }}
              transition={{ duration: 0.2 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            </motion.button>
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
            className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelected(null)}
              aria-label="닫기"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E0D8]"
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
