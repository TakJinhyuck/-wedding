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
    <section className="py-24 px-8 bg-[#F9F9F9]">
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader title="LOCATION" />
        </FadeIn>

        {/* 지도 플레이스홀더 */}
        <FadeIn delay={0.08}>
          <div className="w-full h-44 bg-[#EDEAE6] flex flex-col items-center justify-center mb-5">
            <MapPin size={16} className="text-[#CCCCCC] mb-2" />
            <span className="font-sans text-[9px] tracking-[0.3em] text-[#CCCCCC] uppercase">
              더 컨벤션 잠실
            </span>
          </div>
        </FadeIn>

        {/* 지도 앱 버튼: 아웃라인, 색상 없음 */}
        <FadeIn delay={0.13} className="grid grid-cols-2 gap-3 mb-8">
          <a
            href={NAVER_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3.5 border border-[#DDDDDD] font-sans text-[11px] tracking-[0.15em] text-[#777777] hover:bg-white transition-colors"
          >
            <Navigation size={11} />
            네이버 지도
          </a>
          <a
            href={KAKAO_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3.5 border border-[#DDDDDD] font-sans text-[11px] tracking-[0.15em] text-[#777777] hover:bg-white transition-colors"
          >
            <Navigation size={11} />
            카카오 지도
          </a>
        </FadeIn>

        {/* 주소 */}
        <FadeIn delay={0.18}>
          <p className="font-sans text-[12px] tracking-[0.08em] text-[#888888] text-center leading-[2.1] mb-8">
            서울특별시 송파구 올림픽로 240<br />
            롯데월드몰 6층 더 컨벤션 잠실
          </p>
        </FadeIn>

        {/* 교통 안내: 레이블 + 설명 */}
        <FadeIn delay={0.22} className="space-y-5 pt-7 border-t border-[#EEEEEE]">
          {TRANSPORT.map(({ label, desc }) => (
            <div key={label} className="flex gap-6 items-start">
              <span className="font-sans text-[9px] tracking-widest text-[#BBBBBB] w-9 shrink-0 pt-0.5 uppercase">
                {label}
              </span>
              <p className="font-sans text-[12px] text-[#666666] leading-[2] whitespace-pre-line">
                {desc}
              </p>
            </div>
          ))}
        </FadeIn>

      </div>
    </section>
  );
}
