"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Invitation() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FDFDFD" }}>
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader en="Invitation" ko="초대합니다" />
        </FadeIn>

        <FadeIn delay={0.1} className="text-center">
          <p
            className="font-sans text-[13.5px] leading-[2.1] text-[#555555]"
            style={{ wordBreak: "keep-all" }}
          >
            서로가 마주 보며 다져온 사랑을<br />
            이제 함께 걸어갈 큰 사랑으로 키우고자 합니다.<br />
            <br />
            저희 두 사람이 사랑의 결실을 맺는 자리에<br />
            오셔서 축복해 주시면 감사하겠습니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 flex flex-col items-center gap-1.5">
          <p className="font-sans text-[11px] tracking-widest text-[#AAAAAA]">
            탁○○ · 탁○○의 아들&nbsp;&nbsp;
            <span className="font-medium text-[#555555] tracking-normal">탁진혁</span>
          </p>
          <p className="font-sans text-[11px] tracking-widest text-[#AAAAAA]">
            조○○ · 조○○의 딸&nbsp;&nbsp;
            <span className="font-medium text-[#555555] tracking-normal">조수민</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10">
          <div className="rounded-2xl border border-[#E8E0D8] bg-[#FAF8F5] px-6 py-6 text-center">
            <p className="font-serif text-[20px] tracking-[0.15em] text-[#333333] font-light">
              2026년 9월 13일 일요일
            </p>
            <p className="mt-1 font-sans text-[11px] tracking-[0.2em] text-[#AAAAAA]">오후 2시 30분</p>
            <div className="my-4 h-px bg-[#E8E0D8]" />
            <p className="font-sans text-[13px] text-[#555555] tracking-wide">더 컨벤션 잠실</p>
            <p className="mt-0.5 font-sans text-[11px] text-[#AAAAAA]">3층 그랜드볼룸</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
