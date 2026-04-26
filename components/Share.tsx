"use client";

import { useState } from "react";
import { Share2, Link } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Share() {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleKakaoShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "탁진혁 ❤️ 조수민 결혼합니다",
          text: "2026년 9월 13일 일요일 오전 11시\n더 컨벤션 잠실에서 결혼합니다.\n함께해 주세요.",
          url: window.location.href,
        });
      } catch {
        // 사용자가 취소한 경우
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const el = document.createElement("input");
      el.value = window.location.href;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2500);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div>

        <FadeIn>
          <SectionHeader sub="SHARE" title="공유하기" />
        </FadeIn>

        <FadeIn delay={0.1} className="flex gap-3">
          {/* 카카오톡 공유 */}
          <button
            onClick={handleKakaoShare}
            className="flex-1 flex items-center justify-center gap-2 py-[14px] font-sans text-[12px] font-bold tracking-[0.06em] transition-all"
            style={{ border: "1px solid #DDDDDD", color: "#555555", borderRadius: 24 }}
          >
            <Share2 size={13} />
            카카오톡 공유
          </button>

          {/* 링크 복사 */}
          <button
            onClick={handleCopyLink}
            className="flex-1 flex items-center justify-center gap-2 py-[14px] font-sans text-[12px] font-bold tracking-[0.06em] transition-all"
            style={{
              border: linkCopied ? "1px solid #AACCAA" : "1px solid #DDDDDD",
              color: linkCopied ? "#779977" : "#555555",
              borderRadius: 24,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {linkCopied ? (
                <motion.span key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <Link size={13} /> 복사됨
                </motion.span>
              ) : (
                <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                  <Link size={13} /> 링크 복사
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </FadeIn>

      </div>
    </section>
  );
}
