"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Train, Bus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9E%A0%EC%8B%A4";
const KAKAO_MAP_URL =
  "https://map.kakao.com/link/search/더컨벤션잠실";

export default function Location() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6 bg-beige-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-sm mx-auto"
      >
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.3em] text-warm-brown/50 mb-2 uppercase">
            Location
          </p>
          <h2 className="font-serif text-3xl font-light text-warm-dark mb-1">오시는 길</h2>
          <p className="font-sans text-xs text-warm-brown/60 tracking-wider">더 컨벤션 잠실</p>
        </div>

        {/* 지도 플레이스홀더 */}
        <div className="w-full h-44 rounded-2xl bg-beige-200 border border-beige-300 flex items-center justify-center mb-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-beige-100 to-beige-300 opacity-60" />
          <div className="relative flex flex-col items-center gap-2">
            <MapPin size={28} className="text-warm-brown/60" />
            <span className="font-sans text-xs text-warm-brown/50 tracking-wider">지도</span>
          </div>
        </div>

        {/* 지도 앱 버튼 */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <a
            href={NAVER_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#03C75A] text-white font-sans text-sm font-medium tracking-wide shadow-sm hover:opacity-90 transition-opacity"
          >
            <Navigation size={15} />
            네이버 지도
          </a>
          <a
            href={KAKAO_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FAE100] text-[#3C1E1E] font-sans text-sm font-medium tracking-wide shadow-sm hover:opacity-90 transition-opacity"
          >
            <Navigation size={15} />
            카카오 지도
          </a>
        </div>

        {/* 주소 */}
        <div className="bg-white rounded-2xl border border-beige-200 px-5 py-4 mb-5 text-center">
          <p className="font-sans text-sm text-warm-brown/80 leading-6">
            서울특별시 송파구 올림픽로 240<br />
            롯데월드몰 6층 더 컨벤션 잠실
          </p>
        </div>

        {/* 교통 안내 */}
        <div className="space-y-4">
          <TransportItem
            Icon={Train}
            title="지하철"
            desc="2호선 · 8호선 잠실역 1번 출구 도보 5분"
          />
          <TransportItem
            Icon={Bus}
            title="버스"
            desc="잠실역(롯데월드) 정류장 하차\n간선 30, 31, 37 / 지선 3216, 3413"
          />
          <TransportItem
            Icon={Car}
            title="자가용"
            desc="롯데월드몰 지하주차장 이용\n(유료, 최초 30분 무료)"
          />
        </div>
      </motion.div>
    </section>
  );
}

function TransportItem({
  Icon,
  title,
  desc,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 items-start bg-white rounded-xl border border-beige-200 px-4 py-3">
      <div className="mt-0.5 w-8 h-8 rounded-full bg-beige-100 flex items-center justify-center shrink-0">
        <Icon size={15} className="text-warm-brown/60" />
      </div>
      <div>
        <p className="font-sans text-xs font-medium text-warm-dark tracking-wide mb-0.5">{title}</p>
        <p className="font-sans text-xs text-warm-brown/60 leading-5 whitespace-pre-line">{desc}</p>
      </div>
    </div>
  );
}
