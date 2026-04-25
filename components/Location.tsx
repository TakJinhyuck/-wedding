"use client";

import { MapPin, Navigation, Car, Train, Bus } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/%EB%8D%94%EC%BB%A8%EB%B2%A4%EC%85%98%EC%9E%A0%EC%8B%A4";
const KAKAO_MAP_URL = "https://map.kakao.com/link/search/더컨벤션잠실";

interface TransportProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

function TransportRow({ Icon, title, desc }: TransportProps) {
  return (
    <div className="flex gap-3 items-start bg-white rounded-xl border border-[#E8E0D8] px-4 py-3.5">
      <div className="mt-0.5 w-8 h-8 rounded-full bg-[#FAF8F5] flex items-center justify-center shrink-0">
        <Icon size={14} className="text-[#C9A96E]" />
      </div>
      <div>
        <p className="font-sans text-[12px] font-medium text-[#333333] tracking-wide mb-0.5">{title}</p>
        <p className="font-sans text-[11px] text-[#888888] leading-[1.7] whitespace-pre-line">{desc}</p>
      </div>
    </div>
  );
}

export default function Location() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader en="Location" ko="오시는 길" />
        </FadeIn>

        {/* 지도 플레이스홀더 */}
        <FadeIn delay={0.1}>
          <div className="w-full h-44 rounded-2xl bg-[#E8E0D8] border border-[#E0D8CE] flex flex-col items-center justify-center mb-4 overflow-hidden">
            <MapPin size={22} className="text-[#C9A96E]/60 mb-1" />
            <span className="font-sans text-[11px] tracking-widest text-[#AAAAAA]">더 컨벤션 잠실</span>
          </div>
        </FadeIn>

        {/* 지도 앱 버튼 */}
        <FadeIn delay={0.15} className="grid grid-cols-2 gap-2.5 mb-6">
          <a
            href={NAVER_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#03C75A] text-white font-sans text-[12px] font-medium tracking-wide shadow-sm active:opacity-80"
          >
            <Navigation size={13} />
            네이버 지도
          </a>
          <a
            href={KAKAO_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#FAE100] text-[#3C1E1E] font-sans text-[12px] font-medium tracking-wide shadow-sm active:opacity-80"
          >
            <Navigation size={13} />
            카카오 지도
          </a>
        </FadeIn>

        {/* 주소 */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl border border-[#E8E0D8] px-5 py-4 mb-4 text-center">
            <p className="font-sans text-[13px] text-[#555555] leading-[1.9]">
              서울특별시 송파구 올림픽로 240<br />
              롯데월드몰 6층 더 컨벤션 잠실
            </p>
          </div>
        </FadeIn>

        {/* 교통 안내 */}
        <FadeIn delay={0.25} className="space-y-2.5">
          <TransportRow
            Icon={Train}
            title="지하철"
            desc="2호선 · 8호선 잠실역 1번 출구 도보 5분"
          />
          <TransportRow
            Icon={Bus}
            title="버스"
            desc={"잠실역(롯데월드) 정류장 하차\n간선 30, 31, 37 / 지선 3216, 3413"}
          />
          <TransportRow
            Icon={Car}
            title="자가용"
            desc={"롯데월드몰 지하주차장 이용\n(유료, 최초 30분 무료)"}
          />
        </FadeIn>
      </div>
    </section>
  );
}
