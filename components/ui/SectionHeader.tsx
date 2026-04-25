interface Props {
  en: string;
  ko: string;
}

export default function SectionHeader({ en, ko }: Props) {
  return (
    <div className="text-center mb-12">
      <p className="font-sans text-[10px] tracking-[0.45em] text-[#C9A96E] mb-3 uppercase">
        {en}
      </p>
      <h2 className="font-serif text-[26px] tracking-[0.18em] text-[#333333] font-light leading-tight">
        {ko}
      </h2>
      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="h-px w-10 bg-[#E8D5B8]" />
        <div className="w-[5px] h-[5px] rounded-full bg-[#C9A96E] opacity-60" />
        <div className="h-px w-10 bg-[#E8D5B8]" />
      </div>
    </div>
  );
}
