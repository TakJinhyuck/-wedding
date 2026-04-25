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
    <div
      className="flex items-center justify-between py-4"
      style={{ borderBottom: "1px solid #F0F0F0" }}
    >
      <div>
        <p
          className="font-sans text-[9px] tracking-widest uppercase mb-0.5"
          style={{ color: "#CCCCCC" }}
        >
          {person.role}
        </p>
        <p className="font-nanum text-[15px] tracking-wide" style={{ color: "#333333" }}>
          {person.name}
        </p>
      </div>
      <a
        href={`tel:${person.phone.replace(/-/g, "")}`}
        aria-label={`${person.name}에게 전화하기`}
        className="flex items-center justify-center rounded-full transition-colors"
        style={{
          width: 36,
          height: 36,
          border: "1px solid #E0E0E0",
          color: "#CCCCCC",
        }}
      >
        <Phone size={12} />
      </a>
    </div>
  );
}

function ContactGroup({ title, persons }: { title: string; persons: Person[] }) {
  return (
    <div>
      <p
        className="font-sans text-[9px] tracking-[0.45em] uppercase mb-1"
        style={{ color: "#BBBBBB" }}
      >
        {title}
      </p>
      {persons.map((p) => (
        <PersonRow key={p.role} person={p} />
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section className="py-14 px-8 bg-white">
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader sub="CONTACT" title="연락처" />
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-10">
          <ContactGroup title="신랑측" persons={GROOM_SIDE} />
          <ContactGroup title="신부측" persons={BRIDE_SIDE} />
        </FadeIn>

      </div>
    </section>
  );
}
