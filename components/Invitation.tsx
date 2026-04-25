"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Invitation() {
  return (
    <section className="py-14 px-8" style={{ backgroundColor: "#F7F8F9" }}>
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader sub="INVITATION" title="초대합니다" />
        </FadeIn>

        <FadeIn delay={0.15} className="text-center">
          <p
            className="font-nanum text-[15px] leading-[2.2] tracking-wide"
            style={{ color: "#555555", wordBreak: "keep-all" }}
          >
            서로가 마주 보며 다져온 사랑을<br />
            이제 함께 걸어갈 큰 사랑으로 키우고자 합니다.<br />
            <br />
            저희 두 사람이 사랑의 결실을 맺는 자리에<br />
            오셔서 축복해 주시면 감사하겠습니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-8 text-center">
          <div
            className="mx-auto mb-8"
            style={{ width: 20, height: 1, backgroundColor: "#DEDEDE" }}
          />
          <p
            className="font-sans text-[11px] tracking-[0.2em] mb-2"
            style={{ color: "#AAAAAA" }}
          >
            탁○○ · 탁○○의 아들&ensp;
            <span style={{ color: "#666666" }}>탁진혁</span>
          </p>
          <p
            className="font-sans text-[11px] tracking-[0.2em]"
            style={{ color: "#AAAAAA" }}
          >
            조○○ · 조○○의 딸&ensp;
            <span style={{ color: "#666666" }}>조수민</span>
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
