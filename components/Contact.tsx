"use client";

import { Phone, MessageCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

interface Person {
  role: string;
  name: string;
  phone: string;
  showSms?: boolean;
}

const GROOM_SIDE: Person[] = [
  { role: "신랑", name: "탁진혁", phone: "010-0000-0000", showSms: true },
  { role: "아버지", name: "탁○○", phone: "010-0000-0000" },
  { role: "어머니", name: "탁○○", phone: "010-0000-0000" },
];

const BRIDE_SIDE: Person[] = [
  { role: "신부", name: "조수민", phone: "010-0000-0000", showSms: true },
  { role: "아버지", name: "조○○", phone: "010-0000-0000" },
  { role: "어머니", name: "조○○", phone: "010-0000-0000" },
];

const raw = (phone: string) => phone.replace(/-/g, "");

function PersonCell({ person }: { person: Person }) {
  return (
    <div
      className="flex items-center justify-between py-3"
      style={{ borderBottom: "1px solid #F0F0F0" }}
    >
      <div style={{ minWidth: 0 }}>
        <p className="font-sans text-[8px] tracking-widest uppercase mb-0.5" style={{ color: "#CCCCCC" }}>
          {person.role}
        </p>
        <p className="font-nanum text-[14px]" style={{ color: "#333333" }}>
          {person.name}
        </p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 ml-1">
        <a
          href={`tel:${raw(person.phone)}`}
          aria-label={`${person.name}에게 전화`}
          className="flex items-center justify-center rounded-full"
          style={{ width: 26, height: 26, border: "1px solid #E0E0E0", color: "#CCCCCC" }}
        >
          <Phone size={10} />
        </a>
        {person.showSms && (
          <a
            href={`sms:${raw(person.phone)}`}
            aria-label={`${person.name}에게 문자`}
            className="flex items-center justify-center rounded-full"
            style={{ width: 26, height: 26, border: "1px solid #E0E0E0", color: "#CCCCCC" }}
          >
            <MessageCircle size={10} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F9F9FB" }}>

      <FadeIn>
        <SectionHeader sub="CONTACT" title="연락하기" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 12px" }}>
          <div>
            <p className="font-sans text-[8px] tracking-[0.45em] uppercase mb-2" style={{ color: "#BBBBBB" }}>
              신랑측
            </p>
            {GROOM_SIDE.map((p) => (
              <PersonCell key={p.role} person={p} />
            ))}
          </div>
          <div>
            <p className="font-sans text-[8px] tracking-[0.45em] uppercase mb-2" style={{ color: "#BBBBBB" }}>
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
