"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AccountInfo {
  owner: string;
  bank: string;
  number: string;
}

const GROOM_ACCOUNTS: AccountInfo[] = [
  { owner: "탁진혁 (신랑)", bank: "카카오뱅크", number: "3333-00-0000000" },
  { owner: "탁○○ (신랑 아버지)", bank: "국민은행", number: "000000-00-000000" },
  { owner: "탁○○ (신랑 어머니)", bank: "신한은행", number: "000-000-000000" },
];

const BRIDE_ACCOUNTS: AccountInfo[] = [
  { owner: "조수민 (신부)", bank: "토스뱅크", number: "0000-0000-0000" },
  { owner: "조○○ (신부 아버지)", bank: "우리은행", number: "0000-000-000000" },
  { owner: "조○○ (신부 어머니)", bank: "하나은행", number: "000-000000-00000" },
];

export default function Account() {
  const { ref, isVisible } = useScrollAnimation();
  const [openGroup, setOpenGroup] = useState<"groom" | "bride" | null>(null);

  return (
    <section ref={ref} className="py-20 px-6 bg-beige-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-sm mx-auto"
      >
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.3em] text-warm-brown/50 mb-2 uppercase">
            Account
          </p>
          <h2 className="font-serif text-3xl font-light text-warm-dark">마음 전하기</h2>
          <p className="font-sans text-xs text-warm-brown/50 mt-2 leading-5">
            축하의 마음을 전하고 싶으신 분들을 위해<br />계좌번호를 안내드립니다.
          </p>
        </div>

        <div className="space-y-3">
          <AccountGroup
            label="신랑측 계좌"
            accounts={GROOM_ACCOUNTS}
            isOpen={openGroup === "groom"}
            onToggle={() => setOpenGroup(openGroup === "groom" ? null : "groom")}
          />
          <AccountGroup
            label="신부측 계좌"
            accounts={BRIDE_ACCOUNTS}
            isOpen={openGroup === "bride"}
            onToggle={() => setOpenGroup(openGroup === "bride" ? null : "bride")}
          />
        </div>
      </motion.div>
    </section>
  );
}

function AccountGroup({
  label,
  accounts,
  isOpen,
  onToggle,
}: {
  label: string;
  accounts: AccountInfo[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-beige-200 overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-beige-50 transition-colors"
      >
        <span className="font-sans text-sm font-medium text-warm-dark tracking-wide">{label}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} className="text-warm-brown/50" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2 border-t border-beige-100 pt-3">
              {accounts.map((acc) => (
                <AccountRow key={acc.number} account={acc} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccountRow({ account }: { account: AccountInfo }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account.number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers
      const el = document.createElement("textarea");
      el.value = account.number;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 bg-beige-50 rounded-xl px-4 py-3">
      <div className="min-w-0">
        <p className="font-sans text-[11px] text-warm-brown/50 truncate">{account.owner}</p>
        <p className="font-sans text-xs font-medium text-warm-dark">
          {account.bank}
        </p>
        <p className="font-sans text-xs text-warm-brown/70 tracking-wider mt-0.5">
          {account.number}
        </p>
      </div>
      <button
        onClick={handleCopy}
        aria-label="계좌번호 복사"
        className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-sans font-medium transition-all ${
          copied
            ? "bg-green-100 text-green-700"
            : "bg-beige-200 text-warm-brown hover:bg-beige-300"
        }`}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1"
            >
              <Check size={11} />
              복사됨
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1"
            >
              <Copy size={11} />
              복사
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
