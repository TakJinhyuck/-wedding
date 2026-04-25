"use client";

import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Invitation() {
  return (
    <section className="py-16 px-8 bg-white border-t border-[#F2F2F2]">
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader title="INVITATION" />
        </FadeIn>

        <FadeIn delay={0.15} className="text-center">
          <p
            className="font-sans text-[13.5px] leading-[2.3] text-[#555555]"
            style={{ wordBreak: "keep-all" }}
          >
            서로가 마주 보며 다져온 사랑을<br />
            이제 함께 걸어갈 큰 사랑으로 키우고자 합니다.<br />
            <br />
            저희 두 사람이 사랑의 결실을 맺는 자리에<br />
            오셔서 축복해 주시면 감사하겠습니다.
          </p>

          <div className="mt-9 pt-7 border-t border-[#F2F2F2] space-y-2">
            <p className="font-sans text-[11px] tracking-[0.18em] text-[#BBBBBB]">
              탁○○ · 탁○○의 아들&ensp;
              <span className="text-[#666666]">탁진혁</span>
            </p>
            <p className="font-sans text-[11px] tracking-[0.18em] text-[#BBBBBB]">
              조○○ · 조○○의 딸&ensp;
              <span className="text-[#666666]">조수민</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
