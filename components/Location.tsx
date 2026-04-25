"use client";

import { MapPin, Navigation } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9E%A0%EC%8B%A4";
const KAKAO_MAP_URL = "https://map.kakao.com/link/search/더컨벤션잠실";

const TRANSPORT = [
  { label: "지하철", desc: "2호선 · 8호선 잠실역 1번 출구\n도보 5분" },
  { label: "버스", desc: "잠실역(롯데월드) 정류장 하차\n간선 30, 31, 37 / 지선 3216, 3413" },
  { label: "자가용", desc: "롯데월드몰 지하주차장 이용\n최초 30분 무료" },
];

export default function Location() {
  return (
    <section className="py-16 px-8 bg-white border-t border-[#F2F2F2]">
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader title="LOCATION" />
        </FadeIn>

        {/* 지도 플레이스홀더 */}
        <FadeIn delay={0.08}>
          <div className="w-full h-40 bg-[#F5F3F0] rounded-sm flex flex-col items-center justify-center mb-4">
            <MapPin size={18} className="text-[#CCCCCC] mb-1.5" />
            <span className="font-sans text-[10px] tracking-[0.25em] text-[#CCCCCC]">
              더 컨벤션 잠실
            </span>
          </div>
        </FadeIn>

        {/* 지도 앱 버튼: Outline 스타일 */}
        <FadeIn delay={0.13} className="grid grid-cols-2 gap-2.5 mb-7">
          <a
            href={NAVER_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-sm border border-[#E0E0E0] font-sans text-[11px] tracking-[0.1em] text-[#666666] hover:bg-[#F8F8F8] transition-colors"
          >
            <Navigation size={12} />
            네이버 지도
          </a>
          <a
            href={KAKAO_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-sm border border-[#E0E0E0] font-sans text-[11px] tracking-[0.1em] text-[#666666] hover:bg-[#F8F8F8] transition-colors"
          >
            <Navigation size={12} />
            카카오 지도
          </a>
        </FadeIn>

        {/* 주소 */}
        <FadeIn delay={0.18}>
          <p className="font-sans text-[12px] text-[#888888] text-center leading-[2] mb-7">
            서울특별시 송파구 올림픽로 240<br />
            롯데월드몰 6층 더 컨벤션 잠실
          </p>
        </FadeIn>

        {/* 교통 안내: 레이블 + 설명 미니멀 배치 */}
        <FadeIn delay={0.22} className="space-y-4 pt-6 border-t border-[#F2F2F2]">
          {TRANSPORT.map(({ label, desc }) => (
            <div key={label} className="flex gap-5 items-start">
              <span className="font-sans text-[10px] tracking-widest text-[#AAAAAA] w-10 shrink-0 pt-0.5 uppercase">
                {label}
              </span>
              <p className="font-sans text-[12px] text-[#666666] leading-[1.9] whitespace-pre-line">
                {desc}
              </p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
