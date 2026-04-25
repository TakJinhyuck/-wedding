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
    <section className="py-14 bg-white">

      <FadeIn className="px-8">
        <SectionHeader sub="GALLERY" title="갤러리" />
      </FadeIn>

      {/* 3열 그리드 — 1169 기준 3% 패딩, 10px gap → 430px 카드 기준으로 스케일 */}
      <FadeIn delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 6,
            padding: "0 13px",
          }}
        >
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
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 transition-opacity hover:opacity-100"
              style={{ color: "rgba(255,255,255,0.4)" }}
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
              className="w-full overflow-hidden"
              style={{ maxWidth: 300, aspectRatio: "3/4", backgroundColor: "#E8E4DF" }}
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
