"use client";

import { Phone } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

interface Person {
  role: string;
  name: string;
  phone: string;
}

const GROOM_SIDE: Person[] = [
  { role: "신랑", name: "탁진혁", phone: "010-0000-0000" },
  { role: "아버지", name: "탁○○", phone: "010-0000-0000" },
  { role: "어머니", name: "탁○○", phone: "010-0000-0000" },
];

const BRIDE_SIDE: Person[] = [
  { role: "신부", name: "조수민", phone: "010-0000-0000" },
  { role: "아버지", name: "조○○", phone: "010-0000-0000" },
  { role: "어머니", name: "조○○", phone: "010-0000-0000" },
];

function PersonCell({ person }: { person: Person }) {
  return (
    <div
      className="flex items-center justify-between py-3"
      style={{ borderBottom: "1px solid #F0F0F0" }}
    >
      <div style={{ minWidth: 0 }}>
        <p
          className="font-sans text-[8px] tracking-widest uppercase mb-0.5"
          style={{ color: "#CCCCCC" }}
        >
          {person.role}
        </p>
        <p className="font-nanum text-[14px]" style={{ color: "#333333" }}>
          {person.name}
        </p>
      </div>
      <a
        href={`tel:${person.phone.replace(/-/g, "")}`}
        aria-label={`${person.name}에게 전화하기`}
        className="flex items-center justify-center rounded-full shrink-0"
        style={{
          width: 28,
          height: 28,
          border: "1px solid #E0E0E0",
          color: "#CCCCCC",
          marginLeft: 6,
        }}
      >
        <Phone size={10} />
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="py-14 px-6" style={{ backgroundColor: "#F9F9FB" }}>

      <FadeIn className="text-center mb-8">
        <SectionHeader sub="CONTACT" title="연락처" />
      </FadeIn>

      {/* 2열 그리드 — 신랑 | 신부 */}
      <FadeIn delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 12px",
          }}
        >
          {/* 신랑측 */}
          <div>
            <p
              className="font-sans text-[8px] tracking-[0.45em] uppercase mb-2"
              style={{ color: "#BBBBBB" }}
            >
              신랑측
            </p>
            {GROOM_SIDE.map((p) => (
              <PersonCell key={p.role} person={p} />
            ))}
          </div>

          {/* 신부측 */}
          <div>
            <p
              className="font-sans text-[8px] tracking-[0.45em] uppercase mb-2"
              style={{ color: "#BBBBBB" }}
            >
              신부측
            </p>
            {BRIDE_SIDE.map((p) => (
              <PersonCell key={p.role} person={p} />
            ))}
          </div>
        </div>
      </FadeIn>

    </section>
  );
}
