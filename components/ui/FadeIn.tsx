"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// whileInView 사용: IntersectionObserver 수동 구현보다 모바일에서 훨씬 안정적
export default function FadeIn({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
