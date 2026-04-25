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

function PersonRow({ person }: { person: Person }) {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-[#F2F2F2] last:border-0">
      <div>
        <p className="font-sans text-[9px] tracking-widest text-[#CCCCCC] uppercase mb-0.5">
          {person.role}
        </p>
        <p className="font-sans text-[13px] tracking-wide text-[#444444]">{person.name}</p>
      </div>
      {/* 아웃라인 전화 버튼 */}
      <a
        href={`tel:${person.phone.replace(/-/g, "")}`}
        aria-label={`${person.name}에게 전화하기`}
        className="w-9 h-9 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#CCCCCC] hover:border-[#888888] hover:text-[#666666] transition-colors"
      >
        <Phone size={12} />
      </a>
    </div>
  );
}

function ContactGroup({ title, persons }: { title: string; persons: Person[] }) {
  return (
    <div>
      <p className="font-sans text-[9px] tracking-[0.45em] text-[#BBBBBB] uppercase mb-0.5">
        {title}
      </p>
      <div>
        {persons.map((p) => (
          <PersonRow key={p.role} person={p} />
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader title="CONTACT" />
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-10">
          <ContactGroup title="신랑측" persons={GROOM_SIDE} />
          <ContactGroup title="신부측" persons={BRIDE_SIDE} />
        </FadeIn>

      </div>
    </section>
  );
}
