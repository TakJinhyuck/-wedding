"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Person {
  role: string;
  name: string;
  phone: string;
}

const GROOM_SIDE: Person[] = [
  { role: "신랑", name: "탁진혁", phone: "010-0000-0000" },
  { role: "신랑 아버지", name: "탁○○", phone: "010-0000-0000" },
  { role: "신랑 어머니", name: "탁○○", phone: "010-0000-0000" },
];

const BRIDE_SIDE: Person[] = [
  { role: "신부", name: "조수민", phone: "010-0000-0000" },
  { role: "신부 아버지", name: "조○○", phone: "010-0000-0000" },
  { role: "신부 어머니", name: "조○○", phone: "010-0000-0000" },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-sm mx-auto"
      >
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.3em] text-warm-brown/50 mb-2 uppercase">
            Contact
          </p>
          <h2 className="font-serif text-3xl font-light text-warm-dark">연락처</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ContactGroup title="신랑측" persons={GROOM_SIDE} />
          <ContactGroup title="신부측" persons={BRIDE_SIDE} />
        </div>
      </motion.div>
    </section>
  );
}

function ContactGroup({ title, persons }: { title: string; persons: Person[] }) {
  return (
    <div className="bg-beige-50 rounded-2xl border border-beige-200 p-4">
      <p className="font-sans text-xs tracking-widest text-warm-brown/50 mb-3 text-center">
        {title}
      </p>
      <div className="space-y-3">
        {persons.map((p) => (
          <div key={p.phone + p.name} className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="font-sans text-[10px] text-warm-brown/50 truncate">{p.role}</p>
              <p className="font-sans text-xs font-medium text-warm-dark truncate">{p.name}</p>
            </div>
            <a
              href={`tel:${p.phone.replace(/-/g, "")}`}
              aria-label={`${p.name}에게 전화하기`}
              className="shrink-0 w-8 h-8 rounded-full bg-beige-200 hover:bg-beige-300 transition-colors flex items-center justify-center"
            >
              <Phone size={13} className="text-warm-brown/70" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
