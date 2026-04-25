"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Invitation() {
  return (
    <section className="py-24 px-8 bg-[#F9F9F9]">
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader title="INVITATION" />
        </FadeIn>

        <FadeIn delay={0.15} className="text-center">
          <p
            className="font-sans text-[13px] leading-[2.4] tracking-wide text-[#555555]"
            style={{ wordBreak: "keep-all" }}
          >
            서로가 마주 보며 다져온 사랑을<br />
            이제 함께 걸어갈 큰 사랑으로 키우고자 합니다.<br />
            <br />
            저희 두 사람이 사랑의 결실을 맺는 자리에<br />
            오셔서 축복해 주시면 감사하겠습니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-12 text-center space-y-2.5">
          <div className="w-5 h-px bg-[#E0E0E0] mx-auto mb-8" />
          <p className="font-sans text-[11px] tracking-[0.2em] text-[#BBBBBB]">
            탁○○ · 탁○○의 아들&ensp;
            <span className="text-[#666666] tracking-normal">탁진혁</span>
          </p>
          <p className="font-sans text-[11px] tracking-[0.2em] text-[#BBBBBB]">
            조○○ · 조○○의 딸&ensp;
            <span className="text-[#666666] tracking-normal">조수민</span>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
