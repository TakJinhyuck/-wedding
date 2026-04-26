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
      className="shrink-0 flex items-center gap-1 px-2.5 py-1.5 font-sans text-[10px] tracking-wide transition-all"
      style={copied
        ? { border: "1px solid #AACCAA", color: "#779977" }
        : { border: "1px solid #E0E0E0", color: "#BBBBBB" }
      }
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
    <div className="flex items-center justify-between py-4" style={{ borderBottom: "1px solid #F0F0F0" }}>
      <div>
        <p className="font-sans text-[9px] tracking-widest mb-0.5" style={{ color: "#CCCCCC" }}>
          {acc.owner}
        </p>
        <p className="font-nanum text-[15px] tracking-wide" style={{ color: "#333333" }}>
          {acc.bank}
        </p>
        <p className="font-sans text-[11px] tracking-[0.08em] mt-0.5" style={{ color: "#999999" }}>
          {acc.number}
        </p>
      </div>
      <CopyButton text={acc.number} />
    </div>
  );
}

function AccordionGroup({
  title,
  accounts,
  isOpen,
  onToggle,
}: {
  title: string;
  accounts: AccountInfo[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 transition-colors"
        style={{ border: "1px solid #DDDDDD", backgroundColor: isOpen ? "#FFFFFF" : "transparent" }}
      >
        <span className="font-nanum text-[14px] tracking-[0.08em]" style={{ color: "#555555" }}>
          {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
          <ChevronDown size={13} style={{ color: "#CCCCCC" }} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pt-5 pb-2"
              style={{
                borderLeft: "1px solid #DDDDDD",
                borderRight: "1px solid #DDDDDD",
                borderBottom: "1px solid #DDDDDD",
                backgroundColor: "#FFFFFF",
              }}
            >
              {accounts.map((acc) => (
                <AccountRow key={acc.number} acc={acc} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Account() {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: "#F9F9FB" }}>
      <div>

        <FadeIn>
          <SectionHeader sub="ACCOUNT" title="마음 전하실 곳" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-[12px] tracking-wide leading-[1.9] text-center mb-8" style={{ color: "#AAAAAA", wordBreak: "keep-all" }}>
            축하의 마음을 전하고 싶으신 분들을 위해<br />
            계좌번호를 안내드립니다.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="space-y-3">
          <AccordionGroup
            title="신랑측 계좌"
            accounts={GROOM_ACCOUNTS}
            isOpen={groomOpen}
            onToggle={() => setGroomOpen((v) => !v)}
          />
          <AccordionGroup
            title="신부측 계좌"
            accounts={BRIDE_ACCOUNTS}
            isOpen={brideOpen}
            onToggle={() => setBrideOpen((v) => !v)}
          />
        </FadeIn>

      </div>
    </section>
  );
}
