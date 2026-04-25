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
    <div className="flex items-center justify-between py-3 border-b border-[#F5F5F5] last:border-0">
      <div>
        <p className="font-sans text-[10px] tracking-widest text-[#BBBBBB] uppercase mb-0.5">
          {person.role}
        </p>
        <p className="font-sans text-[13px] text-[#444444]">{person.name}</p>
      </div>
      {/* Outline 전화 버튼 */}
      <a
        href={`tel:${person.phone.replace(/-/g, "")}`}
        aria-label={`${person.name}에게 전화하기`}
        className="w-9 h-9 rounded-full border border-[#E8E8E8] flex items-center justify-center text-[#AAAAAA] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
      >
        <Phone size={13} />
      </a>
    </div>
  );
}

function ContactGroup({ title, persons }: { title: string; persons: Person[] }) {
  return (
    <div>
      <p className="font-sans text-[10px] tracking-[0.35em] text-[#AAAAAA] uppercase mb-2">
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
    <section className="py-16 px-8 bg-white border-t border-[#F2F2F2]">
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader title="CONTACT" />
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-8">
          <ContactGroup title="신랑측" persons={GROOM_SIDE} />
          <ContactGroup title="신부측" persons={BRIDE_SIDE} />
        </FadeIn>
      </div>
    </section>
  );
}
