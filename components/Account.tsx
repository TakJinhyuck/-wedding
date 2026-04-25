"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";

interface AccountInfo {
  owner: string;
  bank: string;
  number: string;
}

const GROOM_ACCOUNTS: AccountInfo[] = [
  { owner: "탁진혁 (신랑)", bank: "카카오뱅크", number: "3333-00-0000000" },
  { owner: "탁○○ (아버지)", bank: "국민은행", number: "000000-00-000000" },
  { owner: "탁○○ (어머니)", bank: "신한은행", number: "000-000-000000" },
];

const BRIDE_ACCOUNTS: AccountInfo[] = [
  { owner: "조수민 (신부)", bank: "토스뱅크", number: "0000-0000-0000" },
  { owner: "조○○ (아버지)", bank: "우리은행", number: "0000-000-000000" },
  { owner: "조○○ (어머니)", bank: "하나은행", number: "000-000000-00000" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="계좌번호 복사"
      className={`shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-sans text-[11px] font-medium transition-all ${
        copied ? "bg-emerald-50 text-emerald-600" : "bg-[#FAF8F5] text-[#888888] border border-[#E8E0D8] hover:border-[#C9A96E] hover:text-[#C9A96E]"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1"
          >
            <Check size={10} /> 복사됨
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1"
          >
            <Copy size={10} /> 복사
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function AccountGroup({ title, accounts }: { title: string; accounts: AccountInfo[] }) {
  return (
    <div>
      <p className="font-sans text-[10px] tracking-[0.3em] text-[#C9A96E] mb-3 text-center">{title}</p>
      <div className="space-y-2">
        {accounts.map((acc) => (
          <div
            key={acc.number}
            className="flex items-center justify-between gap-3 bg-[#FAF8F5] rounded-xl border border-[#E8E0D8] px-4 py-3"
          >
            <div className="min-w-0">
              <p className="font-sans text-[10px] text-[#AAAAAA] truncate">{acc.owner}</p>
              <p className="font-sans text-[12px] font-medium text-[#333333]">{acc.bank}</p>
              <p className="font-sans text-[11px] text-[#888888] tracking-wider mt-0.5">{acc.number}</p>
            </div>
            <CopyButton text={acc.number} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#FAF8F5" }}>
      <div className="max-w-sm mx-auto">
        <FadeIn>
          <SectionHeader en="Account" ko="마음 전하실 곳" />
        </FadeIn>

        <FadeIn delay={0.1} className="text-center mb-6">
          <p className="font-sans text-[12px] text-[#AAAAAA] leading-[1.9]" style={{ wordBreak: "keep-all" }}>
            축하의 마음을 전하고 싶으신 분들을 위해<br />
            계좌번호를 안내드립니다.
          </p>
        </FadeIn>

        {/* 토글 버튼 */}
        <FadeIn delay={0.15}>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-[#E8E0D8] bg-white transition-colors hover:border-[#C9A96E]/50"
          >
            <span className="font-sans text-[13px] text-[#333333] tracking-wide">
              신랑 · 신부 계좌번호
            </span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <ChevronDown size={15} className="text-[#C9A96E]" />
            </motion.div>
          </button>
        </FadeIn>

        {/* 아코디언 콘텐츠 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-6">
                <AccountGroup title="신랑측" accounts={GROOM_ACCOUNTS} />
                <div className="h-px bg-[#E8E0D8]" />
                <AccountGroup title="신부측" accounts={BRIDE_ACCOUNTS} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
