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
    <section className="py-20 px-6" style={{ backgroundColor: "#F9F9FB" }}>
      <div>

        <FadeIn>
          <SectionHeader sub="LOCATION" title="오시는 길" />
        </FadeIn>

        {/* 지도 플레이스홀더 */}
        <FadeIn delay={0.08}>
          <div
            className="w-full flex flex-col items-center justify-center mb-5"
            style={{ height: 160, backgroundColor: "#EDEAE6" }}
          >
            <MapPin size={16} style={{ color: "#C0B8B0", marginBottom: 6 }} />
            <span
              className="font-sans text-[9px] tracking-[0.3em] uppercase"
              style={{ color: "#C0B8B0" }}
            >
              더 컨벤션 잠실
            </span>
          </div>
        </FadeIn>

        {/* 지도 앱 버튼 — 1169 기준 pill 형태 (border-radius: 20px) */}
        <FadeIn delay={0.13}>
          <div className="flex justify-center gap-3 mb-6">
            <a
              href={NAVER_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-[12px] font-bold tracking-[0.05em] transition-colors"
              style={{
                border: "1px solid #DDDDDD",
                color: "#666666",
                borderRadius: 20,
                height: 38,
                paddingLeft: 18,
                paddingRight: 18,
              }}
            >
              <Navigation size={11} />
              네이버 지도
            </a>
            <a
              href={KAKAO_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-[12px] font-bold tracking-[0.05em] transition-colors"
              style={{
                border: "1px solid #DDDDDD",
                color: "#666666",
                borderRadius: 20,
                height: 38,
                paddingLeft: 18,
                paddingRight: 18,
              }}
            >
              <Navigation size={11} />
              카카오 지도
            </a>
          </div>
        </FadeIn>

        {/* 주소 */}
        <FadeIn delay={0.18}>
          <p
            className="font-sans text-[12px] text-center leading-[2.0] mb-6"
            style={{ color: "#888888" }}
          >
            서울특별시 송파구 올림픽로 240<br />
            롯데월드몰 6층 더 컨벤션 잠실
          </p>
        </FadeIn>

        {/* 교통 안내 */}
        <FadeIn delay={0.22}>
          <div
            className="space-y-4 pt-6"
            style={{ borderTop: "1px solid #EEEEEE" }}
          >
            {TRANSPORT.map(({ label, desc }) => (
              <div key={label} className="flex gap-5 items-start">
                <span
                  className="font-sans text-[10px] font-bold shrink-0"
                  style={{ color: "#888888", width: 32, paddingTop: 2 }}
                >
                  {label}
                </span>
                <p
                  className="font-sans text-[12px] leading-[1.9] whitespace-pre-line"
                  style={{ color: "#666666" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
