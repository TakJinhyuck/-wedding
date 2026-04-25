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
    <div className="flex items-center justify-between gap-2 py-2.5 border-b border-[#F5F0EB] last:border-0">
      <div className="min-w-0">
        <p className="font-sans text-[10px] text-[#AAAAAA] tracking-wide">{person.role}</p>
        <p className="font-sans text-[13px] text-[#333333] font-medium">{person.name}</p>
      </div>
      <a
        href={`tel:${person.phone.replace(/-/g, "")}`}
        aria-label={`${person.name}에게 전화하기`}
        className="shrink-0 w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E0D8] flex items-center justify-center active:bg-[#F0EBE3] transition-colors"
      >
        <Phone size={13} className="text-[#C9A96E]" />
      </a>
    </div>
  );
}

function ContactGroup({ title, persons }: { title: string; persons: Person[] }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E8E0D8] overflow-hidden">
      <div className="px-4 py-3 border-b border-[#F5F0EB] bg-[#FAF8F5]">
        <p className="font-sans text-[11px] tracking-[0.2em] text-[#C9A96E] text-center">{title}</p>
      </div>
      <div className="px-4">
        {persons.map((p) => (
          <PersonRow key={p.role} person={p} />
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FDFDFD" }}>
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader en="Contact" ko="연락처" />
        </FadeIn>

        <FadeIn delay={0.1} className="grid grid-cols-2 gap-3">
          <ContactGroup title="신랑측" persons={GROOM_SIDE} />
          <ContactGroup title="신부측" persons={BRIDE_SIDE} />
        </FadeIn>
      </div>
    </section>
  );
}
