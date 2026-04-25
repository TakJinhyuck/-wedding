interface Props {
  title: string;
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="text-center mb-14">
      <p className="font-sans text-[9px] tracking-[0.65em] text-[#BBBBBB] uppercase font-light">
        {title}
      </p>
      <div className="mt-4 mx-auto w-6 h-px bg-[#E8E8E8]" />
    </div>
  );
}
