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
  { owner: "탁○○ (아버지)", bank: "국민은행",   number: "000000-00-000000" },
  { owner: "탁○○ (어머니)", bank: "신한은행",   number: "000-000-000000" },
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
      className={`shrink-0 flex items-center gap-1 px-2.5 py-1.5 border font-sans text-[10px] tracking-wide transition-all ${
        copied
          ? "border-[#AACCAA] text-[#779977]"
          : "border-[#E0E0E0] text-[#BBBBBB] hover:border-[#BBBBBB] hover:text-[#777777]"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1">
            <Check size={10} /> 복사됨
          </motion.span>
        ) : (
          <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1">
            <Copy size={10} /> 복사
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function AccountRow({ acc }: { acc: AccountInfo }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#F2F2F2] last:border-0">
      <div>
        <p className="font-sans text-[9px] tracking-widest text-[#CCCCCC] mb-0.5">{acc.owner}</p>
        <p className="font-sans text-[13px] tracking-wide text-[#444444]">{acc.bank}</p>
        <p className="font-sans text-[11px] tracking-[0.1em] text-[#999999] mt-0.5">{acc.number}</p>
      </div>
      <CopyButton text={acc.number} />
    </div>
  );
}

function AccountGroup({ title, accounts }: { title: string; accounts: AccountInfo[] }) {
  return (
    <div>
      <p className="font-sans text-[9px] tracking-[0.45em] text-[#BBBBBB] uppercase mb-1">
        {title}
      </p>
      {accounts.map((acc) => (
        <AccountRow key={acc.number} acc={acc} />
      ))}
    </div>
  );
}

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-8 bg-[#F9F9F9]">
      <div className="max-w-xs mx-auto">

        <FadeIn>
          <SectionHeader title="ACCOUNT" />
        </FadeIn>

        <FadeIn delay={0.1} className="text-center mb-8">
          <p
            className="font-sans text-[12px] tracking-wide text-[#AAAAAA] leading-[2.1]"
            style={{ wordBreak: "keep-all" }}
          >
            축하의 마음을 전하고 싶으신 분들을 위해<br />
            계좌번호를 안내드립니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* 마음 전하실 곳 토글 버튼: 아웃라인 스타일 */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 border border-[#DDDDDD] hover:bg-white transition-colors"
          >
            <span className="font-sans text-[11px] tracking-[0.3em] text-[#777777]">
              마음 전하실 곳
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ChevronDown size={13} className="text-[#CCCCCC]" />
            </motion.div>
          </button>

          {/* 아코디언: 부드럽게 펼쳐짐 */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-white border-x border-b border-[#DDDDDD] px-5 pt-6 pb-2 space-y-6">
                  <AccountGroup title="신랑측" accounts={GROOM_ACCOUNTS} />
                  <AccountGroup title="신부측" accounts={BRIDE_ACCOUNTS} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </FadeIn>

      </div>
    </section>
  );
}
